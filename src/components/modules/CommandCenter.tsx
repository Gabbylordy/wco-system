// // import { mockConsignments, mockIntegrityCases, dashboardStats } from "@/data/mockData";
// // import { StatCard } from "@/components/StatCard";
// // import { AlertCard } from "@/components/AlertCard";
// // import { ConsignmentCard } from "@/components/ConsignmentCard";
// // import { RiskScoreRing } from "@/components/RiskScoreRing";
// // import { DashboardHeader } from "@/components/DashboardHeader";
// // import { 
// //   Package, 
// //   AlertTriangle, 
// //   CheckCircle2, 
// //   DollarSign, 
// //   Clock, 
// //   UserX, 
// //   Sliders, 
// //   TrendingUp,
// //   Activity 
// // } from "lucide-react";
// // import { cn } from "@/lib/utils";

// // export function CommandCenter() {
// //   const allAlerts = mockConsignments.flatMap(c => 
// //     c.alerts.map(a => ({ ...a, consignmentId: c.id }))
// //   );
// //   const criticalAlerts = allAlerts.filter(a => a.severity === 'critical' || a.severity === 'high');
// //   const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

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
// //             trend={{ value: -8, label: "vs yesterday" }}
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
// //             trend={{ value: 12, label: "vs yesterday" }}
// //           />
// //           <StatCard
// //             title="Revenue at Risk"
// //             value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
// //             subtitle="Potential exposure"
// //             icon={DollarSign}
// //             variant="warning"
// //           />
// //         </div>

// //         {/* Module Summary Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// //           <div className="glass-card rounded-xl p-4 border border-border/50 module-revenue">
// //             <div className="flex items-center justify-between mb-3">
// //               <h3 className="text-sm font-medium">Revenue</h3>
// //               <DollarSign className="h-4 w-4 text-module-revenue" />
// //             </div>
// //             <p className="text-2xl font-bold">23</p>
// //             <p className="text-xs text-muted-foreground">Valuation anomalies</p>
// //           </div>
          
// //           <div className="glass-card rounded-xl p-4 border border-border/50 module-society">
// //             <div className="flex items-center justify-between mb-3">
// //               <h3 className="text-sm font-medium">Society</h3>
// //               <AlertTriangle className="h-4 w-4 text-module-society" />
// //             </div>
// //             <p className="text-2xl font-bold">6</p>
// //             <p className="text-xs text-muted-foreground">Illicit threats</p>
// //           </div>
          
// //           <div className="glass-card rounded-xl p-4 border border-border/50 module-integrity">
// //             <div className="flex items-center justify-between mb-3">
// //               <h3 className="text-sm font-medium">Integrity</h3>
// //               <UserX className="h-4 w-4 text-module-integrity" />
// //             </div>
// //             <p className="text-2xl font-bold">{dashboardStats.integrityFlags}</p>
// //             <p className="text-xs text-muted-foreground">Active cases</p>
// //           </div>
          
// //           <div className="glass-card rounded-xl p-4 border border-border/50 module-agility">
// //             <div className="flex items-center justify-between mb-3">
// //               <h3 className="text-sm font-medium">Rules</h3>
// //               <Sliders className="h-4 w-4 text-module-agility" />
// //             </div>
// //             <p className="text-2xl font-bold">{dashboardStats.activeRules}</p>
// //             <p className="text-xs text-muted-foreground">Active rules</p>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //           {/* Critical Alerts */}
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
// //               {criticalAlerts.map((alert) => (
// //                 <AlertCard 
// //                   key={alert.id} 
// //                   alert={alert} 
// //                   consignmentId={alert.consignmentId}
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
// //               {highRiskConsignments.map((consignment) => (
// //                 <ConsignmentCard key={consignment.id} consignment={consignment} />
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
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { mockConsignments, dashboardStats as initialStats } from "@/data/mockData";
// import { StatCard } from "@/components/StatCard";
// import { AlertCard } from "@/components/AlertCard";
// import { ConsignmentCard } from "@/components/ConsignmentCard";
// import { DashboardHeader } from "@/components/DashboardHeader";
// import { IntegrityModule } from "./IntegrityModule";
// import { AlertModal } from "./AlertModal";
// import { 
//   Package, 
//   AlertTriangle, 
//   CheckCircle2, 
//   DollarSign, 
//   Clock, 
//   UserX, 
//   Sliders, 
//   TrendingUp,
//   Activity 
// } from "lucide-react";

// export function CommandCenter() {
//   const navigate = useNavigate();
//   const [dashboardStats, setDashboardStats] = useState(initialStats);
//   const [selectedAlert, setSelectedAlert] = useState(null);

//   const allAlerts = mockConsignments.flatMap(c => 
//     c.alerts.map(a => ({ ...a, consignmentId: c.id }))
//   );

//   const criticalAlerts = allAlerts.filter(a => a.severity === "critical" || a.severity === "high");
//   const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

//   // Live KPI updates for demo purposes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDashboardStats(prev => ({
//         ...prev,
//         pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 5 - 2)),
//         highRiskAlerts: Math.max(0, prev.highRiskAlerts + Math.floor(Math.random() * 2)),
//         ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 2 - 1)),
//       }));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col h-full">
//       <DashboardHeader 
//         title="Command Center"
//         subtitle="WCO — Vigilant Agile Risk & Integrity Suite"
//       />

//       <div className="flex-1 p-6 overflow-auto">
//         {/* Key Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             title="Pending Consignments"
//             value={dashboardStats.pendingConsignments}
//             subtitle="Awaiting processing"
//             icon={Package}
//           />
//           <StatCard
//             title="High-Risk Alerts"
//             value={dashboardStats.highRiskAlerts}
//             subtitle="Require attention"
//             icon={AlertTriangle}
//             variant="danger"
//           />
//           <StatCard
//             title="Cleared Today"
//             value={dashboardStats.clearedToday}
//             subtitle="Successfully processed"
//             icon={CheckCircle2}
//             variant="success"
//           />
//           <StatCard
//             title="Revenue at Risk"
//             value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
//             subtitle="Potential exposure"
//             icon={DollarSign}
//             variant="warning"
//           />
//         </div>

//         {/* Critical Alerts */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//           <div className="lg:col-span-1 space-y-4">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold flex items-center gap-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
//                 </span>
//                 Critical Alerts
//               </h2>
//               <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
//             </div>
//             <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
//               {criticalAlerts.map(alert => (
//                 <AlertCard
//                   key={alert.id}
//                   alert={alert}
//                   consignmentId={alert.consignmentId}
//                   onClick={() => setSelectedAlert(alert)}
//                 />
//               ))}
//               {criticalAlerts.length === 0 && (
//                 <div className="glass-card rounded-xl p-6 text-center border border-border/50">
//                   <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
//                   <p className="text-sm text-muted-foreground">No critical alerts</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* High-Risk Consignments */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold">High-Risk Consignments</h2>
//               <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
//               {highRiskConsignments.map(consignment => (
//                 <ConsignmentCard
//                   key={consignment.id}
//                   consignment={consignment}
//                   onClick={() => navigate(`/consignment/${consignment.id}`)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Integrity Module */}
//         {/* <IntegrityModule /> */}

//       </div>

//       {/* Alert Modal */}
//       {selectedAlert && <AlertModal alert={selectedAlert} onClose={() => setSelectedAlert(null)} />}
//     </div>

//      /* Performance Metrics */
//         <div className="mt-6 glass-card rounded-xl p-6 border border-border/50">
//           <h2 className="font-semibold mb-4">System Performance</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Clock className="h-5 w-5 text-muted-foreground" />
//               </div>
//               <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
//               <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <TrendingUp className="h-5 w-5 text-success" />
//               </div>
//               <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
//               <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Activity className="h-5 w-5 text-primary" />
//               </div>
//               <p className="text-3xl font-bold">99.8%</p>
//               <p className="text-xs text-muted-foreground">System Uptime</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <CheckCircle2 className="h-5 w-5 text-success" />
//               </div>
//               <p className="text-3xl font-bold">4.2s</p>
//               <p className="text-xs text-muted-foreground">Avg Response Time</p>
//             </div>
//           </div>
//         </div>

//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockConsignments, dashboardStats as initialStats } from "@/data/mockData";
import { StatCard } from "@/components/StatCard";
import { AlertCard } from "@/components/AlertCard";
import { ConsignmentCard } from "@/components/ConsignmentCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertModal } from "./AlertModal";
import { 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Sliders, 
  TrendingUp,
  Activity 
} from "lucide-react";

export function CommandCenter() {
  const navigate = useNavigate();
  const [dashboardStats, setDashboardStats] = useState(initialStats);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  const allAlerts = mockConsignments.flatMap(c => 
    c.alerts.map(a => ({ ...a, consignmentId: c.id }))
  );

  const criticalAlerts = allAlerts.filter(a => a.severity === "critical" || a.severity === "high");
  const highRiskConsignments = mockConsignments.filter(c => c.riskScores.overall >= 50);

  // Live KPI updates for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardStats(prev => ({
        ...prev,
        pendingConsignments: Math.max(0, prev.pendingConsignments + Math.floor(Math.random() * 5 - 2)),
        highRiskAlerts: Math.max(0, prev.highRiskAlerts + Math.floor(Math.random() * 2)),
        ruleHitRate: Math.min(100, Math.max(0, prev.ruleHitRate + Math.random() * 2 - 1)),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Command Center"
        subtitle="WCO — Vigilant Agile Risk & Integrity Suite"
      />

      <div className="flex-1 p-6 overflow-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Pending Consignments"
            value={dashboardStats.pendingConsignments}
            subtitle="Awaiting processing"
            icon={Package}
          />
          <StatCard
            title="High-Risk Alerts"
            value={dashboardStats.highRiskAlerts}
            subtitle="Require attention"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="Cleared Today"
            value={dashboardStats.clearedToday}
            subtitle="Successfully processed"
            icon={CheckCircle2}
            variant="success"
          />
          <StatCard
            title="Revenue at Risk"
            value={`₦${(dashboardStats.revenueAtRisk / 1000000).toFixed(1)}M`}
            subtitle="Potential exposure"
            icon={DollarSign}
            variant="warning"
          />
        </div>

        {/* Critical Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
                </span>
                Critical Alerts
              </h2>
              <span className="text-xs text-muted-foreground">{criticalAlerts.length} items</span>
            </div>
            <div className="space-y-3 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
              {criticalAlerts.map(alert => (
                <AlertCard
                  key={alert.id}
                  alert={alert}
                  consignmentId={alert.consignmentId}
                  onClick={() => setSelectedAlert(alert)}
                />
              ))}
              {criticalAlerts.length === 0 && (
                <div className="glass-card rounded-xl p-6 text-center border border-border/50">
                  <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No critical alerts</p>
                </div>
              )}
            </div>
          </div>

          {/* High-Risk Consignments */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">High-Risk Consignments</h2>
              <span className="text-xs text-muted-foreground">{highRiskConsignments.length} items</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[calc(100vh-520px)] overflow-y-auto pr-2">
              {highRiskConsignments.map(consignment => (
                <ConsignmentCard
                  key={consignment.id}
                  consignment={consignment}
                  onClick={() => navigate(`/consignment/${consignment.id}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6 glass-card rounded-xl p-6 border border-border/50">
          <h2 className="font-semibold mb-4">System Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold">{dashboardStats.averageClearanceTime}h</p>
              <p className="text-xs text-muted-foreground">Avg Clearance Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <p className="text-3xl font-bold">{dashboardStats.ruleHitRate}%</p>
              <p className="text-xs text-muted-foreground">Rule Hit Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold">99.8%</p>
              <p className="text-xs text-muted-foreground">System Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <p className="text-3xl font-bold">4.2s</p>
              <p className="text-xs text-muted-foreground">Avg Response Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      {selectedAlert && <AlertModal alert={selectedAlert} onClose={() => setSelectedAlert(null)} />}
    </div>
  );
}
