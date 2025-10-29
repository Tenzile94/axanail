'use client'

import { useState } from 'react'
import { Menu, X, Search, ShoppingBag, Heart, User, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 100 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Close mobile menu if open
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-[#d4af37]/20">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#d4af37] via-[#f0d060] to-[#d4af37] text-black py-2 text-center text-sm font-semibold animate-gradient">
        Professional Grade Products | Authorized Distributor | Free Shipping $50+
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#d4af37] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
           <Link href="/" className="">
            <Image 
              src="/Logo.svg" 
              alt="AXA — Aesthetics. Xperience. America." 
              width={180}
              height={40}
              className="h-16 w-40 object-cover drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </Link>

          


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a 
              href="/#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm cursor-pointer"
            >
              Home
            </a>
            <a 
              href="/#collections" 
              onClick={(e) => handleSmoothScroll(e, 'collections')}
              className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm cursor-pointer"
            >
              Collections
            </a>
            <a 
              href="/#products" 
              onClick={(e) => handleSmoothScroll(e, 'products')}
              className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm cursor-pointer"
            >
              Products
            </a>
            <a 
              href="/#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-gray-300 hover:text-[#d4af37] transition-colors font-medium tracking-wide uppercase text-sm cursor-pointer"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 uppercase tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-2">
            <Mail size={18} className="text-[#d4af37]" />
            <a 
              href="mailto:info@axaprofessional.com" 
              className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm font-medium"
            >
              contact@axanail.com
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-4 animate-slide-down border-t border-[#d4af37]/20 pt-4">
            <a
              href="/#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm cursor-pointer"
            >
              Home
            </a>
            <a
              href="/#collections"
              onClick={(e) => handleSmoothScroll(e, 'collections')}
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm cursor-pointer"
            >
              Collections
            </a>
            <a
              href="/#products"
              onClick={(e) => handleSmoothScroll(e, 'products')}
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm cursor-pointer"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="block text-gray-300 hover:text-[#d4af37] transition-colors font-medium uppercase text-sm cursor-pointer"
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

