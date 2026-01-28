import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface RiskCategoryChartProps {
  data: {
    category: string;
    count: number;
    percentage: number;
  }[];
}

export const RiskCategoryChart: React.FC<RiskCategoryChartProps> = ({ data }) => {
  const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="category" 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          formatter={(value, name) => {
            if (name === 'count') return [value, 'Parcels'];
            if (name === 'percentage') return [`${value}%`, 'Percentage'];
            return [value, name];
          }}
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
        />
        <Bar 
          dataKey="count" 
          fill="#3b82f6"
          name="Risk Category Count"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};