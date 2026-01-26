import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  severity: 'low' | 'medium' | 'high' | 'critical';
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

const severityStyles = {
  low: 'bg-success/20 text-success border-success/30',
  medium: 'bg-warning/20 text-warning border-warning/30',
  high: 'bg-destructive/20 text-destructive border-destructive/30',
  critical: 'bg-risk-critical/20 text-risk-critical border-risk-critical/30',
};

export function RiskBadge({ severity, children, className, pulse }: RiskBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
        severityStyles[severity],
        pulse && "pulse-alert",
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        severity === 'low' && "bg-success",
        severity === 'medium' && "bg-warning",
        severity === 'high' && "bg-destructive",
        severity === 'critical' && "bg-risk-critical"
      )} />
      {children}
    </span>
  );
}
