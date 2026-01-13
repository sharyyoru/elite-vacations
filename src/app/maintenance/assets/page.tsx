'use client'

import { useState } from 'react'
import { assets, properties } from '@/lib/data'
import { formatCurrency, formatDate } from '@/lib/utils'
import { Package, Plus, Search, AlertTriangle, Check, Calendar } from 'lucide-react'
import AdminSidebar from '@/components/AdminSidebar'

export default function AssetsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredAssets = filter === 'all' 
    ? assets 
    : assets.filter(a => a.status === filter)

  return (
    <div className="min-h-screen bg-elite-darker">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Asset Tracking</h1>
              <p className="text-gray-400">Track furniture, appliances, and warranty status</p>
            </div>
            <button className="elite-button flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add Asset
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-elite-gold/20 rounded-xl">
                  <Package className="h-6 w-6 text-elite-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{assets.length}</p>
                  <p className="text-sm text-gray-400">Total Assets</p>
                </div>
              </div>
            </div>
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Check className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {assets.filter(a => a.status === 'good').length}
                  </p>
                  <p className="text-sm text-gray-400">Good Condition</p>
                </div>
              </div>
            </div>
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {assets.filter(a => a.status === 'needs-attention').length}
                  </p>
                  <p className="text-sm text-gray-400">Needs Attention</p>
                </div>
              </div>
            </div>
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <Calendar className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-sm text-gray-400">Warranty Expiring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="elite-card">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="elite-input pl-12"
                />
              </div>
              <select 
                className="elite-input w-48"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="good">Good</option>
                <option value="needs-attention">Needs Attention</option>
              </select>
              <select className="elite-input w-48">
                <option>All Properties</option>
                {properties.map((p) => (
                  <option key={p.id}>{p.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Assets Table */}
          <div className="elite-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-elite-border">
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Asset</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Property</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Category</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Value</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Warranty Expires</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) => {
                  const warrantyDate = new Date(asset.warrantyExpiry)
                  const isExpiringSoon = warrantyDate < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                  
                  return (
                    <tr key={asset.id} className="border-b border-elite-border hover:bg-elite-darker/50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-white">{asset.name}</p>
                          <p className="text-sm text-gray-500">ID: {asset.id}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{asset.property}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-elite-darker rounded text-sm text-gray-300">
                          {asset.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-white font-medium">{formatCurrency(asset.value)}</td>
                      <td className="py-4 px-4">
                        <span className={isExpiringSoon ? 'text-red-400' : 'text-gray-300'}>
                          {formatDate(asset.warrantyExpiry)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          asset.status === 'good'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {asset.status === 'good' ? 'Good' : 'Needs Attention'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
