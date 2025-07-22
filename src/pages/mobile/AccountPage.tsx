import React from 'react'
import { User, Phone, Mail, Calendar, LogOut, Edit, Shield, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { useAuthContext } from '../../context/AuthContext'
import { formatDate, formatNumber } from '../../lib/utils'
import toast from 'react-hot-toast'

export function AccountPage() {
  const { profile, signOut } = useAuthContext()

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Signed out successfully')
    } catch (error) {
      toast.error('Error signing out')
    }
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card>
          <CardContent className="p-8 text-center">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile not found</h3>
            <p className="text-gray-600">Please sign in to view your account.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
          {profile.phone && (
            <p className="text-gray-600">{profile.phone}</p>
          )}
          <div className="flex justify-center mt-4">
            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
              profile.role === 'influencer' 
                ? 'bg-purple-100 text-purple-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {profile.role}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Points Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="w-5 h-5 mr-2 text-primary-600" />
            Points Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <p className="text-2xl font-bold text-primary-600">
                {formatNumber(profile.total_points)}
              </p>
              <p className="text-sm text-gray-600">Total Earned</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">
                {formatNumber(profile.balance_points)}
              </p>
              <p className="text-sm text-gray-600">Available</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <User className="w-5 h-5 mr-2 text-primary-600" />
              Account Details
            </span>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>
          </div>
          
          {profile.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-3">
            <Calendar className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-medium">{formatDate(profile.created_at)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Shield className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">KYC Status</p>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                profile.kyc_status === 'approved' 
                  ? 'bg-green-100 text-green-800'
                  : profile.kyc_status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {profile.kyc_status}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Settings
          </Button>

          <Button 
            variant="danger" 
            className="w-full justify-start"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}