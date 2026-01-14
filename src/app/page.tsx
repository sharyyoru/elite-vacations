import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { properties } from '@/lib/data'
import { Crown, Shield, Sparkles, Clock, MapPin, Star, ArrowRight } from 'lucide-react'

const neighborhoodImages = [
  { name: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { name: 'Downtown', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80' },
  { name: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80' },
  { name: 'Emirates Hills', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80' },
  { name: 'JBR', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80' },
  { name: 'City Walk', image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80' },
  { name: 'Business Bay', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80' },
  { name: 'DIFC', image: 'https://images.unsplash.com/photo-1624173711020-be57c18f4c3c?w=800&q=80' },
]

const features = [
  {
    icon: Crown,
    title: 'Elite Collection',
    description: 'Handpicked luxury properties in Dubai\'s most prestigious locations',
  },
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'All properties verified with secure payment processing in AED',
  },
  {
    icon: Sparkles,
    title: 'Concierge Service',
    description: '24/7 personal concierge for airport transfers, private chefs & more',
  },
  {
    icon: Clock,
    title: 'Instant Booking',
    description: 'Real-time availability with instant confirmation',
  },
]

export default function Home() {
  const featuredProperties = properties.filter((p) => p.isElite).slice(0, 3)
  const popularProperties = properties.slice(0, 6)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920"
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-elite-darker" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-elite-green/20 border border-elite-green/30 rounded-full mb-8">
            <Crown className="h-4 w-4 text-elite-green" />
            <span className="text-sm font-medium text-elite-green">Luxury Holiday Homes in Dubai</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Experience{' '}
            <span className="elite-gradient-text">Unparalleled</span>
            <br />
            Luxury Living
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Discover premium vacation rentals in Dubai&apos;s most exclusive neighborhoods.
            Palm Jumeirah, Downtown, Marina — your perfect stay awaits.
          </p>

          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-elite-darker to-transparent" />
      </section>

      {/* Features Section */}
      <section className="elite-section bg-elite-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-elite-green/10 border border-elite-green/20 mb-6">
                  <feature.icon className="h-8 w-8 text-elite-green" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Collection */}
      <section className="elite-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-5 w-5 text-elite-green" />
                <span className="text-sm font-medium text-elite-green uppercase tracking-wider">Elite Collection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Premium Properties
              </h2>
            </div>
            <Link href="/properties?elite=true" className="elite-button-secondary hidden sm:flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <Link href="/properties?elite=true" className="elite-button-secondary flex sm:hidden items-center justify-center gap-2 mt-8">
            View All Elite Properties <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Areas Section */}
      <section className="elite-section bg-elite-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-elite-green" />
              <span className="text-sm font-medium text-elite-green uppercase tracking-wider">Explore Dubai</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Popular Neighborhoods
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {neighborhoodImages.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={`/properties?area=${encodeURIComponent(neighborhood.name)}`}
                className="group relative h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <h3 className="text-sm sm:text-lg font-semibold text-white group-hover:text-elite-green transition-colors">
                    {neighborhood.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Properties */}
      <section className="elite-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-elite-green" />
                <span className="text-sm font-medium text-elite-green uppercase tracking-wider">Featured</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Popular Properties
              </h2>
            </div>
            <Link href="/properties" className="elite-button-secondary hidden sm:flex items-center gap-2">
              Browse All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="elite-section bg-gradient-to-br from-elite-card to-elite-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="elite-card bg-gradient-to-r from-elite-green/10 to-transparent border-elite-green/30 text-center py-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              List Your Property With Us
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
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
