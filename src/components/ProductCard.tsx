'use client'

import { Heart, ShoppingCart } from 'lucide-react'
import { Product } from '@/data/products'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce-slow">
          {product.badge}
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <Heart
          size={18}
          className={`${
            isLiked ? 'fill-primary-600 text-primary-600' : 'text-gray-600'
          } transition-colors`}
        />
      </button>

      {/* Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-32 rounded-lg shadow-xl transition-transform duration-300"
              style={{ backgroundColor: product.color }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Color Indicator */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 rounded-full border-2 border-gray-200 shadow-sm"
            style={{ backgroundColor: product.color }}
          />
          <span className="text-xs text-gray-500">
            {product.color}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        {/* <button
          className={`w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-90'
          } hover:shadow-lg hover:scale-105`}
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button> */}
      </div>
    </div>
  )
}

