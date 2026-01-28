import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface HSConfidenceChartProps {
  data: {
    confidence: string;
    count: number;
    percentage: number;
  }[];
}

export const HSConfidenceChart: React.FC<HSConfidenceChartProps> = ({ data }) => {
  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ confidence, percentage }) => `${confidence}: ${percentage}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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