'use client'

import { useState } from 'react'
import { bookings, properties } from '@/lib/data'
import { formatCurrency, formatDate } from '@/lib/utils'
import { Calendar, ChevronLeft, ChevronRight, Search, Filter, MoreVertical } from 'lucide-react'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function AdminBookingsPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<'calendar' | 'list'>('calendar')

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate)

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Booking Calendar</h1>
          <p className="text-gray-400">Manage check-ins, check-outs, and blocked dates</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-elite-card rounded-xl p-1">
            <button
              onClick={() => setView('calendar')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === 'calendar' ? 'bg-elite-gold text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === 'list' ? 'bg-elite-gold text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {view === 'calendar' ? (
        <div className="elite-card">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button onClick={prevMonth} className="p-2 hover:bg-elite-darker rounded-lg text-gray-400 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="text-xl font-semibold text-white">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button onClick={nextMonth} className="p-2 hover:bg-elite-darker rounded-lg text-gray-400 hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button className="elite-button-secondary text-sm">
              Block Dates
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-elite-border rounded-xl overflow-hidden">
            {days.map((day) => (
              <div key={day} className="bg-elite-darker py-3 text-center text-sm font-medium text-gray-400">
                {day}
              </div>
            ))}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="bg-elite-darker h-24" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const hasBooking = day >= 15 && day <= 22
              const isCheckIn = day === 15
              const isCheckOut = day === 22
              
              return (
                <div 
                  key={day} 
                  className={`bg-elite-darker h-24 p-2 hover:bg-elite-card/50 cursor-pointer transition-colors ${
                    hasBooking ? 'bg-elite-gold/5' : ''
                  }`}
                >
                  <span className={`text-sm ${
                    hasBooking ? 'text-elite-gold font-medium' : 'text-gray-400'
                  }`}>
                    {day}
                  </span>
                  {isCheckIn && (
                    <div className="mt-1 text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded truncate">
                      Check-in: John S.
                    </div>
                  )}
                  {isCheckOut && (
                    <div className="mt-1 text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded truncate">
                      Check-out: John S.
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-elite-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-sm text-gray-400">Check-in</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <span className="text-sm text-gray-400">Check-out</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-elite-gold" />
              <span className="text-sm text-gray-400">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-400">Blocked</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="elite-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                className="elite-input pl-12"
              />
            </div>
            <select className="elite-input w-48">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-elite-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Booking ID</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Guest</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Property</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Check In</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Check Out</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Total</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Status</th>
                <th className="text-right py-4 px-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-elite-border hover:bg-elite-darker/50">
                  <td className="py-4 px-4 text-white font-mono">{booking.id}</td>
                  <td className="py-4 px-4 text-white">{booking.guest}</td>
                  <td className="py-4 px-4 text-gray-300">{booking.property}</td>
                  <td className="py-4 px-4 text-gray-300">{formatDate(booking.checkIn)}</td>
                  <td className="py-4 px-4 text-gray-300">{formatDate(booking.checkOut)}</td>
                  <td className="py-4 px-4 text-white font-medium">{formatCurrency(booking.total)}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 hover:bg-elite-card rounded-lg text-gray-400 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
