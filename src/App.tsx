import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuthContext } from './context/AuthContext'
import { LoadingSpinner } from './components/ui/LoadingSpinner'

// Pages
import { AuthPage } from './pages/AuthPage'

// Admin Layout and Pages
import { AdminLayout } from './layouts/AdminLayout'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import { InfluencersPage } from './pages/admin/InfluencersPage'
import { QRCodesPage } from './pages/admin/QRCodesPage'

// Mobile Layout and Pages
import { MobileLayout } from './layouts/MobileLayout'
import { MobileHome } from './pages/mobile/MobileHome'
import { QRScanPage } from './pages/mobile/QRScanPage'
import { RedeemPage } from './pages/mobile/RedeemPage'
import { AccountPage } from './pages/mobile/AccountPage'

const queryClient = new QueryClient()

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) {
  const { user, profile, loading } = useAuthContext()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!user || !profile) {
    return <Navigate to="/auth" replace />
  }

  if (allowedRoles && !allowedRoles.includes(profile.role)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

function AppRouter() {
  const { user, profile, loading } = useAuthContext()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!user || !profile) {
    return <AuthPage />
  }

  // Redirect based on user role
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        {profile.role === 'admin' && (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="influencers" element={<InfluencersPage />} />
            <Route path="qr-codes" element={<QRCodesPage />} />
          </Route>
        )}

        {/* Mobile Routes */}
        {(profile.role === 'customer' || profile.role === 'influencer') && (
          <Route path="/mobile" element={<MobileLayout />}>
            <Route index element={<MobileHome />} />
            <Route path="scan" element={<QRScanPage />} />
            <Route path="redeem" element={<RedeemPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
        )}

        {/* Default Redirects */}
        <Route path="/" element={
          <Navigate 
            to={profile.role === 'admin' ? '/admin' : '/mobile'} 
            replace 
          />
        } />
        
        {/* Catch all */}
        <Route path="*" element={
          <Navigate 
            to={profile.role === 'admin' ? '/admin' : '/mobile'} 
            replace 
          />
        } />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="App">
          <AppRouter />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#ffffff',
                color: '#374151',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              },
            }}
          />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App