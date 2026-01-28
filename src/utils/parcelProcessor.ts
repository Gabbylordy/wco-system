import { RISK_KEYWORDS, HS_CODE_MAPPING, TARIFF_RATES } from "@/data/parcelIntelData";

export interface RawParcelData {
  order_id: string;
  timestamp: string;
  importer_name: string;
  delivery_address: string;
  product_title: string;
  description: string;
  product_category: string;
  item_price_inr: string | number;
  image_url?: string;
}

export interface ProcessedParcel {
  order_id: string;
  timestamp: string;
  importer_name: string;
  delivery_address: string;
  product_title: string;
  description: string;
  product_category: string;
  item_price_inr: number;
  item_price_aed: number;
  image_url?: string;
  same_day_importer_key: string;
  daily_total_aed: number;
  is_split_shipment: boolean;
  split_group_id?: string;
  predicted_hs_code: string;
  hs_confidence_score: number;
  hs_chapter: string;
  hs_description?: string;
  de_minimis_threshold: number;
  duty_applicable: boolean;
  duty_rate: number;
  duty_payable_aed: number;
  tariff_reference: string;
  risk_keywords_found: string[];
  risk_categories: string[];
  is_high_risk: boolean;
  risk_reason_codes: string[];
  assigned_risk_lane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK';
  lane_reasons: string[];
  processing_timestamp: string;
  clearance_recommendation: 'AUTO_CLEAR' | 'INSPECTION' | 'DOC_REVIEW' | 'HOLD';
}

export class ParcelProcessor {
  private data: RawParcelData[];
  private processed: ProcessedParcel[] = [];
  private importerDailyTotals: Map<string, number> = new Map();
  private splitGroups: Map<string, string[]> = new Map();

  constructor(data: RawParcelData[]) {
    this.data = data;
  }

  private convertToAED(inr: number): number {
    // 1 INR = 0.044 AED (from hackathon brief)
    return parseFloat((inr * 0.044).toFixed(2));
  }

//   private detectSplitShipments(): void {
//     // Group by importer and day
//     const dayGroups: Map<string, RawParcelData[]> = new Map();
    
//     this.data.forEach(parcel => {
//       const date = new Date(parcel.timestamp).toISOString().split('T')[0];
//       const key = `${parcel.importer_name}_${date}`;
      
//       if (!dayGroups.has(key)) {
//         dayGroups.set(key, []);
//       }
//       dayGroups.get(key)!.push(parcel);
//     });

//     // Calculate daily totals
//     dayGroups.forEach((parcels, key) => {
//       const totalAED = parcels.reduce((sum, p) => {
//         const inr = typeof p.item_price_inr === 'string' ? parseFloat(p.item_price_inr) : p.item_price_inr;
//         return sum + this.convertToAED(inr);
//       }, 0);
      
//       this.importerDailyTotals.set(key, totalAED);
//     });

//     // Identify split shipments (same importer, same day, combined value > 1000)
//     dayGroups.forEach((parcels, key) => {
//       const totalAED = this.importerDailyTotals.get(key) || 0;
//       const isSplit = parcels.length > 1 && totalAED > 1000;
      
//       if (isSplit) {
//         const groupId = `SPLIT-${key}`;
//         parcels.forEach(parcel => {
//           if (!this.splitGroups.has(groupId)) {
//             this.splitGroups.set(groupId, []);
//           }
//           this.splitGroups.get(groupId)!.push(parcel.order_id);
//         });
//       }
//     });
//   }

private detectSplitShipments(): void {
  // Group by importer and day
  const dayGroups: Map<string, RawParcelData[]> = new Map();
  
  this.data.forEach(parcel => {
    try {
      // Parse European date format: DD/MM/YYYY HH:mm
      const [datePart, timePart] = parcel.timestamp.split(' ');
      const [day, month, year] = datePart.split('/');
      
      // Create ISO format date string: YYYY-MM-DD
      const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      const key = `${parcel.importer_name}_${isoDate}`;
      
      if (!dayGroups.has(key)) {
        dayGroups.set(key, []);
      }
      dayGroups.get(key)!.push(parcel);
    } catch (error) {
      console.warn(`⚠️ Could not parse date for parcel ${parcel.order_id}:`, parcel.timestamp);
      // Use a fallback key
      const key = `${parcel.importer_name}_unknown-date`;
      if (!dayGroups.has(key)) {
        dayGroups.set(key, []);
      }
      dayGroups.get(key)!.push(parcel);
    }
  });

  // Calculate daily totals
  dayGroups.forEach((parcels, key) => {
    const totalAED = parcels.reduce((sum, p) => {
      const inr = typeof p.item_price_inr === 'string' 
        ? parseFloat(p.item_price_inr) 
        : p.item_price_inr;
      return sum + this.convertToAED(inr);
    }, 0);
    
    this.importerDailyTotals.set(key, totalAED);
  });

  // Identify split shipments (same importer, same day, combined value > 1000)
  dayGroups.forEach((parcels, key) => {
    const totalAED = this.importerDailyTotals.get(key) || 0;
    const isSplit = parcels.length > 1 && totalAED > 1000;
    
    if (isSplit) {
      const groupId = `SPLIT-${key}`;
      parcels.forEach(parcel => {
        if (!this.splitGroups.has(groupId)) {
          this.splitGroups.set(groupId, []);
        }
        this.splitGroups.get(groupId)!.push(parcel.order_id);
      });
    }
  });
}

  private classifyHS(parcel: RawParcelData): { code: string; confidence: number; chapter: string } {
    const text = `${parcel.product_title} ${parcel.description} ${parcel.product_category}`.toLowerCase();
    
    // Check for specific high-risk categories first
    for (const [category, mapping] of Object.entries(HS_CODE_MAPPING)) {
      if (mapping.patterns.some(pattern => text.includes(pattern.toLowerCase()))) {
        // Return the first matching HS code
        return {
          code: mapping.hs_codes[0],
          confidence: 0.95,
          chapter: mapping.hs_codes[0].split('.')[0]
        };
      }
    }

    // Fallback: Use product category mapping
    if (parcel.product_category.includes('Electronics')) {
      return { code: '8517.12.00', confidence: 0.85, chapter: '85' };
    } else if (parcel.product_category.includes('Clothing')) {
      return { code: '6203.42.00', confidence: 0.88, chapter: '62' };
    } else if (parcel.product_category.includes('Books')) {
      return { code: '4901.99.00', confidence: 0.95, chapter: '49' };
    } else if (parcel.product_category.includes('Accessories')) {
      return { code: '4202.21.00', confidence: 0.82, chapter: '42' };
    }

    // Default
    return { code: '9999.99.99', confidence: 0.50, chapter: '99' };
  }

  private scanRiskKeywords(parcel: RawParcelData): {
    keywords: string[];
    categories: string[];
    isHighRisk: boolean;
    reasonCodes: string[];
  } {
    const text = `${parcel.product_title} ${parcel.description}`.toLowerCase();
    const foundKeywords: string[] = [];
    const categories: string[] = [];
    const reasonCodes: string[] = [];

    // Check each risk category
    Object.entries(RISK_KEYWORDS).forEach(([category, keywords]) => {
      const matched = keywords.filter(keyword => text.includes(keyword.toLowerCase()));
      if (matched.length > 0) {
        foundKeywords.push(...matched);
        categories.push(category.replace('_', ' '));
        
        // Add reason codes for high-risk categories
        if (['WEAPONS', 'DRONES', 'LITHIUM_BATTERIES'].includes(category)) {
          reasonCodes.push(`${category}_DETECTED`);
        }
      }
    });

    const isHighRisk = categories.some(cat => 
      ['WEAPONS', 'DRONES', 'LITHIUM BATTERIES', 'CONTROLLED SUBSTANCES'].includes(cat)
    );

    return { keywords: foundKeywords, categories, isHighRisk, reasonCodes };
  }

  private calculateDuty(parcel: RawParcelData, dailyTotalAED: number): {
    applicable: boolean;
    rate: number;
    payable: number;
    tariffRef: string;
  } {
    const itemPriceINR = typeof parcel.item_price_inr === 'string' 
      ? parseFloat(parcel.item_price_inr) 
      : parcel.item_price_inr;
    const itemValueAED = this.convertToAED(itemPriceINR);

    // Check de-minimis threshold
    if (dailyTotalAED <= 1000) {
      return {
        applicable: false,
        rate: 0,
        payable: 0,
        tariffRef: 'DE_MINIMIS_EXEMPT'
      };
    }

    // Determine duty rate based on HS chapter
    const hsResult = this.classifyHS(parcel);
    const chapter = parseInt(hsResult.chapter);
    
    // Find tariff rate from tariff.csv
    let dutyRate = 5; // Default 5% from hackathon brief
    let tariffRef = 'STANDARD_5';

    // Match with tariff bands
    Object.entries(TARIFF_RATES).forEach(([range, rate]) => {
      const [start, end] = range.split('-').map(Number);
      if (end) {
        if (chapter >= start && chapter <= end) {
          dutyRate = rate;
          tariffRef = `TAR_${range}`;
        }
      } else if (chapter === start) {
        dutyRate = rate;
        tariffRef = `TAR_${start}`;
      }
    });

    const dutyPayable = (itemValueAED * dutyRate) / 100;

    return {
      applicable: true,
      rate: dutyRate,
      payable: parseFloat(dutyPayable.toFixed(2)),
      tariffRef
    };
  }

  private assignRiskLane(
    isSplitShipment: boolean,
    dutyApplicable: boolean,
    isHighRisk: boolean,
    riskCategories: string[]
  ): { lane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK'; reasons: string[] } {
    const reasons: string[] = [];

    // BLACK lane: High security risk
    if (riskCategories.includes('WEAPONS') || 
        riskCategories.includes('DRONES') ||
        riskCategories.includes('LITHIUM BATTERIES')) {
      reasons.push('High-security risk goods detected');
      return { lane: 'BLACK', reasons };
    }

    // RED lane: Split shipments or duty payable
    if (isSplitShipment) {
      reasons.push('Split shipment detected');
      return { lane: 'RED', reasons };
    }

    if (dutyApplicable) {
      reasons.push('Duty applicable (exceeds de-minimis)');
      return { lane: 'RED', reasons };
    }

    // YELLOW lane: Needs document review
    if (riskCategories.length > 0 && !isHighRisk) {
      reasons.push('Additional documentation required');
      return { lane: 'YELLOW', reasons };
    }

    // GREEN lane: Auto-clear
    reasons.push('Compliant, low-risk shipment');
    return { lane: 'GREEN', reasons };
  }

  private determineClearance(lane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK') {
    switch (lane) {
      case 'GREEN': return 'AUTO_CLEAR';
      case 'YELLOW': return 'DOC_REVIEW';
      case 'RED': return 'INSPECTION';
      case 'BLACK': return 'HOLD';
      default: return 'DOC_REVIEW';
    }
  }

//   process(): ProcessedParcel[] {
//     console.log('Starting parcel processing...');
    
//     // First detect split shipments
//     this.detectSplitShipments();
    
//     // Process each parcel
//     this.processed = this.data.map((parcel, index) => {
//       console.log(`Processing parcel ${index + 1}/${this.data.length}: ${parcel.order_id}`);
      
//       // Convert price
//       const itemPriceINR = typeof parcel.item_price_inr === 'string' 
//         ? parseFloat(parcel.item_price_inr) 
//         : parcel.item_price_inr;
//       const itemValueAED = this.convertToAED(itemPriceINR);

//       // Create daily key
//       const date = new Date(parcel.timestamp).toISOString().split('T')[0];
//       const dailyKey = `${parcel.importer_name}_${date}`;
//       const dailyTotalAED = this.importerDailyTotals.get(dailyKey) || itemValueAED;

//       // Check if part of split shipment
//       let isSplit = false;
//       let splitGroupId: string | undefined;
      
//       this.splitGroups.forEach((orderIds, groupId) => {
//         if (orderIds.includes(parcel.order_id)) {
//           isSplit = true;
//           splitGroupId = groupId;
//         }
//       });

//       // Classify HS code
//       const hsClassification = this.classifyHS(parcel);

//       // Risk assessment
//       const riskAssessment = this.scanRiskKeywords(parcel);

//       // Calculate duty
//       const dutyCalculation = this.calculateDuty(parcel, dailyTotalAED);

//       // Assign risk lane
//       const laneAssignment = this.assignRiskLane(
//         isSplit,
//         dutyCalculation.applicable,
//         riskAssessment.isHighRisk,
//         riskAssessment.categories
//       );

//       // Determine clearance recommendation
//       const clearance = this.determineClearance(laneAssignment.lane);

//       // Build processed parcel
//       const processedParcel: ProcessedParcel = {
//         order_id: parcel.order_id,
//         timestamp: parcel.timestamp,
//         importer_name: parcel.importer_name,
//         delivery_address: parcel.delivery_address,
//         product_title: parcel.product_title,
//         description: parcel.description,
//         product_category: parcel.product_category,
//         item_price_inr: itemPriceINR,
//         item_price_aed: itemValueAED,
//         image_url: parcel.image_url,
//         same_day_importer_key: dailyKey,
//         daily_total_aed: dailyTotalAED,
//         is_split_shipment: isSplit,
//         split_group_id: splitGroupId,
//         predicted_hs_code: hsClassification.code,
//         hs_confidence_score: hsClassification.confidence,
//         hs_chapter: hsClassification.chapter,
//         de_minimis_threshold: 1000,
//         duty_applicable: dutyCalculation.applicable,
//         duty_rate: dutyCalculation.rate,
//         duty_payable_aed: dutyCalculation.payable,
//         tariff_reference: dutyCalculation.tariffRef,
//         risk_keywords_found: riskAssessment.keywords,
//         risk_categories: riskAssessment.categories,
//         is_high_risk: riskAssessment.isHighRisk,
//         risk_reason_codes: riskAssessment.reasonCodes,
//         assigned_risk_lane: laneAssignment.lane,
//         lane_reasons: laneAssignment.reasons,
//         processing_timestamp: new Date().toISOString(),
//         clearance_recommendation: clearance
//       };

//       return processedParcel;
//     });

//     console.log(`Processed ${this.processed.length} parcels`);
//     return this.processed;
//   }

process(): ProcessedParcel[] {
  console.log('Starting parcel processing...');
  
  // First detect split shipments
  this.detectSplitShipments();
  
  // Process each parcel
  this.processed = this.data.map((parcel, index) => {
    if (index % 1000 === 0) {
      console.log(`Processing parcel ${index + 1}/${this.data.length}`);
    }
    
    // Convert price
    const itemPriceINR = typeof parcel.item_price_inr === 'string' 
      ? parseFloat(parcel.item_price_inr) 
      : parcel.item_price_inr;
    const itemValueAED = this.convertToAED(itemPriceINR);

    // Create daily key - FIXED DATE PARSING
    let dailyKey = '';
    try {
      const [datePart] = parcel.timestamp.split(' ');
      const [day, month, year] = datePart.split('/');
      const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      dailyKey = `${parcel.importer_name}_${isoDate}`;
    } catch (error) {
      dailyKey = `${parcel.importer_name}_unknown-date`;
    }
    
    const dailyTotalAED = this.importerDailyTotals.get(dailyKey) || itemValueAED;

    // Check if part of split shipment
    let isSplit = false;
    let splitGroupId: string | undefined;
    
    this.splitGroups.forEach((orderIds, groupId) => {
      if (orderIds.includes(parcel.order_id)) {
        isSplit = true;
        splitGroupId = groupId;
      }
    });

    // Classify HS code
    const hsClassification = this.classifyHS(parcel);

    // Risk assessment
    const riskAssessment = this.scanRiskKeywords(parcel);

    // Calculate duty
    const dutyCalculation = this.calculateDuty(parcel, dailyTotalAED);

    // Assign risk lane
    const laneAssignment = this.assignRiskLane(
      isSplit,
      dutyCalculation.applicable,
      riskAssessment.isHighRisk,
      riskAssessment.categories
    );

    // Determine clearance recommendation
    const clearance = this.determineClearance(laneAssignment.lane);

    // Build processed parcel
    const processedParcel: ProcessedParcel = {
      order_id: parcel.order_id,
      timestamp: parcel.timestamp,
      importer_name: parcel.importer_name,
      delivery_address: parcel.delivery_address,
      product_title: parcel.product_title,
      description: parcel.description,
      product_category: parcel.product_category,
      item_price_inr: itemPriceINR,
      item_price_aed: itemValueAED,
      image_url: parcel.image_url,
      same_day_importer_key: dailyKey,
      daily_total_aed: dailyTotalAED,
      is_split_shipment: isSplit,
      split_group_id: splitGroupId,
      predicted_hs_code: hsClassification.code,
      hs_confidence_score: hsClassification.confidence,
      hs_chapter: hsClassification.chapter,
      de_minimis_threshold: 1000,
      duty_applicable: dutyCalculation.applicable,
      duty_rate: dutyCalculation.rate,
      duty_payable_aed: dutyCalculation.payable,
      tariff_reference: dutyCalculation.tariffRef,
      risk_keywords_found: riskAssessment.keywords,
      risk_categories: riskAssessment.categories,
      is_high_risk: riskAssessment.isHighRisk,
      risk_reason_codes: riskAssessment.reasonCodes,
      assigned_risk_lane: laneAssignment.lane,
      lane_reasons: laneAssignment.reasons,
      processing_timestamp: new Date().toISOString(),
      clearance_recommendation: clearance
    };

    return processedParcel;
  });

  console.log(`✅ Processed ${this.processed.length} parcels`);
  return this.processed;
}

  getSummary() {
    const total = this.processed.length;
    const highRisk = this.processed.filter(p => p.is_high_risk).length;
    const splitShipments = this.processed.filter(p => p.is_split_shipment).length;
    const dutyApplicable = this.processed.filter(p => p.duty_applicable).length;
    const totalDuty = this.processed.reduce((sum, p) => sum + p.duty_payable_aed, 0);
    
    // Lane distribution
    const lanes = {
      GREEN: this.processed.filter(p => p.assigned_risk_lane === 'GREEN').length,
      YELLOW: this.processed.filter(p => p.assigned_risk_lane === 'YELLOW').length,
      RED: this.processed.filter(p => p.assigned_risk_lane === 'RED').length,
      BLACK: this.processed.filter(p => p.assigned_risk_lane === 'BLACK').length
    };

    // Risk categories
    const riskCategories: Record<string, number> = {};
    this.processed.forEach(p => {
      p.risk_categories.forEach(cat => {
        riskCategories[cat] = (riskCategories[cat] || 0) + 1;
      });
    });

    return {
      total,
      highRisk,
      splitShipments,
      dutyApplicable,
      totalDuty: parseFloat(totalDuty.toFixed(2)),
      lanes,
      riskCategories,
      avgConfidence: this.processed.reduce((sum, p) => sum + p.hs_confidence_score, 0) / total
    };
  }

  exportToCSV(): string {
    const headers = [
      'order_id', 'timestamp', 'importer_name', 'product_title', 
      'item_price_inr', 'item_price_aed', 'predicted_hs_code', 
      'hs_confidence_score', 'is_split_shipment', 'daily_total_aed',
      'duty_applicable', 'duty_rate', 'duty_payable_aed', 
      'is_high_risk', 'risk_categories', 'assigned_risk_lane',
      'clearance_recommendation'
    ];

    const rows = this.processed.map(p => [
      p.order_id,
      p.timestamp,
      p.importer_name,
      p.product_title,
      p.item_price_inr.toString(),
      p.item_price_aed.toString(),
      p.predicted_hs_code,
      (p.hs_confidence_score * 100).toFixed(1) + '%',
      p.is_split_shipment ? 'YES' : 'NO',
      p.daily_total_aed.toString(),
      p.duty_applicable ? 'YES' : 'NO',
      p.duty_rate.toString() + '%',
      p.duty_payable_aed.toString(),
      p.is_high_risk ? 'HIGH' : 'LOW',
      p.risk_categories.join(';'),
      p.assigned_risk_lane,
      p.clearance_recommendation
    ]);

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  }

  exportToJSON(): string {
    return JSON.stringify({
      summary: this.getSummary(),
      parcels: this.processed,
      processing_timestamp: new Date().toISOString()
    }, null, 2);
  }
}