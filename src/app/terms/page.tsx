import Link from 'next/link'
import { FileText, ShieldCheck, AlertCircle, Scale, CreditCard, Package } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 border-b border-[#d4af37]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-6 py-2 mb-8">
              <FileText className="text-[#d4af37]" size={20} />
              <span className="text-[#d4af37] font-bold uppercase tracking-wider text-sm">
                Terms & Conditions
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Terms of <span className="text-gold-gradient">Service</span>
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
                Welcome to AXA Professional. These Terms and Conditions ("Terms") govern your use of our website and the purchase of our products. By accessing or using our website, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you should not use our website or purchase our products.
              </p>
            </div>

            {/* General Terms */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <FileText className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">General Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  By using this website, you warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms. You agree to use our website only for lawful purposes and in accordance with these Terms.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our website or services at any time without notice. We may also update these Terms from time to time, and your continued use of the website constitutes acceptance of the updated Terms.
                </p>
              </div>
            </div>

            {/* Products and Services */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Package className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Products and Services</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Product Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We make every effort to display our products and their colors, sizes, and details as accurately as possible. However, we cannot guarantee that your device's display of colors accurately reflects the actual product color. All products are subject to availability, and we reserve the right to discontinue any product at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Professional Use</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AXA Professional gel systems are designed for professional use by qualified nail technicians and beauty professionals. Proper training and certification in gel nail application is recommended before using our products. We are not responsible for results obtained by untrained or uncertified users.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Product Safety</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All products should be used according to the instructions provided. We are not liable for any adverse reactions, damages, or injuries resulting from misuse, improper application, or failure to follow safety guidelines. Always perform a patch test before use.
                  </p>
                </div>
              </div>
            </div>

            {/* Ordering and Payment */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <CreditCard className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Ordering and Payment</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Order Process</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    When you place an order, you are making an offer to purchase the products. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Product unavailability</li>
                    <li>Errors in pricing or product information</li>
                    <li>Suspected fraudulent transactions</li>
                    <li>Credit or payment issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Pricing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All prices are displayed in USD and are subject to change without notice. We strive to ensure that all pricing information is accurate, but errors may occur. If we discover a pricing error after you have placed an order, we will contact you to inform you of the correct price and give you the option to proceed or cancel the order.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">Payment Methods</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We accept various payment methods including credit cards, debit cards, and other electronic payment systems. By providing payment information, you represent that you are authorized to use the payment method and authorize us to charge your payment method for the total order amount.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping and Delivery */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Shipping and Delivery</h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We ship to addresses provided by you. You are responsible for ensuring that your shipping information is accurate and complete. We are not responsible for delays or non-delivery due to incorrect or incomplete address information.
                </p>
                <p>
                  Delivery times are estimates and not guaranteed. We are not liable for any delays in shipping or delivery. Risk of loss and title for products pass to you upon delivery to the carrier.
                </p>
                <p>
                  Shipping costs will be calculated at checkout and are non-refundable unless the return is due to our error or a defective product.
                </p>
              </div>
            </div>

            {/* Returns and Refunds */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Returns and Refunds</h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We want you to be completely satisfied with your purchase. If you are not satisfied, you may return unopened and unused products within 30 days of delivery for a refund or exchange.
                </p>
                <p><strong className="text-white">Return Conditions:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Products must be unopened and in their original packaging</li>
                  <li>Products must be in resalable condition</li>
                  <li>Return shipping costs are the responsibility of the customer unless the return is due to our error</li>
                  <li>Refunds will be processed within 10 business days of receiving the returned products</li>
                  <li>Sale or clearance items may not be eligible for return</li>
                </ul>
                <p className="mt-4">
                  To initiate a return, please contact our customer service team with your order number and reason for return.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Intellectual Property</h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of AXA Professional or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from our website without our prior written permission. The AXA Professional name and logo are trademarks and may not be used without permission.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <AlertCircle className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Limitation of Liability</h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To the fullest extent permitted by law, AXA Professional shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for any claims arising from or related to your use of our website or products shall not exceed the amount you paid for the products in question.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages, so some of the above limitations may not apply to you.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-black border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full flex items-center justify-center">
                  <Scale className="text-black" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Governing Law</h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-8 bg-gradient-to-r from-[#d4af37]/10 to-[#f0d060]/10 border border-[#d4af37]/30 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Terms?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-gray-300 mb-8">
                <p><strong className="text-white">Email:</strong> legal@axaprofessional.com</p>
                <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f0d060] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

