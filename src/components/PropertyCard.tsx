'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Star, Heart } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface PropertyCardProps {
  property: {
    id: string
    title: string
    location: string
    bedrooms: number
    bathrooms: number
    guests: number
    price: number
    rating: number
    reviews: number
    isElite: boolean
    image: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="group cursor-pointer">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {property.isElite && (
            <div className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 text-xs font-medium border border-lime bg-white/90 backdrop-blur-sm rounded-full text-gray-700">
              Guest favorite
            </div>
          )}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-lime-dark transition-colors line-clamp-1 text-sm">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-3.5 w-3.5 text-gray-900 fill-gray-900" />
              <span className="text-sm font-medium text-gray-900">{property.rating}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 line-clamp-1">{property.location}</p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{formatCurrency(property.price)}</span>
            <span className="text-gray-400"> for 2 nights</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
