import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMapBackground from '@/components/WorldMapBackground';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <WorldMapBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                Terms of Service
              </h1>
              <p className="text-xl text-slate-300">
                Last Updated: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <h2 className="text-3xl font-bold mb-6 text-slate-900">1. Acceptance of Terms</h2>
              <p className="text-slate-700 mb-6">
                By accessing and using JDsecurity Shipping Company's services ("Services"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">2. Services Description</h2>
              <p className="text-slate-700 mb-4">
                JDsecurity provides comprehensive logistics and shipping services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Domestic and international shipping</li>
                <li>Air, sea, and ground freight services</li>
                <li>Warehousing and distribution</li>
                <li>Supply chain management</li>
                <li>Courier and express delivery</li>
                <li>B2B exchange services</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">3. User Obligations</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Account Registration</h3>
              <p className="text-slate-700 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Prohibited Items</h3>
              <p className="text-slate-700 mb-4">You may not ship:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Illegal substances or contraband</li>
                <li>Hazardous materials without proper documentation</li>
                <li>Counterfeit goods or items violating intellectual property</li>
                <li>Live animals (except as permitted by regulations)</li>
                <li>Perishable items without appropriate packaging</li>
                <li>Items restricted by local or international law</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">4. Pricing and Payment</h2>
              <p className="text-slate-700 mb-4">
                All prices are quoted in USD unless otherwise specified. Payment terms:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Prices may vary based on weight, dimensions, destination, and service level</li>
                <li>Additional fees may apply for customs, duties, or special handling</li>
                <li>Payment is due at time of booking unless credit terms are approved</li>
                <li>We accept major credit cards, wire transfers, and approved payment methods</li>
                <li>Late payments may incur interest charges</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">5. Shipping and Delivery</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Delivery Times</h3>
              <p className="text-slate-700 mb-6">
                Estimated delivery times are approximations and not guaranteed. Delays may occur due to weather, customs clearance, security checks, or other unforeseen circumstances.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Packaging Requirements</h3>
              <p className="text-slate-700 mb-4">Customers are responsible for:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Proper packaging to prevent damage during transit</li>
                <li>Accurate labeling and documentation</li>
                <li>Compliance with packaging regulations</li>
                <li>Declaring accurate weight and dimensions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">6. Liability and Insurance</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Limited Liability</h3>
              <p className="text-slate-700 mb-6">
                Our liability is limited to the lesser of: (a) the declared value of the shipment, or (b) $100 per package unless additional insurance is purchased. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Indirect, consequential, or punitive damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Damage due to inadequate packaging</li>
                <li>Acts of God, war, terrorism, or government action</li>
                <li>Delays in delivery</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Insurance Options</h3>
              <p className="text-slate-700 mb-6">
                Additional insurance coverage is available at time of booking. Insurance premiums are non-refundable.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">7. Claims and Disputes</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Filing Claims</h3>
              <p className="text-slate-700 mb-4">Claims for loss or damage must:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Be filed within 30 days of delivery (or expected delivery date)</li>
                <li>Include proof of value and extent of damage</li>
                <li>Preserve all packaging materials for inspection</li>
                <li>Provide tracking number and shipping documents</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Dispute Resolution</h3>
              <p className="text-slate-700 mb-6">
                Disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules. You waive the right to participate in class actions.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">8. Customs and Import/Export</h2>
              <p className="text-slate-700 mb-4">For international shipments:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Sender is responsible for accurate customs declarations</li>
                <li>Receiver is responsible for all duties, taxes, and fees</li>
                <li>Compliance with export control laws is required</li>
                <li>We may provide customs brokerage services as an additional service</li>
                <li>Shipments may be inspected by customs authorities</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">9. Cancellation and Refunds</h2>
              <p className="text-slate-700 mb-4">
                Cancellation policy:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Cancellations before pickup: Full refund minus processing fee</li>
                <li>Cancellations after pickup: No refund</li>
                <li>Refund processing time: 5-10 business days</li>
                <li>Service changes may incur additional fees</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">10. Intellectual Property</h2>
              <p className="text-slate-700 mb-6">
                All content, trademarks, logos, and intellectual property on our website and in our services are owned by JDsecurity Shipping Company or licensed to us. Unauthorized use is prohibited.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">11. Privacy</h2>
              <p className="text-slate-700 mb-6">
                Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">12. Modifications to Terms</h2>
              <p className="text-slate-700 mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use constitutes acceptance of modified Terms.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">13. Termination</h2>
              <p className="text-slate-700 mb-6">
                We may suspend or terminate your account for violations of these Terms, non-payment, or fraudulent activity. Upon termination, you remain liable for all outstanding obligations.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">14. Governing Law</h2>
              <p className="text-slate-700 mb-6">
                These Terms are governed by the laws of the State of New York, USA, without regard to conflict of law principles. Exclusive jurisdiction is in New York courts.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">15. Contact Information</h2>
              <p className="text-slate-700 mb-4">
                For questions about these Terms, contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-2"><strong>JDsecurity Shipping Company</strong></p>
                <p className="text-slate-700 mb-2">Legal Department</p>
                <p className="text-slate-700 mb-2">Email: legal@jdsecurity.net</p>
                <p className="text-slate-700 mb-2">Phone: (415) 555-0161</p>
                <p className="text-slate-700">Address: 66 Brooklyn Golden Street, 600 New York, USA</p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;