import React, { useState } from 'react'
import { Plus, Download, QrCode, Eye, Copy } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Modal } from '../../components/ui/Modal'
import { formatDate, generateQRCode } from '../../lib/utils'
import toast from 'react-hot-toast'

const mockQRCodes = [
  {
    id: '1',
    code: 'QR123ABC',
    points_value: 100,
    status: 'active',
    created_at: '2024-01-15',
    used_by: null,
    used_at: null,
    expires_at: '2024-06-15',
  },
  {
    id: '2',
    code: 'QR456DEF',
    points_value: 50,
    status: 'used',
    created_at: '2024-01-10',
    used_by: 'Rajesh Kumar',
    used_at: '2024-01-20',
    expires_at: '2024-06-10',
  },
  {
    id: '3',
    code: 'QR789GHI',
    points_value: 200,
    status: 'expired',
    created_at: '2023-12-01',
    used_by: null,
    used_at: null,
    expires_at: '2024-01-01',
  },
]

export function QRCodesPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [selectedQR, setSelectedQR] = useState<any>(null)
  const [newQRPoints, setNewQRPoints] = useState(100)
  const [newQRQuantity, setNewQRQuantity] = useState(1)

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      used: 'bg-blue-100 text-blue-800',
      expired: 'bg-red-100 text-red-800',
    }
    return colors[status as keyof typeof colors] || colors.active
  }

  const handleCreateQRCodes = () => {
    // Simulate QR code creation
    toast.success(`${newQRQuantity} QR code(s) created successfully!`)
    setIsCreateModalOpen(false)
    setNewQRPoints(100)
    setNewQRQuantity(1)
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast.success('QR code copied to clipboard')
  }

  const handleViewQR = (qr: any) => {
    setSelectedQR(qr)
    setIsViewModalOpen(true)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">QR Code Management</h1>
          <p className="text-gray-600">Generate and manage QR codes for loyalty points</p>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            leftIcon={<Download className="w-4 h-4" />}
          >
            Export
          </Button>
          <Button 
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={() => setIsCreateModalOpen(true)}
          >
            Generate QR Codes
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Generated</p>
                <p className="text-2xl font-bold text-gray-900">75,213</p>
              </div>
              <QrCode className="w-8 h-8 text-primary-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">68,450</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Used</p>
                <p className="text-2xl font-bold text-blue-600">5,876</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Expired</p>
                <p className="text-2xl font-bold text-red-600">887</p>
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QR Codes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent QR Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Code</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Points Value</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Created</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Used By</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Expires</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockQRCodes.map((qr) => (
                  <tr key={qr.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {qr.code}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyCode(qr.code)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-primary-600">{qr.points_value} pts</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(qr.status)}`}>
                        {qr.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-900">{formatDate(qr.created_at)}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-900">
                        {qr.used_by || '-'}
                      </p>
                      {qr.used_at && (
                        <p className="text-xs text-gray-500">{formatDate(qr.used_at)}</p>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-900">{formatDate(qr.expires_at)}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewQR(qr)}
                        >
                          <Eye className="w-4 h-4" />
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

      {/* Create QR Codes Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Generate QR Codes"
        maxWidth="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Points Value per QR Code
            </label>
            <input
              type="number"
              min="1"
              value={newQRPoints}
              onChange={(e) => setNewQRPoints(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity to Generate
            </label>
            <input
              type="number"
              min="1"
              max="1000"
              value={newQRQuantity}
              onChange={(e) => setNewQRQuantity(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Maximum 1000 QR codes per batch</p>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="outline" 
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCreateQRCodes}>
              Generate {newQRQuantity} QR Code{newQRQuantity !== 1 ? 's' : ''}
            </Button>
          </div>
        </div>
      </Modal>

      {/* View QR Code Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="QR Code Details"
        maxWidth="md"
      >
        {selectedQR && (
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">QR Code Preview</p>
                  <code className="text-xs text-gray-700">{selectedQR.code}</code>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Code</label>
                <p className="text-sm text-gray-900 font-mono bg-gray-100 p-2 rounded">
                  {selectedQR.code}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Points Value</label>
                <p className="text-sm text-gray-900">{selectedQR.points_value} points</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(selectedQR.status)}`}>
                  {selectedQR.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Created</label>
                <p className="text-sm text-gray-900">{formatDate(selectedQR.created_at)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Expires</label>
                <p className="text-sm text-gray-900">{formatDate(selectedQR.expires_at)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Used By</label>
                <p className="text-sm text-gray-900">{selectedQR.used_by || 'Not used'}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button 
                variant="outline" 
                onClick={() => handleCopyCode(selectedQR.code)}
                leftIcon={<Copy className="w-4 h-4" />}
              >
                Copy Code
              </Button>
              <Button 
                onClick={() => setIsViewModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}