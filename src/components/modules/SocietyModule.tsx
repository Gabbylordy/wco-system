import { useState } from "react";
import { mockConsignments } from "@/data/mockData";
import { RiskScoreRing } from "@/components/RiskScoreRing";
import { RiskBadge } from "@/components/RiskBadge";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Shield, AlertOctagon, Package, Syringe, Skull, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const threatCategories = [
  { id: 'pharma', label: 'Counterfeit Pharma', icon: Syringe, count: 3 },
  { id: 'weapons', label: 'Weapons/Explosives', icon: Skull, count: 0 },
  { id: 'contraband', label: 'Contraband', icon: Package, count: 1 },
  { id: 'wildlife', label: 'Wildlife/CITES', icon: Shield, count: 2 },
];

export function SocietyModule() {
  const [selectedConsignment, setSelectedConsignment] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const societyAlerts = mockConsignments.filter(c => c.riskScores.society >= 50);
  const selected = mockConsignments.find(c => c.id === selectedConsignment);

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
            value="6"
            subtitle="Requiring immediate action"
            icon={AlertOctagon}
            variant="danger"
          />
          <StatCard
            title="Held Shipments"
            value="4"
            subtitle="Pending verification"
            icon={Package}
            variant="warning"
          />
          <StatCard
            title="Interdictions (MTD)"
            value="12"
            subtitle="Successfully stopped"
            icon={Shield}
            variant="success"
          />
          <StatCard
            title="Avg Detection Time"
            value="2.3h"
            subtitle="From manifest to alert"
            icon={Clock}
          />
        </div>

        {/* Threat Categories */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {threatCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={cn(
                "glass-card rounded-xl p-4 text-left transition-all border",
                activeCategory === cat.id 
                  ? "border-module-society bg-module-society/10" 
                  : "border-border/50 hover:border-module-society/50"
              )}
            >
              <cat.icon className={cn(
                "h-5 w-5 mb-2",
                cat.count > 0 ? "text-module-society" : "text-muted-foreground"
              )} />
              <p className="text-sm font-medium">{cat.label}</p>
              <p className={cn(
                "text-2xl font-bold",
                cat.count > 0 ? "text-module-society" : "text-muted-foreground"
              )}>
                {cat.count}
              </p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Threat List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-semibold">High-Risk Consignments</h2>
            
            <div className="space-y-3 max-h-[calc(100vh-480px)] overflow-y-auto pr-2">
              {societyAlerts.map((consignment) => (
                <div
                  key={consignment.id}
                  onClick={() => setSelectedConsignment(consignment.id)}
                  className={cn(
                    "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                    selectedConsignment === consignment.id 
                      ? "border-module-society bg-module-society/5" 
                      : "border-border/50 hover:border-module-society/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <RiskScoreRing score={consignment.riskScores.society} size="sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{consignment.id}</p>
                        {consignment.alerts.some(a => a.type === 'illicit') && (
                          <RiskBadge severity="critical" pulse>Illicit</RiskBadge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {consignment.goodsDescription}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {consignment.originCountry}
                        {consignment.transitPoints.length > 0 && (
                          <span>→ {consignment.transitPoints.join(' → ')}</span>
                        )}
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
              <div className="glass-card rounded-xl p-6 border border-border/50 module-society">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold">{selected.id}</h2>
                      <RiskBadge severity="critical" pulse>Potential Threat</RiskBadge>
                    </div>
                    <p className="text-sm text-muted-foreground">{selected.goodsDescription}</p>
                  </div>
                  <RiskScoreRing score={selected.riskScores.society} size="md" label="Society Risk" />
                </div>

                {/* Threat Indicators */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-medium text-destructive mb-3 flex items-center gap-2">
                    <AlertOctagon className="h-4 w-4" />
                    Threat Indicators
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selected.riskDrivers.map((driver, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-destructive mt-0.5">⚠</span>
                        <span>{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Route Analysis */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Route Analysis</h3>
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg font-bold">{selected.originCountry}</p>
                      <p className="text-xs text-muted-foreground">Origin</p>
                    </div>
                    {selected.transitPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 border-t border-dashed border-muted-foreground" />
                        <div className="text-center">
                          <p className="text-sm font-medium text-warning">{point}</p>
                          <p className="text-xs text-muted-foreground">Transit</p>
                        </div>
                      </div>
                    ))}
                    <div className="w-8 border-t border-dashed border-muted-foreground" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-success">{selected.portOfEntry}</p>
                      <p className="text-xs text-muted-foreground">Destination</p>
                    </div>
                  </div>
                </div>

                {/* Document Status */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Document Verification</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-destructive" />
                        <span className="text-sm">NAFDAC Certificate</span>
                      </div>
                      <span className="text-xs font-medium text-destructive">MISSING</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-success" />
                        <span className="text-sm">Bill of Lading</span>
                      </div>
                      <span className="text-xs font-medium text-success">VERIFIED</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-warning" />
                        <span className="text-sm">Pharma Registration</span>
                      </div>
                      <span className="text-xs font-medium text-warning">PENDING</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-success" />
                        <span className="text-sm">Invoice</span>
                      </div>
                      <span className="text-xs font-medium text-success">VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Controls */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Recommended Controls</h3>
                  <div className="space-y-2">
                    {selected.recommendedActions.map((action, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button className="flex-1 bg-destructive hover:bg-destructive/90">Issue Hold</Button>
                  <Button variant="outline">Alert Partner Agencies</Button>
                  <Button variant="outline">Request Lab Sample</Button>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Select a consignment</h3>
                <p className="text-sm text-muted-foreground">
                  Choose an item from the threat list to view detailed analysis and controls
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
