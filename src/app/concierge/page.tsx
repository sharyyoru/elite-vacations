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
    <main className="min-h-screen bg-white">
      <Header variant="solid" />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
              <Crown className="h-4 w-4 text-lime-dark" />
              <span className="text-sm font-medium text-lime-dark">Virtual Concierge</span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated concierge team is available 24/7 to curate unforgettable experiences
              and handle every detail of your luxury stay.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {conciergeServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <div key={service.id} className="bg-white rounded-2xl border border-gray-200 p-6 group hover:border-lime/50 hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lime/10 border border-lime/20 mb-6 group-hover:bg-lime/20 transition-colors">
                    <Icon className="h-7 w-7 text-lime-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(service.price)}
                    </span>
                    <button className="px-4 py-2 bg-lime text-black font-medium rounded-full text-sm hover:bg-lime-light transition-colors flex items-center gap-2">
                      Book <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Premium Services */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Custom Experiences
                </h2>
                <p className="text-gray-600 mb-6">
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
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="elite-button inline-flex items-center gap-2">
                  Contact Concierge <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-lime/20 to-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="h-24 w-24 text-lime/40" />
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
