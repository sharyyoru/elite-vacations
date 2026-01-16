'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Estimate Revenue', href: '/calculator' },
  { name: 'Areas', href: '/areas' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

interface HeaderProps {
  variant?: 'transparent' | 'solid'
}

export default function Header({ variant = 'transparent' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolid = variant === 'solid' || isScrolled

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid 
          ? 'bg-white shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/vacationLogo.png"
                alt="Elite Vacations"
                width={50}
                height={50}
                className={`h-10 w-10 md:h-12 md:w-12 transition-all duration-300 ${
                  isSolid ? '' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isSolid 
                    ? 'text-gray-700 hover:text-lime-dark' 
                    : 'text-white hover:text-lime'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/owner"
              className={`hidden sm:inline-flex px-5 py-2 md:px-6 md:py-2.5 font-semibold rounded-full transition-all duration-300 text-sm ${
                isSolid 
                  ? 'border-2 border-gray-300 text-gray-700 hover:border-lime hover:text-lime-dark' 
                  : 'border-2 border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Login
            </Link>
            <Link
              href="/properties"
              className="hidden sm:inline-flex px-5 py-2 md:px-6 md:py-2.5 bg-lime text-black font-semibold rounded-full transition-all duration-300 hover:bg-lime-light hover:shadow-lg text-sm"
            >
              Book Now
            </Link>
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isSolid ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 rounded-xl mt-2 px-4 ${
            isSolid ? 'bg-white shadow-lg' : 'bg-black/90 backdrop-blur-md'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 font-medium transition-colors ${
                  isSolid 
                    ? 'text-gray-700 hover:text-lime-dark' 
                    : 'text-white hover:text-lime'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/properties"
              className="block py-3 text-lime-dark font-semibold"
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
