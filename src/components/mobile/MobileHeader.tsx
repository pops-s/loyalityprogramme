import React from 'react'
import { Bell } from 'lucide-react'

export function MobileHeader() {
  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SS</span>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">SUPER SUPPLIERS</p>
          </div>
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  )
}