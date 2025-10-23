'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  id: number
  url: string
  title: string
  description: string
  step?: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: '/avif/milky_gel-min.avif',
    title: 'Milky White Builder',
    description: 'Professional strength for flawless nail extensions',
    step: 'Builder Gel',
  },
  {
    id: 2,
    url: '/avif/milky_gel_2-min.avif',
    title: 'Perfect Coverage',
    description: 'Self-leveling formula for smooth application',
    step: 'Application',
  },
  {
    id: 3,
    url: '/avif/nude_gel_1-min.avif',
    title: 'Nude Base Gel',
    description: 'Natural elegance with strong adhesion',
    step: 'Base Coat',
  },
  {
    id: 4,
    url: '/avif/milky_gel_4-min.avif',
    title: 'Expert Technique',
    description: 'Precision work with superior control',
    step: 'Shaping',
  },
  {
    id: 5,
    url: '/img-min/nude_gel-min.jpg',
    title: 'Classic Style',
    description: 'Timeless beauty with lasting wear',
    step: 'Finishing',
  },
  {
    id: 6,
    url: '/avif/milky_gel_6-min.avif',
    title: 'Extensions',
    description: 'Perfect length and durability',
    step: 'Extension',
  },
  {
    id: 7,
    url: '/avif/milky_gel_12-min.avif',
    title: 'Stunning Results',
    description: 'Professional masterpiece finish',
    step: 'Final Look',
  },
  {
    id: 8,
    url: '/avif/milky_gel_14-min.avif',
    title: 'Creative Design',
    description: 'Nail art with AXA excellence',
    step: 'Nail Art',
  },
]

export default function ApplicationGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-500 cursor-pointer animate-scale-in bg-zinc-900"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image)}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-zinc-800 relative">
              <Image
                src={image.url}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {image.step && (
                  <span className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-4 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                    {image.step}
                  </span>
                )}
                <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{image.description}</p>
              </div>
            </div>

            {/* Step Badge (Visible by default) */}
            {image.step && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#d4af37] to-[#f0d060] backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-black group-hover:opacity-0 transition-opacity duration-300 uppercase tracking-wider">
                {image.step}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#d4af37]/50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <div
            className="max-w-5xl w-full bg-gradient-to-br from-zinc-900 to-black border-2 border-[#d4af37]/30 rounded-3xl overflow-hidden animate-scale-in shadow-2xl shadow-[#d4af37]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] overflow-hidden bg-zinc-800 relative">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="p-8 bg-gradient-to-br from-zinc-900 to-black">
              {selectedImage.step && (
                <span className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black px-5 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                  {selectedImage.step}
                </span>
              )}
              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

