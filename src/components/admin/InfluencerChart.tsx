import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { getTierColor } from '../../lib/utils'

const influencerData = [
  { name: 'T1', value: 5, color: '#ef4444' },
  { name: 'T2', value: 2, color: '#8b5cf6' },
  { name: 'T3', value: 1, color: '#3b82f6' },
  { name: 'Carpenter', value: 40, color: '#06b6d4' },
  { name: 'Dealer', value: 8, color: '#10b981' },
  { name: 'Electrician', value: 23, color: '#84cc16' },
  { name: 'Painter', value: 12, color: '#eab308' },
  { name: 'Plumber', value: 11, color: '#f97316' },
  { name: 'Test', value: 6, color: '#f59e0b' },
]

export function InfluencerChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={influencerData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {influencerData.map((entry, index) => (
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