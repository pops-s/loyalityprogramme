import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface StatusChartProps {
  data: Array<{ name: string; value: number; color: string }>
  title?: string
}

export function StatusChart({ data, title }: StatusChartProps) {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [value, name]}
            labelStyle={{ color: '#374151' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}