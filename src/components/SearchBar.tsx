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
      <div className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 px-3 py-2 flex-1">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none flex-1"
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
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Location
          </label>
          <select
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Areas</option>
            {areas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Check In
          </label>
          <input
            type="date"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30"
            value={filters.checkIn}
            onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Check Out
          </label>
          <input
            type="date"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30"
            value={filters.checkOut}
            onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            Guests
          </label>
          <select
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30"
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: parseInt(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 pt-4 border-t border-gray-100">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-medium">More Filters</span>
        </button>
        <button onClick={handleSearch} className="w-full sm:w-auto px-6 py-2.5 bg-lime text-black font-semibold rounded-full transition-all duration-300 hover:bg-lime-light hover:shadow-lg flex items-center justify-center gap-2">
          <Search className="h-4 w-4" />
          Search Properties
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 pt-4 border-t border-gray-100">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500">Property Type</label>
            <select
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime"
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
            >
              <option value="">All Types</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500">
              Price Range: {filters.priceMin} - {filters.priceMax} AED
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              className="w-full accent-lime"
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) })}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500">Elite Properties Only</label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-lime focus:ring-lime"
                checked={filters.isElite}
                onChange={(e) => setFilters({ ...filters, isElite: e.target.checked })}
              />
              <span className="text-gray-700 text-sm">Show Elite Collection</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
