import { useState } from "react";
import { mockRiskRules, mockConsignments } from "@/data/mockData";
import { RiskBadge } from "@/components/RiskBadge";
import { StatCard } from "@/components/StatCard";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sliders, GitBranch, Play, RotateCcw, Plus, Check, X, Edit2, Trash2, ChevronRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function RulesModule() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [showSimulation, setShowSimulation] = useState(false);
  
  const selected = mockRiskRules.find(r => r.id === selectedRule);

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader 
        title="Risk Rules Studio" 
        subtitle="Dynamic Rule Management & Simulation Sandbox"
      />
      
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Active Rules"
            value="47"
            subtitle="Currently deployed"
            icon={Sliders}
            variant="success"
          />
          <StatCard
            title="Draft Rules"
            value="5"
            subtitle="Pending approval"
            icon={Edit2}
            variant="warning"
          />
          <StatCard
            title="Avg Hit Rate"
            value="11.2%"
            subtitle="Across all rules"
            icon={BarChart3}
          />
          <StatCard
            title="Rollbacks (MTD)"
            value="2"
            subtitle="Rules reverted"
            icon={RotateCcw}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rules List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Risk Rules</h2>
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                New Rule
              </Button>
            </div>
            
            <div className="space-y-3">
              {mockRiskRules.map((rule) => (
                <div
                  key={rule.id}
                  onClick={() => setSelectedRule(rule.id)}
                  className={cn(
                    "glass-card rounded-lg p-4 cursor-pointer transition-all border",
                    selectedRule === rule.id 
                      ? "border-module-agility bg-module-agility/5" 
                      : "border-border/50 hover:border-module-agility/50"
                  )}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{rule.name}</p>
                      <p className="text-xs text-muted-foreground">v{rule.version}</p>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full shrink-0 ml-2",
                      rule.status === 'active' && "bg-success/20 text-success",
                      rule.status === 'draft' && "bg-warning/20 text-warning",
                      rule.status === 'approved' && "bg-info/20 text-info",
                      rule.status === 'inactive' && "bg-muted text-muted-foreground"
                    )}>
                      {rule.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {rule.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Hit: {rule.hitRate}%</span>
                    <span>FP: {rule.falsePositiveRate}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="space-y-6">
                {/* Rule Header */}
                <div className="glass-card rounded-xl p-6 border border-border/50 module-agility">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold">{selected.name}</h2>
                        <span className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          selected.status === 'active' && "bg-success/20 text-success",
                          selected.status === 'draft' && "bg-warning/20 text-warning"
                        )}>
                          {selected.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{selected.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <GitBranch className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Version & Governance */}
                  <div className="grid grid-cols-3 gap-4 p-3 bg-muted/30 rounded-lg text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Version</p>
                      <p className="font-medium">{selected.version}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Created By</p>
                      <p className="font-medium">{selected.createdBy}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Approved By</p>
                      <p className="font-medium">{selected.approvedBy || '—'}</p>
                    </div>
                  </div>
                </div>

                {/* Conditions */}
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-sm font-medium mb-4">Rule Conditions (IF)</h3>
                  <div className="space-y-3">
                    {selected.conditions.map((condition, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <span className="text-xs text-muted-foreground uppercase">
                          {i === 0 ? 'IF' : 'AND'}
                        </span>
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm font-mono">
                          {condition.field}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {condition.operator.replace('_', ' ')}
                        </span>
                        <span className="px-2 py-1 bg-secondary rounded text-sm font-mono">
                          {Array.isArray(condition.value) 
                            ? condition.value.join(', ') 
                            : condition.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-sm font-medium mb-4">Rule Actions (THEN)</h3>
                  <div className="space-y-2">
                    {selected.actions.map((action, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-module-agility/10 rounded-lg text-sm">
                        <ChevronRight className="h-4 w-4 text-module-agility" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulation Panel */}
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium">Simulation Sandbox</h3>
                    <Button 
                      size="sm" 
                      onClick={() => setShowSimulation(!showSimulation)}
                      className="gap-1"
                    >
                      <Play className="h-4 w-4" />
                      Run Simulation
                    </Button>
                  </div>
                  
                  {showSimulation && (
                    <div className="space-y-4 animate-slide-up">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/30 rounded-lg text-center">
                          <p className="text-3xl font-bold text-module-agility">{selected.hitRate}%</p>
                          <p className="text-xs text-muted-foreground">Projected Hit Rate</p>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg text-center">
                          <p className="text-3xl font-bold text-warning">{selected.falsePositiveRate}%</p>
                          <p className="text-xs text-muted-foreground">False Positive Rate</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-medium mb-2">Sample Matches ({mockConsignments.length} consignments tested)</p>
                        <div className="space-y-2">
                          {mockConsignments.slice(0, 3).map((c) => (
                            <div key={c.id} className="flex items-center justify-between text-sm">
                              <span>{c.id}</span>
                              <RiskBadge severity={c.riskScores.overall >= 50 ? 'high' : 'low'}>
                                {c.riskScores.overall >= 50 ? 'Match' : 'No Match'}
                              </RiskBadge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Governance Actions */}
                <div className="flex items-center gap-3">
                  {selected.status === 'draft' && (
                    <>
                      <Button className="flex-1 gap-1 bg-module-agility hover:bg-module-agility/90">
                        <Check className="h-4 w-4" />
                        Submit for Approval
                      </Button>
                      <Button variant="destructive" className="gap-1">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </>
                  )}
                  {selected.status === 'active' && (
                    <>
                      <Button variant="outline" className="flex-1 gap-1">
                        <RotateCcw className="h-4 w-4" />
                        Rollback to v{selected.version - 1}
                      </Button>
                      <Button variant="outline" className="gap-1">
                        <X className="h-4 w-4" />
                        Deactivate
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-xl p-12 border border-border/50 text-center">
                <Sliders className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Select a rule</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a rule from the list to view conditions, actions, and run simulations
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
