import Link from 'next/link'
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-2 mb-8">
              <Shield className="text-[#d4af37]" size={20} />
              <span className="text-[#d4af37] font-bold uppercase tracking-wider text-sm">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Your <span className="text-gold-gradient">Privacy</span> Matters
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
                At AXA Professional, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Database className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We may collect personally identifiable information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Register on the website</li>
                    <li>Place an order</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Fill out a form</li>
                    <li>Contact us through email or contact forms</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-3">
                    This information may include: name, email address, phone number, mailing address, business name, and payment information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about the pages you view, the links you click, and other actions you take on our site.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Eye className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Send you updates about your orders</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <UserCheck className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Information Sharing</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We may share your information with third parties in the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, hosting services, and customer service.</li>
                  <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong className="text-white">Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Lock className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Security</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure payment processing</li>
                </ul>
                <p className="mt-4">
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate personal information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong className="text-white">Restriction:</strong> Request restriction of processing of your personal information</li>
                  <li><strong className="text-white">Portability:</strong> Request transfer of your personal information</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw your consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Cookies and Tracking</h2>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p>
                  For more information about how we use cookies, please see our{' '}
                  <Link href="/cookies" className="text-[#d4af37] hover:text-[#f0d060] underline transition-colors">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
              
              <div className="text-gray-300 leading-relaxed">
                <p>
                  Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
              
              <div className="text-gray-300 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#f0d060]/10 border border-[#d4af37]/30 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full mb-6">
                <Mail className="text-black" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Email:</strong> contact@axanail.com</p>
              </div>
              <Link 
                href="/contact"
                className="inline-block mt-8 bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

