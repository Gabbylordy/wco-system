import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart as RechartsPieChart, Pie, Cell
} from "recharts";

interface ParcelChartsProps {
  data: any[];
}

export const ParcelCharts: React.FC<ParcelChartsProps> = ({ data }) => {
  if (data.length === 0) return null;
  
  // Prepare data for charts
  const laneData = [
    { name: 'GREEN', value: data.filter(d => d.assigned_risk_lane === 'GREEN').length, color: '#10b981' },
    { name: 'YELLOW', value: data.filter(d => d.assigned_risk_lane === 'YELLOW').length, color: '#f59e0b' },
    { name: 'RED', value: data.filter(d => d.assigned_risk_lane === 'RED').length, color: '#ef4444' },
    { name: 'BLACK', value: data.filter(d => d.assigned_risk_lane === 'BLACK').length, color: '#1f2937' }
  ];

  const riskCategoryData = [
    { name: 'DRONES', value: data.filter(d => d.risk_categories.includes('DRONES')).length, color: '#3b82f6' },
    { name: 'WEAPONS', value: data.filter(d => d.risk_categories.includes('WEAPONS')).length, color: '#ef4444' },
    { name: 'BATTERIES', value: data.filter(d => d.risk_categories.includes('LITHIUM_BATTERIES')).length, color: '#f59e0b' },
    { name: 'METALS', value: data.filter(d => d.risk_categories.includes('PRECIOUS_METALS')).length, color: '#8b5cf6' }
  ];

  const dutyByCategory = [
    { category: 'Electronics', duty: data.filter(d => d.hs_chapter === '85').reduce((sum, d) => sum + d.duty_payable_aed, 0) },
    { category: 'Clothing', duty: data.filter(d => d.hs_chapter === '62').reduce((sum, d) => sum + d.duty_payable_aed, 0) },
    { category: 'Accessories', duty: data.filter(d => d.hs_chapter === '42').reduce((sum, d) => sum + d.duty_payable_aed, 0) },
    { category: 'Jewellery', duty: data.filter(d => d.hs_chapter === '71').reduce((sum, d) => sum + d.duty_payable_aed, 0) },
    { category: 'Other', duty: data.filter(d => !['85', '62', '42', '71'].includes(d.hs_chapter)).reduce((sum, d) => sum + d.duty_payable_aed, 0) }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Risk Lane Distribution */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-blue-500" />
            <CardTitle>Risk Lane Distribution</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={laneData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {laneData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} parcels`, 'Count']} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Risk Categories */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-red-500" />
            <CardTitle>Risk Categories Detected</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskCategoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} items`, 'Count']} />
                <Bar dataKey="value" name="Items">
                  {riskCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Duty Revenue by Category */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <CardTitle>Duty Revenue by Category</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dutyByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis tickFormatter={(value) => `AED ${value}`} />
                <Tooltip formatter={(value) => [`AED ${value}`, 'Duty']} />
                <Bar dataKey="duty" name="Duty Revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};