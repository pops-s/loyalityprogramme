import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { formatNumber } from '../../lib/utils'

export function PointsCard() {
  const { profile } = useAuthContext()

  const totalPoints = profile?.total_points || 0
  const balancePoints = profile?.balance_points || 0
  const redeemedPoints = totalPoints - balancePoints

  return (
    <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-xl p-6 text-white mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-secondary-100">Welcome</p>
          <h2 className="text-xl font-bold">{profile?.name || 'User'}</h2>
          <p className="text-secondary-200 text-sm">{profile?.phone || profile?.email}</p>
        </div>
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-3xl font-bold">{formatNumber(totalPoints)}</p>
          <p className="text-secondary-200 text-sm">Total Points</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{formatNumber(redeemedPoints)}</p>
          <p className="text-secondary-200 text-sm">Redeem Points</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{formatNumber(balancePoints)}</p>
          <p className="text-secondary-200 text-sm">Balance Points</p>
        </div>
      </div>
    </div>
  )
}