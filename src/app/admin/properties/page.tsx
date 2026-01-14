'use client'

import { useState } from 'react'
import Image from 'next/image'
import { properties } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { Plus, Search, Edit, Trash2, Eye, Crown, MoreVertical, Upload } from 'lucide-react'

export default function AdminPropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredProperties = properties.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Properties</h1>
          <p className="text-gray-400">Manage your property inventory</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="elite-button flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Property
        </button>
      </div>

      {/* Search & Filters */}
      <div className="elite-card">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              className="elite-input pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="elite-input w-48">
            <option>All Types</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
          </select>
          <select className="elite-input w-48">
            <option>All Areas</option>
            <option>Palm Jumeirah</option>
            <option>Downtown</option>
            <option>Dubai Marina</option>
          </select>
        </div>
      </div>

      {/* Properties Table */}
      <div className="elite-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-elite-border">
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Property</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Location</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Type</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Price/Night</th>
              <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProperties.map((property) => (
              <tr key={property.id} className="border-b border-elite-border hover:bg-elite-darker/50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-white">{property.title}</p>
                        {property.isElite && (
                          <Crown className="h-4 w-4 text-elite-green" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{property.bedrooms} bed • {property.bathrooms} bath</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-300">{property.location}</td>
                <td className="py-4 px-4 text-gray-300">{property.type}</td>
                <td className="py-4 px-4 text-white font-medium">{formatCurrency(property.price)}</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                    Active
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-elite-card rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-elite-card rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-elite-card rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-elite-card border border-elite-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-elite-border">
              <h2 className="text-2xl font-semibold text-white">Add New Property</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Property Title</label>
                  <input type="text" className="elite-input" placeholder="Luxury Villa..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Property Type</label>
                  <select className="elite-input">
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Penthouse</option>
                    <option>Townhouse</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                <input type="text" className="elite-input" placeholder="Palm Jumeirah, Dubai" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Bedrooms</label>
                  <input type="number" className="elite-input" placeholder="4" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Bathrooms</label>
                  <input type="number" className="elite-input" placeholder="5" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Guests</label>
                  <input type="number" className="elite-input" placeholder="8" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Sq. Ft.</label>
                  <input type="number" className="elite-input" placeholder="5500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Base Price (AED/night)</label>
                <input type="number" className="elite-input" placeholder="4500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea className="elite-input min-h-[100px]" placeholder="Property description..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Images</label>
                <div className="border-2 border-dashed border-elite-border rounded-xl p-8 text-center">
                  <Upload className="h-10 w-10 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">Drag & drop images or click to upload</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="elite" className="w-5 h-5 rounded border-elite-border bg-elite-darker" />
                <label htmlFor="elite" className="text-white">Mark as Elite Property</label>
              </div>
            </div>
            <div className="p-6 border-t border-elite-border flex justify-end gap-4">
              <button 
                onClick={() => setShowAddModal(false)}
                className="elite-button-secondary"
              >
                Cancel
              </button>
              <button className="elite-button">
                Add Property
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
