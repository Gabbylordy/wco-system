import { Consignment } from "@/data/mockData";
import { RiskScoreRing } from "./RiskScoreRing";
import { RiskBadge } from "./RiskBadge";
import { cn } from "@/lib/utils";
import { Ship, Plane, Truck, MapPin, Building2, Package, ChevronRight } from "lucide-react";

interface ConsignmentCardProps {
  consignment: Consignment;
  compact?: boolean;
  className?: string;
  onClick?: () => void;
}

const modeIcons = {
  sea: Ship,
  air: Plane,
  land: Truck,
};

const statusStyles = {
  pending: 'bg-warning/20 text-warning border-warning/30',
  cleared: 'bg-success/20 text-success border-success/30',
  held: 'bg-destructive/20 text-destructive border-destructive/30',
  examining: 'bg-info/20 text-info border-info/30',
};

export function ConsignmentCard({ consignment, compact, className, onClick }: ConsignmentCardProps) {
  const ModeIcon = modeIcons[consignment.mode];
  const hasAlerts = consignment.alerts.length > 0;
  const criticalAlerts = consignment.alerts.filter(a => a.severity === 'critical' || a.severity === 'high').length;

  if (compact) {
    return (
      <div
        className={cn(
          "glass-card rounded-lg p-3 border border-border/50 cursor-pointer",
          "transition-all duration-200 hover:border-primary/50",
          className
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <RiskScoreRing score={consignment.riskScores.overall} size="sm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm truncate">{consignment.id}</span>
              <ModeIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            </div>
            <p className="text-xs text-muted-foreground truncate">{consignment.goodsDescription}</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "glass-card rounded-xl p-5 border border-border/50 cursor-pointer",
        "transition-all duration-200 hover:border-primary/50 hover:shadow-lg",
        hasAlerts && "border-l-4 border-l-warning",
        criticalAlerts > 0 && "border-l-destructive",
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{consignment.id}</h3>
            <span className={cn(
              "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border uppercase",
              statusStyles[consignment.status]
            )}>
              {consignment.status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{consignment.declarationId}</p>
        </div>
        <RiskScoreRing score={consignment.riskScores.overall} size="md" label="Risk" />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <ModeIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{consignment.vesselFlight}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{consignment.portOfEntry}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground truncate">{consignment.importerName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Package className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">HS {consignment.hsCode}</span>
        </div>
      </div>

      {/* Goods Description */}
      <div className="bg-muted/30 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium">{consignment.goodsDescription}</p>
        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
          <span>{consignment.quantity.toLocaleString()} {consignment.unit}</span>
          <span>{consignment.weight.toLocaleString()} kg</span>
          <span className="font-medium text-foreground">
            {consignment.currency} {consignment.declaredValue.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Risk Scores */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-lg font-bold text-module-revenue">{consignment.riskScores.revenue}</p>
            <p className="text-[10px] text-muted-foreground uppercase">Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-module-society">{consignment.riskScores.society}</p>
            <p className="text-[10px] text-muted-foreground uppercase">Society</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-module-integrity">{consignment.riskScores.integrity}</p>
            <p className="text-[10px] text-muted-foreground uppercase">Integrity</p>
          </div>
        </div>
        {hasAlerts && (
          <RiskBadge 
            severity={criticalAlerts > 0 ? 'critical' : 'medium'} 
            pulse={criticalAlerts > 0}
          >
            {consignment.alerts.length} Alert{consignment.alerts.length > 1 ? 's' : ''}
          </RiskBadge>
        )}
      </div>

      {/* Risk Drivers */}
      {consignment.riskDrivers.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Key Risk Drivers
          </p>
          <ul className="space-y-1">
            {consignment.riskDrivers.slice(0, 3).map((driver, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                {driver}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
