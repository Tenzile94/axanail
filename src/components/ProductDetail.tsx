'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Star, CheckCircle, AlertTriangle, Clock, Zap, Shield, FileText, HelpCircle } from 'lucide-react'
import type { Product } from '@/data/product.types'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'usage' | 'faq'>('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specs', label: 'Specifications' },
    { id: 'usage', label: 'Usage Guide' },
    { id: 'faq', label: 'FAQ' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-zinc-900 to-black border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/#products" 
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d060] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            {product.badge && (
              <span className="bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-4 py-2 rounded-full text-sm font-bold border border-[#d4af37]/40">
                {product.badge}
              </span>
            )}
            <span className="text-gray-400 text-sm">{product.sku}</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {product.short}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-zinc-900 border border-[#d4af37]/20">
              <Image
                src={product.images.main}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {product.images.gallery && product.images.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.gallery.map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-zinc-900 border border-[#d4af37]/20">
                    <Image
                      src={image}
                      alt={`${product.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                <h3 className="text-[#d4af37] font-bold text-sm mb-2">TYPE</h3>
                <p className="text-white text-lg">{product.type}</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                <h3 className="text-[#d4af37] font-bold text-sm mb-2">VOLUME</h3>
                <p className="text-white text-lg">{product.volumeMl}ml</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                <h3 className="text-[#d4af37] font-bold text-sm mb-2">SHADE</h3>
                <p className="text-white text-lg">{product.shade}</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                <h3 className="text-[#d4af37] font-bold text-sm mb-2">CURING</h3>
                <p className="text-white text-lg">{product.curing.ledSeconds}s LED</p>
              </div>
            </div>

            {/* Claims */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.claims.map((claim, index) => (
                  <span 
                    key={index}
                    className="bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full text-sm border border-[#d4af37]/40"
                  >
                    {claim}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={product.ctaUrl}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              <Mail size={20} />
              Contact for Pricing
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-[#d4af37]/20 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#d4af37] text-[#d4af37]'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Product Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {product.short}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                    <h4 className="text-[#d4af37] font-bold mb-3 flex items-center gap-2">
                      <Clock size={20} />
                      Curing Time
                    </h4>
                    <p className="text-white">LED: {product.curing.ledSeconds}s | UV: {product.curing.uvSeconds}s</p>
                  </div>
                  
                  <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                    <h4 className="text-[#d4af37] font-bold mb-3 flex items-center gap-2">
                      <Shield size={20} />
                      Safety
                    </h4>
                    <p className="text-white">
                      {product.specs.acidFree ? 'Acid-free' : 'Contains acid'} • 
                      {product.specs.hemaFree ? ' HEMA-free' : ' Contains HEMA'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Viscosity</h4>
                      <p className="text-white">{product.specs.viscosity}</p>
                    </div>
                    
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Opacity</h4>
                      <p className="text-white">{product.specs.opacity}</p>
                    </div>
                    
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Flexibility</h4>
                      <p className="text-white">{product.specs.flex}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Heat Level</h4>
                      <p className="text-white">{product.specs.heatLevel}</p>
                    </div>
                    
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Hardness</h4>
                      <p className="text-white">{product.specs.hardness}/5</p>
                    </div>
                    
                    <div className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-bold mb-2">Self-Leveling</h4>
                      <p className="text-white flex items-center gap-2">
                        {product.specs.selfLeveling ? (
                          <CheckCircle className="text-green-400" size={16} />
                        ) : (
                          <AlertTriangle className="text-red-400" size={16} />
                        )}
                        {product.specs.selfLeveling ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Usage Guide</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#d4af37] font-bold text-lg mb-3">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.usage.bestFor.map((use, index) => (
                        <span key={index} className="bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-bold text-lg mb-3">Preparation</h4>
                    <ul className="space-y-2">
                      {product.usage.prepNotes.map((note, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-[#d4af37] mt-1">•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-bold text-lg mb-3">Application Steps</h4>
                    <ol className="space-y-2">
                      {product.usage.applicationSteps.map((step, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-[#d4af37] font-bold min-w-[24px]">{index + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-bold text-lg mb-3">Removal</h4>
                    <p className="text-gray-300">{product.usage.removal}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                
                {product.faq && product.faq.length > 0 ? (
                  <div className="space-y-4">
                    {product.faq.map((item, index) => (
                      <div key={index} className="bg-zinc-900 p-6 rounded-xl border border-[#d4af37]/20">
                        <h4 className="text-[#d4af37] font-bold mb-2 flex items-start gap-2">
                          <HelpCircle size={20} className="mt-0.5 flex-shrink-0" />
                          {item.q}
                        </h4>
                        <p className="text-gray-300 ml-7">{item.a}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-zinc-900 p-8 rounded-xl border border-[#d4af37]/20 text-center">
                    <HelpCircle size={48} className="text-[#d4af37] mx-auto mb-4" />
                    <p className="text-gray-300 text-lg">No FAQ available for this product yet.</p>
                    <p className="text-gray-400 mt-2">Please contact us if you have any questions.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Warnings */}
        <div className="mt-16 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Important Safety Information
          </h3>
          <ul className="space-y-2">
            {product.warnings.map((warning, index) => (
              <li key={index} className="text-red-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                {warning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
