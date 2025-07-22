import React, { useState } from 'react'
import { QRScanner } from '../../components/mobile/QRScanner'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { QrCode, Camera } from 'lucide-react'
import toast from 'react-hot-toast'

export function QRScanPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedCodes, setScannedCodes] = useState<string[]>([])

  const handleScan = async (code: string) => {
    try {
      // Simulate API call to validate and redeem QR code
      setScannedCodes(prev => [code, ...prev])
      setIsScanning(false)
      
      // Simulate points earned
      const pointsEarned = Math.floor(Math.random() * 200) + 50
      toast.success(`QR Code scanned! You earned ${pointsEarned} points!`)
    } catch (error) {
      toast.error('Failed to scan QR code')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Scan Button */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-10 h-10 text-secondary-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Scan QR Code</h2>
            <p className="text-gray-600 mb-6">Scan QR codes to earn loyalty points</p>
            
            <Button
              onClick={() => setIsScanning(true)}
              className="w-full bg-secondary-600 hover:bg-secondary-700"
              leftIcon={<Camera className="w-5 h-5" />}
            >
              Start Scanning
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scan History */}
      {scannedCodes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Scans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scannedCodes.slice(0, 5).map((code, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <code className="text-sm font-mono">{code}</code>
                    <p className="text-xs text-gray-500">Just now</p>
                  </div>
                  <span className="text-green-600 font-semibold">
                    +{Math.floor(Math.random() * 200) + 50} pts
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">How to Scan</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Tap "Start Scanning" to open the camera</li>
            <li>• Point your camera at the QR code</li>
            <li>• Keep the code within the frame</li>
            <li>• Wait for automatic detection</li>
          </ul>
        </CardContent>
      </Card>

      {/* QR Scanner Modal */}
      {isScanning && (
        <QRScanner 
          onScan={handleScan}
          onClose={() => setIsScanning(false)}
        />
      )}
    </div>
  )
}