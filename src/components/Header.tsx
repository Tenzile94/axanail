'use client'

import { useState } from 'react'
import { Menu, X, Search, ShoppingBag, Heart, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white py-2 text-center text-sm font-medium animate-gradient">
        🎉 Free Shipping on Orders Over $50 | Use Code: GELLISH10 for 10% Off
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-fade-in">
              GELLISH
            </h1>
            <p className="text-xs text-gray-500 tracking-widest">PREMIUM GEL POLISH</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <a href="/#collections" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Collections
            </a>
            <a href="/#new-arrivals" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              New Arrivals
            </a>
            <a href="/#bundles" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Bundles
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 transition-colors hidden md:block">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-primary-600 transition-colors hidden md:block">
              <Heart size={20} />
            </button>
            <button className="text-gray-700 hover:text-primary-600 transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-4 animate-slide-down">
            <a
              href="/"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#collections"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="/#new-arrivals"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </a>
            <a
              href="/#bundles"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Bundles
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

