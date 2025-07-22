import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Gift, Bone as Bonus, QrCode, Receipt, Wallet, MessageSquare, Ticket, Settings, FileBarChart, Play, ChevronDown, Crown, Trophy, UserCheck } from 'lucide-react'
import { cn } from '../../lib/utils'

interface SidebarProps {
  className?: string
}

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
  { 
    name: 'Influencer Network', 
    href: '/admin/influencers', 
    icon: UserCheck,
    children: [
      { name: 'All Influencers', href: '/admin/influencers' },
      { name: 'KYC Pending', href: '/admin/influencers/kyc' },
      { name: 'Tier Management', href: '/admin/influencers/tiers' },
    ]
  },
  { name: 'Gift Gallery', href: '/admin/products', icon: Gift },
  { 
    name: 'Bonus', 
    href: '/admin/bonus', 
    icon: Bonus,
    children: [
      { name: 'Bonus Rules', href: '/admin/bonus' },
      { name: 'Special Offers', href: '/admin/bonus/offers' },
    ]
  },
  { name: 'QR Code Label', href: '/admin/qr-codes', icon: QrCode },
  { name: 'Reprint Coupon', href: '/admin/coupons', icon: Receipt },
  { name: 'Purchase Request', href: '/admin/purchases', icon: Trophy },
  { name: 'Payout Wallet', href: '/admin/payouts', icon: Wallet },
  { name: 'WhatsApp Integration', href: '/admin/whatsapp', icon: MessageSquare },
  { name: 'Redeem Request', href: '/admin/redemptions', icon: Crown },
  { name: 'Ticket', href: '/admin/tickets', icon: Ticket },
  { name: 'Masters', href: '/admin/masters', icon: Settings },
  { 
    name: 'Loyalty Report', 
    href: '/admin/reports', 
    icon: FileBarChart,
    children: [
      { name: 'Analytics', href: '/admin/reports' },
      { name: 'User Reports', href: '/admin/reports/users' },
      { name: 'Transaction Reports', href: '/admin/reports/transactions' },
    ]
  },
  { name: 'Video Tutorial', href: '/admin/tutorials', icon: Play },
]

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('w-64 bg-white border-r border-gray-200 h-full', className)}>
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">BASIQ 360</h1>
            <p className="text-xs text-gray-500">Loyalty Platform</p>
          </div>
        </div>
      </div>

      <nav className="px-4 pb-6">
        <div className="space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              <NavLink
                to={item.href}
                end={item.exact}
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
                {item.children && (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                )}
              </NavLink>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}