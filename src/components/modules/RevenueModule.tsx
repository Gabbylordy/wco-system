// // import { useState } from "react";
// // import { mockConsignments } from "@/data/mockData";
// // import { ConsignmentCard } from "@/components/ConsignmentCard";
// // import { RiskScoreRing } from "@/components/RiskScoreRing";
// // import { StatCard } from "@/components/StatCard";
// // import { DashboardHeader } from "@/components/DashboardHeader";
// // import { DollarSign, TrendingDown, AlertTriangle, FileCheck, ChevronRight, Search } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { cn } from "@/lib/utils";

// // export function RevenueModule() {
// //   const [selectedConsignment, setSelectedConsignment] = useState<string | null>(null);
  
// //   const revenueAlerts = mockConsignments.filter(c => c.riskScores.revenue >= 50);
// //   const selected = mockConsignments.find(c => c.id === selectedConsignment);

// //   return (
// //     <div className="flex flex-col h-full">
// //       <DashboardHeader 
// //         title="Revenue Assurance" 
// //         subtitle="Valuation & PAAR Anomaly Detection Workbench"
// //       />
      
// //       <div className="flex-1 p-6 overflow-auto">
// //         {/* Stats Row */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// //           <StatCard
// //             title="Revenue at Risk"
// //             value="₦4.25B"
// //             subtitle="Estimated leakage exposure"
// //             icon={DollarSign}
// //             variant="danger"
// //             trend={{ value: 12, label: "vs last week" }}
// //           />
// //           <StatCard
// //             title="Undervaluation Alerts"
// //             value="23"
// //             subtitle="Pending review"
// //             icon={TrendingDown}
// //             variant="warning"
// //           />
// //           <StatCard
// //             title="PAAR Anomalies"
// //             value="8"
// //             subtitle="Unusual amendment patterns"
// //             icon={AlertTriangle}
// //             variant="warning"
// //           />
// //           <StatCard
// //             title="Confirmed Adjustments"
// //             value="156"
// //             subtitle="This month"
// //             icon={FileCheck}
// //             variant="success"
// //             trend={{ value: 8, label: "vs last month" }}
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //           {/* Alert List */}
// //           <div className="lg:col-span-1 space-y-4">
// //             <div className="flex items-center justify-between">
// //               <h2 className="font-semibold">Valuation Anomalies</h2>
// //               <span className="text-xs text-muted-foreground">{revenueAlerts.length} items</span>
// //             </div>
            
// //             <div className="relative">
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// //               <Input placeholder="Filter by HS code, trader..." className="pl-9 bg-secondary/50" />
// //             </div>

// //             <div className="space-y-3 max-h-[calc(100vh-380px)] overflow-y-auto pr-2">
// //               {revenueAlerts.map((consignment) => (
// //                 <div
// //                   key={consignment.id}
// //                   onClick={() => setSelectedConsignment(consignment.id)}
// //                   className={cn(
// //                     "glass-card rounded-lg p-4 cursor-pointer transition-all border",
// //                     selectedConsignment === consignment.id 
// //                       ? "border-primary bg-primary/5" 
// //                       : "border-border/50 hover:border-primary/50"
// //                   )}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <RiskScoreRing score={consignment.riskScores.revenue} size="sm" />
// //                     <div className="flex-1 min-w-0">
// //                       <p className="font-medium text-sm">{consignment.id}</p>
// //                       <p className="text-xs text-muted-foreground truncate">
// //                         HS {consignment.hsCode} • {consignment.importerName}
// //                       </p>
// //                     </div>
// //                     <div className="text-right">
// //                       <p className="text-sm font-medium">{consignment.currency} {consignment.declaredValue.toLocaleString()}</p>
// //                       <p className="text-xs text-destructive">-42% below median</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Detail Panel */}
// //           <div className="lg:col-span-2">
// //             {selected ? (
// //               <div className="glass-card rounded-xl p-6 border border-border/50 module-revenue">
// //                 <div className="flex items-start justify-between mb-6">
// //                   <div>
// //                     <h2 className="text-xl font-bold">{selected.id}</h2>
// //                     <p className="text-sm text-muted-foreground">{selected.declarationId}</p>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <RiskScoreRing score={selected.riskScores.revenue} size="md" label="Revenue Risk" />
// //                   </div>
// //                 </div>

// //                 {/* Anomaly Details */}
// //                 <div className="grid grid-cols-2 gap-6 mb-6">
// //                   <div className="bg-muted/30 rounded-lg p-4">
// //                     <h3 className="text-sm font-medium mb-3">Price Analysis</h3>
// //                     <div className="space-y-2">
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Declared Value</span>
// //                         <span className="font-medium">{selected.currency} {selected.declaredValue.toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Market Median</span>
// //                         <span className="font-medium">{selected.currency} {Math.round(selected.declaredValue * 1.72).toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Deviation</span>
// //                         <span className="font-medium text-destructive">-42%</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Unit Price</span>
// //                         <span className="font-medium">{selected.currency} {(selected.declaredValue / selected.quantity).toFixed(2)}</span>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="bg-muted/30 rounded-lg p-4">
// //                     <h3 className="text-sm font-medium mb-3">PAAR History</h3>
// //                     <div className="space-y-2">
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Reference</span>
// //                         <span className="font-medium">{selected.paarReference}</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Amendments</span>
// //                         <span className="font-medium text-warning">3 in 30 days</span>
// //                       </div>
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-muted-foreground">Last Change</span>
// //                         <span className="font-medium">Value reduced by 15%</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Risk Drivers */}
// //                 <div className="mb-6">
// //                   <h3 className="text-sm font-medium mb-3">Risk Drivers</h3>
// //                   <div className="space-y-2">
// //                     {selected.riskDrivers.map((driver, i) => (
// //                       <div key={i} className="flex items-start gap-2 text-sm bg-destructive/10 text-destructive p-2 rounded-lg">
// //                         <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
// //                         {driver}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Recommended Actions */}
// //                 <div className="mb-6">
// //                   <h3 className="text-sm font-medium mb-3">Recommended Actions</h3>
// //                   <div className="space-y-2">
// //                     {selected.recommendedActions.map((action, i) => (
// //                       <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
// //                         <div className="flex items-center gap-3">
// //                           <input type="checkbox" className="rounded border-border" />
// //                           <span className="text-sm">{action}</span>
// //                         </div>
// //                         <ChevronRight className="h-4 w-4 text-muted-foreground" />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Actions */}
// //                 <div className="flex items-center gap-3">
// //                   <Button className="flex-1">Generate Query Template</Button>
// //                   <Button variant="outline">Request Evidence</Button>
// //                   <Button variant="outline">Escalate</Button>
// //                 </div>
// //               </div>
// //             ) : (
// //               <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
// //                 <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
// //                 <h3 className="font-medium mb-2">Select a consignment</h3>
// //                 <p className="text-sm text-muted-foreground">
// //                   Choose an item from the list to view valuation analysis and recommended actions
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { useSharedData } from "@/contexts/SharedDataContext";
// import { RiskScoreRing } from "@/components/RiskScoreRing";
// import { StatCard } from "@/components/StatCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { 
//   DollarSign, 
//   TrendingDown, 
//   AlertTriangle, 
//   FileCheck, 
//   ChevronRight, 
//   Search,
//   TrendingUp,
//   BarChart3,
//   FileText,
//   Calculator
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { toast } from "sonner";

// interface RevenueAlert {
//   id: string;
//   orderId: string;
//   importerName: string;
//   productTitle: string;
//   hsCode: string;
//   declaredValue: number;
//   marketValue: number;
//   deviation: number;
//   dutyPayable: number;
//   riskScore: number;
//   riskDrivers: string[];
//   recommendedActions: string[];
//   status: 'pending' | 'reviewed' | 'adjusted' | 'cleared';
//   paarReference: string;
//   amendments: number;
// }

// export function RevenueModule() {
//   const { processedData } = useSharedData();
//   const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [revenueAlerts, setRevenueAlerts] = useState<RevenueAlert[]>([]);
  
//   // Generate revenue alerts from processed data
//   useEffect(() => {
//     if (processedData.length === 0) {
//       setRevenueAlerts([]);
//       return;
//     }

//     const parcels = processedData as any[];
    
//     const alerts: RevenueAlert[] = parcels
//       .filter(parcel => {
//         // Filter for parcels with duty payable or split shipments
//         const hasDuty = parcel.duty_applicable || false;
//         const isSplit = parcel.is_split_shipment || false;
//         const isHighValue = parcel.item_price_aed > 1000 || false;
//         return hasDuty || isSplit || isHighValue;
//       })
//       .map((parcel, index) => {
//         // Calculate market value (assume 50% higher than declared for high-risk items)
//         const declaredValue = parcel.item_price_aed || 0;
//         const marketValueMultiplier = parcel.is_high_risk ? 1.72 : 
//                                       parcel.is_split_shipment ? 1.42 : 
//                                       1.18;
//         const marketValue = declaredValue * marketValueMultiplier;
//         const deviation = Math.round(((marketValue - declaredValue) / marketValue) * 100);
        
//         // Duty payable
//         const dutyPayable = parcel.duty_payable_aed || 0;
        
//         // Risk drivers
//         const riskDrivers: string[] = [];
//         if (parcel.is_split_shipment) riskDrivers.push('Split shipment pattern detected');
//         if (deviation > 30) riskDrivers.push(`Undervalued by ${deviation}% compared to market`);
//         if (parcel.is_high_risk) riskDrivers.push('High-risk goods category');
//         if (!parcel.importer_name || parcel.importer_name === 'Unknown') riskDrivers.push('Unknown/imprecise importer');
        
//         // Risk score
//         const riskScore = Math.min(95,
//           30 +
//           (parcel.is_split_shipment ? 25 : 0) +
//           Math.min(deviation, 40) +
//           (parcel.is_high_risk ? 20 : 0)
//         );

//         // PAAR reference
//         const paarReference = `PAAR-${parcel.order_id?.substring(0, 8) || 'UNKNOWN'}-2024`;
//         const amendments = parcel.is_split_shipment ? 3 : deviation > 30 ? 2 : 1;

//         // Recommended actions
//         const recommendedActions = [
//           'Request additional valuation evidence',
//           'Compare with historical import data',
//           'Verify with country of origin pricing',
//           'Consult commodity price database'
//         ];

//         return {
//           id: `rev-${index + 1}`,
//           orderId: parcel.order_id || `ORD-${index + 1}`,
//           importerName: parcel.importer_name || 'Unknown Importer',
//           productTitle: parcel.product_title || 'Unknown Product',
//           hsCode: parcel.predicted_hs_code || '9999.99.99',
//           declaredValue,
//           marketValue,
//           deviation,
//           dutyPayable,
//           riskScore,
//           riskDrivers,
//           recommendedActions,
//           status: deviation > 40 ? 'pending' : 'reviewed',
//           paarReference,
//           amendments
//         };
//       })
//       .slice(0, 10); // Limit to 10 alerts

//     setRevenueAlerts(alerts);
//     if (alerts.length > 0 && !selectedAlert) {
//       setSelectedAlert(alerts[0].id);
//     }
//   }, [processedData]);

//   const selected = revenueAlerts.find(a => a.id === selectedAlert);

//   // Filter alerts based on search term
//   const filteredAlerts = revenueAlerts.filter(alert => 
//     alert.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.importerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     alert.hsCode.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Calculate revenue metrics
//   const calculateMetrics = () => {
//     if (processedData.length === 0) {
//       return {
//         revenueAtRisk: 0,
//         undervaluationAlerts: 0,
//         paarAnomalies: 0,
//         confirmedAdjustments: 0,
//         totalDuty: 0,
//         potentialDuty: 0
//       };
//     }

//     const parcels = processedData as any[];
    
//     const totalDuty = parcels.reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0);
    
//     const potentialDuty = parcels.reduce((sum, p) => {
//       const priceAED = p.item_price_aed || 0;
//       const marketValue = priceAED * 1.3; // Assume 30% undervaluation on average
//       const shouldHaveDuty = marketValue > 1000 || p.is_split_shipment;
//       return sum + (shouldHaveDuty ? marketValue * 0.05 : 0);
//     }, 0);

//     const revenueAtRisk = potentialDuty - totalDuty;
//     const undervaluationAlerts = revenueAlerts.filter(a => a.deviation > 20).length;
//     const paarAnomalies = revenueAlerts.filter(a => a.amendments > 2).length;
//     const confirmedAdjustments = Math.floor(revenueAlerts.length * 0.6); // 60% of alerts lead to adjustments

//     return {
//       revenueAtRisk,
//       undervaluationAlerts,
//       paarAnomalies,
//       confirmedAdjustments,
//       totalDuty,
//       potentialDuty
//     };
//   };

//   const metrics = calculateMetrics();

//   const handleExport = () => {
//     if (revenueAlerts.length === 0) {
//       toast.error("No data to export");
//       return;
//     }

//     const headers = ['Order ID', 'Importer', 'Product', 'Declared Value (AED)', 'Market Value (AED)', 'Deviation', 'Duty Payable', 'Risk Score'];
//     const csvContent = [
//       headers.join(','),
//       ...revenueAlerts.map(alert => [
//         alert.orderId,
//         `"${alert.importerName}"`,
//         `"${alert.productTitle}"`,
//         alert.declaredValue.toFixed(2),
//         alert.marketValue.toFixed(2),
//         `${alert.deviation}%`,
//         alert.dutyPayable.toFixed(2),
//         alert.riskScore
//       ].join(','))
//     ].join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `revenue_alerts_${new Date().toISOString().split('T')[0]}.csv`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);

//     toast.success("Revenue data exported", {
//       description: `${revenueAlerts.length} alerts exported to CSV`,
//     });
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Revenue Assurance" 
//         subtitle="Valuation & PAAR Anomaly Detection Workbench"
//       />
      
//       <div className="flex-1 p-6 overflow-auto">
//         {/* Stats Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             title="Revenue at Risk"
//             value={`AED ${metrics.revenueAtRisk.toFixed(2)}`}
//             subtitle="Estimated leakage exposure"
//             icon={DollarSign}
//             variant="danger"
//             trend={{ value: 12, label: "vs last week" }}
//           />
//           <StatCard
//             title="Undervaluation Alerts"
//             value={metrics.undervaluationAlerts.toString()}
//             subtitle="Pending review"
//             icon={TrendingDown}
//             variant="warning"
//           />
//           <StatCard
//             title="PAAR Anomalies"
//             value={metrics.paarAnomalies.toString()}
//             subtitle="Unusual amendment patterns"
//             icon={AlertTriangle}
//             variant="warning"
//           />
//           <StatCard
//             title="Confirmed Adjustments"
//             value={metrics.confirmedAdjustments.toString()}
//             subtitle="This month"
//             icon={FileCheck}
//             variant="success"
//             trend={{ value: 8, label: "vs last month" }}
//           />
//         </div>

//         {processedData.length === 0 ? (
//           <Card className="text-center p-12">
//             <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//             <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
//             <p className="text-muted-foreground mb-6">
//               Upload and process CSV data in Parcel Intelligence to enable revenue assurance analytics
//             </p>
//             <Button onClick={() => window.location.href = '#/parcel-intel'}>
//               Go to Parcel Intelligence
//             </Button>
//           </Card>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Alert List */}
//             <div className="lg:col-span-1 space-y-4">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-semibold">Valuation Anomalies</h2>
//                 <span className="text-xs text-muted-foreground">{filteredAlerts.length} items</span>
//               </div>
              
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input 
//                   placeholder="Filter by HS code, trader..." 
//                   className="pl-9 bg-secondary/50" 
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-3 max-h-[calc(100vh-380px)] overflow-y-auto pr-2">
//                 {filteredAlerts.map((alert) => (
//                   <div
//                     key={alert.id}
//                     onClick={() => setSelectedAlert(alert.id)}
//                     className={cn(
//                       "glass-card rounded-lg p-4 cursor-pointer transition-all border",
//                       selectedAlert === alert.id 
//                         ? "border-blue-500 bg-blue-500/5" 
//                         : "border-border/50 hover:border-blue-500/50"
//                     )}
//                   >
//                     <div className="flex items-center gap-3">
//                       <RiskScoreRing score={alert.riskScore} size="sm" />
//                       <div className="flex-1 min-w-0">
//                         <p className="font-medium text-sm">{alert.orderId}</p>
//                         <p className="text-xs text-muted-foreground truncate">
//                           HS {alert.hsCode} • {alert.importerName}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-sm font-medium">AED {alert.declaredValue.toFixed(2)}</p>
//                         <p className="text-xs text-destructive">-{alert.deviation}% below market</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Detail Panel */}
//             <div className="lg:col-span-2">
//               {selected ? (
//                 <div className="glass-card rounded-xl p-6 border border-border/50">
//                   <div className="flex items-start justify-between mb-6">
//                     <div>
//                       <h2 className="text-xl font-bold">{selected.orderId}</h2>
//                       <p className="text-sm text-muted-foreground">{selected.paarReference}</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <RiskScoreRing score={selected.riskScore} size="md" label="Revenue Risk" />
//                     </div>
//                   </div>

//                   {/* Anomaly Details */}
//                   <div className="grid grid-cols-2 gap-6 mb-6">
//                     <div className="bg-blue-50 rounded-lg p-4">
//                       <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
//                         <Calculator className="h-4 w-4" />
//                         Price Analysis
//                       </h3>
//                       <div className="space-y-2">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Declared Value</span>
//                           <span className="font-medium">AED {selected.declaredValue.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Market Value</span>
//                           <span className="font-medium">AED {selected.marketValue.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Deviation</span>
//                           <span className="font-medium text-destructive">-{selected.deviation}%</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Duty Payable</span>
//                           <span className="font-medium text-green-600">AED {selected.dutyPayable.toFixed(2)}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-blue-50 rounded-lg p-4">
//                       <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
//                         <FileText className="h-4 w-4" />
//                         PAAR History
//                       </h3>
//                       <div className="space-y-2">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Reference</span>
//                           <span className="font-medium">{selected.paarReference}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Amendments</span>
//                           <span className="font-medium text-warning">{selected.amendments} in 30 days</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">Status</span>
//                           <Badge variant={selected.status === 'pending' ? 'destructive' : 'outline'}>
//                             {selected.status.toUpperCase()}
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Risk Drivers */}
//                   <div className="mb-6">
//                     <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
//                       <AlertTriangle className="h-4 w-4" />
//                       Risk Drivers
//                     </h3>
//                     <div className="space-y-2">
//                       {selected.riskDrivers.map((driver, i) => (
//                         <div key={i} className="flex items-start gap-2 text-sm bg-red-100 text-red-700 p-2 rounded-lg">
//                           <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
//                           {driver}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Recommended Actions */}
//                   <div className="mb-6">
//                     <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
//                       <BarChart3 className="h-4 w-4" />
//                       Recommended Actions
//                     </h3>
//                     <div className="space-y-2">
//                       {selected.recommendedActions.map((action, i) => (
//                         <div key={i} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
//                           <div className="flex items-center gap-3">
//                             <input type="checkbox" className="rounded border-gray-300" />
//                             <span className="text-sm">{action}</span>
//                           </div>
//                           <ChevronRight className="h-4 w-4 text-muted-foreground" />
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex items-center gap-3">
//                     <Button 
//                       className="flex-1"
//                       onClick={() => {
//                         toast.success("Query template generated", {
//                           description: `Template created for ${selected.orderId}`,
//                         });
//                       }}
//                     >
//                       Generate Query Template
//                     </Button>
//                     <Button 
//                       variant="outline"
//                       onClick={() => {
//                         toast.info("Evidence requested", {
//                           description: `Additional evidence requested for ${selected.orderId}`,
//                         });
//                       }}
//                     >
//                       Request Evidence
//                     </Button>
//                     <Button 
//                       variant="outline"
//                       onClick={handleExport}
//                     >
//                       Export Data
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
//                   <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="font-medium mb-2">Select an alert</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Choose an item from the list to view valuation analysis and recommended actions
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useSharedData } from "@/contexts/SharedDataContext";
import { RiskScoreRing } from "@/components/RiskScoreRing";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { 
  DollarSign, 
  TrendingDown, 
  AlertTriangle, 
  FileCheck, 
  ChevronRight, 
  Search,
  TrendingUp,
  BarChart3,
  FileText,
  Calculator,
  Download,
  Eye,
  AlertCircle,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Filter,
  CheckSquare,
  XSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface RevenueAlert {
  id: string;
  orderId: string;
  importerName: string;
  productTitle: string;
  hsCode: string;
  declaredValue: number;
  marketValue: number;
  deviation: number;
  dutyPayable: number;
  riskScore: number;
  riskDrivers: string[];
  recommendedActions: string[];
  status: 'pending' | 'reviewed' | 'adjusted' | 'cleared';
  paarReference: string;
  amendments: number;
  originalParcelData: any; // Store original data for details
  splitShipment: boolean;
  highRisk: boolean;
  itemValueAED: number;
}

export function RevenueModule() {
  const { processedData } = useSharedData();
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [revenueAlerts, setRevenueAlerts] = useState<RevenueAlert[]>([]);
  const [filteredAlerts, setFilteredAlerts] = useState<RevenueAlert[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'view' | 'review'>('view');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const itemsPerPage = 10;
  
  // Generate revenue alerts from processed data
  useEffect(() => {
    if (processedData.length === 0) {
      setRevenueAlerts([]);
      setFilteredAlerts([]);
      return;
    }

    const parcels = processedData as any[];
    
    const alerts: RevenueAlert[] = parcels
      .filter(parcel => {
        // Filter for parcels with duty payable or split shipments
        const hasDuty = parcel.duty_applicable || false;
        const isSplit = parcel.is_split_shipment || false;
        const isHighValue = parcel.item_price_aed > 1000 || false;
        const isHighRisk = parcel.is_high_risk || false;
        return hasDuty || isSplit || isHighValue || isHighRisk;
      })
      .map((parcel, index) => {
        // Calculate market value based on risk factors
        const declaredValue = parcel.item_price_aed || 0;
        let marketValueMultiplier = 1.0;
        
        if (parcel.is_high_risk && parcel.is_split_shipment) {
          marketValueMultiplier = 2.0; // Highest risk
        } else if (parcel.is_high_risk) {
          marketValueMultiplier = 1.8;
        } else if (parcel.is_split_shipment) {
          marketValueMultiplier = 1.5;
        } else if (parcel.duty_applicable) {
          marketValueMultiplier = 1.3;
        } else {
          marketValueMultiplier = 1.15; // Standard
        }
        
        const marketValue = declaredValue * marketValueMultiplier;
        const deviation = Math.round(((marketValue - declaredValue) / marketValue) * 100);
        
        // Duty payable
        const dutyPayable = parcel.duty_payable_aed || 0;
        
        // Risk drivers
        const riskDrivers: string[] = [];
        if (parcel.is_split_shipment) riskDrivers.push('Split shipment pattern detected');
        if (deviation > 30) riskDrivers.push(`Undervalued by ${deviation}% compared to market`);
        if (parcel.is_high_risk) riskDrivers.push('High-risk goods category');
        if (!parcel.importer_name || parcel.importer_name === 'Unknown') riskDrivers.push('Unknown/imprecise importer');
        if (parcel.hs_confidence_score < 0.7) riskDrivers.push('Low HS code confidence');
        if (declaredValue > 10000) riskDrivers.push('High-value shipment');
        
        // Risk score
        const riskScore = Math.min(95,
          30 +
          (parcel.is_split_shipment ? 25 : 0) +
          Math.min(deviation, 40) +
          (parcel.is_high_risk ? 20 : 0) +
          (parcel.hs_confidence_score < 0.7 ? 15 : 0) +
          (declaredValue > 10000 ? 10 : 0)
        );

        // PAAR reference
        const paarReference = `PAAR-${parcel.order_id?.substring(0, 8) || 'UNKNOWN'}-2024`;
        const amendments = parcel.is_split_shipment ? 3 : deviation > 30 ? 2 : 1;

        // Determine status based on risk
        let status: RevenueAlert['status'] = 'pending';
        if (riskScore > 70) status = 'pending';
        else if (riskScore > 50) status = 'reviewed';
        else if (riskScore > 30) status = 'adjusted';
        else status = 'cleared';

        // Recommended actions based on risk
        const recommendedActions = [
          'Request additional valuation evidence',
          'Compare with historical import data',
          'Verify with country of origin pricing',
          deviation > 40 ? 'Initiate formal investigation' : 'Consult commodity price database',
          'Cross-check with trade partner databases'
        ];

        return {
          id: `rev-${parcel.order_id || index + 1}`,
          orderId: parcel.order_id || `ORD-${index + 1}`,
          importerName: parcel.importer_name || 'Unknown Importer',
          productTitle: parcel.product_title || 'Unknown Product',
          hsCode: parcel.predicted_hs_code || '9999.99.99',
          declaredValue,
          marketValue,
          deviation,
          dutyPayable,
          riskScore,
          riskDrivers,
          recommendedActions,
          status,
          paarReference,
          amendments,
          originalParcelData: parcel,
          splitShipment: parcel.is_split_shipment || false,
          highRisk: parcel.is_high_risk || false,
          itemValueAED: parcel.item_price_aed || 0
        };
      });

    // Sort by risk score (highest first)
    alerts.sort((a, b) => b.riskScore - a.riskScore);

    setRevenueAlerts(alerts);
    setFilteredAlerts(alerts);
    if (alerts.length > 0 && !selectedAlert) {
      setSelectedAlert(alerts[0].id);
    }
  }, [processedData]);

  // Filter alerts based on search and filter
  useEffect(() => {
    let filtered = revenueAlerts;
    
    // Filter by status
    if (activeFilter) {
      filtered = filtered.filter(alert => alert.status === activeFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(alert => 
        alert.orderId.toLowerCase().includes(query) ||
        alert.importerName.toLowerCase().includes(query) ||
        alert.productTitle.toLowerCase().includes(query) ||
        alert.hsCode.toLowerCase().includes(query) ||
        alert.paarReference.toLowerCase().includes(query)
      );
    }
    
    setFilteredAlerts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [revenueAlerts, activeFilter, searchTerm]);

  const selected = revenueAlerts.find(a => a.id === selectedAlert);

  // Pagination
  const totalPages = Math.ceil(filteredAlerts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAlerts = filteredAlerts.slice(startIndex, endIndex);

  // Calculate revenue metrics
  const calculateMetrics = () => {
    if (processedData.length === 0) {
      return {
        revenueAtRisk: 0,
        undervaluationAlerts: 0,
        paarAnomalies: 0,
        confirmedAdjustments: 0,
        totalDuty: 0,
        potentialDuty: 0,
        totalAlerts: 0,
        highRiskAlerts: revenueAlerts.filter(a => a.highRisk).length
      };
    }

    const parcels = processedData as any[];
    
    const totalDuty = parcels.reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0);
    
    // Calculate potential duty based on market values
    const potentialDuty = revenueAlerts.reduce((sum, alert) => {
      return sum + (alert.marketValue * 0.05); // 5% duty rate
    }, 0);

    const revenueAtRisk = Math.max(0, potentialDuty - totalDuty);
    const undervaluationAlerts = revenueAlerts.filter(a => a.deviation > 20).length;
    const paarAnomalies = revenueAlerts.filter(a => a.amendments > 2).length;
    const confirmedAdjustments = revenueAlerts.filter(a => a.status === 'adjusted').length;

    return {
      revenueAtRisk,
      undervaluationAlerts,
      paarAnomalies,
      confirmedAdjustments,
      totalDuty,
      potentialDuty,
      totalAlerts: revenueAlerts.length,
      highRiskAlerts: revenueAlerts.filter(a => a.highRisk).length
    };
  };

  const metrics = calculateMetrics();

  // Handle alert actions
  const handleAlertAction = (action: 'query' | 'evidence' | 'export' | 'approve' | 'reject' | 'escalate') => {
    if (!selected) return;

    let message = '';
    switch (action) {
      case 'query':
        message = `Query template generated for ${selected.orderId}`;
        toast.success("Query template generated", { description: message });
        break;
      case 'evidence':
        message = `Additional evidence requested for ${selected.orderId}`;
        toast.info("Evidence requested", { description: message });
        break;
      case 'export':
        exportToCSV();
        break;
      case 'approve':
        message = `Alert ${selected.orderId} approved and cleared`;
        toast.success("Approved!", { description: message });
        break;
      case 'reject':
        message = `Alert ${selected.orderId} rejected - Requires investigation`;
        toast.error("Rejected!", { description: message });
        break;
      case 'escalate':
        message = `Alert ${selected.orderId} escalated to senior officer`;
        toast.warning("Escalated!", { description: message });
        break;
    }
  };

  const handleViewDetails = (alert: RevenueAlert) => {
    setSelectedAlert(alert.id);
    setViewMode('view');
    setIsDialogOpen(true);
  };

  const handleReviewAlert = (alert: RevenueAlert) => {
    setSelectedAlert(alert.id);
    setViewMode('review');
    setIsDialogOpen(true);
  };

  // Export alerts to CSV
  const exportToCSV = () => {
    if (revenueAlerts.length === 0) {
      toast.error("No data to export");
      return;
    }

    const headers = [
      'Order ID', 
      'Importer', 
      'Product', 
      'HS Code',
      'Declared Value (AED)', 
      'Market Value (AED)', 
      'Deviation (%)', 
      'Duty Payable (AED)',
      'Risk Score',
      'Status',
      'PAAR Reference',
      'Amendments',
      'Split Shipment',
      'High Risk'
    ];
    
    const csvContent = [
      headers.join(','),
      ...revenueAlerts.map(alert => [
        alert.orderId,
        `"${alert.importerName}"`,
        `"${alert.productTitle}"`,
        alert.hsCode,
        alert.declaredValue.toFixed(2),
        alert.marketValue.toFixed(2),
        alert.deviation,
        alert.dutyPayable.toFixed(2),
        alert.riskScore,
        alert.status,
        alert.paarReference,
        alert.amendments,
        alert.splitShipment ? 'YES' : 'NO',
        alert.highRisk ? 'YES' : 'NO'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `revenue_alerts_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success("Export Complete", {
      description: `Exported ${revenueAlerts.length} revenue alerts to CSV`,
    });
  };

  // Status filter buttons
  const statusFilters = [
    { id: null, label: 'All', count: revenueAlerts.length },
    { id: 'pending', label: 'Pending', count: revenueAlerts.filter(a => a.status === 'pending').length },
    { id: 'reviewed', label: 'Reviewed', count: revenueAlerts.filter(a => a.status === 'reviewed').length },
    { id: 'adjusted', label: 'Adjusted', count: revenueAlerts.filter(a => a.status === 'adjusted').length },
    { id: 'cleared', label: 'Cleared', count: revenueAlerts.filter(a => a.status === 'cleared').length },
  ];

  // Risk level filter buttons
  const riskFilters = [
    { id: null, label: 'All Risks', count: revenueAlerts.length },
    { id: 'high', label: 'High Risk', count: revenueAlerts.filter(a => a.riskScore >= 70).length },
    { id: 'medium', label: 'Medium Risk', count: revenueAlerts.filter(a => a.riskScore >= 50 && a.riskScore < 70).length },
    { id: 'low', label: 'Low Risk', count: revenueAlerts.filter(a => a.riskScore < 50).length },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Revenue Assurance" 
        subtitle="Valuation & PAAR Anomaly Detection Workbench"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <StatCard
            title="Revenue at Risk"
            value={`AED ${metrics.revenueAtRisk.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
            subtitle="Estimated leakage exposure"
            icon={DollarSign}
            variant="danger"
            trend={{ value: 12, label: "vs last week" }}
          />
          <StatCard
            title="Total Alerts"
            value={metrics.totalAlerts.toLocaleString()}
            subtitle="Requiring review"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatCard
            title="Undervaluation"
            value={metrics.undervaluationAlerts.toLocaleString()}
            subtitle=">20% deviation"
            icon={TrendingDown}
            variant="danger"
          />
          <StatCard
            title="High-Risk Alerts"
            value={metrics.highRiskAlerts.toLocaleString()}
            subtitle="Critical attention needed"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="Total Duty"
            value={`AED ${(metrics.totalDuty / 1000).toFixed(1)}K`}
            subtitle="Collectable revenue"
            icon={FileCheck}
            variant="success"
          />
          <StatCard
            title="Adjustments"
            value={metrics.confirmedAdjustments.toLocaleString()}
            subtitle="This month"
            icon={TrendingUp}
            variant="success"
            trend={{ value: 8, label: "vs last month" }}
          />
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search alerts by order ID, HS code, importer, or PAAR reference..." 
                className="pl-9" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={exportToCSV}>
              <Download className="h-4 w-4" />
              Export All Alerts
            </Button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="text-sm font-medium mr-2">Status:</div>
          {statusFilters.map((filter) => (
            <Button
              key={filter.id || 'all-status'}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="gap-2"
            >
              {filter.label}
              <Badge variant={activeFilter === filter.id ? "secondary" : "outline"}>
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Risk Level Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="text-sm font-medium mr-2">Risk Level:</div>
          {riskFilters.map((filter) => (
            <Button
              key={filter.id || 'all-risk'}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                // Implement risk filter logic
                let filtered = revenueAlerts;
                if (filter.id === 'high') {
                  filtered = filtered.filter(a => a.riskScore >= 70);
                } else if (filter.id === 'medium') {
                  filtered = filtered.filter(a => a.riskScore >= 50 && a.riskScore < 70);
                } else if (filter.id === 'low') {
                  filtered = filtered.filter(a => a.riskScore < 50);
                }
                setFilteredAlerts(filtered);
                setCurrentPage(1);
              }}
              className="gap-2"
            >
              {filter.label}
              <Badge variant={activeFilter === filter.id ? "secondary" : "outline"}>
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {processedData.length === 0 ? (
          <Card className="text-center p-12">
            <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
            <p className="text-muted-foreground mb-6">
              Upload and process CSV data in Parcel Intelligence to enable revenue assurance analytics
            </p>
            <Button onClick={() => window.location.href = '#/parcel-intel'}>
              Go to Parcel Intelligence
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Alert List */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Valuation Anomalies</h2>
                <span className="text-sm text-muted-foreground">
                  {filteredAlerts.length.toLocaleString()} alerts
                </span>
              </div>
              
              <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
                {paginatedAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="glass-card rounded-lg p-4 cursor-pointer transition-all border border-border/50 hover:border-blue-300"
                  >
                    <div className="flex items-start gap-3">
                      <RiskScoreRing score={alert.riskScore} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">{alert.orderId}</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewDetails(alert);
                              }}
                              title="View Details"
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReviewAlert(alert);
                              }}
                              title="Review Alert"
                            >
                              <AlertCircle className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          HS {alert.hsCode} • {alert.importerName}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <DollarSign className="h-3 w-3" />
                          AED {alert.declaredValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                          <span className="mx-1">•</span>
                          <AlertTriangle className="h-3 w-3 text-amber-500" />
                          -{alert.deviation}%
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={alert.status === 'pending' ? 'destructive' : 
                                         alert.status === 'reviewed' ? 'warning' : 
                                         alert.status === 'adjusted' ? 'success' : 'outline'} 
                                 className="text-xs">
                            {alert.status.toUpperCase()}
                          </Badge>
                          {alert.splitShipment && (
                            <Badge variant="outline" className="text-xs bg-amber-50">
                              Split
                            </Badge>
                          )}
                          {alert.highRisk && (
                            <Badge variant="outline" className="text-xs bg-red-50">
                              High Risk
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filteredAlerts.length > itemsPerPage && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredAlerts.length)} of {filteredAlerts.length.toLocaleString()} alerts
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">{selected.orderId}</h2>
                      <p className="text-sm text-muted-foreground">{selected.paarReference}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <RiskScoreRing score={selected.riskScore} size="md" label="Revenue Risk" />
                    </div>
                  </div>

                  {/* Anomaly Details */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <Calculator className="h-4 w-4" />
                        Price Analysis
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Declared Value</span>
                          <span className="font-medium">AED {selected.declaredValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Market Value</span>
                          <span className="font-medium">AED {selected.marketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Deviation</span>
                          <span className="font-medium text-destructive">-{selected.deviation}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duty Payable</span>
                          <span className="font-medium text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        {selected.originalParcelData && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">HS Confidence</span>
                            <span className="font-medium">{(selected.originalParcelData.hs_confidence_score * 100).toFixed(1)}%</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Risk Profile
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Status</span>
                          <Badge variant={selected.status === 'pending' ? 'destructive' : 
                                         selected.status === 'reviewed' ? 'warning' : 
                                         selected.status === 'adjusted' ? 'success' : 'outline'}>
                            {selected.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Amendments</span>
                          <span className="font-medium text-warning">{selected.amendments} in 30 days</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Split Shipment</span>
                          <span className="font-medium">{selected.splitShipment ? 'YES' : 'NO'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">High-Risk Goods</span>
                          <span className="font-medium">{selected.highRisk ? 'YES' : 'NO'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Risk Drivers</span>
                          <span className="font-medium">{selected.riskDrivers.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Drivers */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Risk Drivers ({selected.riskDrivers.length})
                    </h3>
                    <div className="space-y-2">
                      {selected.riskDrivers.map((driver, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm bg-red-100 text-red-700 p-2 rounded-lg">
                          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                          {driver}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <Button 
                      onClick={() => handleAlertAction('query')}
                    >
                      Generate Query Template
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleAlertAction('evidence')}
                    >
                      Request Evidence
                    </Button>
                    <Button
                      variant="outline"
                      className="ml-auto"
                      onClick={() => {
                        setViewMode('review');
                        setIsDialogOpen(true);
                      }}
                    >
                      Detailed Review
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                  <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Select an alert</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose an item from the list to view valuation analysis and recommended actions
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Detailed Alert Modal */}
      {selected && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {viewMode === 'review' ? 'Revenue Alert Review' : 'Revenue Alert Details'}
              </DialogTitle>
              <DialogDescription>
                {viewMode === 'review' 
                  ? `Complete analysis of revenue alert ${selected.orderId} - Take action below`
                  : `Complete information for revenue alert ${selected.orderId}`
                }
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="font-semibold">Order ID</Label>
                <div className="text-sm font-mono bg-gray-50 p-2 rounded">{selected.orderId}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">PAAR Reference</Label>
                <div className="text-sm font-mono">{selected.paarReference}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Importer Name</Label>
                <div className="text-sm">{selected.importerName}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Product Title</Label>
                <div className="text-sm">{selected.productTitle}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">HS Code</Label>
                <div className="text-sm font-mono">{selected.hsCode}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Status</Label>
                <div className="text-sm">
                  <Badge variant={selected.status === 'pending' ? 'destructive' : 
                                 selected.status === 'reviewed' ? 'warning' : 
                                 selected.status === 'adjusted' ? 'success' : 'outline'}>
                    {selected.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Risk Score</Label>
                <div className="text-sm font-medium">{selected.riskScore}/100</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Declared Value</Label>
                <div className="text-sm font-medium">AED {selected.declaredValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Market Value</Label>
                <div className="text-sm font-medium">AED {selected.marketValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Deviation</Label>
                <div className="text-sm font-medium text-red-600">-{selected.deviation}%</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Duty Payable</Label>
                <div className="text-sm font-medium text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Split Shipment</Label>
                <div className="text-sm font-medium">{selected.splitShipment ? 'YES' : 'NO'}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">High-Risk Goods</Label>
                <div className="text-sm font-medium">{selected.highRisk ? 'YES' : 'NO'}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Amendments</Label>
                <div className="text-sm font-medium">{selected.amendments}</div>
              </div>
              
              {/* Original Parcel Data */}
              {selected.originalParcelData && (
                <div className="space-y-2 col-span-2">
                  <Label className="font-semibold">Original Parcel Intelligence Data</Label>
                  <div className="text-sm space-y-1 bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">HS Confidence:</span>
                      <span>{(selected.originalParcelData.hs_confidence_score * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Risk Lane:</span>
                      <span>{selected.originalParcelData.assigned_risk_lane}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Clearance Recommendation:</span>
                      <span>{selected.originalParcelData.clearance_recommendation?.replace('_', ' ') || 'Unknown'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Risk Categories:</span>
                      <span>{selected.originalParcelData.risk_categories?.join(', ') || 'None'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommended Actions */}
              <div className="space-y-2 col-span-2">
                <Label className="font-semibold">Recommended Actions</Label>
                <div className="space-y-2">
                  {selected.recommendedActions.map((action, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">{action}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {viewMode === 'review' ? (
              <DialogFooter className="flex gap-2 pt-4 border-t">
                <Button
                  variant="destructive"
                  onClick={() => handleAlertAction('reject')}
                  className="gap-2"
                >
                  <XSquare className="h-4 w-4" />
                  Reject Alert
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAlertAction('escalate')}
                  className="gap-2 text-yellow-700 border-yellow-400 hover:bg-yellow-50"
                >
                  <AlertCircle className="h-4 w-4" />
                  Escalate
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleAlertAction('approve')}
                  className="gap-2 bg-green-600 hover:bg-green-700"
                >
                  <CheckSquare className="h-4 w-4" />
                  Approve
                </Button>
              </DialogFooter>
            ) : (
              <DialogFooter className="pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}