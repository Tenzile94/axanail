'use client'

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-[#d4af37]/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <img src="/logo1.png" alt="AXA Professional" className="w-20 h-16" />
            <p className="text-sm mb-6 text-gray-400 leading-relaxed mt-4">
              Professional nail gel systems trusted by experts worldwide. Superior quality, flawless results, uncompromising excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d4af37] transition-colors bg-zinc-900 p-2 rounded-full border border-[#d4af37]/20 hover:border-[#d4af37]">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors bg-zinc-900 p-2 rounded-full border border-[#d4af37]/20 hover:border-[#d4af37]">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:text-[#d4af37] transition-colors bg-zinc-900 p-2 rounded-full border border-[#d4af37]/20 hover:border-[#d4af37]">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors bg-zinc-900 p-2 rounded-full border border-[#d4af37]/20 hover:border-[#d4af37]">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="hover:text-[#d4af37] transition-colors text-gray-400">About AXA</a></li>
              <li><a href="/#collections" className="hover:text-[#d4af37] transition-colors text-gray-400">Collections</a></li>
              <li><a href="/#products" className="hover:text-[#d4af37] transition-colors text-gray-400">Products</a></li>
           
              <li><a href="/contact" className="hover:text-[#d4af37] transition-colors text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/contact" className="hover:text-[#d4af37] transition-colors text-gray-400">Contact Us</a></li>
              <li><a href="/cookies" className="hover:text-[#d4af37] transition-colors text-gray-400"> Cookie Policy </a></li>
              <li><a href="/terms" className="hover:text-[#d4af37] transition-colors text-gray-400"> Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-[#d4af37] transition-colors text-gray-400"> Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#d4af37]" />
                <span className="text-gray-400">123 Professional Boulevard<br/>Suite 400, NC 12345</span>
              </li>
              {/* <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#d4af37]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li> */}
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-[#d4af37]" />
                <span className="text-gray-400">contact@axanail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d4af37]/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 AXA Professional. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-[#d4af37] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

