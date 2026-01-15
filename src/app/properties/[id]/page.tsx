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
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-16">
        {/* Image Gallery */}
        <div className="relative h-[50vh] md:h-[60vh] bg-gray-100">
          <Image
            src={property.images[currentImage]}
            alt={property.title}
            fill
            className="object-cover"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? 'w-8 bg-lime' : 'bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {property.isElite && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-sm border border-lime rounded-full">
              <span className="text-sm font-medium text-gray-800">Guest favorite</span>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg shrink-0">
                    <Star className="h-4 w-4 text-gray-900 fill-gray-900" />
                    <span className="font-semibold text-gray-900">{property.rating}</span>
                    <span className="text-gray-500">({property.reviews} reviews)</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                  <div className="text-center">
                    <Bed className="h-5 w-5 text-lime-dark mx-auto mb-1" />
                    <p className="text-gray-900 font-medium">{property.bedrooms}</p>
                    <p className="text-xs text-gray-500">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-5 w-5 text-lime-dark mx-auto mb-1" />
                    <p className="text-gray-900 font-medium">{property.bathrooms}</p>
                    <p className="text-xs text-gray-500">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-lime-dark mx-auto mb-1" />
                    <p className="text-gray-900 font-medium">{property.guests}</p>
                    <p className="text-xs text-gray-500">Guests</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="h-5 w-5 text-lime-dark mx-auto mb-1" />
                    <p className="text-gray-900 font-medium">{property.sqft.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Sq. Ft.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Property</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || amenityIcons['default']
                    return (
                      <div key={amenity} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Icon className="h-5 w-5 text-lime-dark" />
                        <span className="text-gray-700 text-sm">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Location</h3>
                <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-lime-dark mx-auto mb-3" />
                    <p className="text-gray-600">Interactive map integration</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-lg">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatCurrency(property.price)}
                  </span>
                  <span className="text-gray-500">/ night</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Check In</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Check Out</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Guests</label>
                    <select
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-lime"
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

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>{formatCurrency(property.price)} × 7 nights</span>
                    <span>{formatCurrency(property.price * 7)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Cleaning fee</span>
                    <span>{formatCurrency(500)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Service fee</span>
                    <span>{formatCurrency(property.price * 0.12)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>
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
