// Parcel Data Interface matching the hackathon challenge
export interface ParcelData {
  order_id: string;
  timestamp: string;
  importer_name: string;
  delivery_address: string;
  product_title: string;
  description: string;
  product_category: string;
  item_price_inr: number;
  item_price_aed: number; // Derived
  image_url?: string;
}

export interface ProcessedParcel extends ParcelData {
  // Level 1: Split Shipment Detection
  same_day_importer_key: string;
  daily_total_aed: number;
  is_split_shipment: boolean;
  split_group_id?: string;
  
  // Level 2: HS Classification
  predicted_hs_code: string;
  hs_confidence_score: number;
  hs_chapter: string;
  hs_description?: string;
  
  // Level 3: Duty Calculation
  de_minimis_threshold: number;
  duty_applicable: boolean;
  duty_rate: number;
  duty_payable_aed: number;
  tariff_reference: string;
  
  // Level 4: Risk Protection
  risk_keywords_found: string[];
  risk_categories: string[];
  is_high_risk: boolean;
  risk_reason_codes: string[];
  
  // Risk Lane Assignment
  assigned_risk_lane: 'GREEN' | 'YELLOW' | 'RED' | 'BLACK';
  lane_reasons: string[];
  
  // Operational Metadata
  processing_timestamp: string;
  clearance_recommendation: 'AUTO_CLEAR' | 'INSPECTION' | 'DOC_REVIEW' | 'HOLD';
}

// Risk Profile Keywords (from the hackathon docs)
export const RISK_KEYWORDS = {
  WEAPONS: [
    'gun', 'pistol', 'rifle', 'revolver', 'firearm', 'weapon',
    'ammunition', 'bullet', 'magazine', 'silencer', 'scope',
    'tactical', 'military', 'combat', 'knife', 'blade',
    'sword', 'dagger', 'bayonet', 'grenade', 'explosive'
  ],
  DRONES: [
    'drone', 'uav', 'quadcopter', 'multirotor', 'fpv',
    'aerial', 'unmanned', 'dji', 'autonomous', 'remote control'
  ],
  LITHIUM_BATTERIES: [
    'lithium', 'li-ion', 'battery', 'accumulator', 'cell',
    'rechargeable', 'power bank', 'portable charger'
  ],
  PRECIOUS_METALS: [
    'gold', 'silver', 'platinum', 'palladium', 'precious',
    'jewellery', 'jewelry', 'diamond', 'gemstone', 'pearl',
    'bullion', 'ingot', 'bar', 'coin', 'karat', 'kt'
  ],
  CONTROLLED_SUBSTANCES: [
    'drug', 'narcotic', 'opioid', 'cannabis', 'marijuana',
    'prescription', 'pharmaceutical', 'steroid', 'chemical'
  ],
  COUNTERFEIT: [
    'replica', 'copy', 'fake', 'counterfeit', 'imitation',
    'knockoff', 'unauthorized', 'pirated', 'bootleg'
  ]
};

// HS Code Mapping (Simplified for hackathon)
export const HS_CODE_MAPPING = {
  // Based on product categories and keywords
  'ELECTRONICS': {
    patterns: ['phone', 'tablet', 'laptop', 'computer', 'electronic'],
    hs_codes: ['8517.12', '8471.30', '8543.70']
  },
  'CLOTHING': {
    patterns: ['shirt', 'dress', 'pants', 'jacket', 'clothing', 'apparel'],
    hs_codes: ['6109.10', '6203.42', '6110.20']
  },
  'ACCESSORIES': {
    patterns: ['watch', 'bag', 'wallet', 'belt', 'accessory'],
    hs_codes: ['9102.11', '4202.21', '9113.90']
  },
  // Add specific mappings from your hackathon brief
  'LITHIUM_BATTERIES': {
    patterns: ['lithium', 'battery', 'power bank'],
    hs_codes: ['8507.60', '8506.50']
  },
  'DRONES': {
    patterns: ['drone', 'uav', 'quadcopter'],
    hs_codes: ['8806.21', '8806.22', '8806.23']
  },
  'WEAPONS': {
    patterns: ['gun', 'weapon', 'firearm', 'ammunition'],
    hs_codes: ['9301.10', '9302.00', '9303.90']
  },
  'PRECIOUS_METALS': {
    patterns: ['gold', 'silver', 'platinum', 'jewellery'],
    hs_codes: ['7113.19', '7108.13', '7114.19']
  }
};

// Tariff Rates from your CSV
export const TARIFF_RATES = {
  '01-05': 12.5,   // Live animals
  '06-14': 10.0,   // Vegetable products
  '15': 15.0,      // Fats and oils
  '16-24': 20.0,   // Foodstuffs
  '25-27': 0.0,    // Mineral products
  '28-38': 6.5,    // Chemical products
  '39-40': 6.5,    // Plastics and rubber
  '41-43': 8.0,    // Leather
  '44-46': 4.0,    // Wood
  '47-49': 0.0,    // Paper
  '50-63': 12.0,   // Textiles
  '64-67': 17.0,   // Footwear
  '68-70': 5.0,    // Stone/ceramics
  '71': 2.5,       // Precious stones/metals
  '72-83': 3.0,    // Base metals
  '84-85': 2.0,    // Machinery
  '86-89': 10.0,   // Vehicles
  '90-92': 1.5,    // Instruments
  '93': 10.0,      // Arms
  '94-96': 5.0,    // Miscellaneous
  '97-99': 0.0     // Art/antiques
};

// Mock data for hackathon demo
export const mockParcelData: ProcessedParcel[] = [
  {
    order_id: "ECOM-001",
    timestamp: "2026-03-15 10:30:00",
    importer_name: "Ahmed Hassan",
    delivery_address: "Al Reem Island, Abu Dhabi",
    product_title: "DJI Mini 3 Pro Drone with Camera",
    description: "4K camera drone with intelligent flight modes, under 250g weight",
    product_category: "Electronics/Drones",
    item_price_inr: 89999,
    item_price_aed: 3959.56, // 89999 * 0.044
    image_url: "https://example.com/drone.jpg",
    
    // Split shipment detection
    same_day_importer_key: "Ahmed Hassan_2026-03-15",
    daily_total_aed: 5959.56, // Combined with other orders
    is_split_shipment: true,
    split_group_id: "SPLIT-001",
    
    // HS Classification
    predicted_hs_code: "8806.21.00",
    hs_confidence_score: 0.95,
    hs_chapter: "88",
    hs_description: "Unmanned aircraft (drones) ≤250g",
    
    // Duty Calculation
    de_minimis_threshold: 1000,
    duty_applicable: true,
    duty_rate: 5, // Standard rate for demo
    duty_payable_aed: 197.98, // 5% of 3959.56
    tariff_reference: "E-COMMERCE-STD",
    
    // Risk Protection
    risk_keywords_found: ["drone", "uav", "camera", "flight"],
    risk_categories: ["DRONES", "ELECTRONICS"],
    is_high_risk: true,
    risk_reason_codes: ["DRONE_RISK", "SPLIT_SHIPMENT"],
    
    // Risk Lane
    assigned_risk_lane: "RED",
    lane_reasons: ["High-risk goods (drone)", "Split shipment detected", "Duty applicable"],
    
    // Operational
    processing_timestamp: "2026-03-15 14:22:10",
    clearance_recommendation: "INSPECTION"
  },
  {
    order_id: "ECOM-002",
    timestamp: "2026-03-15 11:15:00",
    importer_name: "Ahmed Hassan",
    delivery_address: "Al Reem Island, Abu Dhabi",
    product_title: "Samsung Galaxy S25 Ultra",
    description: "Latest smartphone with 200MP camera, 512GB storage",
    product_category: "Electronics/Phones",
    item_price_inr: 129999,
    item_price_aed: 5719.56, // 129999 * 0.044
    image_url: "https://example.com/phone.jpg",
    
    // Split shipment detection
    same_day_importer_key: "Ahmed Hassan_2026-03-15",
    daily_total_aed: 5959.56,
    is_split_shipment: true,
    split_group_id: "SPLIT-001",
    
    // HS Classification
    predicted_hs_code: "8517.12.00",
    hs_confidence_score: 0.98,
    hs_chapter: "85",
    hs_description: "Mobile phones",
    
    // Duty Calculation
    de_minimis_threshold: 1000,
    duty_applicable: true,
    duty_rate: 5,
    duty_payable_aed: 285.98,
    tariff_reference: "E-COMMERCE-STD",
    
    // Risk Protection
    risk_keywords_found: ["phone", "smartphone", "camera"],
    risk_categories: ["ELECTRONICS"],
    is_high_risk: false,
    risk_reason_codes: ["SPLIT_SHIPMENT"],
    
    // Risk Lane
    assigned_risk_lane: "RED",
    lane_reasons: ["Split shipment detected", "Duty applicable"],
    
    // Operational
    processing_timestamp: "2026-03-15 14:22:10",
    clearance_recommendation: "DOC_REVIEW"
  },
  {
    order_id: "ECOM-003",
    timestamp: "2026-03-15 09:45:00",
    importer_name: "Fatima Al Mansoori",
    delivery_address: "Khalifa City, Abu Dhabi",
    product_title: "Designer Handbag Leather",
    description: "Genuine leather handbag with gold-plated chain",
    product_category: "Fashion/Bags",
    item_price_inr: 24999,
    item_price_aed: 1099.56, // 24999 * 0.044
    image_url: "https://example.com/handbag.jpg",
    
    // Split shipment detection
    same_day_importer_key: "Fatima Al Mansoori_2026-03-15",
    daily_total_aed: 1099.56,
    is_split_shipment: false,
    
    // HS Classification
    predicted_hs_code: "4202.21.00",
    hs_confidence_score: 0.92,
    hs_chapter: "42",
    hs_description: "Handbags with outer surface of leather",
    
    // Duty Calculation
    de_minimis_threshold: 1000,
    duty_applicable: true, // Exceeds 1000 AED
    duty_rate: 17, // From tariff.csv for footwear category (64-67)
    duty_payable_aed: 186.92,
    tariff_reference: "TAR-64-67",
    
    // Risk Protection
    risk_keywords_found: ["leather", "gold-plated", "designer"],
    risk_categories: ["ACCESSORIES"],
    is_high_risk: false,
    risk_reason_codes: ["VALUE_EXCEEDS_THRESHOLD"],
    
    // Risk Lane
    assigned_risk_lane: "YELLOW",
    lane_reasons: ["Duty applicable", "Value exceeds de-minimis"],
    
    // Operational
    processing_timestamp: "2026-03-15 13:45:30",
    clearance_recommendation: "DOC_REVIEW"
  },
  {
    order_id: "ECOM-004",
    timestamp: "2026-03-15 14:20:00",
    importer_name: "Yusuf Mohammed",
    delivery_address: "Al Maryah Island, Abu Dhabi",
    product_title: "Book: Artificial Intelligence Fundamentals",
    description: "Textbook on AI and machine learning principles",
    product_category: "Books/Education",
    item_price_inr: 4599,
    item_price_aed: 202.36, // 4599 * 0.044
    image_url: "https://example.com/book.jpg",
    
    // Split shipment detection
    same_day_importer_key: "Yusuf Mohammed_2026-03-15",
    daily_total_aed: 202.36,
    is_split_shipment: false,
    
    // HS Classification
    predicted_hs_code: "4901.99.00",
    hs_confidence_score: 0.96,
    hs_chapter: "49",
    hs_description: "Printed books",
    
    // Duty Calculation
    de_minimis_threshold: 1000,
    duty_applicable: false, // Below threshold
    duty_rate: 0,
    duty_payable_aed: 0,
    tariff_reference: "TAR-47-49",
    
    // Risk Protection
    risk_keywords_found: ["artificial intelligence", "machine learning"],
    risk_categories: ["BOOKS"],
    is_high_risk: false,
    risk_reason_codes: ["LOW_VALUE"],
    
    // Risk Lane
    assigned_risk_lane: "GREEN",
    lane_reasons: ["Value below de-minimis", "No risk keywords"],
    
    // Operational
    processing_timestamp: "2026-03-15 15:10:45",
    clearance_recommendation: "AUTO_CLEAR"
  },
  {
    order_id: "ECOM-005",
    timestamp: "2026-03-15 16:05:00",
    importer_name: "Raj Patel",
    delivery_address: "Al Mushrif, Abu Dhabi",
    product_title: "5000mAh Power Bank with Fast Charging",
    description: "Portable lithium-ion battery charger for mobile devices",
    product_category: "Electronics/Batteries",
    item_price_inr: 3499,
    item_price_aed: 153.96, // 3499 * 0.044
    image_url: "https://example.com/powerbank.jpg",
    
    // Split shipment detection
    same_day_importer_key: "Raj Patel_2026-03-15",
    daily_total_aed: 153.96,
    is_split_shipment: false,
    
    // HS Classification
    predicted_hs_code: "8507.60.0000",
    hs_confidence_score: 0.97,
    hs_chapter: "85",
    hs_description: "Lithium-ion accumulators",
    
    // Duty Calculation
    de_minimis_threshold: 1000,
    duty_applicable: false,
    duty_rate: 6.5, // Chapter 28-38
    duty_payable_aed: 0, // No duty since below threshold
    tariff_reference: "TAR-28-38",
    
    // Risk Protection
    risk_keywords_found: ["lithium", "battery", "power bank"],
    risk_categories: ["LITHIUM_BATTERIES", "ELECTRONICS"],
    is_high_risk: true,
    risk_reason_codes: ["LITHIUM_BATTERY_RISK"],
    
    // Risk Lane
    assigned_risk_lane: "BLACK",
    lane_reasons: ["Dangerous goods (lithium battery)", "High safety risk"],
    
    // Operational
    processing_timestamp: "2026-03-15 17:30:15",
    clearance_recommendation: "HOLD"
  }
];