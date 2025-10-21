'use client'

import { products, bundles } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import BundleCard from '@/components/BundleCard'
import HeroCarousel from '@/components/HeroCarousel'
import ApplicationGallery from '@/components/ApplicationGallery'
import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react'

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured)
  const newArrivals = products.filter((p) => p.badge === 'New')
  const saleProducts = products.filter((p) => p.badge === 'Sale')

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <div className="inline-block animate-bounce-slow mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  ✨ New Winter Collection 2025
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up drop-shadow-2xl">
                Elevate Your
                <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Nail Game
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 drop-shadow-lg max-w-2xl">
                Discover our premium gel polish collection with long-lasting, vibrant colors that make your nails shine bright.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Shop Collection
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                  View Bundles
                </button>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white drop-shadow-lg">500+</p>
                  <p className="text-sm text-white/80">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white drop-shadow-lg">100+</p>
                  <p className="text-sm text-white/80">Unique Colors</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                    <Star className="fill-yellow-400 text-yellow-400 drop-shadow-lg" size={20} />
                    <span className="text-3xl font-bold text-white drop-shadow-lg">4.9</span>
                  </div>
                  <p className="text-sm text-white/80">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="text-primary-400" size={24} />
              <div>
                <p className="font-semibold">Long-Lasting Formula</p>
                <p className="text-sm text-gray-400">Up to 3 weeks wear</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="text-primary-400" size={24} />
              <div>
                <p className="font-semibold">Professional Quality</p>
                <p className="text-sm text-gray-400">Salon-grade results</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="text-primary-400" size={24} />
              <div>
                <p className="font-semibold">Trending Colors</p>
                <p className="text-sm text-gray-400">Always on trend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Just Dropped
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to try our latest gel polish shades
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner 1 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold animate-fade-in">
              Limited Time Offer
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Get 25% OFF on all bundles + Free LED Lamp with purchases over $100
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Explore
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked colors for every style and occasion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Classic Collection',
                count: '25+ Shades',
                gradient: 'from-red-500 to-pink-500',
              },
              {
                name: 'Shimmer Collection',
                count: '15+ Shades',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                name: 'Bold & Bright',
                count: '20+ Shades',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'Pastel Dreams',
                count: '18+ Shades',
                gradient: 'from-pink-400 to-purple-400',
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`relative h-64 rounded-2xl bg-gradient-to-br ${category.gradient} overflow-hidden group cursor-pointer animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                  <button className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Save More
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Special Bundles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete sets at unbeatable prices - perfect for beginners and pros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle, index) => (
              <div
                key={bundle.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <BundleCard bundle={bundle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      {saleProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">
                🔥 Hot Deals
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Special Offers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Limited time discounts on selected items
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product, index) => (
                <div
                  key={product.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who love our gel polish
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                review: 'Best gel polish I\'ve ever used! The colors are stunning and last for weeks.',
                rating: 5,
              },
              {
                name: 'Emma Davis',
                review: 'Professional quality at home. My nails have never looked better!',
                rating: 5,
              },
              {
                name: 'Lisa Chen',
                review: 'The bundles are amazing value. I saved so much and got everything I needed.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl animate-scale-in hover:bg-gray-750 transition-colors"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.review}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Easy Application
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              How to Apply Gel Polish
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps for salon-quality nails at home. Professional results in just 6 easy steps.
            </p>
          </div>
          
          <ApplicationGallery />

          {/* Tips Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pro Tip</h3>
              <p className="text-gray-600 text-sm">
                Always prep your nails properly. Clean, dry nails ensure better adhesion and longer-lasting results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Curing Time</h3>
              <p className="text-gray-600 text-sm">
                Cure each layer for 30-60 seconds under LED lamp. Don't skip this step for best results!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Long-Lasting</h3>
              <p className="text-gray-600 text-sm">
                With proper application and care, your gel polish can last up to 3 weeks without chipping!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Nails?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Start your journey to beautiful, long-lasting nails with our premium gel polish collection
          </p>
          <button className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

