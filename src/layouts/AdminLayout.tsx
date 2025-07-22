import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/admin/Sidebar'
import { Header } from '../components/admin/Header'

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}