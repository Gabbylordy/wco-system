import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface RiskLaneChartProps {
  data: {
    lane: string;
    count: number;
    value: number;
  }[];
}

export const RiskLaneChart: React.FC<RiskLaneChartProps> = ({ data }) => {
  const COLORS = {
    GREEN: '#10b981',
    YELLOW: '#f59e0b',
    RED: '#ef4444',
    BLACK: '#1f2937'
  };

  const getColor = (lane: string) => {
    return COLORS[lane as keyof typeof COLORS] || '#6b7280';
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ lane, percent }) => `${lane}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.lane)} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value, name) => [`${value} parcels`, name]}
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};