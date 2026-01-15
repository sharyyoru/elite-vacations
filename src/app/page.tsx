import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { properties } from '@/lib/data'

export default function Home() {
  const featuredProperties = properties.filter((p) => p.isElite).slice(0, 6)
  const popularProperties = properties.slice(0, 6)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Palm Trees */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/21.png"
            alt="Dubai Palm Trees"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Decorative lime dots */}
        <div className="absolute top-32 left-8 md:left-16 w-8 h-8 md:w-12 md:h-12 bg-lime rounded-full z-10" />
        <div className="absolute top-44 left-4 md:left-10 w-4 h-4 md:w-6 md:h-6 bg-lime rounded-full z-10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-8 md:mb-12 tracking-tight">
            EXPERIENCE <span className="text-white/90">DUBAI</span>
          </h1>

          <div className="max-w-4xl">
            <SearchBar />
          </div>
        </div>

        {/* Decorative lime dot bottom right */}
        <div className="absolute bottom-32 right-8 md:right-16 w-10 h-10 md:w-16 md:h-16 bg-lime rounded-full z-10" />
      </section>

      {/* Second Hero - Desert with Skyline */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20.png"
            alt="Dubai Desert Skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Decorative lime dot */}
        <div className="absolute top-16 left-8 md:left-16 w-6 h-6 md:w-10 md:h-10 bg-lime rounded-full z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            DUBAI HOLIDAY HOMES
          </h2>
        </div>
      </section>

      {/* Popular in Downtown Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 tracking-tight">
            POPULAR IN DOWNTOWN
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {popularProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              FEATURED PROPERTIES
            </h2>
            <Link 
              href="/properties" 
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <Link 
            href="/properties" 
            className="sm:hidden flex justify-center mt-8 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            View All Properties →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              List Your Property With Us
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Join Dubai&apos;s premier vacation rental platform. Professional management,
              global distribution, and premium returns on your investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/owner" className="elite-button">
                Owner Portal
              </Link>
              <Link href="/contact" className="elite-button-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
