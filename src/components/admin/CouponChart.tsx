import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const couponData = [
  { month: 'Jan', generated: 3500, scanned: 2800 },
  { month: 'Feb', generated: 4200, scanned: 3100 },
  { month: 'Mar', generated: 3800, scanned: 2900 },
  { month: 'Apr', generated: 4500, scanned: 3400 },
  { month: 'May', generated: 4800, scanned: 3800 },
  { month: 'Jun', generated: 4600, scanned: 3600 },
]

export function CouponChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={couponData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Bar 
            dataKey="generated" 
            fill="#3b82f6" 
            name="Coupon Generate" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="scanned" 
            fill="#10b981" 
            name="Coupon Scan" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}