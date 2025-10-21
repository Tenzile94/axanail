'use client'

import { useState } from 'react'
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
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop',
    title: 'Prepare Your Nails',
    description: 'Clean and shape nails for the perfect base',
    step: 'Step 1',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop',
    title: 'Apply Base Coat',
    description: 'Essential foundation for long-lasting wear',
    step: 'Step 2',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&h=600&fit=crop',
    title: 'Choose Your Color',
    description: 'Select from our vibrant collection',
    step: 'Step 3',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=600&fit=crop',
    title: 'Apply Gel Polish',
    description: 'Smooth, even application for best results',
    step: 'Step 4',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
    title: 'Cure Under LED',
    description: 'Set your polish for lasting perfection',
    step: 'Step 5',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
    title: 'Top Coat & Finish',
    description: 'Seal with shine and protection',
    step: 'Step 6',
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
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image)}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.step && (
                  <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.step}
                  </span>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>

            {/* Step Badge (Visible by default) */}
            {image.step && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 group-hover:opacity-0 transition-opacity duration-300">
                {image.step}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <div
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedImage.url})` }}
              />
            </div>
            <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50">
              {selectedImage.step && (
                <span className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {selectedImage.step}
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

