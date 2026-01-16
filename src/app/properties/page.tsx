'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { properties } from '@/lib/data'
import { Grid3X3, List } from 'lucide-react'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredProperties, setFilteredProperties] = useState(properties)

  return (
    <main className="min-h-screen bg-white">
      <Header variant="transparent" />

      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/20.png"
          alt="Dubai Properties"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Luxury Properties
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Discover your perfect Dubai vacation rental
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SearchBar />
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Showing <span className="text-gray-900 font-medium">{filteredProperties.length}</span> properties
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-lime text-black' : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-lime text-black' : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
