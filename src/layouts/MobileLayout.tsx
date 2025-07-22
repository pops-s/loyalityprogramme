import React from 'react'
import { Outlet } from 'react-router-dom'
import { MobileHeader } from '../components/mobile/MobileHeader'
import { BottomNavigation } from '../components/mobile/BottomNavigation'

export function MobileLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      <main className="pb-20">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}