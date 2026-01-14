'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react'
import { areas, propertyTypes } from '@/lib/data'

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void
  compact?: boolean
}

interface SearchFilters {
  location: string
  checkIn: string
  checkOut: string
  guests: number
  propertyType: string
  priceMin: number
  priceMax: number
  isElite: boolean
}

export default function SearchBar({ onSearch, compact = false }: SearchBarProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    propertyType: '',
    priceMin: 0,
    priceMax: 50000,
    isElite: false,
  })

  const handleSearch = () => {
    onSearch?.(filters)
  }

  if (compact) {
    return (
      <div className="flex items-center gap-2 p-2 bg-elite-card border border-elite-border rounded-xl">
        <div className="flex items-center gap-2 px-3 py-2 flex-1">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>
        <button onClick={handleSearch} className="elite-button py-2">
          Search
        </button>
      </div>
    )
  }

  return (
    <div className="bg-elite-card border border-elite-border rounded-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </label>
          <select
            className="elite-input"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Areas</option>
            {areas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Check In
          </label>
          <input
            type="date"
            className="elite-input"
            value={filters.checkIn}
            onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Check Out
          </label>
          <input
            type="date"
            className="elite-input"
            value={filters.checkOut}
            onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <Users className="h-4 w-4" />
            Guests
          </label>
          <select
            className="elite-input"
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: parseInt(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-elite-border">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-medium">More Filters</span>
        </button>
        <button onClick={handleSearch} className="elite-button">
          <Search className="h-4 w-4 inline mr-2" />
          Search Properties
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-elite-border">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Property Type</label>
            <select
              className="elite-input"
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
            >
              <option value="">All Types</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">
              Price Range: {filters.priceMin} - {filters.priceMax} AED
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              className="w-full"
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Elite Properties Only</label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-elite-border bg-elite-card"
                checked={filters.isElite}
                onChange={(e) => setFilters({ ...filters, isElite: e.target.checked })}
              />
              <span className="text-gray-800">Show Elite Collection</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
