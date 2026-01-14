'use client'

import { useState } from 'react'
import { properties } from '@/lib/data'
import { Rss, Check, X, RefreshCw, ExternalLink, AlertCircle, Settings } from 'lucide-react'

const channels = [
  { id: 'airbnb', name: 'Airbnb', status: 'connected', lastSync: '2 min ago', listings: 6, logo: '🏠' },
  { id: 'booking', name: 'Booking.com', status: 'connected', lastSync: '5 min ago', listings: 5, logo: '📘' },
  { id: 'vrbo', name: 'VRBO', status: 'connected', lastSync: '10 min ago', listings: 4, logo: '🌴' },
  { id: 'expedia', name: 'Expedia', status: 'disconnected', lastSync: 'Never', listings: 0, logo: '✈️' },
]

export default function ChannelManagerPage() {
  const [syncing, setSyncing] = useState<string | null>(null)

  const handleSync = (channelId: string) => {
    setSyncing(channelId)
    setTimeout(() => setSyncing(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Channel Manager</h1>
        <p className="text-gray-400">Sync your properties with distribution platforms</p>
      </div>

      {/* XML Feed */}
      <div className="elite-card bg-gradient-to-r from-elite-green/10 to-transparent border-elite-green/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-elite-green/20 rounded-xl">
              <Rss className="h-6 w-6 text-elite-green" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">XML Property Feed</h2>
              <p className="text-sm text-gray-400">Auto-generated feed for channel distribution</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <code className="px-4 py-2 bg-elite-darker rounded-lg text-sm text-gray-300 font-mono">
              https://elitevacations.ae/api/feed.xml
            </code>
            <button className="elite-button-secondary text-sm flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Connected Channels */}
      <div className="elite-card">
        <h2 className="text-xl font-semibold text-white mb-6">Distribution Channels</h2>
        <div className="space-y-4">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center justify-between p-4 bg-elite-darker rounded-xl">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{channel.logo}</span>
                <div>
                  <p className="font-medium text-white">{channel.name}</p>
                  <p className="text-sm text-gray-400">
                    {channel.listings} listings • Last sync: {channel.lastSync}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  channel.status === 'connected'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {channel.status === 'connected' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <X className="h-4 w-4" />
                  )}
                  {channel.status}
                </span>
                {channel.status === 'connected' ? (
                  <button 
                    onClick={() => handleSync(channel.id)}
                    disabled={syncing === channel.id}
                    className="elite-button-secondary text-sm py-2 px-4 flex items-center gap-2"
                  >
                    <RefreshCw className={`h-4 w-4 ${syncing === channel.id ? 'animate-spin' : ''}`} />
                    {syncing === channel.id ? 'Syncing...' : 'Sync'}
                  </button>
                ) : (
                  <button className="elite-button text-sm py-2 px-4">
                    Connect
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sync Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="elite-card">
          <h2 className="text-xl font-semibold text-white mb-6">Sync Status by Property</h2>
          <div className="space-y-3">
            {properties.slice(0, 4).map((property) => (
              <div key={property.id} className="flex items-center justify-between p-3 bg-elite-darker rounded-xl">
                <p className="text-gray-300 truncate flex-1">{property.title}</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" title="Airbnb" />
                  <span className="w-2 h-2 rounded-full bg-green-400" title="Booking.com" />
                  <span className="w-2 h-2 rounded-full bg-green-400" title="VRBO" />
                  <span className="w-2 h-2 rounded-full bg-gray-500" title="Expedia" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="elite-card">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Sync Activity</h2>
          <div className="space-y-4">
            {[
              { time: '2 min ago', action: 'Availability updated', channel: 'Airbnb', success: true },
              { time: '5 min ago', action: 'Price sync completed', channel: 'Booking.com', success: true },
              { time: '1 hour ago', action: 'New booking imported', channel: 'VRBO', success: true },
              { time: '2 hours ago', action: 'Sync failed - retry scheduled', channel: 'Airbnb', success: false },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-elite-darker rounded-xl">
                <div className={`p-2 rounded-lg ${
                  activity.success ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {activity.success ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.channel} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
