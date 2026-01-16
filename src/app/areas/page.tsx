import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Star, Home, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const areas = [
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    description: 'Iconic man-made island featuring luxury beachfront villas and apartments with stunning views of the Arabian Gulf.',
    properties: 12,
    avgPrice: 4500,
    rating: 4.9,
    highlights: ['Beachfront Living', 'World-class Dining', 'Private Beaches', 'Luxury Resorts'],
    image: '/images/21.png'
  },
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    description: 'The heart of Dubai, home to Burj Khalifa, Dubai Mall, and vibrant urban lifestyle with premium amenities.',
    properties: 18,
    avgPrice: 3500,
    rating: 4.8,
    highlights: ['Burj Khalifa Views', 'Dubai Mall', 'Fine Dining', 'Entertainment Hub'],
    image: '/images/20.png'
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    description: 'Stunning waterfront community with modern high-rises, yacht-lined promenades, and vibrant nightlife.',
    properties: 15,
    avgPrice: 3000,
    rating: 4.7,
    highlights: ['Marina Views', 'Beach Access', 'Dining & Nightlife', 'Water Sports'],
    image: '/images/21.png'
  },
  {
    id: 'jbr',
    name: 'Jumeirah Beach Residence',
    description: 'Beachfront living at its finest with direct beach access, outdoor markets, and family-friendly atmosphere.',
    properties: 10,
    avgPrice: 2800,
    rating: 4.6,
    highlights: ['Beach Access', 'The Walk JBR', 'Family Friendly', 'Water Activities'],
    image: '/images/20.png'
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    description: 'Modern business district with luxury apartments, canal views, and proximity to major business centers.',
    properties: 8,
    avgPrice: 2500,
    rating: 4.5,
    highlights: ['Canal Views', 'Business Hub', 'Modern Living', 'Central Location'],
    image: '/images/21.png'
  },
  {
    id: 'arabian-ranches',
    name: 'Arabian Ranches',
    description: 'Exclusive gated community offering spacious villas, golf courses, and a peaceful suburban lifestyle.',
    properties: 6,
    avgPrice: 3200,
    rating: 4.7,
    highlights: ['Golf Course', 'Family Community', 'Spacious Villas', 'Parks & Pools'],
    image: '/images/20.png'
  },
]

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="solid" />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-lime-dark" />
              <span className="text-sm font-medium text-lime-dark">Popular Areas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Explore Dubai&apos;s Premier Locations
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after neighborhoods for luxury vacation rentals in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {areas.map((area) => (
              <div key={area.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-lime/20 to-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-lime/40" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                    <div className="flex items-center gap-1 bg-lime/10 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-lime-dark fill-lime-dark" />
                      <span className="text-sm font-medium text-lime-dark">{area.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.highlights.slice(0, 3).map((highlight) => (
                      <span key={highlight} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Home className="h-4 w-4" />
                      <span>{area.properties} properties</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-lime-dark" />
                      <span className="text-sm font-medium text-gray-900">
                        from AED {area.avgPrice.toLocaleString()}/night
                      </span>
                    </div>
                  </div>

                  <Link 
                    href={`/properties?area=${area.id}`}
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-lime text-black font-medium rounded-full hover:bg-lime-light transition-colors"
                  >
                    View Properties
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
