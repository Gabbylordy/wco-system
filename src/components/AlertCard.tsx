import { Alert } from "@/data/mockData";
import { RiskBadge } from "./RiskBadge";
import { cn } from "@/lib/utils";
import { AlertTriangle, Package, FileWarning, UserX, FileText, Clock } from "lucide-react";

interface AlertCardProps {
  alert: Alert;
  consignmentId: string;
  className?: string;
  onClick?: () => void;
}

const typeIcons = {
  valuation: FileWarning,
  classification: Package,
  illicit: AlertTriangle,
  integrity: UserX,
  document: FileText,
};

const typeLabels = {
  valuation: 'Valuation',
  classification: 'Classification',
  illicit: 'Illicit Goods',
  integrity: 'Integrity',
  document: 'Document',
};

export function AlertCard({ alert, consignmentId, className, onClick }: AlertCardProps) {
  const Icon = typeIcons[alert.type];
  
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-4 border border-border/50 cursor-pointer",
        "transition-all duration-200 hover:border-primary/50 hover:bg-card/90",
        !alert.acknowledged && "border-l-4 border-l-destructive",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "p-2 rounded-lg shrink-0",
          alert.severity === 'critical' && "bg-risk-critical/20 text-risk-critical",
          alert.severity === 'high' && "bg-destructive/20 text-destructive",
          alert.severity === 'medium' && "bg-warning/20 text-warning",
          alert.severity === 'low' && "bg-success/20 text-success"
        )}>
          <Icon className="h-4 w-4" />
        </div>
        
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-medium text-sm leading-tight">{alert.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{consignmentId}</p>
            </div>
            <RiskBadge severity={alert.severity} pulse={alert.severity === 'critical' && !alert.acknowledged}>
              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
            </RiskBadge>
          </div>
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {alert.description}
          </p>
          
          <div className="flex items-center gap-3 pt-1">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              {typeLabels[alert.type]}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              {new Date(alert.timestamp).toLocaleTimeString('en-NG', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
