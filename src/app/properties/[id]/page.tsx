'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { properties, conciergeServices } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import {
  MapPin, Star, Bed, Bath, Users, Maximize, Crown, Check,
  Calendar, ChevronLeft, ChevronRight, Heart, Share2,
  Wifi, Car, Waves, Dumbbell, Wind, Tv, UtensilsCrossed, Shield
} from 'lucide-react'

const amenityIcons: { [key: string]: any } = {
  'Private Pool': Waves,
  'Pool': Waves,
  'Pool Access': Waves,
  'Gym': Dumbbell,
  'Smart Home': Tv,
  'Parking': Car,
  'Concierge': Shield,
  'Ocean View': Waves,
  'Marina View': Waves,
  'Burj Khalifa View': Maximize,
  'default': Check,
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const property = properties.find((p) => p.id === params.id) || properties[0]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16">
        {/* Image Gallery */}
        <div className="relative h-[60vh] bg-elite-card">
          <Image
            src={property.images[currentImage]}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-elite-darker via-transparent to-black/30" />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? 'w-8 bg-elite-green' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {property.isElite && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-elite-green to-yellow-600 rounded-full">
              <Crown className="h-4 w-4 text-black" />
              <span className="text-sm font-semibold text-black">Elite Property</span>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="elite-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-display font-bold text-white mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-elite-green/10 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-white">{property.rating}</span>
                    <span className="text-gray-400">({property.reviews} reviews)</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-4 bg-elite-darker rounded-xl mb-6">
                  <div className="text-center">
                    <Bed className="h-5 w-5 text-elite-green mx-auto mb-1" />
                    <p className="text-white font-medium">{property.bedrooms}</p>
                    <p className="text-xs text-gray-500">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-5 w-5 text-elite-green mx-auto mb-1" />
                    <p className="text-white font-medium">{property.bathrooms}</p>
                    <p className="text-xs text-gray-500">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-elite-green mx-auto mb-1" />
                    <p className="text-white font-medium">{property.guests}</p>
                    <p className="text-xs text-gray-500">Guests</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="h-5 w-5 text-elite-green mx-auto mb-1" />
                    <p className="text-white font-medium">{property.sqft.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Sq. Ft.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">About This Property</h3>
                <p className="text-gray-400 leading-relaxed">{property.description}</p>
              </div>

              <div className="elite-card">
                <h3 className="text-xl font-semibold text-white mb-6">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || amenityIcons['default']
                    return (
                      <div key={amenity} className="flex items-center gap-3 p-3 bg-elite-darker rounded-lg">
                        <Icon className="h-5 w-5 text-elite-green" />
                        <span className="text-gray-300">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="elite-card">
                <h3 className="text-xl font-semibold text-white mb-6">Location</h3>
                <div className="h-64 bg-elite-darker rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-elite-green mx-auto mb-3" />
                    <p className="text-gray-400">Interactive map integration</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="elite-card sticky top-28">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold elite-gradient-text">
                    {formatCurrency(property.price)}
                  </span>
                  <span className="text-gray-400">/ night</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Check In</label>
                      <input
                        type="date"
                        className="elite-input"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Check Out</label>
                      <input
                        type="date"
                        className="elite-input"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Guests</label>
                    <select
                      className="elite-input"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                    >
                      {Array.from({ length: property.guests }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Link href={`/booking/${property.id}`} className="elite-button w-full text-center block mb-4">
                  Reserve Now
                </Link>

                <p className="text-center text-gray-500 text-sm mb-6">You won&apos;t be charged yet</p>

                <div className="border-t border-elite-border pt-4 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>{formatCurrency(property.price)} × 7 nights</span>
                    <span>{formatCurrency(property.price * 7)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cleaning fee</span>
                    <span>{formatCurrency(500)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Service fee</span>
                    <span>{formatCurrency(property.price * 0.12)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white pt-3 border-t border-elite-border">
                    <span>Total</span>
                    <span className="elite-gradient-text">
                      {formatCurrency(property.price * 7 + 500 + property.price * 0.12)}
                    </span>
                  </div>
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
