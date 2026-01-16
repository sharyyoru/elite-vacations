'use client'

import { ownerStats } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { DollarSign, TrendingUp, Calendar, Star, ArrowUpRight, Download, FileText } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OwnerPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header variant="solid" />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Owner Portal</h1>
              <p className="text-gray-600">Welcome back! View your property earnings and performance.</p>
            </div>
            <button className="px-6 py-3 bg-lime text-black font-semibold rounded-full hover:bg-lime-light transition-colors flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-lime/10 rounded-xl">
                  <DollarSign className="h-6 w-6 text-lime-dark" />
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4" />
                  +12%
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(ownerStats.totalEarnings)}</p>
              <p className="text-sm text-gray-600">Total Earnings</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4" />
                  +8%
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{formatCurrency(ownerStats.monthlyEarnings)}</p>
              <p className="text-sm text-gray-600">This Month</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{ownerStats.occupancyRate}%</p>
              <p className="text-sm text-gray-600">Occupancy Rate</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{ownerStats.averageRating}</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Earnings Chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Monthly Earnings (AED)</h2>
              <div className="h-64 flex items-end gap-4">
                {ownerStats.monthlyData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-lime to-lime-light rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${(data.earnings / 100000) * 100}%` }}
                    />
                    <p className="text-sm text-gray-700 mt-2 font-medium">{data.month}</p>
                    <p className="text-xs text-gray-500">{(data.earnings / 1000).toFixed(0)}K</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Expense Breakdown</h2>
              <div className="space-y-4">
                {Object.entries(ownerStats.expenses).map(([key, value]) => {
                  const total = Object.values(ownerStats.expenses).reduce((a, b) => a + b, 0)
                  const percentage = (value / total) * 100
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 capitalize font-medium">{key}</span>
                        <span className="text-gray-900 font-semibold">{formatCurrency(value)}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-lime rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Total Expenses</span>
                    <span className="text-gray-900 font-bold text-lg">
                      {formatCurrency(Object.values(ownerStats.expenses).reduce((a, b) => a + b, 0))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Statements</h2>
              <a href="/owner/reports" className="text-sm text-lime-dark hover:underline font-medium">View All</a>
            </div>
            <div className="space-y-4">
              {['December 2024', 'November 2024', 'October 2024'].map((month, index) => (
                <div key={month} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-lime/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-lime/10 rounded-lg">
                      <FileText className="h-5 w-5 text-lime-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{month} Statement</p>
                      <p className="text-sm text-gray-600">Generated on {15 - index} Jan 2025</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-lime hover:text-lime-dark transition-colors text-sm flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
