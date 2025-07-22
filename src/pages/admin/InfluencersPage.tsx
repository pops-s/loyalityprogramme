import React, { useState } from 'react'
import { Search, Filter, Plus, Eye, Edit, Trash2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { formatDate, getTierColor } from '../../lib/utils'

const mockInfluencers = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '9821288522',
    tier: 'Carpenter',
    status: 'approved',
    kyc_status: 'approved',
    total_points: 1250,
    balance_points: 850,
    created_at: '2024-01-15',
  },
  {
    id: '2',
    name: 'Amit Sharma',
    email: 'amit@example.com',
    phone: '9876543210',
    tier: 'Electrician',
    status: 'pending',
    kyc_status: 'pending',
    total_points: 750,
    balance_points: 500,
    created_at: '2024-01-20',
  },
  {
    id: '3',
    name: 'Priya Singh',
    email: 'priya@example.com',
    phone: '9123456789',
    tier: 'Dealer',
    status: 'approved',
    kyc_status: 'approved',
    total_points: 2100,
    balance_points: 1800,
    created_at: '2024-01-10',
  },
]

export function InfluencersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const getStatusBadge = (status: string) => {
    const colors = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
      suspended: 'bg-gray-100 text-gray-800',
    }
    return colors[status as keyof typeof colors] || colors.pending
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Influencer Network</h1>
          <p className="text-gray-600">Manage your influencers and dealers</p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>
          Add Influencer
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search influencers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="suspended">Suspended</option>
            </select>
            <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Influencers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Influencers ({mockInfluencers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Tier</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">KYC</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Points</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Joined</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockInfluencers.map((influencer) => (
                  <tr key={influencer.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{influencer.name}</p>
                        <p className="text-sm text-gray-500">{influencer.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-900">{influencer.phone}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${getTierColor(influencer.tier)}`}></div>
                        <span className="text-sm font-medium">{influencer.tier}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(influencer.status)}`}>
                        {influencer.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(influencer.kyc_status)}`}>
                        {influencer.kyc_status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{influencer.total_points} total</p>
                        <p className="text-gray-500">{influencer.balance_points} balance</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-900">{formatDate(influencer.created_at)}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}