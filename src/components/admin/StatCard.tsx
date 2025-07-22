import React from 'react'
import { cn } from '../../lib/utils'
import { formatNumber } from '../../lib/utils'

interface StatCardProps {
  title: string
  value: number | string
  subtitle?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

export function StatCard({ title, value, subtitle, color = 'bg-primary-500', className, children }: StatCardProps) {
  return (
    <div className={cn('bg-white rounded-xl shadow-sm border border-gray-200 p-6', className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      {children ? (
        children
      ) : (
        <div className="space-y-2">
          <p className="text-3xl font-bold text-gray-900">
            {typeof value === 'number' ? formatNumber(value) : value}
          </p>
          {subtitle && (
            <p className="text-sm text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  )
}