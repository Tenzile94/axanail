'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselImages = [
  {
    // url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&h=1080&fit=crop',
    url: '/img-min/nude_gel_bg.jpg',
    title: 'AXA Builder Gel',
    subtitle: 'Professional strength. Superior control. Flawless architecture.',
    product: 'BUILDER GEL',
  },
  {
    url: '/img-min/bg.png',
    title: 'AXA Base Gel',
    subtitle: 'Strong adhesion. Long-lasting wear. Reliable performance.',
    product: 'BASE GEL',
  },
  {
    // url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1920&h=1080&fit=crop',
    url: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1920&h=1080&fit=crop',
    title: 'AXA Top Coat',
    subtitle: 'Mirror shine. No wipe. No compromises.',
    product: 'TOP COAT',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          >
            {/* Overlay - Darker and more luxurious */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37]/20 hover:bg-[#d4af37]/40 backdrop-blur-sm text-[#d4af37] p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#d4af37]/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37]/20 hover:bg-[#d4af37]/40 backdrop-blur-sm text-[#d4af37] p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#d4af37]/30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border ${
              index === currentSlide
                ? 'bg-[#d4af37] border-[#d4af37] w-10 h-3'
                : 'bg-transparent border-[#d4af37]/50 w-3 h-3 hover:bg-[#d4af37]/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] to-[#f0d060] transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / carouselImages.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

