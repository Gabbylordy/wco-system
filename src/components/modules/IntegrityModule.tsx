// import { useState } from "react";
// import { mockIntegrityCases, mockConsignments } from "@/data/mockData";
// import { RiskScoreRing } from "@/components/RiskScoreRing";
// import { RiskBadge } from "@/components/RiskBadge";
// import { StatCard } from "@/components/StatCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { UserCheck, AlertTriangle, Clock, Activity, User, Calendar, FileText, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export function IntegrityModule() {
//   const [selectedCase, setSelectedCase] = useState<string | null>(null);
  
//   const selected = mockIntegrityCases.find(c => c.id === selectedCase);

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Integrity Analytics" 
//         subtitle="Insider Threat & Behavior Pattern Detection"
//       />
      
//       <div className="flex-1 p-6 overflow-auto">
//         {/* Stats Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             title="Active Cases"
//             value="5"
//             subtitle="Under investigation"
//             icon={UserCheck}
//             variant="warning"
//           />
//           <StatCard
//             title="Override Anomalies"
//             value="23"
//             subtitle="This week"
//             icon={AlertTriangle}
//             variant="danger"
//           />
//           <StatCard
//             title="Odd-Hour Activity"
//             value="8"
//             subtitle="Flagged sessions"
//             icon={Clock}
//             variant="warning"
//           />
//           <StatCard
//             title="Baseline Deviation"
//             value="12%"
//             subtitle="Above normal"
//             icon={Activity}
//           />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Cases List */}
//           <div className="lg:col-span-1 space-y-4">
//             <h2 className="font-semibold">Integrity Cases</h2>
            
//             <div className="space-y-3">
//               {mockIntegrityCases.map((integrityCase) => (
//                 <div
//                   key={integrityCase.id}
//                   onClick={() => setSelectedCase(integrityCase.id)}
//                   className={cn(
//                     "glass-card rounded-lg p-4 cursor-pointer transition-all border",
//                     selectedCase === integrityCase.id 
//                       ? "border-module-integrity bg-module-integrity/5" 
//                       : "border-border/50 hover:border-module-integrity/50"
//                   )}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
//                       <User className="h-5 w-5 text-warning" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-1">
//                         <p className="font-medium text-sm">{integrityCase.userName}</p>
//                         <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : 'medium'}>
//                           {integrityCase.riskScore}
//                         </RiskBadge>
//                       </div>
//                       <p className="text-xs text-muted-foreground">
//                         {integrityCase.role} • {integrityCase.unit}
//                       </p>
//                       <div className="flex items-center gap-2 mt-2">
//                         <span className={cn(
//                           "text-xs px-2 py-0.5 rounded-full",
//                           integrityCase.status === 'investigating' && "bg-warning/20 text-warning",
//                           integrityCase.status === 'open' && "bg-info/20 text-info",
//                           integrityCase.status === 'escalated' && "bg-destructive/20 text-destructive",
//                           integrityCase.status === 'closed' && "bg-success/20 text-success"
//                         )}>
//                           {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
//                         </span>
//                         <span className="text-xs text-muted-foreground">
//                           {integrityCase.anomalies.length} anomalies
//                         </span>
//                       </div>
//                     </div>
//                     <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Detail Panel */}
//           <div className="lg:col-span-2">
//             {selected ? (
//               <div className="glass-card rounded-xl p-6 border border-border/50 module-integrity">
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-14 h-14 rounded-full bg-warning/20 flex items-center justify-center">
//                       <User className="h-7 w-7 text-warning" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-bold">{selected.userName}</h2>
//                       <p className="text-sm text-muted-foreground">{selected.role}</p>
//                       <p className="text-xs text-muted-foreground">{selected.unit} • {selected.userId}</p>
//                     </div>
//                   </div>
//                   <RiskScoreRing score={selected.riskScore} size="md" label="Integrity Risk" />
//                 </div>

//                 {/* Anomalies */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Detected Anomalies</h3>
//                   <div className="space-y-2">
//                     {selected.anomalies.map((anomaly, i) => (
//                       <div key={i} className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg border border-warning/20">
//                         <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
//                         <span className="text-sm">{anomaly}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Affected Declarations */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Affected Declarations</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selected.affectedDeclarations.map((dec) => (
//                       <span key={dec} className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-mono">
//                         {dec}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Activity Timeline */}
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium mb-3">Activity Timeline</h3>
//                   <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
//                     {selected.timeline.length > 0 ? (
//                       selected.timeline.map((entry) => (
//                         <div
//                           key={entry.id}
//                           className={cn(
//                             "flex items-start gap-3 p-3 rounded-lg",
//                             entry.suspicious ? "bg-destructive/10 border border-destructive/20" : "bg-muted/30"
//                           )}
//                         >
//                           <div className={cn(
//                             "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
//                             entry.suspicious ? "bg-destructive/20" : "bg-muted"
//                           )}>
//                             {entry.action === 'OVERRIDE' ? (
//                               <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-destructive")} />
//                             ) : (
//                               <FileText className="h-4 w-4 text-muted-foreground" />
//                             )}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <div className="flex items-center gap-2">
//                               <span className="font-medium text-sm">{entry.action}</span>
//                               {entry.suspicious && (
//                                 <RiskBadge severity="high">Suspicious</RiskBadge>
//                               )}
//                             </div>
//                             <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
//                             <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
//                               <span className="flex items-center gap-1">
//                                 <Calendar className="h-3 w-3" />
//                                 {new Date(entry.timestamp).toLocaleString('en-NG')}
//                               </span>
//                               <span>{entry.ipAddress}</span>
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-sm text-muted-foreground text-center py-4">
//                         No timeline entries available
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-3">
//                   <Button className="flex-1 bg-warning hover:bg-warning/90 text-warning-foreground">
//                     Escalate to Supervisor
//                   </Button>
//                   <Button variant="outline">Export Case Pack</Button>
//                   <Button variant="outline">Add Note</Button>
//                 </div>
//               </div>
//             ) : (
//               <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
//                 <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="font-medium mb-2">Select a case</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Choose an integrity case from the list to view detailed analysis and timeline
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
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

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
}

export function IntegrityModule() {
  const { processedData } = useSharedData();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [integrityCases, setIntegrityCases] = useState<IntegrityCase[]>([]);
  
  // Generate integrity cases from processed data
  useEffect(() => {
    if (processedData.length === 0) {
      setIntegrityCases([]);
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
          dutyPayable: 0
        };
      }
      acc[importer].parcels.push(parcel);
      acc[importer].totalValue += parcel.item_price_aed || 0;
      acc[importer].dutyPayable += parcel.duty_payable_aed || 0;
      if (parcel.is_high_risk) acc[importer].highRiskItems++;
      if (parcel.is_split_shipment) acc[importer].splitCount++;
      if (parcel.duty_applicable) acc[importer].riskCount++;
      return acc;
    }, {} as Record<string, any>);

    // Convert to integrity cases
    const cases: IntegrityCase[] = Object.entries(importerGroups)
      .filter(([_, data]: [string, any]) => 
        data.splitCount > 0 || 
        data.highRiskItems > 0 || 
        data.riskCount > 3 ||
        data.totalValue > 5000
      )
      .map(([importer, data]: [string, any], index) => {
        const riskScore = Math.min(95, 
          30 + 
          (data.splitCount * 15) + 
          (data.highRiskItems * 20) + 
          (Math.min(data.riskCount, 5) * 5)
        );

        const anomalies = [];
        if (data.splitCount > 0) anomalies.push(`Split shipment detected (${data.splitCount} parcels)`);
        if (data.highRiskItems > 0) anomalies.push(`High-risk items found (${data.highRiskItems} items)`);
        if (data.totalValue > 5000) anomalies.push(`High total value (AED ${data.totalValue.toFixed(2)})`);
        if (data.riskCount > 3) anomalies.push(`Multiple duty-applicable parcels (${data.riskCount})`);

        // Generate timeline from parcels
        const timeline = data.parcels.slice(0, 5).map((parcel: any, idx: number) => ({
          id: `${importer}-timeline-${idx}`,
          action: parcel.is_split_shipment ? 'SPLIT_SHIPMENT' : 'DECLARATION',
          details: `${parcel.product_title || 'Unknown Product'} - AED ${(parcel.item_price_aed || 0).toFixed(2)}${parcel.is_high_risk ? ' (HIGH RISK)' : ''}`,
          timestamp: parcel.timestamp || new Date().toISOString(),
          ipAddress: `Order: ${parcel.order_id || `ORD-${idx + 1}`}`,
          suspicious: parcel.is_split_shipment || parcel.is_high_risk
        }));

        return {
          id: `case-${index + 1}`,
          userName: importer,
          userId: `IMP-${importer.substring(0, 3).toUpperCase()}-${index + 1}`,
          role: 'E-Commerce Importer',
          unit: 'Cross-Border Trade',
          riskScore,
          status: riskScore > 70 ? 'investigating' : riskScore > 50 ? 'open' : 'escalated',
          anomalies,
          affectedDeclarations: data.parcels.slice(0, 3).map((p: any) => p.order_id || 'Unknown Order'),
          timeline,
          totalValue: data.totalValue,
          parcelCount: data.parcels.length
        };
      })
      .slice(0, 5); // Limit to 5 cases

    setIntegrityCases(cases);
    if (cases.length > 0 && !selectedCase) {
      setSelectedCase(cases[0].id);
    }

  }, [processedData]);

  const selected = integrityCases.find(c => c.id === selectedCase);

  // Calculate stats from processed data
  const stats = {
    activeCases: integrityCases.length,
    overrideAnomalies: (processedData as any[]).filter(p => p.is_split_shipment).length,
    oddHourActivity: Math.floor(processedData.length * 0.08), // 8% of data
    baselineDeviation: processedData.length > 0 
      ? Math.round(((processedData as any[]).filter(p => p.is_high_risk || p.is_split_shipment).length / processedData.length) * 100)
      : 0,
    totalDuty: (processedData as any[]).reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0),
    highRiskCount: (processedData as any[]).filter(p => p.is_high_risk).length
  };

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Integrity Analytics" 
        subtitle="Insider Threat & Behavior Pattern Detection"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row - Using Real Data */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Cases"
            value={stats.activeCases.toString()}
            subtitle={`From ${processedData.length} parcels`}
            icon={UserCheck}
            variant="warning"
          />
          <StatCard
            title="Split Shipments"
            value={stats.overrideAnomalies.toString()}
            subtitle="Potential evasion detected"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="High-Risk Items"
            value={stats.highRiskCount.toString()}
            subtitle="Requiring attention"
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Risk Deviation"
            value={`${stats.baselineDeviation}%`}
            subtitle="Above normal threshold"
            icon={Activity}
          />
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
                <Badge variant="outline" className="bg-blue-50">
                  {integrityCases.length} cases
                </Badge>
              </div>
              
              <div className="space-y-3">
                {integrityCases.map((integrityCase) => (
                  <div
                    key={integrityCase.id}
                    onClick={() => setSelectedCase(integrityCase.id)}
                    className={cn(
                      "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                      selectedCase === integrityCase.id 
                        ? "border-blue-500 bg-blue-50/50" 
                        : "border-border/50 hover:border-blue-300"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center shrink-0">
                        <User className="h-5 w-5 text-warning" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm">{integrityCase.userName}</p>
                          <RiskBadge severity={integrityCase.riskScore >= 70 ? 'high' : 'medium'}>
                            {integrityCase.riskScore}
                          </RiskBadge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {integrityCase.role} • {integrityCase.unit}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={cn(
                            "text-xs px-2 py-0.5 rounded-full",
                            integrityCase.status === 'investigating' && "bg-warning/20 text-warning",
                            integrityCase.status === 'open' && "bg-blue-100 text-blue-700",
                            integrityCase.status === 'escalated' && "bg-red-100 text-red-700",
                            integrityCase.status === 'closed' && "bg-green-100 text-green-700"
                          )}>
                            {integrityCase.status.charAt(0).toUpperCase() + integrityCase.status.slice(1)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {integrityCase.anomalies.length} anomalies
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Card */}
              <Card className="mt-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Data Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Parcels:</span>
                    <span className="font-medium">{processedData.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">High-Risk:</span>
                    <Badge variant="destructive" className="text-xs">
                      {stats.highRiskCount}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Split Shipments:</span>
                    <Badge variant="outline" className="text-xs bg-amber-50">
                      {stats.overrideAnomalies}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duty Payable:</span>
                    <span className="font-medium">
                      AED {stats.totalDuty.toFixed(2)}
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
                    <h3 className="text-sm font-medium mb-3">Affected Orders</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.affectedDeclarations.map((dec) => (
                        <span key={dec} className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm font-mono">
                          {dec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activity Timeline */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
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
                              {entry.action === 'SPLIT_SHIPMENT' ? (
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
                                  {new Date(entry.timestamp).toLocaleDateString()}
                                </span>
                                <span>{entry.ipAddress}</span>
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

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button 
                      className="flex-1 bg-warning hover:bg-warning/90 text-warning-foreground"
                      onClick={() => {
                        toast.warning("Case escalated", {
                          description: `${selected.userName} sent to supervisor for review`,
                        });
                      }}
                    >
                      Escalate to Supervisor
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        toast.success("Case exported", {
                          description: `Integrity case for ${selected.userName} exported`,
                        });
                      }}
                    >
                      Export Case
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        toast.info("Note added", {
                          description: `Note added to ${selected.userName} case`,
                        });
                      }}
                    >
                      Add Note
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
    </div>
  );
}