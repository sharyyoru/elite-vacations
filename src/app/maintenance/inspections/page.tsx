'use client'

import { useState } from 'react'
import { properties, inspectionChecklist } from '@/lib/data'
import { ClipboardCheck, Check, Camera, Send, ChevronDown } from 'lucide-react'
import AdminSidebar from '@/components/AdminSidebar'

export default function InspectionsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(properties[0])
  const [inspectionType, setInspectionType] = useState<'pre-checkin' | 'post-checkout'>('pre-checkin')
  const [checklist, setChecklist] = useState(inspectionChecklist)

  const toggleItem = (id: number) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const completedCount = checklist.filter(item => item.checked).length
  const progress = (completedCount / checklist.length) * 100

  const categories = [...new Set(checklist.map(item => item.category))]

  return (
    <div className="min-h-screen bg-elite-darker">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Property Inspections</h1>
            <p className="text-gray-400">Mobile-optimized checklists for turnovers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property & Type Selection */}
            <div className="space-y-6">
              <div className="elite-card">
                <h2 className="text-lg font-semibold text-white mb-4">Select Property</h2>
                <select 
                  className="elite-input"
                  value={selectedProperty.id}
                  onChange={(e) => setSelectedProperty(properties.find(p => p.id === e.target.value) || properties[0])}
                >
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>{property.title}</option>
                  ))}
                </select>
              </div>

              <div className="elite-card">
                <h2 className="text-lg font-semibold text-white mb-4">Inspection Type</h2>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setInspectionType('pre-checkin')}
                    className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                      inspectionType === 'pre-checkin'
                        ? 'bg-elite-green text-black'
                        : 'bg-elite-darker text-gray-400 hover:text-white'
                    }`}
                  >
                    Pre-Check-in
                  </button>
                  <button
                    onClick={() => setInspectionType('post-checkout')}
                    className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                      inspectionType === 'post-checkout'
                        ? 'bg-elite-green text-black'
                        : 'bg-elite-darker text-gray-400 hover:text-white'
                    }`}
                  >
                    Post-Checkout
                  </button>
                </div>
              </div>

              <div className="elite-card">
                <h2 className="text-lg font-semibold text-white mb-4">Progress</h2>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Completed</span>
                    <span className="text-white">{completedCount} / {checklist.length}</span>
                  </div>
                  <div className="h-3 bg-elite-darker rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-elite-green rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <button 
                  className="elite-button w-full flex items-center justify-center gap-2"
                  disabled={completedCount < checklist.length}
                >
                  <Send className="h-4 w-4" />
                  Submit Report
                </button>
              </div>
            </div>

            {/* Checklist */}
            <div className="lg:col-span-2 elite-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-elite-green" />
                  Inspection Checklist
                </h2>
                <button className="elite-button-secondary text-sm flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Add Photo
                </button>
              </div>

              <div className="space-y-6">
                {categories.map((category) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-elite-green uppercase tracking-wider mb-3">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {checklist
                        .filter(item => item.category === category)
                        .map((item) => (
                          <button
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors ${
                              item.checked
                                ? 'bg-green-500/10 border border-green-500/30'
                                : 'bg-elite-darker hover:bg-elite-card'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                              item.checked
                                ? 'bg-green-500'
                                : 'border-2 border-gray-600'
                            }`}>
                              {item.checked && <Check className="h-4 w-4 text-white" />}
                            </div>
                            <span className={item.checked ? 'text-green-400' : 'text-gray-300'}>
                              {item.item}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
