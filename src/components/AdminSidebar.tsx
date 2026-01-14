'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Building2,
  Calendar,
  DollarSign,
  Wrench,
  Users,
  Settings,
  BarChart3,
  Rss,
  FileText,
  Key,
  ClipboardCheck,
  Package,
  LogOut,
  ChevronLeft,
  Home,
} from 'lucide-react'

const adminNav = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Properties', href: '/admin/properties', icon: Building2 },
  { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
  { name: 'Pricing', href: '/admin/pricing', icon: DollarSign },
  { name: 'Maintenance', href: '/admin/maintenance', icon: Wrench },
  { name: 'Channel Manager', href: '/admin/channels', icon: Rss },
  { name: 'SEO Manager', href: '/admin/seo', icon: FileText },
]

const ownerNav = [
  { name: 'Earnings', href: '/owner', icon: BarChart3 },
  { name: 'Reports', href: '/owner/reports', icon: FileText },
  { name: 'Occupancy', href: '/owner/occupancy', icon: Users },
]

const maintenanceNav = [
  { name: 'Inspections', href: '/maintenance/inspections', icon: ClipboardCheck },
  { name: 'Smart Locks', href: '/maintenance/locks', icon: Key },
  { name: 'Assets', href: '/maintenance/assets', icon: Package },
]

interface AdminSidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export default function AdminSidebar({ collapsed = false, onToggle }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-elite-card border-r border-elite-border transition-all duration-300 z-50",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-elite-border">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/elite-vacations.png"
              alt="Elite Vacations"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            {!collapsed && (
              <span className="text-lg font-semibold text-white">Admin</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            {!collapsed && <p className="text-xs font-medium text-gray-500 uppercase">Management</p>}
          </div>
          {adminNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-elite-gold/10 text-elite-gold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            )
          })}

          <div className="px-4 mt-6 mb-2">
            {!collapsed && <p className="text-xs font-medium text-gray-500 uppercase">Owner Portal</p>}
          </div>
          {ownerNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-elite-gold/10 text-elite-gold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            )
          })}

          <div className="px-4 mt-6 mb-2">
            {!collapsed && <p className="text-xs font-medium text-gray-500 uppercase">Operations</p>}
          </div>
          {maintenanceNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-elite-gold/10 text-elite-gold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-elite-border space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Home className="h-5 w-5" />
            {!collapsed && <span className="text-sm font-medium">Back to Site</span>}
          </Link>
          <button
            onClick={onToggle}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
            {!collapsed && <span className="text-sm font-medium">Collapse</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
