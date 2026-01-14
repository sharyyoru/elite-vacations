'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { properties } from '@/lib/data'
import { Grid3X3, List, SlidersHorizontal } from 'lucide-react'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredProperties, setFilteredProperties] = useState(properties)

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Luxury Properties in Dubai
            </h1>
            <p className="text-gray-400">
              Discover {filteredProperties.length} premium vacation rentals across Dubai&apos;s most exclusive locations
            </p>
          </div>

          <div className="mb-8">
            <SearchBar />
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              Showing <span className="text-white font-medium">{filteredProperties.length}</span> properties
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-elite-green text-black' : 'bg-elite-card text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-elite-green text-black' : 'bg-elite-card text-gray-400 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
