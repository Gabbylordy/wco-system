import { useState } from "react";
import { mockConsignments } from "@/data/mockData";
import { ConsignmentCard } from "@/components/ConsignmentCard";
import { RiskScoreRing } from "@/components/RiskScoreRing";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DollarSign, TrendingDown, AlertTriangle, FileCheck, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function RevenueModule() {
  const [selectedConsignment, setSelectedConsignment] = useState<string | null>(null);
  
  const revenueAlerts = mockConsignments.filter(c => c.riskScores.revenue >= 50);
  const selected = mockConsignments.find(c => c.id === selectedConsignment);

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Revenue Assurance" 
        subtitle="Valuation & PAAR Anomaly Detection Workbench"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Revenue at Risk"
            value="₦4.25B"
            subtitle="Estimated leakage exposure"
            icon={DollarSign}
            variant="danger"
            trend={{ value: 12, label: "vs last week" }}
          />
          <StatCard
            title="Undervaluation Alerts"
            value="23"
            subtitle="Pending review"
            icon={TrendingDown}
            variant="warning"
          />
          <StatCard
            title="PAAR Anomalies"
            value="8"
            subtitle="Unusual amendment patterns"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatCard
            title="Confirmed Adjustments"
            value="156"
            subtitle="This month"
            icon={FileCheck}
            variant="success"
            trend={{ value: 8, label: "vs last month" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Valuation Anomalies</h2>
              <span className="text-xs text-muted-foreground">{revenueAlerts.length} items</span>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Filter by HS code, trader..." className="pl-9 bg-secondary/50" />
            </div>

            <div className="space-y-3 max-h-[calc(100vh-380px)] overflow-y-auto pr-2">
              {revenueAlerts.map((consignment) => (
                <div
                  key={consignment.id}
                  onClick={() => setSelectedConsignment(consignment.id)}
                  className={cn(
                    "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                    selectedConsignment === consignment.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border/50 hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <RiskScoreRing score={consignment.riskScores.revenue} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{consignment.id}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        HS {consignment.hsCode} • {consignment.importerName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{consignment.currency} {consignment.declaredValue.toLocaleString()}</p>
                      <p className="text-xs text-destructive">-42% below median</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="glass-card rounded-xl p-6 border border-border/50 module-revenue">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold">{selected.id}</h2>
                    <p className="text-sm text-muted-foreground">{selected.declarationId}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <RiskScoreRing score={selected.riskScores.revenue} size="md" label="Revenue Risk" />
                  </div>
                </div>

                {/* Anomaly Details */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">Price Analysis</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Declared Value</span>
                        <span className="font-medium">{selected.currency} {selected.declaredValue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Market Median</span>
                        <span className="font-medium">{selected.currency} {Math.round(selected.declaredValue * 1.72).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deviation</span>
                        <span className="font-medium text-destructive">-42%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Unit Price</span>
                        <span className="font-medium">{selected.currency} {(selected.declaredValue / selected.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-3">PAAR History</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Reference</span>
                        <span className="font-medium">{selected.paarReference}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Amendments</span>
                        <span className="font-medium text-warning">3 in 30 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Change</span>
                        <span className="font-medium">Value reduced by 15%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risk Drivers */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Risk Drivers</h3>
                  <div className="space-y-2">
                    {selected.riskDrivers.map((driver, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm bg-destructive/10 text-destructive p-2 rounded-lg">
                        <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                        {driver}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Actions */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Recommended Actions</h3>
                  <div className="space-y-2">
                    {selected.recommendedActions.map((action, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-sm">{action}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button className="flex-1">Generate Query Template</Button>
                  <Button variant="outline">Request Evidence</Button>
                  <Button variant="outline">Escalate</Button>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Select a consignment</h3>
                <p className="text-sm text-muted-foreground">
                  Choose an item from the list to view valuation analysis and recommended actions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
