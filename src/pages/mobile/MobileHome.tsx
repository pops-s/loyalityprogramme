import React from 'react'
import { PointsCard } from '../../components/mobile/PointsCard'
import { FeatureGrid } from '../../components/mobile/FeatureGrid'
import { Phone } from 'lucide-react'

export function MobileHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 space-y-6">
        {/* Points Card */}
        <PointsCard />

        {/* Feature Grid */}
        <FeatureGrid />

        {/* Contact Button */}
        <div className="fixed bottom-20 right-4">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors">
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}