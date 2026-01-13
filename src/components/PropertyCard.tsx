import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Bed, Bath, Users, Crown } from 'lucide-react'
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
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="elite-card group cursor-pointer overflow-hidden">
        <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {property.isElite && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-elite-gold to-yellow-600 rounded-full">
              <Crown className="h-3.5 w-3.5 text-black" />
              <span className="text-xs font-semibold text-black">Elite</span>
            </div>
          )}
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white">{property.rating}</span>
            <span className="text-xs text-gray-300">({property.reviews})</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-elite-gold transition-colors line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-400">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span className="text-sm">{property.guests}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-elite-border">
          <div>
            <span className="text-xl font-bold elite-gradient-text">
              {formatCurrency(property.price)}
            </span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <button className="elite-button-secondary text-sm py-2 px-4">
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}
