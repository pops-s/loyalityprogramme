import React from 'react'
import { Link } from 'react-router-dom'
import { 
  QrCode, 
  Gift, 
  History, 
  MapPin, 
  Hash, 
  Package, 
  Grid3X3, 
  Award,
  Dice1,
  HelpCircle,
  Play,
  GraduationCap,
  Phone
} from 'lucide-react'

const features = [
  { name: 'Scan QR Code', icon: QrCode, href: '/mobile/scan', color: 'bg-secondary-500' },
  { name: 'Redeem Points', icon: Gift, href: '/mobile/redeem', color: 'bg-secondary-500' },
  { name: 'Points History', icon: History, href: '/mobile/history', color: 'bg-secondary-500' },
  { name: 'Track Request', icon: MapPin, href: '/mobile/track', color: 'bg-secondary-500' },
  { name: 'Enter Code', icon: Hash, href: '/mobile/code', color: 'bg-secondary-500' },
  { name: 'Products', icon: Package, href: '/mobile/products', color: 'bg-secondary-500' },
  { name: 'Catalogues', icon: Grid3X3, href: '/mobile/catalogues', color: 'bg-secondary-500' },
  { name: 'Badges', icon: Award, href: '/mobile/badges', color: 'bg-secondary-500' },
  { name: 'Spin & Win', icon: Dice1, href: '/mobile/spin', color: 'bg-secondary-500' },
  { name: 'FAQ', icon: HelpCircle, href: '/mobile/faq', color: 'bg-secondary-500' },
  { name: 'Videos', icon: Play, href: '/mobile/videos', color: 'bg-secondary-500' },
  { name: 'Video Tutorial', icon: GraduationCap, href: '/mobile/tutorials', color: 'bg-secondary-500' },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      {features.map((feature) => (
        <Link
          key={feature.name}
          to={feature.href}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-2`}>
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-medium text-gray-700 text-center leading-tight">
            {feature.name}
          </span>
        </Link>
      ))}
    </div>
  )
}