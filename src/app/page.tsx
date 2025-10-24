'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { products, bundles } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import BundleCard from '@/components/BundleCard'
import HeroCarousel from '@/components/HeroCarousel'
import ApplicationGallery from '@/components/ApplicationGallery'
import { ArrowRight, Sparkles, Star, TrendingUp, Mail, Phone, X } from 'lucide-react'

const heroSlides = [
  {
    product: 'BUILDER GEL',
    title: 'AXA Builder Gel',
    subtitle: 'Professional strength. Superior control. Flawless architecture.',
  },
  {
    product: 'BASE GEL',
    title: 'AXA Base Gel',
    subtitle: 'Strong adhesion. Long-lasting wear. Reliable performance.',
  },
  {
    product: 'TOP COAT',
    title: 'AXA Top Coat',
    subtitle: 'Mirror shine. No wipe. No compromises.',
  },
]

const advantages = [
  {
    icon: Sparkles,
    title: 'Self-leveling formula',
    description: 'Advanced formula that spreads evenly and smoothly, eliminating imperfections for a flawless finish every time.',
  },
  {
    icon: TrendingUp,
    title: 'Elastic and durable structure',
    description: 'Flexible gel technology that moves with your nails while maintaining exceptional strength and durability.',
  },
  {
    icon: Star,
    title: 'Long-lasting wear',
    description: 'Experience 3+ weeks of chip-free, flawless wear that maintains its brilliance from day one to removal.',
  },
  {
    icon: Sparkles,
    title: 'Strong adhesion',
    description: 'Superior bonding technology ensures maximum adhesion to natural nails, preventing lifting and separation.',
  },
  {
    icon: Star,
    title: 'Comfort in application',
    description: 'Easy-to-work formula with optimal viscosity and workability for effortless, precise application.',
  },
  {
    icon: TrendingUp,
    title: 'Professional result',
    description: 'Salon-quality finish that exceeds expectations, delivering consistent, professional results every time.',
  },
]

const bestsellers = [
  {
    id: 1,
    name: 'Milky White Builder',
    description: 'Perfect coverage builder gel with a natural milky finish for elegant French and overlay applications.',
    volume: '50 ml',
    imageClosed: '/products/milkywhite.jpeg',
    imageOpened: '/products/milky2.jpeg',
    altText: 'Milky White Builder Gel',
    priority: true,
  },
  {
    id: 2,
    name: 'Nude Cover Base',
    description: 'Universal nude base with excellent coverage and self-leveling properties for flawless natural looks.',
    volume: '50 ml',
    imageClosed: '/products/nude.jpeg',
    imageOpened: '/products/nude2.jpeg',
    altText: 'Nude Cover Base Gel',
    priority: false,
  },
  {
    id: 3,
    name: 'Pink Builder',
    description: 'Classic pink builder gel with superior strength and flexibility for durable nail extensions.',
    volume: '50 ml',
    imageClosed: '/products/pink.jpeg',
    imageOpened: '/products/pink2.jpeg',
    altText: 'Pink Builder Gel',
    priority: false,
  },
  {
    id: 4,
    name: 'Strong Base Gel',
    description: 'Ultimate adhesion base coat providing long-lasting wear and protection for natural nails.',
    volume: '30 ml',
    imageClosed: '/products/strongbase.jpeg',
    imageOpened: '/products/strongbase2.jpeg',
    altText: 'Strong Base Gel',
    priority: false,
  },
  {
    id: 5,
    name: 'Mirror Top Coat',
    description: 'High-gloss no-wipe top coat delivering brilliant mirror shine and superior scratch resistance.',
    volume: '30 ml',
    imageClosed: '/products/topcoat2.jpeg',
    imageOpened: '/products/topcoat.jpeg',
    altText: 'Mirror Top Coat',
    priority: false,
  },
  {
    id: 6,
    name: 'Crystal Clear Builder',
    description: 'Transparent builder gel with exceptional clarity for encapsulations and artistic nail designs.',
    volume: '50 ml',
    imageClosed: '/products/transparent.jpeg',
    imageOpened: '/products/transparent2.jpeg',
    altText: 'Crystal Clear Builder',
    priority: false,
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredProducts = products.filter((p) => p.featured)
  const newArrivals = products.filter((p) => p.badge === 'New')
  const saleProducts = products.filter((p) => p.badge === 'Sale')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute translate-x-10 pointer-events-none'
                  }`}
                >
                  <div className="mb-6 animate-fade-in-up">
                    <span className="bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-6 py-2 rounded-full text-xs font-bold border border-[#d4af37]/40 tracking-[0.3em]">
                      {slide.product}
                </span>
              </div>
                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up text-white drop-shadow-2xl">
                    {slide.title.split(' ')[0]}
                    <span className="block text-gold-gradient luxury-shine">
                      {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
                  <p className="text-xl lg:text-3xl mb-10 text-gray-300 drop-shadow-lg max-w-3xl font-light leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <a 
                      href="/contact"
                      className="bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
                    >
                      <Mail size={22} />
                      Contact Us
                    </a>
                    <button className="border-2 border-[#d4af37] text-[#d4af37] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#d4af37]/10 backdrop-blur-sm transition-all duration-300 uppercase tracking-wide">
                      View Products
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Contact Button */}
        <a 
          href="/contact"
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black p-5 rounded-full shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold group"
        >
          <Mail size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Contact
          </span>
        </a>
      </section>

      {/* Features Bar */}
      <section className="bg-gradient-to-b from-black via-zinc-900 to-black border-y border-[#d4af37]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-black/50 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <Sparkles className="text-[#d4af37]" size={32} />
              <div>
                <p className="font-bold text-white text-lg tracking-wide">PROFESSIONAL GRADE</p>
                <p className="text-sm text-gray-400 mt-2">Salon-quality results every time</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-black/50 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <Star className="text-[#d4af37]" size={32} />
              <div>
                <p className="font-bold text-white text-lg tracking-wide">SUPERIOR QUALITY</p>
                <p className="text-sm text-gray-400 mt-2">Premium ingredients & formulation</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-black/50 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300">
              <TrendingUp className="text-[#d4af37]" size={32} />
              <div>
                <p className="font-bold text-white text-lg tracking-wide">LONG-LASTING</p>
                <p className="text-sm text-gray-400 mt-2">3+ weeks of flawless wear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
                About AXA
            </span>
              <h2 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-8">
                Crafted for <span className="text-gold-gradient">Excellence</span>
            </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Main content */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="relative pl-6 border-l-4 border-[#d4af37]">
                  <p className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                    AXA is a professional gel system designed for nail masters who demand <span className="text-white font-semibold">durability</span>, <span className="text-white font-semibold">control</span> and <span className="text-white font-semibold">premium quality</span> in every application.
            </p>
          </div>
                
                <p className="text-xl text-gray-400 leading-relaxed">
                  Whether you're creating intricate nail art or building flawless extensions, AXA provides the foundation for masterpiece-worthy results that stand the test of time.
                </p>

                <div className="pt-6">
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                  >
                    <Mail size={22} />
                    Partner With Us
                  </a>
                </div>
              </div>

              {/* Right side - Stats/Features */}
              <div className="space-y-6 animate-fade-in-up">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="text-black" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Professional Grade</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Trusted by salon professionals and nail artists across the globe for consistent, exceptional results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="text-black" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Premium Formulation</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Advanced chemistry delivering superior adhesion, extended wear time, and brilliant, long-lasting shine.
                      </p>
                    </div>
          </div>
        </div>

                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-black" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Proven Results</h3>
                      <p className="text-gray-400 leading-relaxed">
                        3+ weeks of flawless wear with no chipping, lifting, or fading. Performance you can count on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES Section */}
      <section id="collections" className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
              Our Products
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-6">
              Professional <span className="text-gold-gradient">Categories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Three essential formulations for flawless nail artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Builder Gel */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image 
                  src="/products/transparent.jpeg" 
                  alt="AXA Builder Gel"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={true}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECA//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJMCMLAAX//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-4 py-2 rounded-full text-xs font-bold border border-[#d4af37]/40 tracking-wider">
                    PROFESSIONAL STRENGTH
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  Builder Gel
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professional strength. Superior control. Flawless architecture for extensions and nail art.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] font-bold group-hover:gap-4 transition-all duration-300"
                >
                  Learn More 
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Base Gel */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image 
                  src="/products/strongbase.jpeg" 
                  alt="AXA Base Gel"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={true}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECA//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJMCMLAAX//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-4 py-2 rounded-full text-xs font-bold border border-[#d4af37]/40 tracking-wider">
                    STRONG ADHESION
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  Base Gel
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Strong adhesion. Long-lasting wear. Reliable performance as the foundation of excellence.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] font-bold group-hover:gap-4 transition-all duration-300"
                >
                  Learn More 
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Top Coat */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image 
                  src="/products/topcoat.jpeg" 
                  alt="AXA Top Coat"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={true}
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECA//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJMCMLAAX//Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-4 py-2 rounded-full text-xs font-bold border border-[#d4af37]/40 tracking-wider">
                    MIRROR SHINE
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  Top Coat
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mirror shine. No wipe. No compromises. The perfect finish for flawless results.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#d4af37] font-bold group-hover:gap-4 transition-all duration-300"
                >
                  Learn More 
                  <ArrowRight size={20} />
                </a>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS Section */}
      <section id="products" className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
              Bestsellers
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-6">
              Most <span className="text-gold-gradient">Trusted</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Our most trusted formulas, chosen by professional nail masters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bestsellers.map((product) => (
              <div 
                key={product.id}
                className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/20"
              >
                <div className="aspect-square overflow-hidden bg-zinc-800 relative">
                  <Image 
                    src={product.imageClosed} 
                    alt={product.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
                    priority={product.priority}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECA//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJMCMLAAX//Z"
                  />
                  <Image 
                    src={product.imageOpened} 
                    alt={`${product.altText} - Opened`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                    priority={false}
                    quality={85}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#d4af37] font-bold text-lg">Volume:</span>
                    <span className="text-white font-semibold text-lg">{product.volume}</span>
                  </div>
                  <a 
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-6 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                  >
                    <Mail size={20} />
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES Section */}
      <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
              Why Choose AXA
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-6">
              Our <span className="text-gold-gradient">Advantages</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl">
              Premium formulations designed for professionals who demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

    

      {/* WHY AXA Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden border-y border-[#d4af37]/20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(/bundle-min.jpg)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="animate-fade-in-up">
              <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                The AXA Difference
              </span>
              <h2 className="text-6xl lg:text-8xl font-bold mb-8">
                <span className="text-white">WHY </span>
                <span className="text-gold-gradient luxury-shine">AXA</span>
              </h2>
            </div>
            
            <p className="text-2xl lg:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Chosen by professionals for <span className="text-[#d4af37] font-semibold">stability</span>, <span className="text-[#d4af37] font-semibold">control</span> and <span className="text-[#d4af37] font-semibold">flawless results</span> every time.
            </p>
            
            <div className="pt-6 animate-fade-in-up">
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 uppercase tracking-wide"
              >
                <Mail size={24} />
                Discover AXA
              </a>
                </div>
            </div>
          </div>
        </section>

   

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
              Testimonials
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Trusted by <span className="text-gold-gradient">Professionals</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Excellence recognized worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                title: 'Master Nail Technician',
                review: 'AXA products deliver unmatched quality and consistency. A game-changer for my salon.',
                rating: 5,
              },
              {
                name: 'Elena Rodriguez',
                title: 'Salon Owner',
                review: 'The professional results speak for themselves. My clients love the durability and shine.',
                rating: 5,
              },
              {
                name: 'Jessica Lin',
                title: 'Certified Nail Artist',
                review: 'Superior control and flawless finish every time. These are my go-to products.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-[#d4af37] text-[#d4af37]" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">&ldquo;{testimonial.review}&rdquo;</p>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-[#d4af37] text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Gallery Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-sm">
              Application Guide
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Professional <span className="text-gold-gradient">Technique</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Master the art of flawless gel application with our expert guidance
            </p>
          </div>
          
          <ApplicationGallery />

          {/* Tips Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Preparation</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Proper nail preparation is essential. Clean, buffed nails ensure superior adhesion and extended wear time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-6">
                <Star className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Application</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Apply thin, even layers for best results. Cure each layer completely under LED lamp for 30-60 seconds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Durability</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Experience 3+ weeks of flawless wear. AXA formulations deliver unmatched strength and shine retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section  className="relative py-32 overflow-hidden border-t border-[#d4af37]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f0d060] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Professional <span className="text-gold-gradient luxury-shine">Excellence</span>
          </h2>
              <p className="text-2xl text-gray-300 mb-12 font-light leading-relaxed">
                Premium materials for maximum control.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 uppercase tracking-wider"
                >
                  <Mail size={28} />
                  Contact Us
                </a>
                
                <a
                  href="mailto:contact@axanail.com"
                  className="inline-flex items-center gap-3 border-2 border-[#d4af37] text-[#d4af37] px-12 py-6 rounded-full font-bold text-xl hover:bg-[#d4af37]/10 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
                >
                  <Mail size={28} />
                  Email Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

