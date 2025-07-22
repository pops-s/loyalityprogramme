import React, { useState } from 'react'
import { Gift, Star, ShoppingBag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { useAuthContext } from '../../context/AuthContext'
import { formatNumber } from '../../lib/utils'
import toast from 'react-hot-toast'

const rewardCategories = [
  { id: 'gifts', name: 'Gifts & Vouchers', icon: Gift },
  { id: 'products', name: 'Products', icon: ShoppingBag },
  { id: 'premium', name: 'Premium Rewards', icon: Star },
]

const mockRewards = [
  {
    id: '1',
    name: 'Amazon Gift Card',
    description: '₹500 Amazon Gift Voucher',
    points_required: 500,
    category: 'gifts',
    image_url: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 50,
  },
  {
    id: '2',
    name: 'Bluetooth Headphones',
    description: 'High-quality wireless headphones',
    points_required: 1200,
    category: 'products',
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 25,
  },
  {
    id: '3',
    name: 'Smartphone',
    description: 'Latest Android smartphone',
    points_required: 5000,
    category: 'premium',
    image_url: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 5,
  },
]

export function RedeemPage() {
  const { profile } = useAuthContext()
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const userPoints = profile?.balance_points || 0

  const filteredRewards = selectedCategory === 'all' 
    ? mockRewards 
    : mockRewards.filter(reward => reward.category === selectedCategory)

  const handleRedeem = (reward: any) => {
    if (userPoints < reward.points_required) {
      toast.error('Insufficient points for this reward')
      return
    }
    
    toast.success(`Redemption request submitted for ${reward.name}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Points Balance */}
      <Card>
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Available Points</h2>
          <p className="text-3xl font-bold text-primary-600">{formatNumber(userPoints)}</p>
          <p className="text-sm text-gray-500">Ready to redeem</p>
        </CardContent>
      </Card>

      {/* Category Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-secondary-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          All Rewards
        </button>
        {rewardCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-secondary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="space-y-4">
        {filteredRewards.map((reward) => (
          <Card key={reward.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={reward.image_url}
                  alt={reward.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{reward.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold text-primary-600">
                        {formatNumber(reward.points_required)} pts
                      </span>
                      <span className="text-xs text-gray-500">
                        Stock: {reward.stock}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant={userPoints >= reward.points_required ? 'primary' : 'outline'}
                      disabled={userPoints < reward.points_required || reward.stock === 0}
                      onClick={() => handleRedeem(reward)}
                    >
                      {userPoints >= reward.points_required ? 'Redeem' : 'Not enough points'}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRewards.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Gift className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No rewards available</h3>
            <p className="text-gray-600">Check back later for new rewards in this category.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}