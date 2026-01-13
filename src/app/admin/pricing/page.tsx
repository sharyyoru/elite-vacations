'use client'

import { useState } from 'react'
import { properties } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { DollarSign, Calendar, Percent, AlertCircle, Save, Plus, Trash2 } from 'lucide-react'

const seasonalRates = [
  { id: 1, name: 'Peak Season (Dec-Jan)', multiplier: 1.5, startDate: 'Dec 15', endDate: 'Jan 15' },
  { id: 2, name: 'Summer (Jul-Aug)', multiplier: 0.8, startDate: 'Jul 1', endDate: 'Aug 31' },
  { id: 3, name: 'Eid Holiday', multiplier: 1.3, startDate: 'Apr 10', endDate: 'Apr 15' },
  { id: 4, name: 'New Year', multiplier: 2.0, startDate: 'Dec 31', endDate: 'Jan 2' },
]

const specialEvents = [
  { id: 1, name: 'COP28', multiplier: 1.8, startDate: '2024-11-30', endDate: '2024-12-12' },
  { id: 2, name: 'Dubai Expo', multiplier: 1.5, startDate: '2025-01-01', endDate: '2025-03-31' },
  { id: 3, name: 'F1 Abu Dhabi', multiplier: 1.6, startDate: '2024-12-06', endDate: '2024-12-08' },
]

export default function AdminPricingPage() {
  const [weekendSurcharge, setWeekendSurcharge] = useState(15)
  const [minStay, setMinStay] = useState(2)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Pricing Engine</h1>
        <p className="text-gray-400">Configure automated pricing rules and seasonal rates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Base Pricing */}
        <div className="lg:col-span-2 space-y-6">
          <div className="elite-card">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-elite-gold" />
              Base Pricing by Property
            </h2>
            <div className="space-y-4">
              {properties.slice(0, 4).map((property) => (
                <div key={property.id} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl">
                  <div>
                    <p className="font-medium text-white">{property.title}</p>
                    <p className="text-sm text-gray-400">{property.type} • {property.area}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Base Rate (AED)</label>
                      <input 
                        type="number" 
                        className="elite-input w-32 text-right"
                        defaultValue={property.price}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Min Stay</label>
                      <input 
                        type="number" 
                        className="elite-input w-20 text-center"
                        defaultValue={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Rates */}
          <div className="elite-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-elite-gold" />
                Seasonal Rates
              </h2>
              <button className="elite-button-secondary text-sm flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Season
              </button>
            </div>
            <div className="space-y-4">
              {seasonalRates.map((rate) => (
                <div key={rate.id} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl">
                  <div>
                    <p className="font-medium text-white">{rate.name}</p>
                    <p className="text-sm text-gray-400">{rate.startDate} - {rate.endDate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      <input 
                        type="number" 
                        step="0.1"
                        className="elite-input w-20 text-center"
                        defaultValue={rate.multiplier}
                      />
                    </div>
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Events */}
          <div className="elite-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-elite-gold" />
                Special Events (Premium Pricing)
              </h2>
              <button className="elite-button-secondary text-sm flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Event
              </button>
            </div>
            <div className="space-y-4">
              {specialEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl border border-elite-gold/20">
                  <div>
                    <p className="font-medium text-white">{event.name}</p>
                    <p className="text-sm text-gray-400">{event.startDate} - {event.endDate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      event.multiplier >= 1.5 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      +{Math.round((event.multiplier - 1) * 100)}%
                    </span>
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="space-y-6">
          <div className="elite-card">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Percent className="h-5 w-5 text-elite-gold" />
              Quick Settings
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Weekend Surcharge (Fri-Sat)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={weekendSurcharge}
                    onChange={(e) => setWeekendSurcharge(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-white font-medium w-12 text-right">+{weekendSurcharge}%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Minimum Stay (nights)
                </label>
                <input
                  type="number"
                  className="elite-input"
                  value={minStay}
                  onChange={(e) => setMinStay(parseInt(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Last-Minute Discount (within 48hrs)
                </label>
                <select className="elite-input">
                  <option>No discount</option>
                  <option>5% off</option>
                  <option>10% off</option>
                  <option>15% off</option>
                  <option>20% off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Long Stay Discount (7+ nights)
                </label>
                <select className="elite-input">
                  <option>No discount</option>
                  <option>5% off</option>
                  <option>10% off</option>
                  <option>15% off</option>
                  <option>20% off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Monthly Rate Discount
                </label>
                <select className="elite-input">
                  <option>25% off</option>
                  <option>30% off</option>
                  <option>35% off</option>
                  <option>40% off</option>
                </select>
              </div>
            </div>
          </div>

          <button className="elite-button w-full flex items-center justify-center gap-2">
            <Save className="h-5 w-5" />
            Save All Changes
          </button>

          <div className="p-4 bg-elite-gold/10 border border-elite-gold/30 rounded-xl">
            <p className="text-sm text-elite-gold">
              <strong>Tip:</strong> Pricing changes will apply to new bookings only. Existing confirmed bookings will retain their original rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
