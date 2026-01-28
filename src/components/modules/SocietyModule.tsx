// import { useState } from "react";
// import { mockConsignments } from "@/data/mockData";
// import { RiskScoreRing } from "@/components/RiskScoreRing";
// import { RiskBadge } from "@/components/RiskBadge";
// import { StatCard } from "@/components/StatCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { Shield, AlertOctagon, Package, Syringe, Skull, MapPin, Clock, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const threatCategories = [
//   { id: 'pharma', label: 'Counterfeit Pharma', icon: Syringe, count: 3 },
//   { id: 'weapons', label: 'Weapons/Explosives', icon: Skull, count: 0 },
//   { id: 'contraband', label: 'Contraband', icon: Package, count: 1 },
//   { id: 'wildlife', label: 'Wildlife/CITES', icon: Shield, count: 2 },
// ];

// export function SocietyModule() {
//   const [selectedConsignment, setSelectedConsignment] = useState<string | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
//   const societyAlerts = mockConsignments.filter(c => c.riskScores.society >= 50);
//   const selected = mockConsignments.find(c => c.id === selectedConsignment);

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Society Protection" 
//         subtitle="Illicit Goods Early-Warning Radar"
//       />
      
//       <div className="flex-1 p-6 overflow-auto">
//         {/* Stats Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             title="Active Threats"
//             value="6"
//             subtitle="Requiring immediate action"
//             icon={AlertOctagon}
//             variant="danger"
//           />
//           <StatCard
//             title="Held Shipments"
//             value="4"
//             subtitle="Pending verification"
//             icon={Package}
//             variant="warning"
//           />
//           <StatCard
//             title="Interdictions (MTD)"
//             value="12"
//             subtitle="Successfully stopped"
//             icon={Shield}
//             variant="success"
//           />
//           <StatCard
//             title="Avg Detection Time"
//             value="2.3h"
//             subtitle="From manifest to alert"
//             icon={Clock}
//           />
//         </div>

//         {/* Threat Categories */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           {threatCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
//               className={cn(
//                 "glass-card rounded-xl p-4 text-left transition-all border",
//                 activeCategory === cat.id 
//                   ? "border-module-society bg-module-society/10" 
//                   : "border-border/50 hover:border-module-society/50"
//               )}
//             >
//               <cat.icon className={cn(
//                 "h-5 w-5 mb-2",
//                 cat.count > 0 ? "text-module-society" : "text-muted-foreground"
//               )} />
//               <p className="text-sm font-medium">{cat.label}</p>
//               <p className={cn(
//                 "text-2xl font-bold",
//                 cat.count > 0 ? "text-module-society" : "text-muted-foreground"
//               )}>
//                 {cat.count}
//               </p>
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Threat List */}
//           <div className="lg:col-span-1 space-y-4">
//             <h2 className="font-semibold">High-Risk Consignments</h2>
            
//             <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
//               {societyAlerts.map((consignment) => (
//                 <div
//                   key={consignment.id}
//                   onClick={() => setSelectedConsignment(consignment.id)}
//                   className={cn(
//                     "glass-card rounded-lg p-4 cursor-pointer transition-all border",
//                     selectedConsignment === consignment.id 
//                       ? "border-module-society bg-module-society/5" 
//                       : "border-border/50 hover:border-module-society/50"
//                   )}
//                 >
//                   <div className="flex items-start gap-3">
//                     <RiskScoreRing score={consignment.riskScores.society} size="sm" />
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-1">
//                         <p className="font-medium text-sm">{consignment.id}</p>
//                         {consignment.alerts.some(a => a.type === 'illicit') && (
//                           <RiskBadge severity="critical" pulse>Illicit</RiskBadge>
//                         )}
//                       </div>
//                       <p className="text-xs text-muted-foreground truncate">
//                         {consignment.goodsDescription}
//                       </p>
//                       <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
//                         <MapPin className="h-3 w-3" />
//                         {consignment.originCountry}
//                         {consignment.transitPoints.length > 0 && (
//                           <span>→ {consignment.transitPoints.join(' → ')}</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Detail Panel */}
//           <div className="lg:col-span-2">
//             {selected ? (
//               <div className="glass-card rounded-xl p-6 border border-border/50 module-society">
//                 <div className="flex items-start justify-between mb-6">
//                   <div>
//                     <div className="flex items-center gap-3 mb-1">
//                       <h2 className="text-xl font-bold">{selected.id}</h2>
//                       <RiskBadge severity="critical" pulse>Potential Threat</RiskBadge>
//                     </div>
//                     <p className="text-sm text-muted-foreground">{selected.goodsDescription}</p>
//                   </div>
//                   <RiskScoreRing score={selected.riskScores.society} size="md" label="Society Risk" />
//                 </div>

//                 {/* Threat Indicators */}
//                 <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
//                   <h3 className="text-sm font-medium text-destructive mb-3 flex items-center gap-2">
//                     <AlertOctagon className="h-4 w-4" />
//                     Threat Indicators
//                   </h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     {selected.riskDrivers.map((driver, i) => (
//                       <div key={i} className="flex items-start gap-2 text-sm">
//                         <span className="text-destructive mt-0.5">⚠</span>
//                         <span>{driver}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Route Analysis */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Route Analysis</h3>
//                   <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
//                     <div className="text-center">
//                       <p className="text-lg font-bold">{selected.originCountry}</p>
//                       <p className="text-xs text-muted-foreground">Origin</p>
//                     </div>
//                     {selected.transitPoints.map((point, i) => (
//                       <div key={i} className="flex items-center gap-4">
//                         <div className="w-8 border-t border-dashed border-muted-foreground" />
//                         <div className="text-center">
//                           <p className="text-sm font-medium text-warning">{point}</p>
//                           <p className="text-xs text-muted-foreground">Transit</p>
//                         </div>
//                       </div>
//                     ))}
//                     <div className="w-8 border-t border-dashed border-muted-foreground" />
//                     <div className="text-center">
//                       <p className="text-lg font-bold text-success">{selected.portOfEntry}</p>
//                       <p className="text-xs text-muted-foreground">Destination</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Document Status */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Document Verification</h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
//                       <div className="flex items-center gap-2">
//                         <FileText className="h-4 w-4 text-destructive" />
//                         <span className="text-sm">NAFDAC Certificate</span>
//                       </div>
//                       <span className="text-xs font-medium text-destructive">MISSING</span>
//                     </div>
//                     <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
//                       <div className="flex items-center gap-2">
//                         <FileText className="h-4 w-4 text-success" />
//                         <span className="text-sm">Bill of Lading</span>
//                       </div>
//                       <span className="text-xs font-medium text-success">VERIFIED</span>
//                     </div>
//                     <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
//                       <div className="flex items-center gap-2">
//                         <FileText className="h-4 w-4 text-warning" />
//                         <span className="text-sm">Pharma Registration</span>
//                       </div>
//                       <span className="text-xs font-medium text-warning">PENDING</span>
//                     </div>
//                     <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
//                       <div className="flex items-center gap-2">
//                         <FileText className="h-4 w-4 text-success" />
//                         <span className="text-sm">Invoice</span>
//                       </div>
//                       <span className="text-xs font-medium text-success">VERIFIED</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recommended Controls */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Recommended Controls</h3>
//                   <div className="space-y-2">
//                     {selected.recommendedActions.map((action, i) => (
//                       <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
//                         <input type="checkbox" className="rounded border-border" />
//                         <span className="text-sm">{action}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-3">
//                   <Button className="flex-1 bg-destructive hover:bg-destructive/90">Issue Hold</Button>
//                   <Button variant="outline">Alert Partner Agencies</Button>
//                   <Button variant="outline">Request Lab Sample</Button>
//                 </div>
//               </div>
//             ) : (
//               <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
//                 <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="font-medium mb-2">Select a consignment</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Choose an item from the threat list to view detailed analysis and controls
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useSharedData } from "@/contexts/SharedDataContext";
import { RiskScoreRing } from "@/components/RiskScoreRing";
import { RiskBadge } from "@/components/RiskBadge";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { 
  Shield, 
  AlertOctagon, 
  Package, 
  Syringe, 
  Skull, 
  MapPin, 
  Clock, 
  FileText,
  ShieldAlert,
  Eye,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface SocietyThreat {
  id: string;
  orderId: string;
  importerName: string;
  productTitle: string;
  description: string;
  category: string;
  valueAED: number;
  riskScore: number;
  threatType: 'pharma' | 'weapons' | 'contraband' | 'wildlife' | 'high-risk' | 'split-shipment';
  indicators: string[];
  hsCode: string;
  countryOrigin: string;
  documentStatus: Record<string, 'verified' | 'missing' | 'pending'>;
  recommendedActions: string[];
  status: 'active' | 'investigating' | 'held' | 'cleared';
}

export function SocietyModule() {
  const { processedData } = useSharedData();
  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [threats, setThreats] = useState<SocietyThreat[]>([]);
  
  // Generate society threats from processed data
  useEffect(() => {
    if (processedData.length === 0) {
      setThreats([]);
      return;
    }

    const parcels = processedData as any[];
    
    const societyThreats: SocietyThreat[] = parcels
      .filter(parcel => {
        const isHighRisk = parcel.is_high_risk || false;
        const hasWeapons = parcel.risk_categories?.includes('WEAPONS') || false;
        const hasDrugs = parcel.product_title?.toLowerCase().includes('pharma') || 
                         parcel.product_title?.toLowerCase().includes('drug') ||
                         parcel.product_title?.toLowerCase().includes('medicine');
        const hasWildlife = parcel.product_title?.toLowerCase().includes('ivory') ||
                           parcel.product_title?.toLowerCase().includes('animal') ||
                           parcel.product_title?.toLowerCase().includes('endangered');
        
        return isHighRisk || hasWeapons || hasDrugs || hasWildlife || parcel.is_split_shipment;
      })
      .map((parcel, index) => {
        // Determine threat type
        let threatType: SocietyThreat['threatType'] = 'high-risk';
        if (parcel.risk_categories?.includes('WEAPONS')) {
          threatType = 'weapons';
        } else if (parcel.product_title?.toLowerCase().includes('pharma') || 
                   parcel.product_title?.toLowerCase().includes('drug') ||
                   parcel.product_title?.toLowerCase().includes('medicine')) {
          threatType = 'pharma';
        } else if (parcel.product_title?.toLowerCase().includes('ivory') ||
                   parcel.product_title?.toLowerCase().includes('animal')) {
          threatType = 'wildlife';
        } else if (parcel.is_split_shipment) {
          threatType = 'split-shipment';
        }

        // Generate indicators
        const indicators: string[] = [];
        if (parcel.is_high_risk) indicators.push('High-risk goods classification');
        if (parcel.is_split_shipment) indicators.push('Split shipment pattern detected');
        if (parcel.risk_categories?.length > 0) {
          indicators.push(...parcel.risk_categories.map((cat: string) => `${cat} risk category`));
        }
        if (parcel.item_price_aed > 5000) indicators.push('High-value shipment');
        if (!parcel.importer_name || parcel.importer_name === 'Unknown') indicators.push('Unknown importer');

        // Risk score based on multiple factors
        const riskScore = Math.min(95,
          40 +
          (parcel.is_high_risk ? 30 : 0) +
          (parcel.is_split_shipment ? 20 : 0) +
          (parcel.risk_categories?.length || 0) * 10 +
          (parcel.item_price_aed > 5000 ? 15 : 0)
        );

        // Document status
        const documentStatus = {
          'Invoice': Math.random() > 0.3 ? 'verified' : 'pending',
          'HS Classification': Math.random() > 0.5 ? 'verified' : 'pending',
          'Certificate of Origin': Math.random() > 0.7 ? 'verified' : 'missing',
          'Safety Data Sheet': threatType === 'pharma' ? 'missing' : 'pending'
        };

        // Recommended actions
        const recommendedActions = [
          'Physical inspection required',
          'Request additional documentation',
          'Verify with source country authorities',
          'Sample testing for prohibited substances'
        ];

        return {
          id: `soc-${index + 1}`,
          orderId: parcel.order_id || `ORD-${index + 1}`,
          importerName: parcel.importer_name || 'Unknown Importer',
          productTitle: parcel.product_title || 'Unknown Product',
          description: parcel.description || '',
          category: parcel.product_category || 'Uncategorized',
          valueAED: parcel.item_price_aed || 0,
          riskScore,
          threatType,
          indicators,
          hsCode: parcel.predicted_hs_code || '9999.99.99',
          countryOrigin: ['China', 'USA', 'India', 'Turkey', 'Germany'][index % 5],
          documentStatus,
          recommendedActions,
          status: riskScore > 70 ? 'active' : riskScore > 50 ? 'investigating' : 'held'
        };
      })
      .slice(0, 8); // Limit to 8 threats

    setThreats(societyThreats);
    if (threats.length > 0 && !selectedThreat) {
      setSelectedThreat(threats[0].id);
    }
  }, [processedData]);

  const selected = threats.find(t => t.id === selectedThreat);

  // Calculate threat categories count
  const threatCategories = [
    { 
      id: 'pharma', 
      label: 'Counterfeit Pharma', 
      icon: Syringe, 
      count: threats.filter(t => t.threatType === 'pharma').length 
    },
    { 
      id: 'weapons', 
      label: 'Weapons/Explosives', 
      icon: Skull, 
      count: threats.filter(t => t.threatType === 'weapons').length 
    },
    { 
      id: 'high-risk', 
      label: 'High-Risk Goods', 
      icon: AlertTriangle, 
      count: threats.filter(t => t.threatType === 'high-risk').length 
    },
    { 
      id: 'split-shipment', 
      label: 'Split Shipments', 
      icon: Package, 
      count: threats.filter(t => t.threatType === 'split-shipment').length 
    },
  ];

  // Calculate stats
  const stats = {
    activeThreats: threats.filter(t => t.status === 'active').length,
    heldShipments: threats.filter(t => t.status === 'held').length,
    interdictions: Math.floor(threats.length * 0.6), // 60% of threats lead to interdictions
    avgDetectionTime: '2.3h',
    totalThreats: threats.length,
    highValueThreats: threats.filter(t => t.valueAED > 5000).length
  };

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Society Protection" 
        subtitle="Illicit Goods Early-Warning Radar"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Threats"
            value={stats.activeThreats.toString()}
            subtitle="Requiring immediate action"
            icon={AlertOctagon}
            variant="danger"
          />
          <StatCard
            title="Held Shipments"
            value={stats.heldShipments.toString()}
            subtitle="Pending verification"
            icon={Package}
            variant="warning"
          />
          <StatCard
            title="Interdictions (MTD)"
            value={stats.interdictions.toString()}
            subtitle="Successfully stopped"
            icon={Shield}
            variant="success"
          />
          <StatCard
            title="Avg Detection Time"
            value={stats.avgDetectionTime}
            subtitle="From manifest to alert"
            icon={Clock}
          />
        </div>

        {/* Threat Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {threatCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={cn(
                "glass-card rounded-xl p-4 text-left transition-all border",
                activeCategory === cat.id 
                  ? "border-red-500 bg-red-500/10" 
                  : "border-border/50 hover:border-red-500/50"
              )}
            >
              <cat.icon className={cn(
                "h-5 w-5 mb-2",
                cat.count > 0 ? "text-red-600" : "text-muted-foreground"
              )} />
              <p className="text-sm font-medium">{cat.label}</p>
              <p className={cn(
                "text-2xl font-bold",
                cat.count > 0 ? "text-red-600" : "text-muted-foreground"
              )}>
                {cat.count}
              </p>
            </button>
          ))}
        </div>

        {processedData.length === 0 ? (
          <Card className="text-center p-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
            <p className="text-muted-foreground mb-6">
              Upload and process CSV data in Parcel Intelligence to enable society protection analytics
            </p>
            <Button onClick={() => window.location.href = '#/parcel-intel'}>
              Go to Parcel Intelligence
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Threat List */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="font-semibold">High-Risk Consignments</h2>
              
              <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
                {threats.map((threat) => (
                  <div
                    key={threat.id}
                    onClick={() => setSelectedThreat(threat.id)}
                    className={cn(
                      "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                      selectedThreat === threat.id 
                        ? "border-red-500 bg-red-500/5" 
                        : "border-border/50 hover:border-red-500/50"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <RiskScoreRing score={threat.riskScore} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm">{threat.orderId}</p>
                          <RiskBadge severity="critical" pulse>
                            {threat.threatType === 'weapons' ? 'Weapons' : 
                             threat.threatType === 'pharma' ? 'Pharma' : 
                             threat.threatType === 'split-shipment' ? 'Split' : 'High-Risk'}
                          </RiskBadge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {threat.productTitle}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {threat.countryOrigin} • AED {threat.valueAED.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="text-xl font-bold">{selected.orderId}</h2>
                        <RiskBadge severity="critical" pulse>
                          {selected.threatType === 'weapons' ? 'Weapons Threat' : 
                           selected.threatType === 'pharma' ? 'Pharma Threat' : 
                           selected.threatType === 'split-shipment' ? 'Split Shipment' : 'High-Risk Goods'}
                        </RiskBadge>
                      </div>
                      <p className="text-sm text-muted-foreground">{selected.productTitle}</p>
                    </div>
                    <RiskScoreRing score={selected.riskScore} size="md" label="Threat Level" />
                  </div>

                  {/* Threat Indicators */}
                  <div className="bg-red-100/50 border border-red-200 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-medium text-red-600 mb-3 flex items-center gap-2">
                      <AlertOctagon className="h-4 w-4" />
                      Threat Indicators
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.indicators.map((indicator, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600 mt-0.5">⚠</span>
                          <span>{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Product Details</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">HS Code</p>
                        <p className="font-medium">{selected.hsCode}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Value</p>
                        <p className="font-medium text-red-600">AED {selected.valueAED.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Origin</p>
                        <p className="font-medium">{selected.countryOrigin}</p>
                      </div>
                      <div className="col-span-3">
                        <p className="text-xs text-muted-foreground">Description</p>
                        <p className="text-sm">{selected.description || 'No description available'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Document Status */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Document Verification</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selected.documentStatus).map(([doc, status]) => {
                        let bgColor = '';
                        let textColor = '';
                        let statusText = '';
                        
                        switch (status) {
                          case 'verified':
                            bgColor = 'bg-green-100';
                            textColor = 'text-green-700';
                            statusText = 'VERIFIED';
                            break;
                          case 'missing':
                            bgColor = 'bg-red-100';
                            textColor = 'text-red-700';
                            statusText = 'MISSING';
                            break;
                          case 'pending':
                            bgColor = 'bg-yellow-100';
                            textColor = 'text-yellow-700';
                            statusText = 'PENDING';
                            break;
                        }

                        return (
                          <div 
                            key={doc} 
                            className={`flex items-center justify-between p-3 ${bgColor} rounded-lg border ${textColor.replace('text-', 'border-')}/20`}
                          >
                            <div className="flex items-center gap-2">
                              <FileText className={`h-4 w-4 ${textColor}`} />
                              <span className="text-sm">{doc}</span>
                            </div>
                            <span className={`text-xs font-medium ${textColor}`}>
                              {statusText}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recommended Controls */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Recommended Controls</h3>
                    <div className="space-y-2">
                      {selected.recommendedActions.map((action, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button 
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => {
                        toast.error("Hold issued", {
                          description: `Shipment ${selected.orderId} placed on hold for inspection`,
                        });
                      }}
                    >
                      Issue Hold
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        toast.warning("Agencies alerted", {
                          description: `Partner agencies notified about ${selected.orderId}`,
                        });
                      }}
                    >
                      Alert Partner Agencies
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        toast.info("Sample requested", {
                          description: `Lab sample requested for ${selected.productTitle}`,
                        });
                      }}
                    >
                      Request Lab Sample
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                  <ShieldAlert className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Select a consignment</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose an item from the threat list to view detailed analysis and controls
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}