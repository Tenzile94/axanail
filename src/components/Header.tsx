'use client'

import { useState } from 'react'
import { Menu, X, Search, ShoppingBag, Heart, User, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-[#d4af37]/20">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] text-black py-2 text-center text-sm font-semibold animate-gradient">
        Professional Grade Products | Authorized Distributor | Free Shipping $50+
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#d4af37] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gold-gradient tracking-wider">
              AXA
            </h1>
            <p className="text-xs text-[#d4af37] tracking-[0.3em] font-light">PROFESSIONAL</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="/" className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm">
              Home
            </a>
            <a href="/#collections" className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm">
              Collections
            </a>
            <a href="/#products" className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm">
              Products
            </a>
            <a href="/#about" className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm">
              About
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 uppercase tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-[#d4af37] transition-colors hidden md:block">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-[#d4af37] transition-colors hidden md:block">
              <Heart size={20} />
            </button>
            <button className="text-gray-300 hover:text-[#d4af37] transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-gray-300 hover:text-[#d4af37] transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-4 animate-slide-down border-t border-[#d4af37]/20 pt-4">
            <a
              href="/"
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#collections"
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="/#products"
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="/#about"
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-6 py-2 rounded-full font-semibold text-sm text-center uppercase"
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

