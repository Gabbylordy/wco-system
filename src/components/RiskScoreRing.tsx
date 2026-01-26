import { cn } from "@/lib/utils";

interface RiskScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

const getRiskColor = (score: number) => {
  if (score >= 75) return { stroke: 'hsl(var(--risk-critical))', text: 'text-risk-critical' };
  if (score >= 50) return { stroke: 'hsl(var(--risk-high))', text: 'text-risk-high' };
  if (score >= 25) return { stroke: 'hsl(var(--risk-medium))', text: 'text-risk-medium' };
  return { stroke: 'hsl(var(--risk-low))', text: 'text-risk-low' };
};

const sizeMap = {
  sm: { size: 48, strokeWidth: 4, fontSize: 'text-sm' },
  md: { size: 80, strokeWidth: 6, fontSize: 'text-xl' },
  lg: { size: 120, strokeWidth: 8, fontSize: 'text-3xl' },
};

export function RiskScoreRing({ score, size = 'md', label, className }: RiskScoreRingProps) {
  const { size: svgSize, strokeWidth, fontSize } = sizeMap[size];
  const radius = (svgSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;
  const { stroke, text } = getRiskColor(score);

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg
          className="transform -rotate-90"
          width={svgSize}
          height={svgSize}
        >
          {/* Background circle */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
          />
          {/* Score circle */}
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="score-ring transition-all duration-1000 ease-out"
            style={{ '--score-offset': offset } as React.CSSProperties}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("font-bold", fontSize, text)}>{score}</span>
        </div>
      </div>
      {label && (
        <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
      )}
    </div>
  );
}
