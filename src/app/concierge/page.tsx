import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { conciergeServices } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { Plane, ChefHat, Ship, Sparkles, Car, SprayCan, Crown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const iconMap: { [key: string]: any } = {
  Plane,
  ChefHat,
  Ship,
  Sparkles,
  Car,
  SprayCan,
}

export default function ConciergePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-elite-gold/20 border border-elite-gold/30 rounded-full mb-6">
              <Crown className="h-4 w-4 text-elite-gold" />
              <span className="text-sm font-medium text-elite-gold">Virtual Concierge</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Elevate Your{' '}
              <span className="elite-gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our dedicated concierge team is available 24/7 to curate unforgettable experiences
              and handle every detail of your luxury stay.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {conciergeServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <div key={service.id} className="elite-card group hover:border-elite-gold/50 transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-elite-gold/10 border border-elite-gold/20 mb-6 group-hover:bg-elite-gold/20 transition-colors">
                    <Icon className="h-7 w-7 text-elite-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold elite-gradient-text">
                      {formatCurrency(service.price)}
                    </span>
                    <button className="elite-button-secondary text-sm py-2 px-4 flex items-center gap-2">
                      Book <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Premium Services */}
          <div className="elite-card bg-gradient-to-r from-elite-gold/10 to-transparent border-elite-gold/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Custom Experiences
                </h2>
                <p className="text-gray-400 mb-6">
                  Looking for something unique? Our concierge team can arrange exclusive experiences
                  tailored to your preferences — from private desert safaris to VIP access at Dubai&apos;s
                  most exclusive venues.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Private helicopter tours',
                    'Michelin-star restaurant reservations',
                    'Luxury shopping experiences',
                    'Exclusive event access',
                    'Personal fitness trainers',
                    'Childcare services',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="elite-button inline-flex items-center gap-2">
                  Contact Concierge <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-elite-gold/20 to-purple-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="h-24 w-24 text-elite-gold/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
