import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface RevenueTrendChartProps {
  data: {
    date: string;
    duty: number;
    parcels: number;
    splitShipments: number;
  }[];
}

export const RevenueTrendChart: React.FC<RevenueTrendChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="date" 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `AED ${value}`}
        />
        <Tooltip 
          formatter={(value, name) => {
            if (name === 'duty') return [`AED ${value}`, 'Duty Collected'];
            if (name === 'parcels') return [value, 'Parcels'];
            if (name === 'splitShipments') return [value, 'Split Shipments'];
            return [value, name];
          }}
          contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
        />
        <Area 
          type="monotone" 
          dataKey="duty" 
          stroke="#10b981" 
          fill="#10b981" 
          fillOpacity={0.1}
          name="Duty Collected"
        />
        <Area 
          type="monotone" 
          dataKey="splitShipments" 
          stroke="#f59e0b" 
          fill="#f59e0b" 
          fillOpacity={0.1}
          name="Split Shipments"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};