'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    product: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          product: '',
          message: '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.error || data.details || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please check your connection and try again.')
      console.error('Contact form error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-2 mb-8">
              <Mail className="text-[#d4af37]" size={20} />
              <span className="text-[#d4af37] font-bold uppercase tracking-wider text-sm">
                Contact Us
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Let's <span className="text-gold-gradient">Connect</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Have questions about our professional gel systems? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-black" size={24} />
                      </div>
                      <div>
                      <h3 className="font-bold text-white text-lg mb-2">Email Us</h3>
                      <a href="mailto:contact@axanail.com" className="text-[#d4af37] hover:text-[#f0d060] transition-colors text-lg">
                        contact@axanail.com
                      </a>
                      <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Call Us</h3>
                      <a href="tel:+15551234567" className="text-[#d4af37] hover:text-[#f0d060] transition-colors text-lg">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-gray-400 text-sm mt-2">Mon-Fri 9am-6pm EST</p>
                      </div>
                    </div>
                  </div>

                {/* Address */}
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-black" size={24} />
                      </div>
                      <div>
                      <h3 className="font-bold text-white text-lg mb-2">Visit Us</h3>
                      <p className="text-gray-300">123 Professional Boulevard</p>
                      <p className="text-gray-300">Suite 400</p>
                      <p className="text-gray-300">Beauty City, NC 12345</p>
                      <p className="text-gray-400 text-sm mt-2">United States</p>
                      </div>
                    </div>
                  </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="text-black" size={24} />
                      </div>
                      <div>
                      <h3 className="font-bold text-white text-lg mb-3">Business Hours</h3>
                      <div className="space-y-1 text-gray-300">
                        <p className="flex justify-between gap-4">
                          <span>Monday - Friday:</span>
                          <span className="text-[#d4af37]">9:00 AM - 6:00 PM</span>
                        </p>
                        <p className="flex justify-between gap-4">
                          <span>Saturday:</span>
                          <span className="text-[#d4af37]">10:00 AM - 4:00 PM</span>
                        </p>
                        <p className="flex justify-between gap-4">
                          <span>Sunday:</span>
                          <span className="text-gray-500">Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* International */}
                <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#f0d060]/10 p-8 rounded-2xl border border-[#d4af37]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">International Orders</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We ship worldwide! Contact us for international wholesale inquiries and bulk orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 lg:p-12 rounded-3xl border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-8 p-6 bg-green-900/30 border-2 border-green-500/50 rounded-2xl flex items-start gap-4 animate-fade-in">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="text-green-300 font-bold text-lg mb-1">Message sent successfully!</p>
                      <p className="text-green-400">Thank you for contacting us. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-8 p-6 bg-red-900/30 border-2 border-red-500/50 rounded-2xl flex items-start gap-4 animate-fade-in">
                    <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="text-red-300 font-bold text-lg mb-1">Failed to send message</p>
                      <p className="text-red-400">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        Full Name <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                        className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        Email Address <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    </div>

                  {/* Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                        Your Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
                        placeholder="Your City or Full Address"
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label htmlFor="product" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white focus:outline-none focus:border-[#d4af37] transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem'
                      }}
                    >
                      <option value="">Select a product...</option>
                      <option value="Builder Gel - Transparent">Builder Gel - Transparent</option>
                      <option value="Builder Gel - Milky White">Builder Gel - Milky White</option>
                      <option value="Builder Gel - Nude">Builder Gel - Nude</option>
                      <option value="Builder Gel - Pink">Builder Gel - Pink</option>
                      <option value="Base Gel - Strong">Base Gel - Strong</option>
                      <option value="Top Coat - No Wipe">Top Coat - No Wipe</option>
                      <option value="Complete Professional Kit">Complete Professional Kit</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                      Your Message <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 bg-black border-2 border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black py-5 px-8 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-wider"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
