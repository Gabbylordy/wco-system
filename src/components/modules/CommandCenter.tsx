// // // // import { mockConsignments, mockIntegrityCases, dashboardStats } from "@/data/mockData";
// // // // import { StatCard } from "@/components/StatCard";
// // // // import { AlertCard } from "@/components/AlertCard";
// // // // import { ConsignmentCard } from "@/components/ConsignmentCard";
// // // // import { RiskScoreRing } from "@/components/RiskScoreRing";
// // // // import { DashboardHeader } from "@/components/DashboardHeader";
// // // // import { 
// // // //   Package, 
// // // //   AlertTriangle, 
// // // //   CheckCircle2, 
// // // //   DollarSign, 
// // // //   Clock, 
// // // //   UserX, 
// // // //   Sliders, 
// // // //   TrendingUp,
// // // //   Activity 
// // // // } from "lucide-react";
// // // // import { cn } from "@/lib/utils";

// // // // export function CommandCenter() {
// // // //   const allAlerts = mockConsignments.flatMap(c => 
// // // //     c.alerts.map(a => ({ ...a, consignmentId: c.id }))
// // // //   );
// // // //   const criticalAlerts = allAlerts.filter(a => a.severity === 'critical' || a.severity === 'high');
// // // //   const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

// // // //   return (
// // // //     <div className="flex flex-col h-full">
// // // //       <DashboardHeader 
// // // //         title="Command Center" 
// // // //         subtitle="WCO — Vigilant Agile Risk & Integrity Suite"
// // // //       />
      
// // // //       <div className="flex-1 p-6 overflow-auto">
// // // //         {/* Key Metrics */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // // //           <StatCard
// // // //             title="Pending Consignments"
// // // //             value={dashboardStats.pendingConsignments}
// // // //             subtitle="Awaiting processing"
// // // //             icon={Package}
// // // //             trend={{ value: -8, label: "vs yesterday" }}
// // // //           />
// // // //           <StatCard
// // // //             title="High-Risk Alerts"
// // // //             value={dashboardStats.highRiskAlerts}
// // // //             subtitle="Require attention"
// // // //             icon={AlertTriangle}
// // // //             variant="danger"
// // // //           />
// // // //           <StatCard
// // // //             title="Cleared Today"
// // // //             value={dashboardStats.clearedToday}
// // // //             subtitle="Successfully processed"
// // // //             icon={CheckCircle2}
// // // //             variant="success"
// // // //             trend={{ value: 12, label: "vs yesterday" }}
// // // //           />
// // // //           <StatCard
// // // //             title="Revenue at Risk"
// // // //             value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
// // // //             subtitle="Potential exposure"
// // // //             icon={DollarSign}
// // // //             variant="warning"
// // // //           />
// // // //         </div>

// // // //         {/* Module Summary Cards */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// // // //           <div className="glass-card rounded-xl p-4 border border-border/50 module-revenue">
// // // //             <div className="flex items-center justify-between mb-3">
// // // //               <h3 className="text-sm font-medium">Revenue</h3>
// // // //               <DollarSign className="h-4 w-4 text-module-revenue" />
// // // //             </div>
// // // //             <p className="text-2xl font-bold">23</p>
// // // //             <p className="text-xs text-muted-foreground">Valuation anomalies</p>
// // // //           </div>
          
// // // //           <div className="glass-card rounded-xl p-4 border border-border/50 module-society">
// // // //             <div className="flex items-center justify-between mb-3">
// // // //               <h3 className="text-sm font-medium">Society</h3>
// // // //               <AlertTriangle className="h-4 w-4 text-module-society" />
// // // //             </div>
// // // //             <p className="text-2xl font-bold">6</p>
// // // //             <p className="text-xs text-muted-foreground">Illicit threats</p>
// // // //           </div>
          
// // // //           <div className="glass-card rounded-xl p-4 border border-border/50 module-integrity">
// // // //             <div className="flex items-center justify-between mb-3">
// // // //               <h3 className="text-sm font-medium">Integrity</h3>
// // // //               <UserX className="h-4 w-4 text-module-integrity" />
// // // //             </div>
// // // //             <p className="text-2xl font-bold">{dashboardStats.integrityFlags}</p>
// // // //             <p className="text-xs text-muted-foreground">Active cases</p>
// // // //           </div>
          
// // // //           <div className="glass-card rounded-xl p-4 border border-border/50 module-agility">
// // // //             <div className="flex items-center justify-between mb-3">
// // // //               <h3 className="text-sm font-medium">Rules</h3>
// // // //               <Sliders className="h-4 w-4 text-module-agility" />
// // // //             </div>
// // // //             <p className="text-2xl font-bold">{dashboardStats.activeRules}</p>
// // // //             <p className="text-xs text-muted-foreground">Active rules</p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //           {/* Critical Alerts */}
// // // //           <div className="lg:col-span-1 space-y-4">
// // // //             <div className="flex items-center justify-between">
// // // //               <h2 className="font-semibold flex items-center gap-2">
// // // //                 <span className="relative flex h-2 w-2">
// // // //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
// // // //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
// // // //                 </span>
// // // //                 Critical Alerts
// // // //               </h2>
// // // //               <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
// // // //             </div>
            
// // // //             <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// // // //               {criticalAlerts.map((alert) => (
// // // //                 <AlertCard 
// // // //                   key={alert.id} 
// // // //                   alert={alert} 
// // // //                   consignmentId={alert.consignmentId}
// // // //                 />
// // // //               ))}
// // // //               {criticalAlerts.length === 0 && (
// // // //                 <div className="glass-card rounded-xl p-6 text-center border border-border/50">
// // // //                   <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
// // // //                   <p className="text-sm text-muted-foreground">No critical alerts</p>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {/* High-Risk Consignments */}
// // // //           <div className="lg:col-span-2 space-y-4">
// // // //             <div className="flex items-center justify-between">
// // // //               <h2 className="font-semibold">High-Risk Consignments</h2>
// // // //               <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
// // // //             </div>
            
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// // // //               {highRiskConsignments.map((consignment) => (
// // // //                 <ConsignmentCard key={consignment.id} consignment={consignment} />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Performance Metrics */}
// // // //         <div className="mt-6 glass-card rounded-xl p-6 border border-border/50">
// // // //           <h2 className="font-semibold mb-4">System Performance</h2>
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // //             <div className="text-center">
// // // //               <div className="flex items-center justify-center gap-2 mb-2">
// // // //                 <Clock className="h-5 w-5 text-muted-foreground" />
// // // //               </div>
// // // //               <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
// // // //               <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
// // // //             </div>
// // // //             <div className="text-center">
// // // //               <div className="flex items-center justify-center gap-2 mb-2">
// // // //                 <TrendingUp className="h-5 w-5 text-success" />
// // // //               </div>
// // // //               <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
// // // //               <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
// // // //             </div>
// // // //             <div className="text-center">
// // // //               <div className="flex items-center justify-center gap-2 mb-2">
// // // //                 <Activity className="h-5 w-5 text-primary" />
// // // //               </div>
// // // //               <p className="text-3xl font-bold">99.8%</p>
// // // //               <p className="text-xs text-muted-foreground">System Uptime</p>
// // // //             </div>
// // // //             <div className="text-center">
// // // //               <div className="flex items-center justify-center gap-2 mb-2">
// // // //                 <CheckCircle2 className="h-5 w-5 text-success" />
// // // //               </div>
// // // //               <p className="text-3xl font-bold">4.2s</p>
// // // //               <p className="text-xs text-muted-foreground">Avg Response Time</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { mockConsignments, dashboardStats as initialStats } from "@/data/mockData";
// // // import { StatCard } from "@/components/StatCard";
// // // import { AlertCard } from "@/components/AlertCard";
// // // import { ConsignmentCard } from "@/components/ConsignmentCard";
// // // import { DashboardHeader } from "@/components/DashboardHeader";
// // // import { IntegrityModule } from "./IntegrityModule";
// // // import { AlertModal } from "./AlertModal";
// // // import { 
// // //   Package, 
// // //   AlertTriangle, 
// // //   CheckCircle2, 
// // //   DollarSign, 
// // //   Clock, 
// // //   UserX, 
// // //   Sliders, 
// // //   TrendingUp,
// // //   Activity 
// // // } from "lucide-react";

// // // export function CommandCenter() {
// // //   const navigate = useNavigate();
// // //   const [dashboardStats, setDashboardStats] = useState(initialStats);
// // //   const [selectedAlert, setSelectedAlert] = useState(null);

// // //   const allAlerts = mockConsignments.flatMap(c => 
// // //     c.alerts.map(a => ({ ...a, consignmentId: c.id }))
// // //   );

// // //   const criticalAlerts = allAlerts.filter(a => a.severity === "critical" || a.severity === "high");
// // //   const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

// // //   // Live KPI updates for demo purposes
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setDashboardStats(prev => ({
// // //         ...prev,
// // //         pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 5 - 2)),
// // //         highRiskAlerts: Math.max(0, prev.highRiskAlerts + Math.floor(Math.random() * 2)),
// // //         ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 2 - 1)),
// // //       }));
// // //     }, 5000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col h-full">
// // //       <DashboardHeader 
// // //         title="Command Center"
// // //         subtitle="WCO — Vigilant Agile Risk & Integrity Suite"
// // //       />

// // //       <div className="flex-1 p-6 overflow-auto">
// // //         {/* Key Metrics */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// // //           <StatCard
// // //             title="Pending Consignments"
// // //             value={dashboardStats.pendingConsignments}
// // //             subtitle="Awaiting processing"
// // //             icon={Package}
// // //           />
// // //           <StatCard
// // //             title="High-Risk Alerts"
// // //             value={dashboardStats.highRiskAlerts}
// // //             subtitle="Require attention"
// // //             icon={AlertTriangle}
// // //             variant="danger"
// // //           />
// // //           <StatCard
// // //             title="Cleared Today"
// // //             value={dashboardStats.clearedToday}
// // //             subtitle="Successfully processed"
// // //             icon={CheckCircle2}
// // //             variant="success"
// // //           />
// // //           <StatCard
// // //             title="Revenue at Risk"
// // //             value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
// // //             subtitle="Potential exposure"
// // //             icon={DollarSign}
// // //             variant="warning"
// // //           />
// // //         </div>

// // //         {/* Critical Alerts */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
// // //           <div className="lg:col-span-1 space-y-4">
// // //             <div className="flex items-center justify-between">
// // //               <h2 className="font-semibold flex items-center gap-2">
// // //                 <span className="relative flex h-2 w-2">
// // //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
// // //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
// // //                 </span>
// // //                 Critical Alerts
// // //               </h2>
// // //               <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
// // //             </div>
// // //             <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// // //               {criticalAlerts.map(alert => (
// // //                 <AlertCard
// // //                   key={alert.id}
// // //                   alert={alert}
// // //                   consignmentId={alert.consignmentId}
// // //                   onClick={() => setSelectedAlert(alert)}
// // //                 />
// // //               ))}
// // //               {criticalAlerts.length === 0 && (
// // //                 <div className="glass-card rounded-xl p-6 text-center border border-border/50">
// // //                   <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
// // //                   <p className="text-sm text-muted-foreground">No critical alerts</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* High-Risk Consignments */}
// // //           <div className="lg:col-span-2 space-y-4">
// // //             <div className="flex items-center justify-between">
// // //               <h2 className="font-semibold">High-Risk Consignments</h2>
// // //               <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// // //               {highRiskConsignments.map(consignment => (
// // //                 <ConsignmentCard
// // //                   key={consignment.id}
// // //                   consignment={consignment}
// // //                   onClick={() => navigate(`/consignment/${consignment.id}`)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Integrity Module */}
// // //         {/* <IntegrityModule /> */}

// // //       </div>

// // //       {/* Alert Modal */}
// // //       {selectedAlert && <AlertModal alert={selectedAlert} onClose={() => setSelectedAlert(null)} />}
// // //     </div>

// // //      /* Performance Metrics */
// // //         <div className="mt-6 glass-card rounded-xl p-6 border border-border/50">
// // //           <h2 className="font-semibold mb-4">System Performance</h2>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // //             <div className="text-center">
// // //               <div className="flex items-center justify-center gap-2 mb-2">
// // //                 <Clock className="h-5 w-5 text-muted-foreground" />
// // //               </div>
// // //               <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
// // //               <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
// // //             </div>
// // //             <div className="text-center">
// // //               <div className="flex items-center justify-center gap-2 mb-2">
// // //                 <TrendingUp className="h-5 w-5 text-success" />
// // //               </div>
// // //               <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
// // //               <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
// // //             </div>
// // //             <div className="text-center">
// // //               <div className="flex items-center justify-center gap-2 mb-2">
// // //                 <Activity className="h-5 w-5 text-primary" />
// // //               </div>
// // //               <p className="text-3xl font-bold">99.8%</p>
// // //               <p className="text-xs text-muted-foreground">System Uptime</p>
// // //             </div>
// // //             <div className="text-center">
// // //               <div className="flex items-center justify-center gap-2 mb-2">
// // //                 <CheckCircle2 className="h-5 w-5 text-success" />
// // //               </div>
// // //               <p className="text-3xl font-bold">4.2s</p>
// // //               <p className="text-xs text-muted-foreground">Avg Response Time</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //   );
// // // }


// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { mockConsignments, dashboardStats as initialStats } from "@/data/mockData";
// // import { StatCard } from "@/components/StatCard";
// // import { AlertCard } from "@/components/AlertCard";
// // import { ConsignmentCard } from "@/components/ConsignmentCard";
// // import { DashboardHeader } from "@/components/DashboardHeader";
// // import { AlertModal } from "./AlertModal";
// // import { 
// //   Package, 
// //   AlertTriangle, 
// //   CheckCircle2, 
// //   DollarSign, 
// //   Clock, 
// //   Sliders, 
// //   TrendingUp,
// //   Activity 
// // } from "lucide-react";

// // export function CommandCenter() {
// //   const navigate = useNavigate();
// //   const [dashboardStats, setDashboardStats] = useState(initialStats);
// //   const [selectedAlert, setSelectedAlert] = useState<any>(null);

// //   const allAlerts = mockConsignments.flatMap(c => 
// //     c.alerts.map(a => ({ ...a, consignmentId: c.id }))
// //   );

// //   const criticalAlerts = allAlerts.filter(a => a.severity === "critical" || a.severity === "high");
// //   const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

// //   // Live KPI updates for demo purposes
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setDashboardStats(prev => ({
// //         ...prev,
// //         pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 5 - 2)),
// //         highRiskAlerts: Math.max(0, prev.highRiskAlerts + Math.floor(Math.random() * 2)),
// //         ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 2 - 1)),
// //       }));
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="flex flex-col h-full">
// //       <DashboardHeader 
// //         title="Command Center"
// //         subtitle="WCO — Vigilant Agile Risk & Integrity Suite"
// //       />

// //       <div className="flex-1 p-6 overflow-auto">
// //         {/* Key Metrics */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
// //           <StatCard
// //             title="Pending Consignments"
// //             value={dashboardStats.pendingConsignments}
// //             subtitle="Awaiting processing"
// //             icon={Package}
// //           />
// //           <StatCard
// //             title="High-Risk Alerts"
// //             value={dashboardStats.highRiskAlerts}
// //             subtitle="Require attention"
// //             icon={AlertTriangle}
// //             variant="danger"
// //           />
// //           <StatCard
// //             title="Cleared Today"
// //             value={dashboardStats.clearedToday}
// //             subtitle="Successfully processed"
// //             icon={CheckCircle2}
// //             variant="success"
// //           />
// //           <StatCard
// //             title="Revenue at Risk"
// //             value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
// //             subtitle="Potential exposure"
// //             icon={DollarSign}
// //             variant="warning"
// //           />
// //         </div>

// //         {/* Critical Alerts */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
// //           <div className="lg:col-span-1 space-y-4">
// //             <div className="flex items-center justify-between">
// //               <h2 className="font-semibold flex items-center gap-2">
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
// //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
// //                 </span>
// //                 Critical Alerts
// //               </h2>
// //               <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
// //             </div>
// //             <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// //               {criticalAlerts.map(alert => (
// //                 <AlertCard
// //                   key={alert.id}
// //                   alert={alert}
// //                   consignmentId={alert.consignmentId}
// //                   onClick={() => setSelectedAlert(alert)}
// //                 />
// //               ))}
// //               {criticalAlerts.length === 0 && (
// //                 <div className="glass-card rounded-xl p-6 text-center border border-border/50">
// //                   <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
// //                   <p className="text-sm text-muted-foreground">No critical alerts</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* High-Risk Consignments */}
// //           <div className="lg:col-span-2 space-y-4">
// //             <div className="flex items-center justify-between">
// //               <h2 className="font-semibold">High-Risk Consignments</h2>
// //               <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
// //               {highRiskConsignments.map(consignment => (
// //                 <ConsignmentCard
// //                   key={consignment.id}
// //                   consignment={consignment}
// //                   onClick={() => navigate(`/consignment/${consignment.id}`)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Performance Metrics */}
// //         <div className="mt-6 glass-card rounded-xl p-6 border border-border/50">
// //           <h2 className="font-semibold mb-4">System Performance</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             <div className="text-center">
// //               <div className="flex items-center justify-center gap-2 mb-2">
// //                 <Clock className="h-5 w-5 text-muted-foreground" />
// //               </div>
// //               <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
// //               <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="flex items-center justify-center gap-2 mb-2">
// //                 <TrendingUp className="h-5 w-5 text-success" />
// //               </div>
// //               <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
// //               <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="flex items-center justify-center gap-2 mb-2">
// //                 <Activity className="h-5 w-5 text-primary" />
// //               </div>
// //               <p className="text-3xl font-bold">99.8%</p>
// //               <p className="text-xs text-muted-foreground">System Uptime</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="flex items-center justify-center gap-2 mb-2">
// //                 <CheckCircle2 className="h-5 w-5 text-success" />
// //               </div>
// //               <p className="text-3xl font-bold">4.2s</p>
// //               <p className="text-xs text-muted-foreground">Avg Response Time</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Alert Modal */}
// //       {selectedAlert && <AlertModal alert={selectedAlert} onClose={() => setSelectedAlert(null)} />}
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSharedData } from "@/contexts/SharedDataContext";
// import { StatCard } from "@/components/StatCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { 
//   Package, 
//   AlertTriangle, 
//   CheckCircle2, 
//   DollarSign, 
//   Clock, 
//   TrendingUp,
//   Activity,
//   AlertCircle,
//   Shield,
//   FileText,
//   Eye
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { cn } from "@/lib/utils";

// interface CriticalAlert {
//   id: string;
//   severity: "low" | "medium" | "high" | "critical";
//   type: "integrity" | "revenue" | "society" | "compliance";
//   title: string;
//   description: string;
//   timestamp: string;
//   consignmentId: string;
//   orderId: string;
//   importerName: string;
// }

// interface HighRiskConsignment {
//   id: string;
//   orderId: string;
//   importerName: string;
//   productTitle: string;
//   riskScore: number;
//   valueAED: number;
//   threatType: string;
//   status: 'active' | 'held' | 'investigating' | 'cleared';
//   alerts: number;
// }

// export function CommandCenter() {
//   const navigate = useNavigate();
//   const { processedData } = useSharedData();
//   const [dashboardStats, setDashboardStats] = useState({
//     pendingConsignments: 0,
//     highRiskAlerts: 0,
//     clearedToday: 0,
//     revenueAtRisk: 0,
//     averageClearanceTime: 2.3,
//     ruleHitRate: 85,
//     systemUptime: 99.8,
//     avgResponseTime: 4.2
//   });
  
//   const [criticalAlerts, setCriticalAlerts] = useState<CriticalAlert[]>([]);
//   const [highRiskConsignments, setHighRiskConsignments] = useState<HighRiskConsignment[]>([]);

//   // Generate data from processed CSV
//   useEffect(() => {
//     if (processedData.length === 0) {
//       setCriticalAlerts([]);
//       setHighRiskConsignments([]);
//       setDashboardStats({
//         pendingConsignments: 0,
//         highRiskAlerts: 0,
//         clearedToday: 0,
//         revenueAtRisk: 0,
//         averageClearanceTime: 2.3,
//         ruleHitRate: 85,
//         systemUptime: 99.8,
//         avgResponseTime: 4.2
//       });
//       return;
//     }

//     const parcels = processedData as any[];
    
//     // Calculate stats
//     const highRiskParcels = parcels.filter(p => p.is_high_risk || p.is_split_shipment);
//     const pendingParcels = parcels.filter(p => p.assigned_risk_lane === 'RED' || p.assigned_risk_lane === 'BLACK');
//     const clearedParcels = parcels.filter(p => p.assigned_risk_lane === 'GREEN');
    
//     const totalDuty = parcels.reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0);
//     const potentialDuty = parcels.reduce((sum, p) => {
//       const priceAED = p.item_price_aed || 0;
//       return sum + (priceAED > 1000 ? priceAED * 0.05 : 0);
//     }, 0);
    
//     const revenueAtRisk = potentialDuty - totalDuty;
//     const flaggedParcels = parcels.filter(p => 
//       p.is_high_risk || 
//       p.is_split_shipment || 
//       p.duty_applicable ||
//       p.risk_categories?.length > 0
//     ).length;
    
//     const ruleHitRate = processedData.length > 0 
//       ? Math.round((flaggedParcels / processedData.length) * 100) 
//       : 85;

//     setDashboardStats({
//       pendingConsignments: pendingParcels.length,
//       highRiskAlerts: highRiskParcels.length,
//       clearedToday: clearedParcels.length,
//       revenueAtRisk,
//       averageClearanceTime: 2.3,
//       ruleHitRate,
//       systemUptime: 99.8,
//       avgResponseTime: 4.2
//     });

//     // Generate Critical Alerts from CSV data
//     const alerts: CriticalAlert[] = [];
    
//     // High-risk item alerts
//     parcels
//       .filter(p => p.is_high_risk)
//       .slice(0, 3)
//       .forEach((parcel, index) => {
//         alerts.push({
//           id: `alert-hr-${index}`,
//           severity: "critical",
//           type: "society",
//           title: "High-Risk Goods Detected",
//           description: `${parcel.product_title || 'Unknown product'} requires inspection`,
//           timestamp: new Date().toISOString(),
//           consignmentId: `cons-${index}`,
//           orderId: parcel.order_id || `ORD-${index}`,
//           importerName: parcel.importer_name || 'Unknown'
//         });
//       });

//     // Split shipment alerts
//     parcels
//       .filter(p => p.is_split_shipment)
//       .slice(0, 2)
//       .forEach((parcel, index) => {
//         alerts.push({
//           id: `alert-ss-${index}`,
//           severity: "high",
//           type: "revenue",
//           title: "Split Shipment Detected",
//           description: `${parcel.importer_name || 'Importer'} attempted split shipment`,
//           timestamp: new Date().toISOString(),
//           consignmentId: `cons-ss-${index}`,
//           orderId: parcel.order_id || `ORD-SS-${index}`,
//           importerName: parcel.importer_name || 'Unknown'
//         });
//       });

//     // Duty evasion alerts
//     parcels
//       .filter(p => p.duty_applicable && p.duty_payable_aed === 0)
//       .slice(0, 2)
//       .forEach((parcel, index) => {
//         alerts.push({
//           id: `alert-de-${index}`,
//           severity: "high",
//           type: "revenue",
//           title: "Potential Duty Evasion",
//           description: `Duty not applied to ${parcel.product_title || 'item'} worth AED ${parcel.item_price_aed?.toFixed(2) || '0.00'}`,
//           timestamp: new Date().toISOString(),
//           consignmentId: `cons-de-${index}`,
//           orderId: parcel.order_id || `ORD-DE-${index}`,
//           importerName: parcel.importer_name || 'Unknown'
//         });
//       });

//     setCriticalAlerts(alerts);

//     // Generate High-Risk Consignments
//     const consignments: HighRiskConsignment[] = parcels
//       .filter(p => p.is_high_risk || p.is_split_shipment || p.duty_applicable)
//       .slice(0, 6)
//       .map((parcel, index) => ({
//         id: `cons-${index}`,
//         orderId: parcel.order_id || `ORD-${index}`,
//         importerName: parcel.importer_name || 'Unknown Importer',
//         productTitle: parcel.product_title || 'Unknown Product',
//         riskScore: parcel.is_high_risk ? 85 : parcel.is_split_shipment ? 72 : 65,
//         valueAED: parcel.item_price_aed || 0,
//         threatType: parcel.is_high_risk ? 'High-Risk Goods' : 
//                    parcel.is_split_shipment ? 'Split Shipment' : 'Duty Evasion',
//         status: 'active',
//         alerts: parcel.is_high_risk ? 3 : parcel.is_split_shipment ? 2 : 1
//       }));

//     setHighRiskConsignments(consignments);

//   }, [processedData]);

//   // Live updates simulation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDashboardStats(prev => ({
//         ...prev,
//         pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 3 - 1)),
//         clearedToday: Math.max(0, prev.clearedToday + Math.floor(Math.random() * 2)),
//         ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 1 - 0.5)),
//       }));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const getSeverityColor = (severity: CriticalAlert["severity"]) => {
//     switch (severity) {
//       case "critical": return "bg-red-500";
//       case "high": return "bg-orange-500";
//       case "medium": return "bg-yellow-500";
//       default: return "bg-blue-500";
//     }
//   };

//   const getTypeIcon = (type: CriticalAlert["type"]) => {
//     switch (type) {
//       case "integrity": return <Shield className="h-4 w-4" />;
//       case "revenue": return <DollarSign className="h-4 w-4" />;
//       case "society": return <AlertTriangle className="h-4 w-4" />;
//       default: return <FileText className="h-4 w-4" />;
//     }
//   };

//   const getTypeColor = (type: CriticalAlert["type"]) => {
//     switch (type) {
//       case "integrity": return "text-blue-600 bg-blue-100";
//       case "revenue": return "text-green-600 bg-green-100";
//       case "society": return "text-red-600 bg-red-100";
//       default: return "text-gray-600 bg-gray-100";
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Command Center"
//         subtitle="WCO — Parcel Intelligence Vigilant Agile Risk and Integrity Suite"
//       />

//       <div className="flex-1 p-6 overflow-auto">
//         {/* Key Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             title="Pending Consignments"
//             value={dashboardStats.pendingConsignments.toString()}
//             subtitle="Awaiting processing"
//             icon={Package}
//           />
//           <StatCard
//             title="High-Risk Alerts"
//             value={dashboardStats.highRiskAlerts.toString()}
//             subtitle="Require attention"
//             icon={AlertTriangle}
//             variant="danger"
//           />
//           <StatCard
//             title="Cleared Today"
//             value={dashboardStats.clearedToday.toString()}
//             subtitle="Successfully processed"
//             icon={CheckCircle2}
//             variant="success"
//           />
//           <StatCard
//             title="Revenue at Risk"
//             value={`AED ${dashboardStats.revenueAtRisk.toFixed(2)}`}
//             subtitle="Potential exposure"
//             icon={DollarSign}
//             variant="warning"
//           />
//         </div>

//         {/* Main Content: Critical Alerts + High-Risk Consignments */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//           {/* LEFT COLUMN: Critical Alerts with red/pulsing indicators */}
//           <div className="lg:col-span-1 space-y-4">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold flex items-center gap-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
//                 </span>
//                 Critical Alerts
//               </h2>
//               <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
//             </div>
            
//             <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
//               {processedData.length === 0 ? (
//                 <Card className="border-dashed">
//                   <CardContent className="p-6 text-center">
//                     <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
//                     <p className="text-sm text-muted-foreground">Upload CSV to see alerts</p>
//                   </CardContent>
//                 </Card>
//               ) : criticalAlerts.length === 0 ? (
//                 <Card>
//                   <CardContent className="p-6 text-center">
//                     <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
//                     <p className="text-sm text-muted-foreground">No critical alerts</p>
//                   </CardContent>
//                 </Card>
//               ) : (
//                 criticalAlerts.map(alert => (
//                   <Card 
//                     key={alert.id} 
//                     className={cn(
//                       "cursor-pointer border-l-4 transition-all hover:shadow-md",
//                       alert.severity === "critical" ? "border-l-red-500" :
//                       alert.severity === "high" ? "border-l-orange-500" :
//                       "border-l-yellow-500"
//                     )}
//                     onClick={() => navigate('/parcel-intel')}
//                   >
//                     <CardContent className="p-4">
//                       <div className="flex items-start gap-3">
//                         <div className="relative">
//                           <div className={cn(
//                             "w-3 h-3 rounded-full",
//                             getSeverityColor(alert.severity)
//                           )} />
//                           {alert.severity === "critical" && (
//                             <span className="absolute -top-1 -right-1 flex h-2 w-2">
//                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
//                               <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
//                             </span>
//                           )}
//                         </div>
                        
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center justify-between mb-1">
//                             <div className="flex items-center gap-2">
//                               {getTypeIcon(alert.type)}
//                               <p className="text-sm font-medium truncate">{alert.title}</p>
//                             </div>
//                             <Badge 
//                               variant={alert.severity === "critical" ? "destructive" : "outline"}
//                               className="text-xs"
//                             >
//                               {alert.severity}
//                             </Badge>
//                           </div>
                          
//                           <p className="text-xs text-muted-foreground mb-2 truncate">
//                             {alert.description}
//                           </p>
                          
//                           <div className="flex items-center justify-between text-xs">
//                             <div className="flex items-center gap-2">
//                               <span className={cn(
//                                 "px-2 py-0.5 rounded-full text-xs",
//                                 getTypeColor(alert.type)
//                               )}>
//                                 {alert.type}
//                               </span>
//                               <span className="text-muted-foreground">
//                                 {alert.orderId}
//                               </span>
//                             </div>
//                             <span className="text-muted-foreground">
//                               {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               )}
//             </div>
            
//             {processedData.length > 0 && criticalAlerts.length > 0 && (
//               <Button 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={() => navigate('/parcel-intel')}
//               >
//                 <Eye className="h-4 w-4 mr-2" />
//                 View All Alerts
//               </Button>
//             )}
//           </div>

//           {/* RIGHT COLUMN: High-Risk Consignments with cards */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold">High-Risk Consignments</h2>
//               <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
//             </div>
            
//             {processedData.length === 0 ? (
//               <Card className="border-dashed">
//                 <CardContent className="p-12 text-center">
//                   <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
//                   <p className="text-muted-foreground mb-6">
//                     Upload and process CSV data to see high-risk consignments
//                   </p>
//                   <Button onClick={() => navigate('/parcel-intel')}>
//                     Go to Parcel Intelligence
//                   </Button>
//                 </CardContent>
//               </Card>
//             ) : highRiskConsignments.length === 0 ? (
//               <Card>
//                 <CardContent className="p-12 text-center">
//                   <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
//                   <h3 className="font-medium mb-2">No High-Risk Items</h3>
//                   <p className="text-sm text-muted-foreground">
//                     All parcels are within acceptable risk parameters
//                   </p>
//                 </CardContent>
//               </Card>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
//                 {highRiskConsignments.map(consignment => (
//                   <Card 
//                     key={consignment.id} 
//                     className="cursor-pointer hover:shadow-md transition-all border"
//                     onClick={() => navigate('/parcel-intel')}
//                   >
//                     <CardContent className="p-4">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h3 className="font-bold text-lg">{consignment.orderId}</h3>
//                           <p className="text-sm text-muted-foreground truncate">
//                             {consignment.importerName}
//                           </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Badge 
//                             variant={
//                               consignment.riskScore >= 80 ? "destructive" :
//                               consignment.riskScore >= 60 ? "default" : "outline"
//                             }
//                           >
//                             {consignment.riskScore}
//                           </Badge>
//                           {consignment.alerts > 0 && (
//                             <Badge variant="outline" className="bg-red-50 text-red-700">
//                               <AlertCircle className="h-3 w-3 mr-1" />
//                               {consignment.alerts}
//                             </Badge>
//                           )}
//                         </div>
//                       </div>
                      
//                       <div className="mb-3">
//                         <p className="font-medium text-sm truncate">{consignment.productTitle}</p>
//                         <div className="flex items-center justify-between mt-1">
//                           <Badge variant="outline" className="text-xs">
//                             {consignment.threatType}
//                           </Badge>
//                           <span className="text-sm font-bold">
//                             AED {consignment.valueAED.toFixed(2)}
//                           </span>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className={cn(
//                             "w-2 h-2 rounded-full",
//                             consignment.status === 'active' ? "bg-red-500" :
//                             consignment.status === 'held' ? "bg-yellow-500" : "bg-green-500"
//                           )} />
//                           <span className="text-xs text-muted-foreground capitalize">
//                             {consignment.status}
//                           </span>
//                         </div>
//                         <Button 
//                           size="sm" 
//                           variant="ghost"
//                           className="h-8 px-2"
//                         >
//                           <Eye className="h-3 w-3" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             )}
            
//             {processedData.length > 0 && highRiskConsignments.length > 0 && (
//               <div className="flex gap-2">
//                 <Button 
//                   variant="outline" 
//                   className="flex-1"
//                   onClick={() => navigate('/integrity')}
//                 >
//                   <Shield className="h-4 w-4 mr-2" />
//                   Integrity Analysis
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   className="flex-1"
//                   onClick={() => navigate('/society')}
//                 >
//                   <AlertTriangle className="h-4 w-4 mr-2" />
//                   Society Protection
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Performance Metrics (KEPT FROM YOUR ORIGINAL) */}
//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle>System Performance</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <Clock className="h-5 w-5 text-muted-foreground" />
//                 </div>
//                 <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
//                 <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <TrendingUp className="h-5 w-5 text-green-500" />
//                 </div>
//                 <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
//                 <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <Activity className="h-5 w-5 text-blue-500" />
//                 </div>
//                 <p className="text-3xl font-bold">99.8%</p>
//                 <p className="text-xs text-muted-foreground">System Uptime</p>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 </div>
//                 <p className="text-3xl font-bold">4.2s</p>
//                 <p className="text-xs text-muted-foreground">Avg Response Time</p>
//               </div>
//             </div>
            
//             {/* Progress bars for metrics */}
//             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span className="text-muted-foreground">System Load</span>
//                   <span className="font-medium">45%</span>
//                 </div>
//                 <Progress value={45} className="h-2" />
//               </div>
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span className="text-muted-foreground">Data Processing</span>
//                   <span className="font-medium">{processedData.length > 0 ? '100%' : '0%'}</span>
//                 </div>
//                 <Progress value={processedData.length > 0 ? 100 : 0} className="h-2" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSharedData } from "@/contexts/SharedDataContext";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  TrendingUp,
  Activity,
  AlertCircle,
  Shield,
  FileText,
  Eye,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  TrendingDown,
  BarChart3,
  Users,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CriticalAlert {
  id: string;
  severity: "low" | "medium" | "high" | "critical";
  type: "integrity" | "revenue" | "society" | "compliance";
  title: string;
  description: string;
  timestamp: string;
  consignmentId: string;
  orderId: string;
  importerName: string;
  originalParcelData?: any;
}

interface HighRiskConsignment {
  id: string;
  orderId: string;
  importerName: string;
  productTitle: string;
  riskScore: number;
  valueAED: number;
  threatType: string;
  status: 'active' | 'held' | 'investigating' | 'cleared';
  alerts: number;
  hsCode?: string;
  originalParcelData?: any;
}

export function CommandCenter() {
  const navigate = useNavigate();
  const { processedData } = useSharedData();
  const [dashboardStats, setDashboardStats] = useState({
    pendingConsignments: 0,
    highRiskAlerts: 0,
    clearedToday: 0,
    revenueAtRisk: 0,
    averageClearanceTime: 2.3,
    ruleHitRate: 85,
    systemUptime: 99.8,
    avgResponseTime: 4.2,
    totalParcels: 0,
    splitShipments: 0,
    dutyCollected: 0,
    uniqueImporters: 0
  });
  
  const [criticalAlerts, setCriticalAlerts] = useState<CriticalAlert[]>([]);
  const [filteredAlerts, setFilteredAlerts] = useState<CriticalAlert[]>([]);
  const [highRiskConsignments, setHighRiskConsignments] = useState<HighRiskConsignment[]>([]);
  const [filteredConsignments, setFilteredConsignments] = useState<HighRiskConsignment[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAlertFilter, setActiveAlertFilter] = useState<string | null>(null);
  const [activeConsignmentFilter, setActiveConsignmentFilter] = useState<string | null>(null);
  const [alertPage, setAlertPage] = useState(1);
  const [consignmentPage, setConsignmentPage] = useState(1);
  const alertsPerPage = 5;
  const consignmentsPerPage = 6;

  // Generate data from processed CSV
  useEffect(() => {
    if (processedData.length === 0) {
      setCriticalAlerts([]);
      setFilteredAlerts([]);
      setHighRiskConsignments([]);
      setFilteredConsignments([]);
      setDashboardStats({
        pendingConsignments: 0,
        highRiskAlerts: 0,
        clearedToday: 0,
        revenueAtRisk: 0,
        averageClearanceTime: 2.3,
        ruleHitRate: 85,
        systemUptime: 99.8,
        avgResponseTime: 4.2,
        totalParcels: 0,
        splitShipments: 0,
        dutyCollected: 0,
        uniqueImporters: 0
      });
      return;
    }

    const parcels = processedData as any[];
    
    // Calculate comprehensive stats
    const highRiskParcels = parcels.filter(p => p.is_high_risk || p.is_split_shipment);
    const pendingParcels = parcels.filter(p => p.assigned_risk_lane === 'RED' || p.assigned_risk_lane === 'BLACK');
    const clearedParcels = parcels.filter(p => p.assigned_risk_lane === 'GREEN');
    const splitShipments = parcels.filter(p => p.is_split_shipment);
    
    const totalDuty = parcels.reduce((sum, p) => sum + (p.duty_payable_aed || 0), 0);
    const potentialDuty = parcels.reduce((sum, p) => {
      const priceAED = p.item_price_aed || 0;
      return sum + (priceAED > 1000 ? priceAED * 0.05 : 0);
    }, 0);
    
    const revenueAtRisk = Math.max(0, potentialDuty - totalDuty);
    const flaggedParcels = parcels.filter(p => 
      p.is_high_risk || 
      p.is_split_shipment || 
      p.duty_applicable ||
      p.risk_categories?.length > 0
    ).length;
    
    const ruleHitRate = processedData.length > 0 
      ? Math.round((flaggedParcels / processedData.length) * 100) 
      : 85;

    const uniqueImporters = new Set(parcels.map(p => p.importer_name)).size;

    setDashboardStats({
      pendingConsignments: pendingParcels.length,
      highRiskAlerts: highRiskParcels.length,
      clearedToday: clearedParcels.length,
      revenueAtRisk,
      averageClearanceTime: 2.3,
      ruleHitRate,
      systemUptime: 99.8,
      avgResponseTime: 4.2,
      totalParcels: parcels.length,
      splitShipments: splitShipments.length,
      dutyCollected: totalDuty,
      uniqueImporters
    });

    // Generate Critical Alerts from CSV data - NO LIMIT
    const alerts: CriticalAlert[] = [];
    
    // High-risk item alerts
    parcels
      .filter(p => p.is_high_risk)
      .forEach((parcel, index) => {
        alerts.push({
          id: `alert-hr-${parcel.order_id || index}`,
          severity: "critical",
          type: "society",
          title: "High-Risk Goods Detected",
          description: `${parcel.product_title || 'Unknown product'} requires immediate inspection`,
          timestamp: new Date().toISOString(),
          consignmentId: `cons-${index}`,
          orderId: parcel.order_id || `ORD-${index}`,
          importerName: parcel.importer_name || 'Unknown',
          originalParcelData: parcel
        });
      });

    // Split shipment alerts
    parcels
      .filter(p => p.is_split_shipment)
      .forEach((parcel, index) => {
        alerts.push({
          id: `alert-ss-${parcel.order_id || index}`,
          severity: "high",
          type: "revenue",
          title: "Split Shipment Detected",
          description: `${parcel.importer_name || 'Importer'} attempted split shipment - Potential duty evasion`,
          timestamp: new Date().toISOString(),
          consignmentId: `cons-ss-${index}`,
          orderId: parcel.order_id || `ORD-SS-${index}`,
          importerName: parcel.importer_name || 'Unknown',
          originalParcelData: parcel
        });
      });

    // Duty evasion alerts
    parcels
      .filter(p => p.duty_applicable && p.duty_payable_aed === 0)
      .forEach((parcel, index) => {
        alerts.push({
          id: `alert-de-${parcel.order_id || index}`,
          severity: "high",
          type: "revenue",
          title: "Potential Duty Evasion",
          description: `Duty not applied to ${parcel.product_title || 'item'} worth AED ${parcel.item_price_aed?.toFixed(2) || '0.00'}`,
          timestamp: new Date().toISOString(),
          consignmentId: `cons-de-${index}`,
          orderId: parcel.order_id || `ORD-DE-${index}`,
          importerName: parcel.importer_name || 'Unknown',
          originalParcelData: parcel
        });
      });

    // High value alerts
    parcels
      .filter(p => p.item_price_aed > 10000)
      .forEach((parcel, index) => {
        alerts.push({
          id: `alert-hv-${parcel.order_id || index}`,
          severity: "medium",
          type: "revenue",
          title: "High Value Shipment",
          description: `High-value item: ${parcel.product_title || 'Product'} worth AED ${parcel.item_price_aed?.toFixed(2) || '0.00'}`,
          timestamp: new Date().toISOString(),
          consignmentId: `cons-hv-${index}`,
          orderId: parcel.order_id || `ORD-HV-${index}`,
          importerName: parcel.importer_name || 'Unknown',
          originalParcelData: parcel
        });
      });

    // Sort alerts by severity
    alerts.sort((a, b) => {
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });

    setCriticalAlerts(alerts);
    setFilteredAlerts(alerts);

    // Generate High-Risk Consignments - NO LIMIT
    const consignments: HighRiskConsignment[] = parcels
      .filter(p => p.is_high_risk || p.is_split_shipment || p.duty_applicable || p.assigned_risk_lane === 'RED' || p.assigned_risk_lane === 'BLACK')
      .map((parcel, index) => {
        let threatType = 'Unknown';
        let riskScore = 50;
        
        if (parcel.is_high_risk && parcel.is_split_shipment) {
          threatType = 'High-Risk + Split Shipment';
          riskScore = 90;
        } else if (parcel.is_high_risk) {
          threatType = 'High-Risk Goods';
          riskScore = 85;
        } else if (parcel.is_split_shipment) {
          threatType = 'Split Shipment';
          riskScore = 75;
        } else if (parcel.duty_applicable) {
          threatType = 'Duty Evasion Risk';
          riskScore = 65;
        } else if (parcel.assigned_risk_lane === 'RED') {
          threatType = 'Red Lane - Inspection';
          riskScore = 60;
        } else if (parcel.assigned_risk_lane === 'BLACK') {
          threatType = 'Black Lane - Security Hold';
          riskScore = 95;
        }

        let status: HighRiskConsignment['status'] = 'active';
        if (parcel.assigned_risk_lane === 'GREEN') status = 'cleared';
        else if (parcel.assigned_risk_lane === 'BLACK') status = 'held';
        else if (parcel.is_high_risk) status = 'investigating';

        const alertsCount = (parcel.is_high_risk ? 3 : 0) + 
                           (parcel.is_split_shipment ? 2 : 0) + 
                           (parcel.duty_applicable ? 1 : 0);

        return {
          id: `cons-${parcel.order_id || index}`,
          orderId: parcel.order_id || `ORD-${index}`,
          importerName: parcel.importer_name || 'Unknown Importer',
          productTitle: parcel.product_title || 'Unknown Product',
          riskScore,
          valueAED: parcel.item_price_aed || 0,
          threatType,
          status,
          alerts: alertsCount,
          hsCode: parcel.predicted_hs_code,
          originalParcelData: parcel
        };
      });

    // Sort consignments by risk score
    consignments.sort((a, b) => b.riskScore - a.riskScore);

    setHighRiskConsignments(consignments);
    setFilteredConsignments(consignments);

  }, [processedData]);

  // Filter alerts based on search and filter
  useEffect(() => {
    let filtered = criticalAlerts;
    
    // Filter by severity
    if (activeAlertFilter && activeAlertFilter !== 'all') {
      filtered = filtered.filter(alert => alert.severity === activeAlertFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(alert => 
        alert.orderId.toLowerCase().includes(query) ||
        alert.importerName.toLowerCase().includes(query) ||
        alert.title.toLowerCase().includes(query) ||
        alert.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredAlerts(filtered);
    setAlertPage(1); // Reset to first page when filters change
  }, [criticalAlerts, activeAlertFilter, searchQuery]);

  // Filter consignments based on search and filter
  useEffect(() => {
    let filtered = highRiskConsignments;
    
    // Filter by status
    if (activeConsignmentFilter && activeConsignmentFilter !== 'all') {
      filtered = filtered.filter(consignment => consignment.status === activeConsignmentFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(consignment => 
        consignment.orderId.toLowerCase().includes(query) ||
        consignment.importerName.toLowerCase().includes(query) ||
        consignment.productTitle.toLowerCase().includes(query) ||
        consignment.threatType.toLowerCase().includes(query)
      );
    }
    
    setFilteredConsignments(filtered);
    setConsignmentPage(1); // Reset to first page when filters change
  }, [highRiskConsignments, activeConsignmentFilter, searchQuery]);

  // Live updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardStats(prev => ({
        ...prev,
        pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 3 - 1)),
        clearedToday: Math.max(0, prev.clearedToday + Math.floor(Math.random() * 2)),
        ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 1 - 0.5)),
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Alert pagination
  const alertTotalPages = Math.ceil(filteredAlerts.length / alertsPerPage);
  const alertStartIndex = (alertPage - 1) * alertsPerPage;
  const alertEndIndex = alertStartIndex + alertsPerPage;
  const paginatedAlerts = filteredAlerts.slice(alertStartIndex, alertEndIndex);

  // Consignment pagination
  const consignmentTotalPages = Math.ceil(filteredConsignments.length / consignmentsPerPage);
  const consignmentStartIndex = (consignmentPage - 1) * consignmentsPerPage;
  const consignmentEndIndex = consignmentStartIndex + consignmentsPerPage;
  const paginatedConsignments = filteredConsignments.slice(consignmentStartIndex, consignmentEndIndex);

  const getSeverityColor = (severity: CriticalAlert["severity"]) => {
    switch (severity) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      default: return "bg-blue-500";
    }
  };

  const getTypeIcon = (type: CriticalAlert["type"]) => {
    switch (type) {
      case "integrity": return <Shield className="h-4 w-4" />;
      case "revenue": return <DollarSign className="h-4 w-4" />;
      case "society": return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: CriticalAlert["type"]) => {
    switch (type) {
      case "integrity": return "text-blue-600 bg-blue-100";
      case "revenue": return "text-green-600 bg-green-100";
      case "society": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const severityFilters = [
    { id: 'all', label: 'All Severities', count: criticalAlerts.length },
    { id: 'critical', label: 'Critical', count: criticalAlerts.filter(a => a.severity === 'critical').length },
    { id: 'high', label: 'High', count: criticalAlerts.filter(a => a.severity === 'high').length },
    { id: 'medium', label: 'Medium', count: criticalAlerts.filter(a => a.severity === 'medium').length },
    { id: 'low', label: 'Low', count: criticalAlerts.filter(a => a.severity === 'low').length },
  ];

  const statusFilters = [
    { id: 'all', label: 'All Status', count: highRiskConsignments.length },
    { id: 'active', label: 'Active', count: highRiskConsignments.filter(c => c.status === 'active').length },
    { id: 'held', label: 'Held', count: highRiskConsignments.filter(c => c.status === 'held').length },
    { id: 'investigating', label: 'Investigating', count: highRiskConsignments.filter(c => c.status === 'investigating').length },
    { id: 'cleared', label: 'Cleared', count: highRiskConsignments.filter(c => c.status === 'cleared').length },
  ];

  const handleExportData = () => {
    if (processedData.length === 0) {
      toast.error("No data to export");
      return;
    }

    const headers = [
      'Order ID',
      'Importer Name',
      'Product Title',
      'Value AED',
      'Risk Score',
      'Status',
      'Threat Type',
      'Alerts Count',
      'HS Code'
    ];

    const csvContent = [
      headers.join(','),
      ...highRiskConsignments.map(c => [
        c.orderId,
        `"${c.importerName}"`,
        `"${c.productTitle}"`,
        c.valueAED.toFixed(2),
        c.riskScore,
        c.status,
        c.threatType,
        c.alerts,
        c.hsCode || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `command_center_data_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success("Export Complete", {
      description: `Exported ${highRiskConsignments.length} high-risk consignments to CSV`,
    });
  };

  const handleViewDetails = (alert: CriticalAlert) => {
    // Navigate to parcel intelligence with the specific order
    navigate(`/parcel-intel?orderId=${alert.orderId}`);
  };

  const handleViewConsignment = (consignment: HighRiskConsignment) => {
    // Navigate to parcel intelligence with the specific order
    navigate(`/parcel-intel?orderId=${consignment.orderId}`);
  };

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Command Center"
        subtitle="WCO — Parcel Intelligence Vigilant Agile Risk and Integrity Suite"
      />

      <div className="flex-1 p-6 overflow-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search across all alerts and consignments..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          <StatCard
            title="Total Parcels"
            value={dashboardStats.totalParcels.toLocaleString()}
            subtitle="Processed"
            icon={Package}
          />
          <StatCard
            title="High-Risk Alerts"
            value={dashboardStats.highRiskAlerts.toLocaleString()}
            subtitle="Require attention"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="Cleared Today"
            value={dashboardStats.clearedToday.toLocaleString()}
            subtitle="Successfully processed"
            icon={CheckCircle2}
            variant="success"
          />
          <StatCard
            title="Revenue at Risk"
            value={`AED ${(dashboardStats.revenueAtRisk / 1000).toFixed(1)}K`}
            subtitle="Potential exposure"
            icon={DollarSign}
            variant="warning"
          />
          <StatCard
            title="Duty Collected"
            value={`AED ${(dashboardStats.dutyCollected / 1000).toFixed(1)}K`}
            subtitle="Revenue protected"
            icon={TrendingUp}
            variant="success"
          />
          <StatCard
            title="Unique Importers"
            value={dashboardStats.uniqueImporters.toLocaleString()}
            subtitle="In system"
            icon={Users}
          />
        </div>

        {/* Main Content: Critical Alerts + High-Risk Consignments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* LEFT COLUMN: Critical Alerts with red/pulsing indicators */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  Critical Alerts
                </h2>
                <p className="text-xs text-muted-foreground">
                  {filteredAlerts.length.toLocaleString()} alerts
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2"
                onClick={handleExportData}
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
            
            {/* Severity Filters */}
            <div className="flex flex-wrap gap-2">
              {severityFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeAlertFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveAlertFilter(filter.id)}
                  className="gap-2 text-xs"
                >
                  {filter.label}
                  <Badge variant={activeAlertFilter === filter.id ? "secondary" : "outline"}>
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
              {processedData.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload CSV to see alerts</p>
                  </CardContent>
                </Card>
              ) : paginatedAlerts.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No alerts found</p>
                  </CardContent>
                </Card>
              ) : (
                paginatedAlerts.map(alert => (
                  <Card 
                    key={alert.id} 
                    className={cn(
                      "cursor-pointer border-l-4 transition-all hover:shadow-md",
                      alert.severity === "critical" ? "border-l-red-500" :
                      alert.severity === "high" ? "border-l-orange-500" :
                      "border-l-yellow-500"
                    )}
                    onClick={() => handleViewDetails(alert)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            getSeverityColor(alert.severity)
                          )} />
                          {alert.severity === "critical" && (
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(alert.type)}
                              <p className="text-sm font-medium truncate">{alert.title}</p>
                            </div>
                            <Badge 
                              variant={alert.severity === "critical" ? "destructive" : "outline"}
                              className="text-xs"
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {alert.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className={cn(
                                "px-2 py-0.5 rounded-full text-xs",
                                getTypeColor(alert.type)
                              )}>
                                {alert.type}
                              </span>
                              <span className="text-muted-foreground font-mono">
                                {alert.orderId}
                              </span>
                            </div>
                            <span className="text-muted-foreground">
                              {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Alert Pagination */}
            {filteredAlerts.length > alertsPerPage && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Showing {alertStartIndex + 1}-{Math.min(alertEndIndex, filteredAlerts.length)} of {filteredAlerts.length.toLocaleString()} alerts
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAlertPage(prev => Math.max(prev - 1, 1))}
                    disabled={alertPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Page {alertPage} of {alertTotalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAlertPage(prev => Math.min(prev + 1, alertTotalPages))}
                    disabled={alertPage === alertTotalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {processedData.length > 0 && (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/parcel-intel')}
              >
                <Eye className="h-4 w-4 mr-2" />
                View All Alerts in Parcel Intel
              </Button>
            )}
          </div>

          {/* RIGHT COLUMN: High-Risk Consignments with cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">High-Risk Consignments</h2>
                <p className="text-xs text-muted-foreground">
                  {filteredConsignments.length.toLocaleString()} consignments requiring attention
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2"
                onClick={handleExportData}
              >
                <Download className="h-4 w-4" />
                Export All
              </Button>
            </div>
            
            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
              {statusFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeConsignmentFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveConsignmentFilter(filter.id)}
                  className="gap-2 text-xs"
                >
                  {filter.label}
                  <Badge variant={activeConsignmentFilter === filter.id ? "secondary" : "outline"}>
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
            
            {processedData.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="p-12 text-center">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload and process CSV data to see high-risk consignments
                  </p>
                  <Button onClick={() => navigate('/parcel-intel')}>
                    Go to Parcel Intelligence
                  </Button>
                </CardContent>
              </Card>
            ) : paginatedConsignments.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-medium mb-2">No High-Risk Items</h3>
                  <p className="text-sm text-muted-foreground">
                    All parcels are within acceptable risk parameters
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
                {paginatedConsignments.map(consignment => (
                  <Card 
                    key={consignment.id} 
                    className="cursor-pointer hover:shadow-md transition-all border"
                    onClick={() => handleViewConsignment(consignment)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{consignment.orderId}</h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {consignment.importerName}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={
                              consignment.riskScore >= 80 ? "destructive" :
                              consignment.riskScore >= 60 ? "default" : "outline"
                            }
                          >
                            {consignment.riskScore}
                          </Badge>
                          {consignment.alerts > 0 && (
                            <Badge variant="outline" className="bg-red-50 text-red-700">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {consignment.alerts}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="font-medium text-sm line-clamp-2">{consignment.productTitle}</p>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="outline" className="text-xs">
                            {consignment.threatType}
                          </Badge>
                          <span className="text-sm font-bold">
                            AED {consignment.valueAED.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        {consignment.hsCode && (
                          <div className="text-xs text-muted-foreground mt-1">
                            HS Code: {consignment.hsCode}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            consignment.status === 'active' ? "bg-red-500" :
                            consignment.status === 'held' ? "bg-yellow-500" : 
                            consignment.status === 'investigating' ? "bg-orange-500" : "bg-green-500"
                          )} />
                          <span className="text-xs text-muted-foreground capitalize">
                            {consignment.status}
                          </span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="h-8 px-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewConsignment(consignment);
                          }}
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Consignment Pagination */}
            {filteredConsignments.length > consignmentsPerPage && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Showing {consignmentStartIndex + 1}-{Math.min(consignmentEndIndex, filteredConsignments.length)} of {filteredConsignments.length.toLocaleString()} consignments
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setConsignmentPage(prev => Math.max(prev - 1, 1))}
                    disabled={consignmentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Page {consignmentPage} of {consignmentTotalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setConsignmentPage(prev => Math.min(prev + 1, consignmentTotalPages))}
                    disabled={consignmentPage === consignmentTotalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {processedData.length > 0 && (
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/integrity')}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Integrity Analysis
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/society')}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Society Protection
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/revenue')}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Revenue Assurance
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION: Performance Metrics */}
        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Real-time metrics and analytics</CardDescription>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                System Normal
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
                <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
                <Progress value={75} className="h-2 mt-2" />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
                <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
                <Progress value={dashboardStats.ruleHitRate} className="h-2 mt-2" />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-3xl font-bold">{dashboardStats.systemUptime}%</p>
                <p className="text-xs text-muted-foreground">System Uptime</p>
                <Progress value={dashboardStats.systemUptime} className="h-2 mt-2" />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold">{dashboardStats.avgResponseTime}s</p>
                <p className="text-xs text-muted-foreground">Avg Response Time</p>
                <Progress value={85} className="h-2 mt-2" />
              </div>
            </div>
            
            {/* Additional Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Split Shipments</p>
                      <p className="text-2xl font-bold text-amber-600">{dashboardStats.splitShipments.toLocaleString()}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Duty Collected</p>
                      <p className="text-2xl font-bold text-green-600">AED {(dashboardStats.dutyCollected / 1000).toFixed(1)}K</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Risk Detection</p>
                      <p className="text-2xl font-bold text-red-600">{dashboardStats.highRiskAlerts.toLocaleString()}</p>
                    </div>
                    <Target className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}