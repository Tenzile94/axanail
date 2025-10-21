'use client'

import { ShoppingCart, Check } from 'lucide-react'

interface Bundle {
  id: number
  name: string
  description: string
  price: number
  originalPrice: number
  items: string[]
  image: string
}

interface BundleCardProps {
  bundle: Bundle
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const discount = Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up group">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          Save {discount}%
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
        <p className="text-gray-600 mb-4">{bundle.description}</p>

        {/* Items List */}
        <div className="mb-4 space-y-2">
          {bundle.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <Check size={16} className="text-green-600 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4 pt-4 border-t">
          <div>
            <span className="text-3xl font-bold text-gray-900">${bundle.price}</span>
            <span className="ml-2 text-lg text-gray-500 line-through">
              ${bundle.originalPrice}
            </span>
          </div>
        </div>

        {/* Button */}
        {/* <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
          <ShoppingCart size={20} />
          <span>Add Bundle to Cart</span>
        </button> */}
      </div>
    </div>
  )
}

