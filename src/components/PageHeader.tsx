'use client'

import Image from 'next/image'
import Header from './Header'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative">
      {/* Desert Skyline Header Background */}
      <div className="relative h-[200px] md:h-[280px] overflow-hidden">
        <Image
          src="/images/20.png"
          alt="Dubai Desert Skyline"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Decorative lime dot */}
        <div className="absolute top-20 md:top-24 left-4 md:left-8 lg:left-16 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-lime rounded-full z-10" />
      </div>

      {/* Header Navigation */}
      <Header />

      {/* Page Title */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 mt-2 text-sm md:text-base">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}
