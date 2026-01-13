'use client'

import { useState } from 'react'
import { maintenanceTickets, properties } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Plus, Search, Filter, AlertTriangle, Clock, CheckCircle, User, MoreVertical } from 'lucide-react'

const teamMembers = [
  { id: 1, name: 'Ahmed Hassan', role: 'Technician', available: true },
  { id: 2, name: 'Mohammed Ali', role: 'Electrician', available: true },
  { id: 3, name: 'Sara Khan', role: 'Plumber', available: false },
  { id: 4, name: 'John Smith', role: 'General', available: true },
]

export default function AdminMaintenancePage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredTickets = filter === 'all' 
    ? maintenanceTickets 
    : maintenanceTickets.filter(t => t.status === filter)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Maintenance</h1>
          <p className="text-gray-400">Track and manage maintenance requests</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="elite-button flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          New Ticket
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="elite-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {maintenanceTickets.filter(t => t.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-400">Pending</p>
            </div>
          </div>
        </div>
        <div className="elite-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {maintenanceTickets.filter(t => t.status === 'in-progress').length}
              </p>
              <p className="text-sm text-gray-400">In Progress</p>
            </div>
          </div>
        </div>
        <div className="elite-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {maintenanceTickets.filter(t => t.status === 'completed').length}
              </p>
              <p className="text-sm text-gray-400">Completed</p>
            </div>
          </div>
        </div>
        <div className="elite-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <User className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {teamMembers.filter(m => m.available).length}
              </p>
              <p className="text-sm text-gray-400">Available Staff</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tickets List */}
        <div className="lg:col-span-2 elite-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all' ? 'bg-elite-gold text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'pending' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('in-progress')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'in-progress' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'completed' ? 'bg-green-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTickets.map((ticket) => (
              <div key={ticket.id} className="p-4 bg-elite-darker rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      ticket.priority === 'high' ? 'bg-red-400' :
                      ticket.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                    }`} />
                    <div>
                      <p className="font-medium text-white">{ticket.issue}</p>
                      <p className="text-sm text-gray-400">{ticket.property}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    ticket.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    ticket.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>ID: {ticket.id}</span>
                    <span>Created: {formatDate(ticket.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {ticket.assignedTo !== 'Unassigned' ? (
                      <span className="text-sm text-gray-400">{ticket.assignedTo}</span>
                    ) : (
                      <select className="elite-input text-sm py-1 px-2">
                        <option>Assign to...</option>
                        {teamMembers.filter(m => m.available).map((member) => (
                          <option key={member.id}>{member.name}</option>
                        ))}
                      </select>
                    )}
                    <button className="p-1 hover:bg-elite-card rounded text-gray-400 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="elite-card">
          <h2 className="text-xl font-semibold text-white mb-6">Maintenance Team</h2>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 bg-elite-darker rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-elite-gold/20 flex items-center justify-center">
                    <span className="text-elite-gold font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{member.name}</p>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
                <span className={`w-3 h-3 rounded-full ${
                  member.available ? 'bg-green-400' : 'bg-red-400'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Ticket Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-elite-card border border-elite-border rounded-2xl w-full max-w-lg">
            <div className="p-6 border-b border-elite-border">
              <h2 className="text-2xl font-semibold text-white">New Maintenance Ticket</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Property</label>
                <select className="elite-input">
                  {properties.map((property) => (
                    <option key={property.id}>{property.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Issue Description</label>
                <textarea className="elite-input min-h-[100px]" placeholder="Describe the issue..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
                <select className="elite-input">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Assign To</label>
                <select className="elite-input">
                  <option>Unassigned</option>
                  {teamMembers.map((member) => (
                    <option key={member.id}>{member.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-elite-border flex justify-end gap-4">
              <button onClick={() => setShowAddModal(false)} className="elite-button-secondary">
                Cancel
              </button>
              <button className="elite-button">Create Ticket</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
