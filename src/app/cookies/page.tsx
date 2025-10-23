import Link from 'next/link'
import { Cookie, Settings, BarChart, Shield, Info, ToggleLeft } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-2 mb-8">
              <Cookie className="text-[#d4af37]" size={20} />
              <span className="text-[#d4af37] font-bold uppercase tracking-wider text-sm">
                Cookie Policy
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Cookie <span className="text-gold-gradient">Policy</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Last updated: October 23, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This Cookie Policy explains how AXA Professional ("we", "us", or "our") uses cookies and similar technologies when you visit our website. This policy provides you with information about what cookies are, how we use them, and how you can manage your cookie preferences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Info className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser until they expire or you delete them. Session cookies are deleted when you close your browser.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Essential Cookies */}
                <div className="p-6 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <p className="text-sm text-[#d4af37] font-semibold">
                    Cannot be disabled
                  </p>
                  <div className="mt-4 text-gray-400 text-sm">
                    <p className="font-semibold text-gray-300 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Session management</li>
                      <li>Security authentication</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-6 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-4">
                    <BarChart className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p className="text-sm text-[#d4af37] font-semibold">
                    Can be disabled
                  </p>
                  <div className="mt-4 text-gray-400 text-sm">
                    <p className="font-semibold text-gray-300 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Google Analytics</li>
                      <li>Page views tracking</li>
                      <li>User behavior analysis</li>
                    </ul>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="p-6 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-4">
                    <Settings className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Functionality Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <p className="text-sm text-[#d4af37] font-semibold">
                    Can be disabled
                  </p>
                  <div className="mt-4 text-gray-400 text-sm">
                    <p className="font-semibold text-gray-300 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Language preferences</li>
                      <li>Region selection</li>
                      <li>User interface customization</li>
                    </ul>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-6 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center mb-4">
                    <ToggleLeft className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.
                  </p>
                  <p className="text-sm text-[#d4af37] font-semibold">
                    Can be disabled
                  </p>
                  <div className="mt-4 text-gray-400 text-sm">
                    <p className="font-semibold text-gray-300 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Advertising networks</li>
                      <li>Social media integration</li>
                      <li>Retargeting campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h2>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  In addition to our own cookies, we may use various third-party cookies to report website usage statistics, deliver advertisements, and provide social media features.
                </p>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-3">Third-Party Services We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Google Analytics:</strong> For website analytics and performance tracking</li>
                    <li><strong className="text-white">Facebook Pixel:</strong> For targeted advertising and conversion tracking</li>
                    <li><strong className="text-white">Social Media Plugins:</strong> For social sharing features</li>
                    <li><strong className="text-white">Payment Processors:</strong> For secure payment processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Settings className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through our cookie consent tool or by adjusting your browser settings.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white mb-3">Browser Settings</h3>
                  <p className="mb-3">Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong className="text-white">Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong className="text-white">Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl">
                  <p className="text-sm">
                    <strong className="text-[#d4af37]">Please note:</strong> If you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.
                  </p>
                </div>
              </div>
            </div>

            {/* Do Not Track */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Do Not Track Signals</h2>
              
              <div className="text-gray-300 leading-relaxed">
                <p>
                  Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. Currently, there is no industry standard for how DNT signals should be interpreted. We do not currently respond to DNT signals, but you can still manage your cookie preferences as described above.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Updates to This Cookie Policy</h2>
              
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our operations, or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically to stay informed about our use of cookies.
                </p>
              </div>
            </div>

            {/* More Information */}
            <div className="p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#f0d060]/10 border border-[#d4af37]/30 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Need More Information?</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-center">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300 text-center mb-8">
                <p><strong className="text-white">Email:</strong> privacy@axaprofessional.com</p>
                <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/privacy"
                  className="inline-block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 border border-[#d4af37]/30"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block text-center bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

