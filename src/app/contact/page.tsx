import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header variant="solid" />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
              <MessageCircle className="h-4 w-4 text-lime-dark" />
              <span className="text-sm font-medium text-lime-dark">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to our team for assistance with bookings, property management, or general inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Contact Information Cards */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 mb-4">
                <Phone className="h-6 w-6 text-lime-dark" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Fri from 8am to 8pm</p>
              <a href="tel:+97144567890" className="text-lime-dark font-medium hover:underline">
                +971 4 456 7890
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 mb-4">
                <Mail className="h-6 w-6 text-lime-dark" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-3">We&apos;ll respond within 24 hours</p>
              <a href="mailto:info@elitevacations.ae" className="text-lime-dark font-medium hover:underline">
                info@elitevacations.ae
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 mb-4">
                <MapPin className="h-6 w-6 text-lime-dark" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 text-sm mb-3">Visit us at our location</p>
              <p className="text-gray-700">
                Dubai Marina, UAE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Booking Assistance</option>
                    <option>Property Management</option>
                    <option>Partnership Opportunities</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-lime text-black font-semibold rounded-full hover:bg-lime-light transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-lime/10 to-lime/5 rounded-2xl border border-lime/30 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime/20 rounded-xl">
                    <Clock className="h-6 w-6 text-lime-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/properties" className="block text-lime-dark hover:underline">
                    Browse Properties
                  </a>
                  <a href="/calculator" className="block text-lime-dark hover:underline">
                    Revenue Calculator
                  </a>
                  <a href="/areas" className="block text-lime-dark hover:underline">
                    Explore Areas
                  </a>
                  <a href="/owner" className="block text-lime-dark hover:underline">
                    Owner Portal
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How do I book a property?</h4>
                    <p className="text-sm text-gray-600">Browse our properties, select your dates, and complete the booking process online.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">What is your cancellation policy?</h4>
                    <p className="text-sm text-gray-600">Cancellation policies vary by property. Please check the specific property details.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Do you offer property management?</h4>
                    <p className="text-sm text-gray-600">Yes, we provide comprehensive property management services for owners.</p>
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
