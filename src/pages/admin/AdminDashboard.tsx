import React from 'react'
import { StatCard } from '../../components/admin/StatCard'
import { InfluencerChart } from '../../components/admin/InfluencerChart'
import { StatusChart } from '../../components/admin/StatusChart'
import { ScanningChart } from '../../components/admin/ScanningChart'
import { CouponChart } from '../../components/admin/CouponChart'

const influencerStatusData = [
  { name: 'Approved', value: 96, color: '#10b981' },
  { name: 'Pending', value: 8, color: '#f59e0b' },
  { name: 'Suspect', value: 1, color: '#ef4444' },
]

const kycRedeemData = [
  { name: 'KYC Pending', value: 94, color: '#10b981' },
  { name: 'Redeem Request', value: 163, color: '#f59e0b' },
]

export function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Influencer Reward Dashboard</h1>
        <p className="text-gray-600">Monitor your loyalty program performance</p>
      </div>

      {/* Top Row - Total Influencer & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Influencer */}
        <StatCard title="Total Influencer" value="225" className="lg:col-span-1">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">T1:</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">T2:</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">T3:</span>
                  <span className="font-semibold">1</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Carpenter:</span>
                  <span className="font-semibold">40</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Dealer:</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Electrician:</span>
                  <span className="font-semibold">23</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Painter:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Plumber:</span>
                  <span className="font-semibold">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Test:</span>
                  <span className="font-semibold">6</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <InfluencerChart />
            </div>
            <div className="flex items-center justify-between font-semibold text-lg border-t border-gray-200 pt-2">
              <span>Total:</span>
              <span className="text-primary-600">105</span>
            </div>
          </div>
        </StatCard>

        {/* Influencer Status */}
        <StatCard title="Influencer Status" value="105" subtitle="Total Active">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">96</p>
                <p className="text-gray-600">Approved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">8</p>
                <p className="text-gray-600">Pending</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">1</p>
                <p className="text-gray-600">Suspect</p>
              </div>
            </div>
            <StatusChart data={influencerStatusData} />
          </div>
        </StatCard>
      </div>

      {/* Second Row - KYC/Redeem & QR Codes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending KYC & Redeem Request */}
        <StatCard title="Pending KYC & Redeem Request" value="">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">94</p>
                <p className="text-gray-600">KYC Pending</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">163</p>
                <p className="text-gray-600">Redeem Request</p>
              </div>
            </div>
            <StatusChart data={kycRedeemData} />
          </div>
        </StatCard>

        {/* QR Codes */}
        <StatCard title="QR Codes" value="">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">75,213</p>
                <p className="text-gray-600">Total Generated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">157</p>
                <p className="text-gray-600">Total Scanning</p>
              </div>
            </div>
          </div>
        </StatCard>
      </div>

      {/* Bottom Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Last 30 Days Scanning */}
        <StatCard title="Last 30 Days Scanning" value="">
          <ScanningChart />
        </StatCard>

        {/* Last 6 Month Coupon Generate V/S Scanning */}
        <StatCard title="Last 6 Month Coupon Generate V/S Scanning" value="">
          <CouponChart />
        </StatCard>
      </div>
    </div>
  )
}