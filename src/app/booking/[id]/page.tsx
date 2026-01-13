'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { properties, conciergeServices } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import {
  CreditCard, Smartphone, Check, Shield, Calendar, Users,
  ChevronRight, Plane, ChefHat, Ship, Sparkles, Car, SprayCan
} from 'lucide-react'

const iconMap: { [key: string]: any } = {
  Plane,
  ChefHat,
  Ship,
  Sparkles,
  Car,
  SprayCan,
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const property = properties.find((p) => p.id === params.id) || properties[0]
  const nights = 7
  const baseTotal = property.price * nights
  const cleaningFee = 500
  const serviceFee = property.price * 0.12
  const addOnsTotal = conciergeServices
    .filter((s) => selectedServices.includes(s.id))
    .reduce((acc, s) => acc + s.price, 0)
  const total = baseTotal + cleaningFee + serviceFee + addOnsTotal

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-8">Complete Your Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-8">
                {['Details', 'Add-ons', 'Payment'].map((label, index) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        step > index + 1
                          ? 'bg-elite-gold text-black'
                          : step === index + 1
                          ? 'bg-elite-gold/20 text-elite-gold border border-elite-gold'
                          : 'bg-elite-card text-gray-500'
                      }`}
                    >
                      {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                    </div>
                    <span className={step >= index + 1 ? 'text-white' : 'text-gray-500'}>{label}</span>
                    {index < 2 && <ChevronRight className="h-4 w-4 text-gray-600" />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="elite-card space-y-6">
                  <h2 className="text-xl font-semibold text-white">Guest Details</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                      <input type="text" className="elite-input" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                      <input type="text" className="elite-input" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" className="elite-input" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input type="tel" className="elite-input" placeholder="+971 50 123 4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests</label>
                    <textarea
                      className="elite-input min-h-[100px]"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>

                  <button onClick={() => setStep(2)} className="elite-button w-full">
                    Continue to Add-ons
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="elite-card space-y-6">
                  <h2 className="text-xl font-semibold text-white">Enhance Your Stay</h2>
                  <p className="text-gray-400">Add premium services to make your vacation unforgettable</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conciergeServices.map((service) => {
                      const Icon = iconMap[service.icon] || Sparkles
                      const isSelected = selectedServices.includes(service.id)
                      return (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'border-elite-gold bg-elite-gold/10'
                              : 'border-elite-border bg-elite-darker hover:border-elite-gold/50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${isSelected ? 'bg-elite-gold/20' : 'bg-elite-card'}`}>
                              <Icon className={`h-5 w-5 ${isSelected ? 'text-elite-gold' : 'text-gray-400'}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-white">{service.name}</h3>
                              <p className="text-sm text-gray-500 mb-2">{service.description}</p>
                              <p className="text-elite-gold font-semibold">{formatCurrency(service.price)}</p>
                            </div>
                            {isSelected && (
                              <Check className="h-5 w-5 text-elite-gold" />
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="elite-button-secondary flex-1">
                      Back
                    </button>
                    <button onClick={() => setStep(3)} className="elite-button flex-1">
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="elite-card space-y-6">
                  <h2 className="text-xl font-semibold text-white">Payment Method</h2>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'card', label: 'Credit Card', icon: CreditCard },
                      { id: 'apple', label: 'Apple Pay', icon: Smartphone },
                      { id: 'google', label: 'Google Pay', icon: Smartphone },
                    ].map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-4 rounded-xl border text-center transition-all ${
                          paymentMethod === method.id
                            ? 'border-elite-gold bg-elite-gold/10'
                            : 'border-elite-border bg-elite-darker hover:border-elite-gold/50'
                        }`}
                      >
                        <method.icon className={`h-6 w-6 mx-auto mb-2 ${
                          paymentMethod === method.id ? 'text-elite-gold' : 'text-gray-400'
                        }`} />
                        <span className={paymentMethod === method.id ? 'text-white' : 'text-gray-400'}>
                          {method.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Card Number</label>
                        <input type="text" className="elite-input" placeholder="4242 4242 4242 4242" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Expiry</label>
                          <input type="text" className="elite-input" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">CVC</label>
                          <input type="text" className="elite-input" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 p-4 bg-elite-darker rounded-xl">
                    <Shield className="h-5 w-5 text-elite-gold" />
                    <p className="text-sm text-gray-400">
                      Your payment is secured with 256-bit SSL encryption
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="elite-button-secondary flex-1">
                      Back
                    </button>
                    <button className="elite-button flex-1">
                      Pay {formatCurrency(total)}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="elite-card sticky top-28">
                <div className="relative h-40 -mx-6 -mt-6 mb-4 rounded-t-2xl overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold text-white mb-1">{property.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{property.location}</p>

                <div className="flex items-center gap-4 p-3 bg-elite-darker rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-elite-gold" />
                    <span className="text-sm text-gray-300">Jan 15 - Jan 22</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-elite-gold" />
                    <span className="text-sm text-gray-300">2 Guests</span>
                  </div>
                </div>

                <div className="border-t border-elite-border pt-4 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>{formatCurrency(property.price)} × {nights} nights</span>
                    <span>{formatCurrency(baseTotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cleaning fee</span>
                    <span>{formatCurrency(cleaningFee)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Service fee</span>
                    <span>{formatCurrency(serviceFee)}</span>
                  </div>
                  {addOnsTotal > 0 && (
                    <div className="flex justify-between text-gray-400">
                      <span>Add-ons</span>
                      <span>{formatCurrency(addOnsTotal)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-white pt-3 border-t border-elite-border">
                    <span>Total (AED)</span>
                    <span className="elite-gradient-text">{formatCurrency(total)}</span>
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
