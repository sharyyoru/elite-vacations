import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'All Properties', href: '/properties' },
    { name: 'Palm Jumeirah', href: '/properties?area=palm-jumeirah' },
    { name: 'Downtown Dubai', href: '/properties?area=downtown' },
    { name: 'Dubai Marina', href: '/properties?area=marina' },
    { name: 'Elite Collection', href: '/properties?elite=true' },
  ],
  services: [
    { name: 'Concierge', href: '/concierge' },
    { name: 'Airport Transfers', href: '/concierge#airport' },
    { name: 'Yacht Charter', href: '/concierge#yacht' },
    { name: 'Private Chef', href: '/concierge#chef' },
    { name: 'Property Management', href: '/owner' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partner With Us', href: '/partner' },
    { name: 'Channel Manager', href: '/admin/channels' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cancellation Policy', href: '/cancellation' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-elite-darker border-t border-elite-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo/elite-vacations.png"
                alt="Elite Vacations"
                width={160}
                height={60}
                className="h-12 sm:h-14 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Experience unparalleled luxury in Dubai&apos;s most exclusive neighborhoods. 
              Premium vacation rentals with world-class service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-elite-gold" />
                <span>Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-elite-gold" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-elite-gold" />
                <span>hello@elitevacations.ae</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-elite-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} Elite Vacations. All rights reserved. Prices in AED.
          </p>
        </div>
      </div>
    </footer>
  )
}
