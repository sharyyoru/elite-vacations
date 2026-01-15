'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { properties } from '@/lib/data'

export default function Home() {
  const featuredProperties = properties.filter((p) => p.isElite).slice(0, 6)
  const popularProperties = properties.slice(0, 6)
  const [showTransitionHeader, setShowTransitionHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setShowTransitionHeader(window.scrollY > heroHeight - 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Transition Header - Desert Skyline (appears on scroll) */}
      <div 
        className={`fixed top-0 left-0 right-0 h-16 md:h-20 z-40 transition-all duration-500 overflow-hidden ${
          showTransitionHeader 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/20.png"
            alt="Dubai Desert Skyline"
            fill
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <span className="text-white font-bold text-sm md:text-base tracking-widest">
            DUBAI HOLIDAY HOMES
          </span>
          {/* Decorative lime dot */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-lime rounded-full" />
        </div>
      </div>

      {/* Hero Section - Palm Trees */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/21.png"
            alt="Dubai Palm Trees"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Decorative lime dots */}
        <div className="absolute top-28 left-6 md:left-12 lg:left-16 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-lime rounded-full z-10" />
        <div className="absolute top-40 left-3 md:left-6 lg:left-8 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-lime rounded-full z-10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
          <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-12 md:mb-16 tracking-tight leading-[0.9]">
            EXPERIENCE<br className="sm:hidden" /> <span className="text-white/90">DUBAI</span>
          </h1>

          {/* Centered Search Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Decorative lime dot bottom right */}
        <div className="absolute bottom-24 md:bottom-32 right-6 md:right-12 lg:right-16 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-lime rounded-full z-10" />
      </section>

      {/* Second Hero - Desert with Skyline */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20.png"
            alt="Dubai Desert Skyline"
            fill
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Decorative lime dot */}
        <div className="absolute top-8 md:top-12 left-6 md:left-12 lg:left-16 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-lime rounded-full z-10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white tracking-tight text-center">
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
