import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Phone, QrCode, HelpCircle, User } from 'lucide-react'
import { cn } from '../../lib/utils'

const navigation = [
  { name: 'Home', href: '/mobile', icon: Home, exact: true },
  { name: 'Contact', href: '/mobile/contact', icon: Phone },
  { name: 'Scan', href: '/mobile/scan', icon: QrCode },
  { name: 'Support', href: '/mobile/support', icon: HelpCircle },
  { name: 'Account', href: '/mobile/account', icon: User },
]

export function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.exact}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center px-3 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'text-secondary-600'
                  : 'text-gray-400 hover:text-gray-600'
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn('w-6 h-6 mb-1', isActive ? 'text-secondary-600' : 'text-gray-400')} />
                <span className={cn(isActive ? 'text-secondary-600' : 'text-gray-400')}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}