'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Estimate Revenue', href: '/owner' },
  { name: 'Areas', href: '/properties' },
  { name: 'News', href: '/contact' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <Building2 className="h-10 w-10 md:h-12 md:w-12 text-white" strokeWidth={1.5} />
                <span className="text-white text-[10px] md:text-xs font-bold tracking-wider">ELITE</span>
                <span className="text-white text-[8px] md:text-[10px] tracking-widest -mt-0.5">VACATIONS</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-lime transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/properties"
              className="hidden sm:inline-flex px-5 py-2.5 md:px-6 md:py-3 bg-lime text-black font-semibold rounded-full transition-all duration-300 hover:bg-lime-light hover:shadow-lg text-sm"
            >
              Book Now
            </Link>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-black/90 backdrop-blur-md rounded-xl mt-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-white hover:text-lime transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/properties"
              className="block py-3 text-lime font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
