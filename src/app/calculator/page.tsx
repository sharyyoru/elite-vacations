'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calculator, TrendingUp, DollarSign, Calendar, Home } from 'lucide-react'

export default function CalculatorPage() {
  const [propertyType, setPropertyType] = useState('villa')
  const [bedrooms, setBedrooms] = useState(3)
  const [location, setLocation] = useState('palm-jumeirah')
  const [occupancyRate, setOccupancyRate] = useState(75)

  const baseRates: { [key: string]: number } = {
    'palm-jumeirah': 4500,
    'downtown': 3500,
    'marina': 3000,
    'jbr': 2800,
  }

  const typeMultiplier: { [key: string]: number } = {
    'villa': 1.5,
    'penthouse': 1.3,
    'apartment': 1.0,
  }

  const bedroomMultiplier = 1 + (bedrooms - 1) * 0.2
  const baseRate = baseRates[location] || 3000
  const dailyRate = Math.round(baseRate * typeMultiplier[propertyType] * bedroomMultiplier)
  const monthlyRevenue = Math.round(dailyRate * 30 * (occupancyRate / 100))
  const annualRevenue = monthlyRevenue * 12
  const expenses = Math.round(annualRevenue * 0.25)
  const netRevenue = annualRevenue - expenses

  return (
    <main className="min-h-screen bg-white">
      <Header variant="solid" />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
              <Calculator className="h-4 w-4 text-lime-dark" />
              <span className="text-sm font-medium text-lime-dark">Revenue Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Estimate Your Rental Income
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate potential earnings from your Dubai property with our advanced revenue estimator
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Property Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select 
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                  >
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Bedrooms
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                  >
                    <option value="palm-jumeirah">Palm Jumeirah</option>
                    <option value="downtown">Downtown Dubai</option>
                    <option value="marina">Dubai Marina</option>
                    <option value="jbr">JBR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Occupancy Rate: {occupancyRate}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="95"
                    value={occupancyRate}
                    onChange={(e) => setOccupancyRate(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-lime/10 to-lime/5 rounded-2xl border border-lime/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-lime/20 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-lime-dark" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Revenue Estimate</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">Daily Rate</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">AED {dailyRate.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">Monthly Revenue</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">AED {monthlyRevenue.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-lime/20 rounded-xl border-2 border-lime">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-lime-dark" />
                      <span className="font-medium text-gray-900">Annual Revenue</span>
                    </div>
                    <span className="text-2xl font-bold text-lime-dark">AED {annualRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Gross Annual Revenue</span>
                    <span className="font-medium">AED {annualRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Estimated Expenses (25%)</span>
                    <span className="font-medium text-red-600">- AED {expenses.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex justify-between">
                    <span className="font-semibold text-gray-900">Net Annual Revenue</span>
                    <span className="font-bold text-lime-dark text-xl">AED {netRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> This is an estimate based on market averages. Actual revenue may vary based on property condition, amenities, seasonality, and market conditions. Contact us for a detailed property analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
