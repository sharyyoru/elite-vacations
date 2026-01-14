'use client'

import { useState } from 'react'
import { properties } from '@/lib/data'
import { FileText, Sparkles, RefreshCw, Check, Copy, Eye } from 'lucide-react'

export default function SEOManagerPage() {
  const [selectedProperty, setSelectedProperty] = useState(properties[0])
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => setGenerating(false), 2000)
  }

  const seoData = {
    title: `${selectedProperty.title} | Luxury ${selectedProperty.type} in Dubai`,
    description: `Experience luxury in this stunning ${selectedProperty.bedrooms}-bedroom ${selectedProperty.type.toLowerCase()} in ${selectedProperty.area}. Features include ${selectedProperty.amenities.slice(0, 3).join(', ')}. Book your dream Dubai vacation today!`,
    keywords: [
      `${selectedProperty.area} vacation rental`,
      `luxury ${selectedProperty.type.toLowerCase()} Dubai`,
      'Dubai holiday home',
      'premium Dubai accommodation',
      `${selectedProperty.bedrooms} bedroom rental Dubai`,
    ],
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">SEO Manager</h1>
        <p className="text-gray-400">Auto-generate optimized meta tags for property pages</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Selection */}
        <div className="elite-card">
          <h2 className="text-xl font-semibold text-white mb-6">Select Property</h2>
          <div className="space-y-2">
            {properties.map((property) => (
              <button
                key={property.id}
                onClick={() => setSelectedProperty(property)}
                className={`w-full text-left p-3 rounded-xl transition-colors ${
                  selectedProperty.id === property.id
                    ? 'bg-elite-gold/20 border border-elite-gold/50'
                    : 'bg-elite-darker hover:bg-elite-card'
                }`}
              >
                <p className={`font-medium ${
                  selectedProperty.id === property.id ? 'text-elite-gold' : 'text-white'
                }`}>
                  {property.title}
                </p>
                <p className="text-sm text-gray-500">{property.area}</p>
              </button>
            ))}
          </div>
        </div>

        {/* SEO Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="elite-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-elite-gold" />
                AI-Generated Meta Tags
              </h2>
              <button 
                onClick={handleGenerate}
                disabled={generating}
                className="elite-button flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${generating ? 'animate-spin' : ''}`} />
                {generating ? 'Generating...' : 'Regenerate'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-400">Meta Title</label>
                  <span className="text-xs text-gray-500">{seoData.title.length}/60 chars</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="elite-input pr-10"
                    value={seoData.title}
                    readOnly
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-400">Meta Description</label>
                  <span className="text-xs text-gray-500">{seoData.description.length}/160 chars</span>
                </div>
                <div className="relative">
                  <textarea
                    className="elite-input min-h-[100px] pr-10"
                    value={seoData.description}
                    readOnly
                  />
                  <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-400 mb-2 block">Keywords</label>
                <div className="flex flex-wrap gap-2">
                  {seoData.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-elite-darker rounded-full text-sm text-gray-300"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Preview */}
          <div className="elite-card">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Eye className="h-5 w-5 text-elite-gold" />
              Google Search Preview
            </h2>
            <div className="p-4 bg-white rounded-xl">
              <p className="text-blue-600 text-lg hover:underline cursor-pointer">
                {seoData.title}
              </p>
              <p className="text-green-700 text-sm">
                elitevacations.ae › properties › {selectedProperty.id}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {seoData.description}
              </p>
            </div>
          </div>

          {/* Bulk Actions */}
          <div className="elite-card bg-gradient-to-r from-elite-gold/10 to-transparent border-elite-gold/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Bulk Generate All Properties</h3>
                <p className="text-sm text-gray-400">Generate SEO meta tags for all {properties.length} properties</p>
              </div>
              <button className="elite-button flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Generate All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
