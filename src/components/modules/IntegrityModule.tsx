// // // import { useState } from "react";
// // // import { mockIntegrityCases, mockConsignments } from "@/data/mockData";
// // // import { RiskScoreRing } from "@/components/RiskScoreRing";
// // // import { RiskBadge } from "@/components/RiskBadge";
// // // import { StatCard } from "@/components/StatCard";
// // // import { DashboardHeader } from "@/components/DashboardHeader";
// // // import { UserCheck, AlertTriangle, Clock, Activity, User, Calendar, FileText, ChevronRight } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { cn } from "@/lib/utils";

// // // export function IntegrityModule() {
// // //   const [selectedCase, setSelectedCase] = useState<string | null>(null);
  
// // //   const selected = mockIntegrityCases.find(c => c.id === selectedCase);

// // //   return (
// // //     <div className="flex flex-col h-full">
// // //       <DashboardHeader 
// // //         title="Integrity Analytics" 
// // //         subtitle="Insider Threat & Behavior Pattern Detection"
// // //       />
      
// // //       <div className="flex-1 p-6 overflow-auto">
// // //         {/* Stats Row */}
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// // //           <StatCard
// // //             title="Active Cases"
// // //             value="5"
// // //             subtitle="Under investigation"
// // //             icon={UserCheck}
// // //             variant="warning"
// // //           />
// // //           <StatCard
// // //             title="Override Anomalies"
// // //             value="23"
// // //             subtitle="This week"
// // //             icon={AlertTriangle}
// // //             variant="danger"
// // //           />
// // //           <StatCard
// // //             title="Odd-Hour Activity"
// // //             value="8"
// // //             subtitle="Flagged sessions"
// // //             icon={Clock}
// // //             variant="warning"
// // //           />
// // //           <StatCard
// // //             title="Baseline Deviation"
// // //             value="12%"
// // //             subtitle="Above normal"
// // //             icon={Activity}
// // //           />
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // //           {/* Cases List */}
// // //           <div className="lg:col-span-1 space-y-4">
// // //             <h2 className="font-semibold">Integrity Cases</h2>
            
// // //             <div className="space-y-3">
// // //               {mockIntegrityCases.map((integrityCase) => (
// // //                 <div
// // //                   key={integrityCase.id}
// // //                   onClick={() => setSelectedCase(integrityCase.id)}
// // //                   className={cn(
// // //                     "glass-card rounded-lg p-4 cursor-pointer transition-all border",
// // //                     selectedCase === integrityCase.id 
// // //                       ? "border-module-integrity bg-module-integrity/5" 
// // //                       : "border-border/50 hover:border-module-integrity/50"
// // //                   )}
// // //                 >
// // //                   <div className="flex items-start gap-3">
// // //                     <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
// // //                       <User className="h-5 w-5 text-warning" />
// // //                     </div>
// // //                     <div className="flex-1 min-w-0">
// // //                       <div className="flex items-center gap-2 mb-1">
// // //                         <p className="font-medium text-sm">{integrityCase.userName}</p>
// // //                         <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : 'medium'}>
// // //                           {integrityCase.riskScore}
// // //                         </RiskBadge>
// // //                       </div>
// // //                       <p className="text-xs text-muted-foreground">
// // //                         {integrityCase.role} • {integrityCase.unit}
// // //                       </p>
// // //                       <div className="flex items-center gap-2 mt-2">
// // //                         <span className={cn(
// // //                           "text-xs px-2 py-0.5 rounded-full",
// // //                           integrityCase.status === 'investigating' && "bg-warning/20 text-warning",
// // //                           integrityCase.status === 'open' && "bg-info/20 text-info",
// // //                           integrityCase.status === 'escalated' && "bg-destructive/20 text-destructive",
// // //                           integrityCase.status === 'closed' && "bg-success/20 text-success"
// // //                         )}>
// // //                           {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
// // //                         </span>
// // //                         <span className="text-xs text-muted-foreground">
// // //                           {integrityCase.anomalies.length} anomalies
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                     <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Detail Panel */}
// // //           <div className="lg:col-span-2">
// // //             {selected ? (
// // //               <div className="glass-card rounded-xl p-6 border border-border/50 module-integrity">
// // //                 <div className="flex items-start justify-between mb-6">
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
// // //                       <User className="h-7 w-7 text-warning" />
// // //                     </div>
// // //                     <div>
// // //                       <h2 className="text-xl font-bold">{selected.userName}</h2>
// // //                       <p className="text-sm text-muted-foreground">{selected.role}</p>
// // //                       <p className="text-xs text-muted-foreground">{selected.unit} • {selected.userId}</p>
// // //                     </div>
// // //                   </div>
// // //                   <RiskScoreRing score={selected.riskScore} size="md" label="Integrity Risk" />
// // //                 </div>

// // //                 {/* Anomalies */}
// // //                 <div className="mb-6">
// // //                   <h3 className="text-sm font-medium mb-3">Detected Anomalies</h3>
// // //                   <div className="space-y-2">
// // //                     {selected.anomalies.map((anomaly, i) => (
// // //                       <div key={i} className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
// // //                         <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
// // //                         <span className="text-sm">{anomaly}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* Affected Declarations */}
// // //                 <div className="mb-6">
// // //                   <h3 className="text-sm font-medium mb-3">Affected Declarations</h3>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {selected.affectedDeclarations.map((dec) => (
// // //                       <span key={dec} className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-mono">
// // //                         {dec}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* Activity Timeline */}
// // //                 <div className="mb-6">
// // //                   <h3 className="text-sm font-medium mb-3">Activity Timeline</h3>
// // //                   <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
// // //                     {selected.timeline.length > 0 ? (
// // //                       selected.timeline.map((entry) => (
// // //                         <div
// // //                           key={entry.id}
// // //                           className={cn(
// // //                             "flex items-start gap-3 p-3 rounded-lg",
// // //                             entry.suspicious ? "bg-destructive/10 border border-destructive/20" : "bg-muted/30"
// // //                           )}
// // //                         >
// // //                           <div className={cn(
// // //                             "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
// // //                             entry.suspicious ? "bg-destructive/20" : "bg-muted"
// // //                           )}>
// // //                             {entry.action === 'OVERRIDE' ? (
// // //                               <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-destructive")} />
// // //                             ) : (
// // //                               <FileText className="h-4 w-4 text-muted-foreground" />
// // //                             )}
// // //                           </div>
// // //                           <div className="flex-1 min-w-0">
// // //                             <div className="flex items-center gap-2">
// // //                               <span className="font-medium text-sm">{entry.action}</span>
// // //                               {entry.suspicious && (
// // //                                 <RiskBadge severity="high">Suspicious</RiskBadge>
// // //                               )}
// // //                             </div>
// // //                             <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
// // //                             <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
// // //                               <span className="flex items-center gap-1">
// // //                                 <Calendar className="h-3 w-3" />
// // //                                 {new Date(entry.timestamp).toLocaleString('en-NG')}
// // //                               </span>
// // //                               <span>{entry.ipAddress}</span>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       ))
// // //                     ) : (
// // //                       <p className="text-sm text-muted-foreground text-center py-4">
// // //                         No timeline entries available
// // //                       </p>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 {/* Actions */}
// // //                 <div className="flex items-center gap-3">
// // //                   <Button className="flex-1 bg-warning hover:bg-warning/90 text-warning-foreground">
// // //                     Escalate to Supervisor
// // //                   </Button>
// // //                   <Button variant="outline">Export Case Pack</Button>
// // //                   <Button variant="outline">Add Note</Button>
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
// // //                 <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
// // //                 <h3 className="font-medium mb-2">Select a case</h3>
// // //                 <p className="text-sm text-muted-foreground">
// // //                   Choose an integrity case from the list to view detailed analysis and timeline
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from "react";
// // import { useSharedData } from "@/contexts/SharedDataContext";
// // import { RiskScoreRing } from "@/components/RiskScoreRing";
// // import { RiskBadge } from "@/components/RiskBadge";
// // import { StatCard } from "@/components/StatCard";
// // import { DashboardHeader } from "@/components/DashboardHeader";
// // import { 
// //   UserCheck, 
// //   AlertTriangle, 
// //   Clock, 
// //   Activity, 
// //   User, 
// //   Calendar, 
// //   FileText, 
// //   ChevronRight,
// //   DollarSign,
// //   Shield,
// //   Package,
// //   Eye
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { cn } from "@/lib/utils";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { toast } from "sonner";

// // interface IntegrityCase {
// //   id: string;
// //   userName: string;
// //   userId: string;
// //   role: string;
// //   unit: string;
// //   riskScore: number;
// //   status: 'investigating' | 'open' | 'escalated' | 'closed';
// //   anomalies: string[];
// //   affectedDeclarations: string[];
// //   timeline: {
// //     id: string;
// //     action: string;
// //     details: string;
// //     timestamp: string;
// //     ipAddress: string;
// //     suspicious: boolean;
// //   }[];
// //   totalValue: number;
// //   parcelCount: number;
// // }

// // export function IntegrityModule() {
// //   const { processedData } = useSharedData();
// //   const [selectedCase, setSelectedCase] = useState<string | null>(null);
// //   const [integrityCases, setIntegrityCases] = useState<IntegrityCase[]>([]);
  
// //   // Generate integrity cases from processed data
// //   useEffect(() => {
// //     if (processedData.length === 0) {
// //       setIntegrityCases([]);
// //       return;
// //     }

// //     // Cast processedData to any to avoid TypeScript errors temporarily
// //     const parcels = processedData as any[];
    
// //     // Group by importer to find suspicious patterns
// //     const importerGroups = parcels.reduce((acc, parcel) => {
// //       const importer = parcel.importer_name || "Unknown Importer";
// //       if (!acc[importer]) {
// //         acc[importer] = {
// //           parcels: [],
// //           totalValue: 0,
// //           riskCount: 0,
// //           splitCount: 0,
// //           highRiskItems: 0,
// //           dutyPayable: 0
// //         };
// //       }
// //       acc[importer].parcels.push(parcel);
// //       acc[importer].totalValue += parcel.item_price_aed || 0;
// //       acc[importer].dutyPayable += parcel.duty_payable_aed || 0;
// //       if (parcel.is_high_risk) acc[importer].highRiskItems++;
// //       if (parcel.is_split_shipment) acc[importer].splitCount++;
// //       if (parcel.duty_applicable) acc[importer].riskCount++;
// //       return acc;
// //     }, {} as Record<string, any>);

// //     // Convert to integrity cases
// //     const cases: IntegrityCase[] = Object.entries(importerGroups)
// //       .filter(([_, data]: [string, any]) => 
// //         data.splitCount > 0 || 
// //         data.highRiskItems > 0 || 
// //         data.riskCount > 3 ||
// //         data.totalValue > 5000
// //       )
// //       .map(([importer, data]: [string, any], index) => {
// //         const riskScore = Math.min(95, 
// //           30 + 
// //           (data.splitCount * 15) + 
// //           (data.highRiskItems * 20) + 
// //           (Math.min(data.riskCount, 5) * 5)
// //         );

// //         const anomalies = [];
// //         if (data.splitCount > 0) anomalies.push(`Split shipment detected (${data.splitCount} parcels)`);
// //         if (data.highRiskItems > 0) anomalies.push(`High-risk items found (${data.highRiskItems} items)`);
// //         if (data.totalValue > 5000) anomalies.push(`High total value (AED ${data.totalValue.toFixed(2)})`);
// //         if (data.riskCount > 3) anomalies.push(`Multiple duty-applicable parcels (${data.riskCount})`);

// //         // Generate timeline from parcels
// //         const timeline = data.parcels.slice(0, 5).map((parcel: any, idx: number) => ({
// //           id: `${importer}-timeline-${idx}`,
// //           action: parcel.is_split_shipment ? 'SPLIT_SHIPMENT' : 'DECLARATION',
// //           details: `${parcel.product_title || 'Unknown Product'} - AED ${(parcel.item_price_aed || 0).toFixed(2)}${parcel.is_high_risk ? ' (HIGH RISK)' : ''}`,
// //           timestamp: parcel.timestamp || new Date().toISOString(),
// //           ipAddress: `Order: ${parcel.order_id || `ORD-${idx + 1}`}`,
// //           suspicious: parcel.is_split_shipment || parcel.is_high_risk
// //         }));

// //         return {
// //           id: `case-${index + 1}`,
// //           userName: importer,
// //           userId: `IMP-${importer.substring(0, 3).toUpperCase()}-${index + 1}`,
// //           role: 'E-Commerce Importer',
// //           unit: 'Cross-Border Trade',
// //           riskScore,
// //           status: riskScore > 70 ? 'investigating' : riskScore > 50 ? 'open' : 'escalated',
// //           anomalies,
// //           affectedDeclarations: data.parcels.slice(0, 3).map((p: any) => p.order_id || 'Unknown Order'),
// //           timeline,
// //           totalValue: data.totalValue,
// //           parcelCount: data.parcels.length
// //         };
// //       })
// //       .slice(0, 5); // Limit to 5 cases

// //     setIntegrityCases(cases);
// //     if (cases.length > 0 && !selectedCase) {
// //       setSelectedCase(cases[0].id);
// //     }

// //   }, [processedData]);

// //   const selected = integrityCases.find(c => c.id === selectedCase);

// //   // Calculate stats from processed data
// //   const stats = {
// //     activeCases: integrityCases.length,
// //     overrideAnomalies: (processedData as any[]).filter(p => p.is_split_shipment).length,
// //     oddHourActivity: Math.floor(processedData.length * 0.08), // 8% of data
// //     baselineDeviation: processedData.length > 0 
// //       ? Math.round(((processedData as any[]).filter(p => p.is_high_risk || p.is_split_shipment).length / processedData.length) * 100)
// //       : 0,
// //     totalDuty: (processedData as any[]).reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0),
// //     highRiskCount: (processedData as any[]).filter(p => p.is_high_risk).length
// //   };

// //   return (
// //     <div className="flex flex-col h-full">
// //       <DashboardHeader 
// //         title="Integrity Analytics" 
// //         subtitle="Insider Threat & Behavior Pattern Detection"
// //       />
      
// //       <div className="flex-1 p-6 overflow-auto">
// //         {/* Stats Row - Using Real Data */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// //           <StatCard
// //             title="Active Cases"
// //             value={stats.activeCases.toString()}
// //             subtitle={`From ${processedData.length} parcels`}
// //             icon={UserCheck}
// //             variant="warning"
// //           />
// //           <StatCard
// //             title="Split Shipments"
// //             value={stats.overrideAnomalies.toString()}
// //             subtitle="Potential evasion detected"
// //             icon={AlertTriangle}
// //             variant="danger"
// //           />
// //           <StatCard
// //             title="High-Risk Items"
// //             value={stats.highRiskCount.toString()}
// //             subtitle="Requiring attention"
// //             icon={Clock}
// //             variant="warning"
// //           />
// //           <StatCard
// //             title="Risk Deviation"
// //             value={`${stats.baselineDeviation}%`}
// //             subtitle="Above normal threshold"
// //             icon={Activity}
// //           />
// //         </div>

// //         {processedData.length === 0 ? (
// //           <Card className="text-center p-12">
// //             <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
// //             <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
// //             <p className="text-muted-foreground mb-6">
// //               Upload and process CSV data in Parcel Intelligence to enable integrity analytics
// //             </p>
// //             <Button onClick={() => window.location.href = '#/parcel-intel'}>
// //               Go to Parcel Intelligence
// //             </Button>
// //           </Card>
// //         ) : (
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //             {/* Cases List */}
// //             <div className="lg:col-span-1 space-y-4">
// //               <div className="flex items-center justify-between">
// //                 <h2 className="font-semibold">Integrity Cases</h2>
// //                 <Badge variant="outline" className="bg-blue-50">
// //                   {integrityCases.length} cases
// //                 </Badge>
// //               </div>
              
// //               <div className="space-y-3">
// //                 {integrityCases.map((integrityCase) => (
// //                   <div
// //                     key={integrityCase.id}
// //                     onClick={() => setSelectedCase(integrityCase.id)}
// //                     className={cn(
// //                       "glass-card rounded-lg p-4 cursor-pointer transition-all border",
// //                       selectedCase === integrityCase.id 
// //                         ? "border-blue-500 bg-blue-50/50" 
// //                         : "border-border/50 hover:border-blue-300"
// //                     )}
// //                   >
// //                     <div className="flex items-start gap-3">
// //                       <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
// //                         <User className="h-5 w-5 text-warning" />
// //                       </div>
// //                       <div className="flex-1 min-w-0">
// //                         <div className="flex items-center gap-2 mb-1">
// //                           <p className="font-medium text-sm">{integrityCase.userName}</p>
// //                           <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : 'medium'}>
// //                             {integrityCase.riskScore}
// //                           </RiskBadge>
// //                         </div>
// //                         <p className="text-xs text-muted-foreground">
// //                           {integrityCase.role} • {integrityCase.unit}
// //                         </p>
// //                         <div className="flex items-center gap-2 mt-2">
// //                           <span className={cn(
// //                             "text-xs px-2 py-0.5 rounded-full",
// //                             integrityCase.status === 'investigating' && "bg-warning/20 text-warning",
// //                             integrityCase.status === 'open' && "bg-blue-100 text-blue-700",
// //                             integrityCase.status === 'escalated' && "bg-red-100 text-red-700",
// //                             integrityCase.status === 'closed' && "bg-green-100 text-green-700"
// //                           )}>
// //                             {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
// //                           </span>
// //                           <span className="text-xs text-muted-foreground">
// //                             {integrityCase.anomalies.length} anomalies
// //                           </span>
// //                         </div>
// //                       </div>
// //                       <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Summary Card */}
// //               <Card className="mt-4">
// //                 <CardHeader className="pb-3">
// //                   <CardTitle className="text-sm font-medium">Data Summary</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="space-y-2">
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-muted-foreground">Total Parcels:</span>
// //                     <span className="font-medium">{processedData.length}</span>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-muted-foreground">High-Risk:</span>
// //                     <Badge variant="destructive" className="text-xs">
// //                       {stats.highRiskCount}
// //                     </Badge>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-muted-foreground">Split Shipments:</span>
// //                     <Badge variant="outline" className="text-xs bg-amber-50">
// //                       {stats.overrideAnomalies}
// //                     </Badge>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-muted-foreground">Duty Payable:</span>
// //                     <span className="font-medium">
// //                       AED {stats.totalDuty.toFixed(2)}
// //                     </span>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Detail Panel */}
// //             <div className="lg:col-span-2">
// //               {selected ? (
// //                 <div className="glass-card rounded-xl p-6 border border-border/50">
// //                   <div className="flex items-start justify-between mb-6">
// //                     <div className="flex items-center gap-4">
// //                       <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
// //                         <User className="h-7 w-7 text-warning" />
// //                       </div>
// //                       <div>
// //                         <h2 className="text-xl font-bold">{selected.userName}</h2>
// //                         <p className="text-sm text-muted-foreground">{selected.role}</p>
// //                         <p className="text-xs text-muted-foreground">{selected.unit} • {selected.userId}</p>
// //                       </div>
// //                     </div>
// //                     <RiskScoreRing score={selected.riskScore} size="md" label="Integrity Risk" />
// //                   </div>

// //                   {/* Anomalies */}
// //                   <div className="mb-6">
// //                     <h3 className="text-sm font-medium mb-3">Detected Anomalies</h3>
// //                     <div className="space-y-2">
// //                       {selected.anomalies.map((anomaly, i) => (
// //                         <div key={i} className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
// //                           <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
// //                           <span className="text-sm">{anomaly}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Affected Declarations */}
// //                   <div className="mb-6">
// //                     <h3 className="text-sm font-medium mb-3">Affected Orders</h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {selected.affectedDeclarations.map((dec) => (
// //                         <span key={dec} className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-mono">
// //                           {dec}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Activity Timeline */}
// //                   <div className="mb-6">
// //                     <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
// //                     <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
// //                       {selected.timeline.length > 0 ? (
// //                         selected.timeline.map((entry) => (
// //                           <div
// //                             key={entry.id}
// //                             className={cn(
// //                               "flex items-start gap-3 p-3 rounded-lg",
// //                               entry.suspicious ? "bg-red-50 border border-red-200" : "bg-muted/30"
// //                             )}
// //                           >
// //                             <div className={cn(
// //                               "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
// //                               entry.suspicious ? "bg-red-100" : "bg-muted"
// //                             )}>
// //                               {entry.action === 'SPLIT_SHIPMENT' ? (
// //                                 <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-red-600")} />
// //                               ) : (
// //                                 <FileText className="h-4 w-4 text-muted-foreground" />
// //                               )}
// //                             </div>
// //                             <div className="flex-1 min-w-0">
// //                               <div className="flex items-center gap-2">
// //                                 <span className="font-medium text-sm">{entry.action.replace('_', ' ')}</span>
// //                                 {entry.suspicious && (
// //                                   <Badge variant="destructive" className="text-xs">Suspicious</Badge>
// //                                 )}
// //                               </div>
// //                               <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
// //                               <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
// //                                 <span className="flex items-center gap-1">
// //                                   <Calendar className="h-3 w-3" />
// //                                   {new Date(entry.timestamp).toLocaleDateString()}
// //                                 </span>
// //                                 <span>{entry.ipAddress}</span>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         ))
// //                       ) : (
// //                         <p className="text-sm text-muted-foreground text-center py-4">
// //                           No activity data available
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {/* Actions */}
// //                   <div className="flex items-center gap-3">
// //                     <Button 
// //                       className="flex-1 bg-warning hover:bg-warning/90 text-warning-foreground"
// //                       onClick={() => {
// //                         toast.warning("Case escalated", {
// //                           description: `${selected.userName} sent to supervisor for review`,
// //                         });
// //                       }}
// //                     >
// //                       Escalate to Supervisor
// //                     </Button>
// //                     <Button 
// //                       variant="outline"
// //                       onClick={() => {
// //                         toast.success("Case exported", {
// //                           description: `Integrity case for ${selected.userName} exported`,
// //                         });
// //                       }}
// //                     >
// //                       Export Case
// //                     </Button>
// //                     <Button 
// //                       variant="outline"
// //                       onClick={() => {
// //                         toast.info("Note added", {
// //                           description: `Note added to ${selected.userName} case`,
// //                         });
// //                       }}
// //                     >
// //                       Add Note
// //                     </Button>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
// //                   <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
// //                   <h3 className="font-medium mb-2">Select a case</h3>
// //                   <p className="text-sm text-muted-foreground">
// //                     Choose an integrity case from the list to view detailed analysis and timeline
// //                   </p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { useSharedData } from "@/contexts/SharedDataContext";
// import { RiskScoreRing } from "@/components/RiskScoreRing";
// import { RiskBadge } from "@/components/RiskBadge";
// import { StatCard } from "@/components/StatCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { 
//   UserCheck, 
//   AlertTriangle, 
//   Clock, 
//   Activity, 
//   User, 
//   Calendar, 
//   FileText, 
//   ChevronRight,
//   DollarSign,
//   Shield,
//   Package,
//   Eye,
//   Search,
//   Filter,
//   Download,
//   ChevronLeft,
//   ChevronRight as ChevronRightIcon,
//   AlertCircle,
//   CheckSquare,
//   XSquare,
//   MoreHorizontal
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { toast } from "sonner";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// interface IntegrityCase {
//   id: string;
//   userName: string;
//   userId: string;
//   role: string;
//   unit: string;
//   riskScore: number;
//   status: 'investigating' | 'open' | 'escalated' | 'closed';
//   anomalies: string[];
//   affectedDeclarations: string[];
//   timeline: {
//     id: string;
//     action: string;
//     details: string;
//     timestamp: string;
//     ipAddress: string;
//     suspicious: boolean;
//   }[];
//   totalValue: number;
//   parcelCount: number;
//   splitCount: number;
//   highRiskCount: number;
//   dutyPayable: number;
//   email?: string;
//   registrationDate?: string;
//   lastActivity?: string;
//   originalData: any; // Store the original grouped data
// }

// export function IntegrityModule() {
//   const { processedData } = useSharedData();
//   const [selectedCase, setSelectedCase] = useState<string | null>(null);
//   const [integrityCases, setIntegrityCases] = useState<IntegrityCase[]>([]);
//   const [filteredCases, setFilteredCases] = useState<IntegrityCase[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [viewMode, setViewMode] = useState<'view' | 'review'>('view');
//   const [activeStatus, setActiveStatus] = useState<string | null>(null);
//   const itemsPerPage = 10;
  
//   // Generate integrity cases from processed data
//   useEffect(() => {
//     if (processedData.length === 0) {
//       setIntegrityCases([]);
//       setFilteredCases([]);
//       return;
//     }

//     // Cast processedData to any to avoid TypeScript errors temporarily
//     const parcels = processedData as any[];
    
//     // Group by importer to find suspicious patterns
//     const importerGroups = parcels.reduce((acc, parcel) => {
//       const importer = parcel.importer_name || "Unknown Importer";
//       if (!acc[importer]) {
//         acc[importer] = {
//           parcels: [],
//           totalValue: 0,
//           riskCount: 0,
//           splitCount: 0,
//           highRiskItems: 0,
//           dutyPayable: 0,
//           timestamps: [],
//           orderIds: []
//         };
//       }
//       acc[importer].parcels.push(parcel);
//       acc[importer].totalValue += parcel.item_price_aed || 0;
//       acc[importer].dutyPayable += parcel.duty_payable_aed || 0;
//       if (parcel.is_high_risk) acc[importer].highRiskItems++;
//       if (parcel.is_split_shipment) acc[importer].splitCount++;
//       if (parcel.duty_applicable) acc[importer].riskCount++;
//       if (parcel.timestamp) acc[importer].timestamps.push(parcel.timestamp);
//       if (parcel.order_id) acc[importer].orderIds.push(parcel.order_id);
//       return acc;
//     }, {} as Record<string, any>);

//     // Convert to integrity cases - REMOVED THE .slice(0, 5) LIMIT
//     const cases: IntegrityCase[] = Object.entries(importerGroups)
//       .filter(([_, data]: [string, any]) => 
//         data.splitCount > 0 || 
//         data.highRiskItems > 0 || 
//         data.riskCount > 3 ||
//         data.totalValue > 5000 ||
//         data.parcels.length > 10 // Large number of parcels from same importer
//       )
//       .map(([importer, data]: [string, any], index) => {
//         // Calculate risk score based on multiple factors
//         const riskScore = Math.min(95, 
//           30 + 
//           (data.splitCount * 15) + 
//           (data.highRiskItems * 20) + 
//           (Math.min(data.riskCount, 5) * 5) +
//           (data.parcels.length > 20 ? 10 : 0) +
//           (data.totalValue > 10000 ? 10 : 0)
//         );

//         // Generate anomalies list
//         const anomalies = [];
//         if (data.splitCount > 0) anomalies.push(`${data.splitCount} split shipments detected`);
//         if (data.highRiskItems > 0) anomalies.push(`${data.highRiskItems} high-risk items found`);
//         if (data.totalValue > 5000) anomalies.push(`High total value: AED ${data.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
//         if (data.riskCount > 3) anomalies.push(`${data.riskCount} duty-applicable parcels`);
//         if (data.parcels.length > 20) anomalies.push(`Large volume: ${data.parcels.length} parcels`);
//         if (data.dutyPayable > 0) anomalies.push(`Duty payable: AED ${data.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

//         // Generate timeline from parcels
//         const timeline = data.parcels
//           .filter((parcel: any) => parcel.is_split_shipment || parcel.is_high_risk || parcel.duty_applicable)
//           .slice(0, 10)
//           .map((parcel: any, idx: number) => ({
//             id: `${importer}-timeline-${idx}`,
//             action: parcel.is_split_shipment ? 'SPLIT_SHIPMENT' : 
//                    parcel.is_high_risk ? 'HIGH_RISK' : 
//                    parcel.duty_applicable ? 'DUTY_APPLICABLE' : 'DECLARATION',
//             details: `${parcel.product_title || 'Unknown Product'} - AED ${(parcel.item_price_aed || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
//             timestamp: parcel.timestamp || new Date().toISOString(),
//             ipAddress: `Order: ${parcel.order_id || `ORD-${idx + 1}`}`,
//             suspicious: parcel.is_split_shipment || parcel.is_high_risk || parcel.duty_applicable
//           }));

//         // Determine status based on risk score and anomalies
//         let status: IntegrityCase['status'] = 'open';
//         if (riskScore > 70) status = 'investigating';
//         else if (riskScore > 60) status = 'escalated';
//         else if (riskScore < 30) status = 'closed';

//         // Get latest timestamp
//         const latestTimestamp = data.timestamps.length > 0 
//           ? Math.max(...data.timestamps.map((t: string) => new Date(t).getTime()))
//           : Date.now();

//         return {
//           id: `case-${importer.replace(/\s+/g, '-').toLowerCase()}-${index + 1}`,
//           userName: importer,
//           userId: `IMP-${importer.substring(0, 4).toUpperCase().replace(/\s/g, '')}-${index + 1}`,
//           role: 'E-Commerce Importer',
//           unit: 'Cross-Border Trade',
//           riskScore,
//           status,
//           anomalies,
//           affectedDeclarations: data.orderIds.slice(0, 10),
//           timeline,
//           totalValue: data.totalValue,
//           parcelCount: data.parcels.length,
//           splitCount: data.splitCount,
//           highRiskCount: data.highRiskItems,
//           dutyPayable: data.dutyPayable,
//           email: `${importer.replace(/\s+/g, '.').toLowerCase()}@example.com`,
//           registrationDate: new Date(Date.now() - Math.random() * 31536000000).toISOString().split('T')[0], // Random date within last year
//           lastActivity: new Date(latestTimestamp).toISOString(),
//           originalData: data // Store original data
//         };
//       });

//     // Sort by risk score (highest first)
//     cases.sort((a, b) => b.riskScore - a.riskScore);

//     setIntegrityCases(cases);
//     setFilteredCases(cases);
//     if (cases.length > 0 && !selectedCase) {
//       setSelectedCase(cases[0].id);
//     }

//   }, [processedData]);

//   // Filter cases based on search and status
//   useEffect(() => {
//     let filtered = integrityCases;
    
//     // Filter by status
//     if (activeStatus) {
//       filtered = filtered.filter(c => c.status === activeStatus);
//     }
    
//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(c => 
//         c.userName.toLowerCase().includes(query) ||
//         c.userId.toLowerCase().includes(query) ||
//         c.email?.toLowerCase().includes(query) ||
//         c.affectedDeclarations.some(declaration => declaration.toLowerCase().includes(query))
//       );
//     }
    
//     setFilteredCases(filtered);
//     setCurrentPage(1); // Reset to first page when filters change
//   }, [integrityCases, activeStatus, searchQuery]);

//   const selected = integrityCases.find(c => c.id === selectedCase);

//   // Pagination
//   const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedCases = filteredCases.slice(startIndex, endIndex);

//   // Calculate stats from processed data
//   const stats = {
//     totalCases: integrityCases.length,
//     activeCases: integrityCases.filter(c => c.status === 'investigating' || c.status === 'open').length,
//     escalatedCases: integrityCases.filter(c => c.status === 'escalated').length,
//     splitShipments: (processedData as any[]).filter(p => p.is_split_shipment).length,
//     highRiskCount: (processedData as any[]).filter(p => p.is_high_risk).length,
//     totalDuty: (processedData as any[]).reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0),
//     totalValue: (processedData as any[]).reduce((sum, p) => sum + (p.item_price_aed || 0), 0),
//     uniqueImporters: new Set((processedData as any[]).map(p => p.importer_name)).size
//   };

//   // Handle case actions
//   const handleCaseAction = (action: 'escalate' | 'export' | 'note' | 'approve' | 'reject' | 'close') => {
//     if (!selected) return;

//     let message = '';
//     switch (action) {
//       case 'escalate':
//         message = `Case for ${selected.userName} escalated to supervisor`;
//         toast.warning("Case escalated", { description: message });
//         break;
//       case 'export':
//         message = `Integrity case for ${selected.userName} exported`;
//         toast.success("Case exported", { description: message });
//         break;
//       case 'note':
//         message = `Note added to ${selected.userName} case`;
//         toast.info("Note added", { description: message });
//         break;
//       case 'approve':
//         message = `Case ${selected.userName} approved and cleared`;
//         toast.success("Approved!", { description: message });
//         break;
//       case 'reject':
//         message = `Case ${selected.userName} rejected - Requires investigation`;
//         toast.error("Rejected!", { description: message });
//         break;
//       case 'close':
//         message = `Case ${selected.userName} closed`;
//         toast.success("Case Closed", { description: message });
//         break;
//     }
//   };

//   const handleViewDetails = (caseItem: IntegrityCase) => {
//     setSelectedCase(caseItem.id);
//     setViewMode('view');
//     setIsDialogOpen(true);
//   };

//   const handleReviewCase = (caseItem: IntegrityCase) => {
//     setSelectedCase(caseItem.id);
//     setViewMode('review');
//     setIsDialogOpen(true);
//   };

//   // Export cases to CSV
//   const exportToCSV = () => {
//     if (integrityCases.length === 0) {
//       toast.error("No data to export");
//       return;
//     }

//     const headers = [
//       'Case ID',
//       'Importer Name',
//       'User ID',
//       'Risk Score',
//       'Status',
//       'Parcel Count',
//       'Total Value (AED)',
//       'Split Shipments',
//       'High-Risk Items',
//       'Duty Payable (AED)',
//       'Anomalies Count',
//       'Registration Date',
//       'Last Activity'
//     ];

//     const csvContent = [
//       headers.join(','),
//       ...integrityCases.map(c => [
//         c.id,
//         `"${c.userName}"`,
//         c.userId,
//         c.riskScore,
//         c.status,
//         c.parcelCount,
//         c.totalValue.toFixed(2),
//         c.splitCount,
//         c.highRiskCount,
//         c.dutyPayable.toFixed(2),
//         c.anomalies.length,
//         c.registrationDate,
//         c.lastActivity
//       ].join(','))
//     ].join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `integrity_cases_${new Date().toISOString().split('T')[0]}.csv`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
    
//     toast.success("Export Complete", {
//       description: `Exported ${integrityCases.length} integrity cases to CSV`,
//     });
//   };

//   // Status filter buttons
//   const statusFilters = [
//     { id: null, label: 'All', count: integrityCases.length },
//     { id: 'investigating', label: 'Investigating', count: integrityCases.filter(c => c.status === 'investigating').length },
//     { id: 'open', label: 'Open', count: integrityCases.filter(c => c.status === 'open').length },
//     { id: 'escalated', label: 'Escalated', count: integrityCases.filter(c => c.status === 'escalated').length },
//     { id: 'closed', label: 'Closed', count: integrityCases.filter(c => c.status === 'closed').length },
//   ];

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Integrity Analytics" 
//         subtitle="Insider Threat & Behavior Pattern Detection"
//       />
      
//       <div className="flex-1 p-6 overflow-auto">
//         {/* Stats Row - Using Real Data */}
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
//           <StatCard
//             title="Total Cases"
//             value={stats.totalCases.toLocaleString()}
//             subtitle={`From ${stats.uniqueImporters} unique importers`}
//             icon={UserCheck}
//             variant="warning"
//           />
//           <StatCard
//             title="Active Cases"
//             value={stats.activeCases.toLocaleString()}
//             subtitle="Requiring attention"
//             icon={AlertTriangle}
//             variant="danger"
//           />
//           <StatCard
//             title="Split Shipments"
//             value={stats.splitShipments.toLocaleString()}
//             subtitle="Potential evasion"
//             icon={Package}
//             variant="danger"
//           />
//           <StatCard
//             title="High-Risk Items"
//             value={stats.highRiskCount.toLocaleString()}
//             subtitle="Requiring verification"
//             icon={Clock}
//             variant="warning"
//           />
//           <StatCard
//             title="Total Value"
//             value={`AED ${(stats.totalValue / 1000).toFixed(1)}K`}
//             subtitle="At risk"
//             icon={DollarSign}
//           />
//           <StatCard
//             title="Duty At Stake"
//             value={`AED ${(stats.totalDuty / 1000).toFixed(1)}K`}
//             subtitle="Revenue protection"
//             icon={Shield}
//             variant="success"
//           />
//         </div>

//         {/* Search and Controls */}
//         <div className="flex flex-col md:flex-row gap-4 mb-6">
//           <div className="flex-1">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search cases by importer name, ID, email, or order..."
//                 className="pl-10"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" size="sm" className="gap-2" onClick={exportToCSV}>
//               <Download className="h-4 w-4" />
//               Export Cases
//             </Button>
//           </div>
//         </div>

//         {/* Status Filters */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {statusFilters.map((filter) => (
//             <Button
//               key={filter.id || 'all'}
//               variant={activeStatus === filter.id ? "default" : "outline"}
//               size="sm"
//               onClick={() => setActiveStatus(filter.id)}
//               className="gap-2"
//             >
//               {filter.label}
//               <Badge variant={activeStatus === filter.id ? "secondary" : "outline"}>
//                 {filter.count}
//               </Badge>
//             </Button>
//           ))}
//         </div>

//         {processedData.length === 0 ? (
//           <Card className="text-center p-12">
//             <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//             <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
//             <p className="text-muted-foreground mb-6">
//               Upload and process CSV data in Parcel Intelligence to enable integrity analytics
//             </p>
//             <Button onClick={() => window.location.href = '#/parcel-intel'}>
//               Go to Parcel Intelligence
//             </Button>
//           </Card>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Cases List */}
//             <div className="lg:col-span-1 space-y-4">
//               <div className="flex items-center justify-between">
//                 <h2 className="font-semibold">Integrity Cases</h2>
//                 <span className="text-sm text-muted-foreground">
//                   {filteredCases.length.toLocaleString()} cases
//                 </span>
//               </div>
              
//               <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
//                 {paginatedCases.map((integrityCase) => (
//                   <div
//                     key={integrityCase.id}
//                     className="glass-card rounded-lg p-4 cursor-pointer transition-all border border-border/50 hover:border-blue-300"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
//                         <User className="h-5 w-5 text-warning" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center justify-between mb-1">
//                           <p className="font-medium text-sm">{integrityCase.userName}</p>
//                           <div className="flex gap-2">
//                             <Button
//                               size="sm"
//                               variant="ghost"
//                               className="h-6 w-6 p-0"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleViewDetails(integrityCase);
//                               }}
//                               title="View Details"
//                             >
//                               <Eye className="h-3 w-3" />
//                             </Button>
//                             <Button
//                               size="sm"
//                               variant="ghost"
//                               className="h-6 w-6 p-0"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleReviewCase(integrityCase);
//                               }}
//                               title="Review Case"
//                             >
//                               <AlertCircle className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2 mb-1">
//                           <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : integrityCase.riskScore >= 50 ? 'medium' : 'low'}>
//                             {integrityCase.riskScore}
//                           </RiskBadge>
//                           <span className={cn(
//                             "text-xs px-2 py-0.5 rounded-full",
//                             integrityCase.status === 'investigating' && "bg-red-100 text-red-700",
//                             integrityCase.status === 'open' && "bg-yellow-100 text-yellow-700",
//                             integrityCase.status === 'escalated' && "bg-orange-100 text-orange-700",
//                             integrityCase.status === 'closed' && "bg-green-100 text-green-700"
//                           )}>
//                             {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
//                           </span>
//                         </div>
//                         <p className="text-xs text-muted-foreground">
//                           {integrityCase.role} • {integrityCase.parcelCount} parcels
//                         </p>
//                         <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
//                           <DollarSign className="h-3 w-3" />
//                           AED {integrityCase.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
//                           <span className="mx-1">•</span>
//                           <Package className="h-3 w-3" />
//                           {integrityCase.splitCount} splits
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               {filteredCases.length > itemsPerPage && (
//                 <div className="flex items-center justify-between mt-4 pt-4 border-t">
//                   <div className="text-sm text-muted-foreground">
//                     Showing {startIndex + 1}-{Math.min(endIndex, filteredCases.length)} of {filteredCases.length.toLocaleString()} cases
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                       disabled={currentPage === 1}
//                     >
//                       <ChevronLeft className="h-4 w-4" />
//                     </Button>
//                     <div className="text-sm text-muted-foreground">
//                       Page {currentPage} of {totalPages}
//                     </div>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                       disabled={currentPage === totalPages}
//                     >
//                       <ChevronRightIcon className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               )}

//               {/* Summary Card */}
//               <Card className="mt-6">
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-sm font-medium">Data Summary</CardTitle>
//                   <CardDescription>
//                     Overall integrity risk assessment
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">Unique Importers:</span>
//                     <span className="font-medium">{stats.uniqueImporters.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">Cases Created:</span>
//                     <span className="font-medium">{stats.totalCases.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">Avg Risk Score:</span>
//                     <span className="font-medium">
//                       {integrityCases.length > 0 
//                         ? Math.round(integrityCases.reduce((sum, c) => sum + c.riskScore, 0) / integrityCases.length)
//                         : 0
//                       }
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">Total Value at Risk:</span>
//                     <span className="font-medium text-red-600">
//                       AED {stats.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">Duty Protection:</span>
//                     <span className="font-medium text-green-600">
//                       AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Detail Panel */}
//             <div className="lg:col-span-2">
//               {selected ? (
//                 <div className="glass-card rounded-xl p-6 border border-border/50">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
//                         <User className="h-7 w-7 text-warning" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold">{selected.userName}</h2>
//                         <p className="text-sm text-muted-foreground">{selected.role}</p>
//                         <p className="text-xs text-muted-foreground">{selected.unit} • {selected.userId}</p>
//                       </div>
//                     </div>
//                     <RiskScoreRing score={selected.riskScore} size="md" label="Integrity Risk" />
//                   </div>

//                   {/* Case Summary */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                     <Card>
//                       <CardContent className="p-4">
//                         <p className="text-sm text-muted-foreground">Parcels</p>
//                         <p className="text-2xl font-bold">{selected.parcelCount}</p>
//                       </CardContent>
//                     </Card>
//                     <Card>
//                       <CardContent className="p-4">
//                         <p className="text-sm text-muted-foreground">Total Value</p>
//                         <p className="text-2xl font-bold text-red-600">AED {selected.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
//                       </CardContent>
//                     </Card>
//                     <Card>
//                       <CardContent className="p-4">
//                         <p className="text-sm text-muted-foreground">Split Shipments</p>
//                         <p className="text-2xl font-bold text-amber-600">{selected.splitCount}</p>
//                       </CardContent>
//                     </Card>
//                     <Card>
//                       <CardContent className="p-4">
//                         <p className="text-sm text-muted-foreground">Duty Payable</p>
//                         <p className="text-2xl font-bold text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Anomalies */}
//                   <div className="mb-6">
//                     <h3 className="text-sm font-medium mb-3">Detected Anomalies</h3>
//                     <div className="space-y-2">
//                       {selected.anomalies.map((anomaly, i) => (
//                         <div key={i} className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
//                           <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
//                           <span className="text-sm">{anomaly}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Affected Declarations */}
//                   <div className="mb-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-sm font-medium">Affected Orders</h3>
//                       <span className="text-xs text-muted-foreground">{selected.affectedDeclarations.length} orders</span>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                       {selected.affectedDeclarations.map((dec) => (
//                         <span key={dec} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-mono truncate">
//                           {dec}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex items-center gap-3 flex-wrap">
//                     <Button 
//                       className="bg-red-600 hover:bg-red-700"
//                       onClick={() => handleCaseAction('escalate')}
//                     >
//                       Escalate to Supervisor
//                     </Button>
//                     <Button 
//                       variant="outline"
//                       onClick={() => handleCaseAction('export')}
//                     >
//                       Export Case
//                     </Button>
//                     <Button 
//                       variant="outline"
//                       onClick={() => handleCaseAction('note')}
//                     >
//                       Add Note
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="ml-auto"
//                       onClick={() => {
//                         setViewMode('review');
//                         setIsDialogOpen(true);
//                       }}
//                     >
//                       Detailed Review
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
//                   <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="font-medium mb-2">Select a case</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Choose an integrity case from the list to view detailed analysis and timeline
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Detailed Case Modal */}
//       {selected && (
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
//             <DialogHeader>
//               <DialogTitle>
//                 {viewMode === 'review' ? 'Case Review' : 'Case Details'}
//               </DialogTitle>
//               <DialogDescription>
//                 {viewMode === 'review' 
//                   ? `Complete analysis of integrity case ${selected.userName} - Take action below`
//                   : `Complete information for integrity case ${selected.userName}`
//                 }
//               </DialogDescription>
//             </DialogHeader>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
//               <div className="space-y-2">
//                 <Label className="font-semibold">Importer Name</Label>
//                 <div className="text-sm font-medium">{selected.userName}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">User ID</Label>
//                 <div className="text-sm font-mono">{selected.userId}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Email</Label>
//                 <div className="text-sm">{selected.email || 'Not available'}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Role</Label>
//                 <div className="text-sm">{selected.role}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Registration Date</Label>
//                 <div className="text-sm">{selected.registrationDate || 'Unknown'}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Last Activity</Label>
//                 <div className="text-sm">{selected.lastActivity ? new Date(selected.lastActivity).toLocaleDateString() : 'Unknown'}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Risk Score</Label>
//                 <div className="text-sm font-medium">{selected.riskScore}/100</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Status</Label>
//                 <div className="text-sm">
//                   <Badge className={cn(
//                     selected.status === 'investigating' && "bg-red-100 text-red-800 border-red-300",
//                     selected.status === 'open' && "bg-yellow-100 text-yellow-800 border-yellow-300",
//                     selected.status === 'escalated' && "bg-orange-100 text-orange-800 border-orange-300",
//                     selected.status === 'closed' && "bg-green-100 text-green-800 border-green-300"
//                   )}>
//                     {selected.status.charAt(0).toUpperCase() + selected.status.slice(1)}
//                   </Badge>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Total Parcels</Label>
//                 <div className="text-sm font-medium">{selected.parcelCount}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Total Value</Label>
//                 <div className="text-sm font-medium text-red-600">AED {selected.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Split Shipments</Label>
//                 <div className="text-sm font-medium text-amber-600">{selected.splitCount}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">High-Risk Items</Label>
//                 <div className="text-sm font-medium text-red-600">{selected.highRiskCount}</div>
//               </div>
//               <div className="space-y-2">
//                 <Label className="font-semibold">Duty Payable</Label>
//                 <div className="text-sm font-medium text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
//               </div>
              
//               {/* Activity Timeline */}
//               <div className="space-y-2 col-span-2">
//                 <Label className="font-semibold">Recent Suspicious Activity</Label>
//                 <div className="space-y-2 max-h-60 overflow-y-auto">
//                   {selected.timeline.length > 0 ? (
//                     selected.timeline.map((entry) => (
//                       <div
//                         key={entry.id}
//                         className={cn(
//                           "flex items-start gap-3 p-3 rounded-lg",
//                           entry.suspicious ? "bg-red-50 border border-red-200" : "bg-muted/30"
//                         )}
//                       >
//                         <div className={cn(
//                           "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
//                           entry.suspicious ? "bg-red-100" : "bg-muted"
//                         )}>
//                           {entry.action === 'SPLIT_SHIPMENT' || entry.action === 'HIGH_RISK' ? (
//                             <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-red-600")} />
//                           ) : (
//                             <FileText className="h-4 w-4 text-muted-foreground" />
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center gap-2">
//                             <span className="font-medium text-sm">{entry.action.replace('_', ' ')}</span>
//                             {entry.suspicious && (
//                               <Badge variant="destructive" className="text-xs">Suspicious</Badge>
//                             )}
//                           </div>
//                           <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
//                           <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
//                             <span className="flex items-center gap-1">
//                               <Calendar className="h-3 w-3" />
//                               {new Date(entry.timestamp).toLocaleDateString()}
//                             </span>
//                             <span className="font-mono">{entry.ipAddress}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-sm text-muted-foreground text-center py-4">
//                       No activity data available
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {viewMode === 'review' ? (
//               <DialogFooter className="flex gap-2 pt-4 border-t">
//                 <Button
//                   variant="destructive"
//                   onClick={() => handleCaseAction('reject')}
//                   className="gap-2"
//                 >
//                   <XSquare className="h-4 w-4" />
//                   Reject Case
//                 </Button>
//                 <Button
//                   variant="outline"
//                   onClick={() => handleCaseAction('close')}
//                   className="gap-2"
//                 >
//                   Close Case
//                 </Button>
//                 <Button
//                   variant="default"
//                   onClick={() => handleCaseAction('approve')}
//                   className="gap-2 bg-green-600 hover:bg-green-700"
//                 >
//                   <CheckSquare className="h-4 w-4" />
//                   Approve
//                 </Button>
//               </DialogFooter>
//             ) : (
//               <DialogFooter className="pt-4 border-t">
//                 <Button
//                   variant="outline"
//                   onClick={() => setIsDialogOpen(false)}
//                 >
//                   Close
//                 </Button>
//               </DialogFooter>
//             )}
//           </DialogContent>
//         </Dialog>
//       )}
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
  UserCheck, 
  AlertTriangle, 
  Clock, 
  Activity, 
  User, 
  Calendar, 
  FileText, 
  ChevronRight,
  DollarSign,
  Shield,
  Package,
  Eye,
  Search,
  Download,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  AlertCircle,
  CheckSquare,
  XSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface IntegrityCase {
  id: string;
  userName: string;
  userId: string;
  role: string;
  unit: string;
  riskScore: number;
  status: 'investigating' | 'open' | 'escalated' | 'closed';
  anomalies: string[];
  affectedDeclarations: string[];
  timeline: {
    id: string;
    action: string;
    details: string;
    timestamp: string;
    ipAddress: string;
    suspicious: boolean;
  }[];
  totalValue: number;
  parcelCount: number;
  splitCount: number;
  highRiskCount: number;
  dutyPayable: number;
  email?: string;
  registrationDate?: string;
  lastActivity?: string;
  originalData: any; // Store the original grouped data
}

export function IntegrityModule() {
  const { processedData } = useSharedData();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [integrityCases, setIntegrityCases] = useState<IntegrityCase[]>([]);
  const [filteredCases, setFilteredCases] = useState<IntegrityCase[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'view' | 'review'>('view');
  const [activeStatus, setActiveStatus] = useState<string | null>(null);
  const itemsPerPage = 10;
  
  // Generate integrity cases from processed data
  useEffect(() => {
    if (processedData.length === 0) {
      setIntegrityCases([]);
      setFilteredCases([]);
      return;
    }

    // Cast processedData to any to avoid TypeScript errors temporarily
    const parcels = processedData as any[];
    
    // Group by importer to find suspicious patterns
    const importerGroups = parcels.reduce((acc, parcel) => {
      const importer = parcel.importer_name || "Unknown Importer";
      if (!acc[importer]) {
        acc[importer] = {
          parcels: [],
          totalValue: 0,
          riskCount: 0,
          splitCount: 0,
          highRiskItems: 0,
          dutyPayable: 0,
          timestamps: [],
          orderIds: []
        };
      }
      acc[importer].parcels.push(parcel);
      acc[importer].totalValue += parcel.item_price_aed || 0;
      acc[importer].dutyPayable += parcel.duty_payable_aed || 0;
      if (parcel.is_high_risk) acc[importer].highRiskItems++;
      if (parcel.is_split_shipment) acc[importer].splitCount++;
      if (parcel.duty_applicable) acc[importer].riskCount++;
      if (parcel.timestamp) {
        // Validate timestamp before adding
        try {
          const date = new Date(parcel.timestamp);
          if (!isNaN(date.getTime())) {
            acc[importer].timestamps.push(parcel.timestamp);
          } else {
            // Use current date as fallback for invalid timestamps
            acc[importer].timestamps.push(new Date().toISOString());
          }
        } catch {
          acc[importer].timestamps.push(new Date().toISOString());
        }
      } else {
        acc[importer].timestamps.push(new Date().toISOString());
      }
      if (parcel.order_id) acc[importer].orderIds.push(parcel.order_id);
      return acc;
    }, {} as Record<string, any>);

    // Convert to integrity cases - REMOVED THE .slice(0, 5) LIMIT
    const cases: IntegrityCase[] = Object.entries(importerGroups)
      .filter(([_, data]: [string, any]) => 
        data.splitCount > 0 || 
        data.highRiskItems > 0 || 
        data.riskCount > 3 ||
        data.totalValue > 5000 ||
        data.parcels.length > 10 // Large number of parcels from same importer
      )
      .map(([importer, data]: [string, any], index) => {
        // Calculate risk score based on multiple factors
        const riskScore = Math.min(95, 
          30 + 
          (data.splitCount * 15) + 
          (data.highRiskItems * 20) + 
          (Math.min(data.riskCount, 5) * 5) +
          (data.parcels.length > 20 ? 10 : 0) +
          (data.totalValue > 10000 ? 10 : 0)
        );

        // Generate anomalies list
        const anomalies = [];
        if (data.splitCount > 0) anomalies.push(`${data.splitCount} split shipments detected`);
        if (data.highRiskItems > 0) anomalies.push(`${data.highRiskItems} high-risk items found`);
        if (data.totalValue > 5000) anomalies.push(`High total value: AED ${data.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
        if (data.riskCount > 3) anomalies.push(`${data.riskCount} duty-applicable parcels`);
        if (data.parcels.length > 20) anomalies.push(`Large volume: ${data.parcels.length} parcels`);
        if (data.dutyPayable > 0) anomalies.push(`Duty payable: AED ${data.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

        // Generate timeline from parcels with safe timestamp handling
        const timeline = data.parcels
          .filter((parcel: any) => parcel.is_split_shipment || parcel.is_high_risk || parcel.duty_applicable)
          .slice(0, 10)
          .map((parcel: any, idx: number) => {
            let safeTimestamp;
            try {
              const date = new Date(parcel.timestamp);
              safeTimestamp = !isNaN(date.getTime()) ? date.toISOString() : new Date().toISOString();
            } catch {
              safeTimestamp = new Date().toISOString();
            }

            return {
              id: `${importer}-timeline-${idx}`,
              action: parcel.is_split_shipment ? 'SPLIT_SHIPMENT' : 
                     parcel.is_high_risk ? 'HIGH_RISK' : 
                     parcel.duty_applicable ? 'DUTY_APPLICABLE' : 'DECLARATION',
              details: `${parcel.product_title || 'Unknown Product'} - AED ${(parcel.item_price_aed || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              timestamp: safeTimestamp,
              ipAddress: `Order: ${parcel.order_id || `ORD-${idx + 1}`}`,
              suspicious: parcel.is_split_shipment || parcel.is_high_risk || parcel.duty_applicable
            };
          });

        // Determine status based on risk score and anomalies
        let status: IntegrityCase['status'] = 'open';
        if (riskScore > 70) status = 'investigating';
        else if (riskScore > 60) status = 'escalated';
        else if (riskScore < 30) status = 'closed';

        // Get latest timestamp with safe handling
        let latestTimestamp;
        try {
          if (data.timestamps.length > 0) {
            const validTimestamps = data.timestamps
              .map((t: string) => {
                try {
                  return new Date(t).getTime();
                } catch {
                  return null;
                }
              })
              .filter((t: number | null) => t !== null) as number[];
            
            if (validTimestamps.length > 0) {
              latestTimestamp = Math.max(...validTimestamps);
            } else {
              latestTimestamp = Date.now();
            }
          } else {
            latestTimestamp = Date.now();
          }
        } catch {
          latestTimestamp = Date.now();
        }

        // Generate registration date (random date within last year)
        const registrationDate = new Date(Date.now() - Math.random() * 31536000000);
        const formattedRegistrationDate = registrationDate.toISOString().split('T')[0];

        // Format last activity date
        let formattedLastActivity;
        try {
          const lastActivityDate = new Date(latestTimestamp);
          formattedLastActivity = !isNaN(lastActivityDate.getTime()) 
            ? lastActivityDate.toISOString()
            : new Date().toISOString();
        } catch {
          formattedLastActivity = new Date().toISOString();
        }

        return {
          id: `case-${importer.replace(/\s+/g, '-').toLowerCase()}-${index + 1}`,
          userName: importer,
          userId: `IMP-${importer.substring(0, 4).toUpperCase().replace(/\s/g, '')}-${index + 1}`,
          role: 'E-Commerce Importer',
          unit: 'Cross-Border Trade',
          riskScore,
          status,
          anomalies,
          affectedDeclarations: data.orderIds.slice(0, 10),
          timeline,
          totalValue: data.totalValue,
          parcelCount: data.parcels.length,
          splitCount: data.splitCount,
          highRiskCount: data.highRiskItems,
          dutyPayable: data.dutyPayable,
          email: `${importer.replace(/\s+/g, '.').toLowerCase()}@example.com`,
          registrationDate: formattedRegistrationDate,
          lastActivity: formattedLastActivity,
          originalData: data // Store original data
        };
      });

    // Sort by risk score (highest first)
    cases.sort((a, b) => b.riskScore - a.riskScore);

    setIntegrityCases(cases);
    setFilteredCases(cases);
    if (cases.length > 0 && !selectedCase) {
      setSelectedCase(cases[0].id);
    }

  }, [processedData]);

  // Filter cases based on search and status
  useEffect(() => {
    let filtered = integrityCases;
    
    // Filter by status
    if (activeStatus) {
      filtered = filtered.filter(c => c.status === activeStatus);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        c.userName.toLowerCase().includes(query) ||
        c.userId.toLowerCase().includes(query) ||
        c.email?.toLowerCase().includes(query) ||
        c.affectedDeclarations.some(declaration => declaration.toLowerCase().includes(query))
      );
    }
    
    setFilteredCases(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [integrityCases, activeStatus, searchQuery]);

  const selected = integrityCases.find(c => c.id === selectedCase);

  // Pagination
  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCases = filteredCases.slice(startIndex, endIndex);

  // Calculate stats from processed data
  const stats = {
    totalCases: integrityCases.length,
    activeCases: integrityCases.filter(c => c.status === 'investigating' || c.status === 'open').length,
    escalatedCases: integrityCases.filter(c => c.status === 'escalated').length,
    splitShipments: (processedData as any[]).filter(p => p.is_split_shipment).length,
    highRiskCount: (processedData as any[]).filter(p => p.is_high_risk).length,
    totalDuty: (processedData as any[]).reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0),
    totalValue: (processedData as any[]).reduce((sum, p) => sum + (p.item_price_aed || 0), 0),
    uniqueImporters: new Set((processedData as any[]).map(p => p.importer_name)).size
  };

  // Handle case actions
  const handleCaseAction = (action: 'escalate' | 'export' | 'note' | 'approve' | 'reject' | 'close') => {
    if (!selected) return;

    let message = '';
    switch (action) {
      case 'escalate':
        message = `Case for ${selected.userName} escalated to supervisor`;
        toast.warning("Case escalated", { description: message });
        break;
      case 'export':
        message = `Integrity case for ${selected.userName} exported`;
        toast.success("Case exported", { description: message });
        break;
      case 'note':
        message = `Note added to ${selected.userName} case`;
        toast.info("Note added", { description: message });
        break;
      case 'approve':
        message = `Case ${selected.userName} approved and cleared`;
        toast.success("Approved!", { description: message });
        break;
      case 'reject':
        message = `Case ${selected.userName} rejected - Requires investigation`;
        toast.error("Rejected!", { description: message });
        break;
      case 'close':
        message = `Case ${selected.userName} closed`;
        toast.success("Case Closed", { description: message });
        break;
    }
  };

  const handleViewDetails = (caseItem: IntegrityCase) => {
    setSelectedCase(caseItem.id);
    setViewMode('view');
    setIsDialogOpen(true);
  };

  const handleReviewCase = (caseItem: IntegrityCase) => {
    setSelectedCase(caseItem.id);
    setViewMode('review');
    setIsDialogOpen(true);
  };

  // Safe date formatting function
  const formatDateSafely = (dateString?: string): string => {
    if (!dateString) return 'Unknown';
    
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString();
      }
    } catch {
      // Fall through to default
    }
    
    return 'Unknown';
  };

  // Export cases to CSV
  const exportToCSV = () => {
    if (integrityCases.length === 0) {
      toast.error("No data to export");
      return;
    }

    const headers = [
      'Case ID',
      'Importer Name',
      'User ID',
      'Risk Score',
      'Status',
      'Parcel Count',
      'Total Value (AED)',
      'Split Shipments',
      'High-Risk Items',
      'Duty Payable (AED)',
      'Anomalies Count',
      'Registration Date',
      'Last Activity'
    ];

    const csvContent = [
      headers.join(','),
      ...integrityCases.map(c => [
        c.id,
        `"${c.userName}"`,
        c.userId,
        c.riskScore,
        c.status,
        c.parcelCount,
        c.totalValue.toFixed(2),
        c.splitCount,
        c.highRiskCount,
        c.dutyPayable.toFixed(2),
        c.anomalies.length,
        c.registrationDate,
        c.lastActivity
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `integrity_cases_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    toast.success("Export Complete", {
      description: `Exported ${integrityCases.length} integrity cases to CSV`,
    });
  };

  // Status filter buttons
  const statusFilters = [
    { id: null, label: 'All', count: integrityCases.length },
    { id: 'investigating', label: 'Investigating', count: integrityCases.filter(c => c.status === 'investigating').length },
    { id: 'open', label: 'Open', count: integrityCases.filter(c => c.status === 'open').length },
    { id: 'escalated', label: 'Escalated', count: integrityCases.filter(c => c.status === 'escalated').length },
    { id: 'closed', label: 'Closed', count: integrityCases.filter(c => c.status === 'closed').length },
  ];

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Integrity Analytics" 
        subtitle="Insider Threat & Behavior Pattern Detection"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row - Using Real Data */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <StatCard
            title="Total Cases"
            value={stats.totalCases.toLocaleString()}
            subtitle={`From ${stats.uniqueImporters} unique importers`}
            icon={UserCheck}
            variant="warning"
          />
          <StatCard
            title="Active Cases"
            value={stats.activeCases.toLocaleString()}
            subtitle="Requiring attention"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="Split Shipments"
            value={stats.splitShipments.toLocaleString()}
            subtitle="Potential evasion"
            icon={Package}
            variant="danger"
          />
          <StatCard
            title="High-Risk Items"
            value={stats.highRiskCount.toLocaleString()}
            subtitle="Requiring verification"
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Total Value"
            value={`AED ${(stats.totalValue / 1000).toFixed(1)}K`}
            subtitle="At risk"
            icon={DollarSign}
          />
          <StatCard
            title="Duty At Stake"
            value={`AED ${(stats.totalDuty / 1000).toFixed(1)}K`}
            subtitle="Revenue protection"
            icon={Shield}
            variant="success"
          />
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases by importer name, ID, email, or order..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={exportToCSV}>
              <Download className="h-4 w-4" />
              Export Cases
            </Button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {statusFilters.map((filter) => (
            <Button
              key={filter.id || 'all'}
              variant={activeStatus === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveStatus(filter.id)}
              className="gap-2"
            >
              {filter.label}
              <Badge variant={activeStatus === filter.id ? "secondary" : "outline"}>
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {processedData.length === 0 ? (
          <Card className="text-center p-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
            <p className="text-muted-foreground mb-6">
              Upload and process CSV data in Parcel Intelligence to enable integrity analytics
            </p>
            <Button onClick={() => window.location.href = '#/parcel-intel'}>
              Go to Parcel Intelligence
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cases List */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Integrity Cases</h2>
                <span className="text-sm text-muted-foreground">
                  {filteredCases.length.toLocaleString()} cases
                </span>
              </div>
              
              <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
                {paginatedCases.map((integrityCase) => (
                  <div
                    key={integrityCase.id}
                    className="glass-card rounded-lg p-4 cursor-pointer transition-all border border-border/50 hover:border-blue-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-warning" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">{integrityCase.userName}</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewDetails(integrityCase);
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
                                handleReviewCase(integrityCase);
                              }}
                              title="Review Case"
                            >
                              <AlertCircle className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : integrityCase.riskScore >= 50 ? 'medium' : 'low'}>
                            {integrityCase.riskScore}
                          </RiskBadge>
                          <span className={cn(
                            "text-xs px-2 py-0.5 rounded-full",
                            integrityCase.status === 'investigating' && "bg-red-100 text-red-700",
                            integrityCase.status === 'open' && "bg-yellow-100 text-yellow-700",
                            integrityCase.status === 'escalated' && "bg-orange-100 text-orange-700",
                            integrityCase.status === 'closed' && "bg-green-100 text-green-700"
                          )}>
                            {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {integrityCase.role} • {integrityCase.parcelCount} parcels
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <DollarSign className="h-3 w-3" />
                          AED {integrityCase.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                          <span className="mx-1">•</span>
                          <Package className="h-3 w-3" />
                          {integrityCase.splitCount} splits
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filteredCases.length > itemsPerPage && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredCases.length)} of {filteredCases.length.toLocaleString()} cases
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

              {/* Summary Card */}
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Data Summary</CardTitle>
                  <CardDescription>
                    Overall integrity risk assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Unique Importers:</span>
                    <span className="font-medium">{stats.uniqueImporters.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cases Created:</span>
                    <span className="font-medium">{stats.totalCases.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Risk Score:</span>
                    <span className="font-medium">
                      {integrityCases.length > 0 
                        ? Math.round(integrityCases.reduce((sum, c) => sum + c.riskScore, 0) / integrityCases.length)
                        : 0
                      }
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Value at Risk:</span>
                    <span className="font-medium text-red-600">
                      AED {stats.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duty Protection:</span>
                    <span className="font-medium text-green-600">
                      AED {stats.totalDuty.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
                        <User className="h-7 w-7 text-warning" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{selected.userName}</h2>
                        <p className="text-sm text-muted-foreground">{selected.role}</p>
                        <p className="text-xs text-muted-foreground">{selected.unit} • {selected.userId}</p>
                      </div>
                    </div>
                    <RiskScoreRing score={selected.riskScore} size="md" label="Integrity Risk" />
                  </div>

                  {/* Case Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Parcels</p>
                        <p className="text-2xl font-bold">{selected.parcelCount}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Total Value</p>
                        <p className="text-2xl font-bold text-red-600">AED {selected.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Split Shipments</p>
                        <p className="text-2xl font-bold text-amber-600">{selected.splitCount}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">Duty Payable</p>
                        <p className="text-2xl font-bold text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Anomalies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Detected Anomalies</h3>
                    <div className="space-y-2">
                      {selected.anomalies.map((anomaly, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
                          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                          <span className="text-sm">{anomaly}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Affected Declarations */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium">Affected Orders</h3>
                      <span className="text-xs text-muted-foreground">{selected.affectedDeclarations.length} orders</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selected.affectedDeclarations.map((dec) => (
                        <span key={dec} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-mono truncate">
                          {dec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <Button 
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleCaseAction('escalate')}
                    >
                      Escalate to Supervisor
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleCaseAction('export')}
                    >
                      Export Case
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleCaseAction('note')}
                    >
                      Add Note
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
                  <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">Select a case</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose an integrity case from the list to view detailed analysis and timeline
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Detailed Case Modal */}
      {selected && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {viewMode === 'review' ? 'Case Review' : 'Case Details'}
              </DialogTitle>
              <DialogDescription>
                {viewMode === 'review' 
                  ? `Complete analysis of integrity case ${selected.userName} - Take action below`
                  : `Complete information for integrity case ${selected.userName}`
                }
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="font-semibold">Importer Name</Label>
                <div className="text-sm font-medium">{selected.userName}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">User ID</Label>
                <div className="text-sm font-mono">{selected.userId}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Email</Label>
                <div className="text-sm">{selected.email || 'Not available'}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Role</Label>
                <div className="text-sm">{selected.role}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Registration Date</Label>
                <div className="text-sm">{selected.registrationDate || 'Unknown'}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Last Activity</Label>
                <div className="text-sm">{formatDateSafely(selected.lastActivity)}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Risk Score</Label>
                <div className="text-sm font-medium">{selected.riskScore}/100</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Status</Label>
                <div className="text-sm">
                  <Badge className={cn(
                    selected.status === 'investigating' && "bg-red-100 text-red-800 border-red-300",
                    selected.status === 'open' && "bg-yellow-100 text-yellow-800 border-yellow-300",
                    selected.status === 'escalated' && "bg-orange-100 text-orange-800 border-orange-300",
                    selected.status === 'closed' && "bg-green-100 text-green-800 border-green-300"
                  )}>
                    {selected.status.charAt(0).toUpperCase() + selected.status.slice(1)}
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Total Parcels</Label>
                <div className="text-sm font-medium">{selected.parcelCount}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Total Value</Label>
                <div className="text-sm font-medium text-red-600">AED {selected.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Split Shipments</Label>
                <div className="text-sm font-medium text-amber-600">{selected.splitCount}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">High-Risk Items</Label>
                <div className="text-sm font-medium text-red-600">{selected.highRiskCount}</div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Duty Payable</Label>
                <div className="text-sm font-medium text-green-600">AED {selected.dutyPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              
              {/* Activity Timeline */}
              <div className="space-y-2 col-span-2">
                <Label className="font-semibold">Recent Suspicious Activity</Label>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {selected.timeline.length > 0 ? (
                    selected.timeline.map((entry) => (
                      <div
                        key={entry.id}
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-lg",
                          entry.suspicious ? "bg-red-50 border border-red-200" : "bg-muted/30"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                          entry.suspicious ? "bg-red-100" : "bg-muted"
                        )}>
                          {entry.action === 'SPLIT_SHIPMENT' || entry.action === 'HIGH_RISK' ? (
                            <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-red-600")} />
                          ) : (
                            <FileText className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{entry.action.replace('_', ' ')}</span>
                            {entry.suspicious && (
                              <Badge variant="destructive" className="text-xs">Suspicious</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDateSafely(entry.timestamp)}
                            </span>
                            <span className="font-mono">{entry.ipAddress}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No activity data available
                    </p>
                  )}
                </div>
              </div>
            </div>

            {viewMode === 'review' ? (
              <DialogFooter className="flex gap-2 pt-4 border-t">
                <Button
                  variant="destructive"
                  onClick={() => handleCaseAction('reject')}
                  className="gap-2"
                >
                  <XSquare className="h-4 w-4" />
                  Reject Case
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleCaseAction('close')}
                  className="gap-2"
                >
                  Close Case
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleCaseAction('approve')}
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