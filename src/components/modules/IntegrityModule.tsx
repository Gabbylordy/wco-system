import { useState } from "react";
import { mockIntegrityCases, mockConsignments } from "@/data/mockData";
import { RiskScoreRing } from "@/components/RiskScoreRing";
import { RiskBadge } from "@/components/RiskBadge";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { UserCheck, AlertTriangle, Clock, Activity, User, Calendar, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IntegrityModule() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  
  const selected = mockIntegrityCases.find(c => c.id === selectedCase);

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Integrity Analytics" 
        subtitle="Insider Threat & Behavior Pattern Detection"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Cases"
            value="5"
            subtitle="Under investigation"
            icon={UserCheck}
            variant="warning"
          />
          <StatCard
            title="Override Anomalies"
            value="23"
            subtitle="This week"
            icon={AlertTriangle}
            variant="danger"
          />
          <StatCard
            title="Odd-Hour Activity"
            value="8"
            subtitle="Flagged sessions"
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Baseline Deviation"
            value="12%"
            subtitle="Above normal"
            icon={Activity}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cases List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-semibold">Integrity Cases</h2>
            
            <div className="space-y-3">
              {mockIntegrityCases.map((integrityCase) => (
                <div
                  key={integrityCase.id}
                  onClick={() => setSelectedCase(integrityCase.id)}
                  className={cn(
                    "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                    selectedCase === integrityCase.id 
                      ? "border-module-integrity bg-module-integrity/5" 
                      : "border-border/50 hover:border-module-integrity/50"
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
                          integrityCase.status === 'open' && "bg-info/20 text-info",
                          integrityCase.status === 'escalated' && "bg-destructive/20 text-destructive",
                          integrityCase.status === 'closed' && "bg-success/20 text-success"
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
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="glass-card rounded-xl p-6 border border-border/50 module-integrity">
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
                  <h3 className="text-sm font-medium mb-3">Affected Declarations</h3>
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
                  <h3 className="text-sm font-medium mb-3">Activity Timeline</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {selected.timeline.length > 0 ? (
                      selected.timeline.map((entry) => (
                        <div
                          key={entry.id}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg",
                            entry.suspicious ? "bg-destructive/10 border border-destructive/20" : "bg-muted/30"
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                            entry.suspicious ? "bg-destructive/20" : "bg-muted"
                          )}>
                            {entry.action === 'OVERRIDE' ? (
                              <AlertTriangle className={cn("h-4 w-4", entry.suspicious && "text-destructive")} />
                            ) : (
                              <FileText className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{entry.action}</span>
                              {entry.suspicious && (
                                <RiskBadge severity="high">Suspicious</RiskBadge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{entry.details}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(entry.timestamp).toLocaleString('en-NG')}
                              </span>
                              <span>{entry.ipAddress}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        No timeline entries available
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button className="flex-1 bg-warning hover:bg-warning/90 text-warning-foreground">
                    Escalate to Supervisor
                  </Button>
                  <Button variant="outline">Export Case Pack</Button>
                  <Button variant="outline">Add Note</Button>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Select a case</h3>
                <p className="text-sm text-muted-foreground">
                  Choose an integrity case from the list to view detailed analysis and timeline
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
