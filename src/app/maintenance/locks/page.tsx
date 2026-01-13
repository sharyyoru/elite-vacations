'use client'

import { useState } from 'react'
import { properties, bookings } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Key, Plus, Copy, RefreshCw, Clock, Check, Trash2 } from 'lucide-react'
import AdminSidebar from '@/components/AdminSidebar'

const activeCodes = [
  { 
    id: 1, 
    property: 'Luxury Penthouse at Palm Jumeirah',
    guest: 'John Smith',
    code: '847291',
    validFrom: '2024-01-15',
    validUntil: '2024-01-22',
    status: 'active'
  },
  { 
    id: 2, 
    property: 'Marina Waterfront Suite',
    guest: 'Sarah Johnson',
    code: '629183',
    validFrom: '2024-01-18',
    validUntil: '2024-01-25',
    status: 'pending'
  },
]

export default function SmartLocksPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [showGenerateModal, setShowGenerateModal] = useState(false)

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  return (
    <div className="min-h-screen bg-elite-darker">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Smart Lock Management</h1>
              <p className="text-gray-400">Generate and manage digital access codes</p>
            </div>
            <button 
              onClick={() => setShowGenerateModal(true)}
              className="elite-button flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Generate Code
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Key className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {activeCodes.filter(c => c.status === 'active').length}
                  </p>
                  <p className="text-sm text-gray-400">Active Codes</p>
                </div>
              </div>
            </div>
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <Clock className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {activeCodes.filter(c => c.status === 'pending').length}
                  </p>
                  <p className="text-sm text-gray-400">Pending Activation</p>
                </div>
              </div>
            </div>
            <div className="elite-card">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-elite-gold/20 rounded-xl">
                  <Check className="h-6 w-6 text-elite-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{properties.length}</p>
                  <p className="text-sm text-gray-400">Connected Locks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Codes */}
          <div className="elite-card">
            <h2 className="text-xl font-semibold text-white mb-6">Active Access Codes</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-elite-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Property</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Guest</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Code</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Valid Period</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCodes.map((code) => (
                    <tr key={code.id} className="border-b border-elite-border hover:bg-elite-darker/50">
                      <td className="py-4 px-4 text-white">{code.property}</td>
                      <td className="py-4 px-4 text-gray-300">{code.guest}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <code className="px-3 py-1 bg-elite-darker rounded-lg text-elite-gold font-mono text-lg">
                            {code.code}
                          </code>
                          <button className="p-1 text-gray-400 hover:text-white">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {formatDate(code.validFrom)} - {formatDate(code.validUntil)}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          code.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {code.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-elite-card">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-elite-card">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Generate Modal */}
          {showGenerateModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-elite-card border border-elite-border rounded-2xl w-full max-w-md">
                <div className="p-6 border-b border-elite-border">
                  <h2 className="text-2xl font-semibold text-white">Generate Access Code</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Property</label>
                    <select className="elite-input">
                      {properties.map((property) => (
                        <option key={property.id}>{property.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Guest Name</label>
                    <input type="text" className="elite-input" placeholder="John Doe" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Valid From</label>
                      <input type="date" className="elite-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Valid Until</label>
                      <input type="date" className="elite-input" />
                    </div>
                  </div>
                  <div className="p-4 bg-elite-darker rounded-xl text-center">
                    <p className="text-sm text-gray-400 mb-2">Generated Code</p>
                    <code className="text-3xl font-mono text-elite-gold">{generateCode()}</code>
                  </div>
                </div>
                <div className="p-6 border-t border-elite-border flex justify-end gap-4">
                  <button onClick={() => setShowGenerateModal(false)} className="elite-button-secondary">
                    Cancel
                  </button>
                  <button className="elite-button">Create & Send to Guest</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
