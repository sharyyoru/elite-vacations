'use client'

import { ownerStats } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { DollarSign, TrendingUp, Calendar, Star, ArrowUpRight, Download, FileText } from 'lucide-react'
import AdminSidebar from '@/components/AdminSidebar'
import { useState } from 'react'

export default function OwnerPortalPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-elite-darker">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Owner Portal</h1>
              <p className="text-gray-400">Welcome back! View your property earnings and performance.</p>
            </div>
            <button className="elite-button flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="elite-card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-elite-gold/10 rounded-xl">
                  <DollarSign className="h-6 w-6 text-elite-gold" />
                </div>
                <div className="flex items-center gap-1 text-sm text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  +12%
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{formatCurrency(ownerStats.totalEarnings)}</p>
              <p className="text-sm text-gray-400">Total Earnings</p>
            </div>

            <div className="elite-card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex items-center gap-1 text-sm text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  +8%
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{formatCurrency(ownerStats.monthlyEarnings)}</p>
              <p className="text-sm text-gray-400">This Month</p>
            </div>

            <div className="elite-card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{ownerStats.occupancyRate}%</p>
              <p className="text-sm text-gray-400">Occupancy Rate</p>
            </div>

            <div className="elite-card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-xl">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{ownerStats.averageRating}</p>
              <p className="text-sm text-gray-400">Average Rating</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Earnings Chart */}
            <div className="elite-card">
              <h2 className="text-xl font-semibold text-white mb-6">Monthly Earnings (AED)</h2>
              <div className="h-64 flex items-end gap-4">
                {ownerStats.monthlyData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-elite-gold to-yellow-500 rounded-t-lg transition-all hover:from-elite-gold/80"
                      style={{ height: `${(data.earnings / 100000) * 100}%` }}
                    />
                    <p className="text-sm text-gray-400 mt-2">{data.month}</p>
                    <p className="text-xs text-gray-500">{(data.earnings / 1000).toFixed(0)}K</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="elite-card">
              <h2 className="text-xl font-semibold text-white mb-6">Expense Breakdown</h2>
              <div className="space-y-4">
                {Object.entries(ownerStats.expenses).map(([key, value]) => {
                  const total = Object.values(ownerStats.expenses).reduce((a, b) => a + b, 0)
                  const percentage = (value / total) * 100
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 capitalize">{key}</span>
                        <span className="text-white font-medium">{formatCurrency(value)}</span>
                      </div>
                      <div className="h-2 bg-elite-darker rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-elite-gold rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
                <div className="pt-4 border-t border-elite-border">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Expenses</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(Object.values(ownerStats.expenses).reduce((a, b) => a + b, 0))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="elite-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Statements</h2>
              <a href="/owner/reports" className="text-sm text-elite-gold hover:underline">View All</a>
            </div>
            <div className="space-y-4">
              {['December 2024', 'November 2024', 'October 2024'].map((month, index) => (
                <div key={month} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-elite-gold/10 rounded-lg">
                      <FileText className="h-5 w-5 text-elite-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{month} Statement</p>
                      <p className="text-sm text-gray-400">Generated on {15 - index} Jan 2025</p>
                    </div>
                  </div>
                  <button className="elite-button-secondary text-sm py-2 px-4 flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
