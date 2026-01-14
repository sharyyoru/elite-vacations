import { properties, bookings, maintenanceTickets, ownerStats } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { 
  Building2, Calendar, DollarSign, Users, TrendingUp, 
  AlertTriangle, CheckCircle, Clock, ArrowUpRight, ArrowDownRight 
} from 'lucide-react'

const stats = [
  { 
    name: 'Total Properties', 
    value: properties.length.toString(), 
    change: '+2', 
    trend: 'up',
    icon: Building2 
  },
  { 
    name: 'Active Bookings', 
    value: bookings.filter(b => b.status === 'confirmed').length.toString(), 
    change: '+5', 
    trend: 'up',
    icon: Calendar 
  },
  { 
    name: 'Monthly Revenue', 
    value: formatCurrency(ownerStats.monthlyEarnings), 
    change: '+12%', 
    trend: 'up',
    icon: DollarSign 
  },
  { 
    name: 'Occupancy Rate', 
    value: `${ownerStats.occupancyRate}%`, 
    change: '+3%', 
    trend: 'up',
    icon: TrendingUp 
  },
]

export default function AdminDashboard() {
  const pendingTickets = maintenanceTickets.filter(t => t.status === 'pending').length
  const inProgressTickets = maintenanceTickets.filter(t => t.status === 'in-progress').length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here&apos;s what&apos;s happening with your properties.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="elite-card">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-elite-green/10 rounded-xl">
                <stat.icon className="h-6 w-6 text-elite-green" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="elite-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Recent Bookings</h2>
            <a href="/admin/bookings" className="text-sm text-elite-green hover:underline">View All</a>
          </div>
          <div className="space-y-4">
            {bookings.slice(0, 5).map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl">
                <div>
                  <p className="font-medium text-white">{booking.guest}</p>
                  <p className="text-sm text-gray-400">{booking.property}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">{formatCurrency(booking.total)}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Overview */}
        <div className="elite-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Maintenance</h2>
            <a href="/admin/maintenance" className="text-sm text-elite-green hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-elite-darker rounded-xl">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{pendingTickets}</p>
              <p className="text-xs text-gray-400">Pending</p>
            </div>
            <div className="text-center p-4 bg-elite-darker rounded-xl">
              <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{inProgressTickets}</p>
              <p className="text-xs text-gray-400">In Progress</p>
            </div>
            <div className="text-center p-4 bg-elite-darker rounded-xl">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">
                {maintenanceTickets.filter(t => t.status === 'completed').length}
              </p>
              <p className="text-xs text-gray-400">Completed</p>
            </div>
          </div>

          <div className="space-y-3">
            {maintenanceTickets.slice(0, 3).map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-3 bg-elite-darker rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    ticket.priority === 'high' ? 'bg-red-400' :
                    ticket.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-white">{ticket.issue}</p>
                    <p className="text-xs text-gray-500">{ticket.property}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  ticket.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  ticket.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="elite-card">
        <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/admin/properties" className="p-4 bg-elite-darker rounded-xl hover:bg-elite-green/10 transition-colors text-center">
            <Building2 className="h-8 w-8 text-elite-green mx-auto mb-2" />
            <p className="text-sm text-white">Add Property</p>
          </a>
          <a href="/admin/bookings" className="p-4 bg-elite-darker rounded-xl hover:bg-elite-green/10 transition-colors text-center">
            <Calendar className="h-8 w-8 text-elite-green mx-auto mb-2" />
            <p className="text-sm text-white">Manage Calendar</p>
          </a>
          <a href="/admin/pricing" className="p-4 bg-elite-darker rounded-xl hover:bg-elite-green/10 transition-colors text-center">
            <DollarSign className="h-8 w-8 text-elite-green mx-auto mb-2" />
            <p className="text-sm text-white">Update Pricing</p>
          </a>
          <a href="/admin/maintenance" className="p-4 bg-elite-darker rounded-xl hover:bg-elite-green/10 transition-colors text-center">
            <Users className="h-8 w-8 text-elite-green mx-auto mb-2" />
            <p className="text-sm text-white">Assign Tasks</p>
          </a>
        </div>
      </div>
    </div>
  )
}
