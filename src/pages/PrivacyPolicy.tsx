import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMapBackground from '@/components/WorldMapBackground';

const PrivacyPolicy = () => {
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
                Privacy Policy
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
              
              <h2 className="text-3xl font-bold mb-6 text-slate-900">1. Information We Collect</h2>
              <p className="text-slate-700 mb-6">
                JDsecurity Shipping Company ("we," "our," or "us") collects information to provide better services to our customers. We collect the following types of information:
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Shipment tracking details</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data and website interactions</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">2. How We Use Your Information</h2>
              <p className="text-slate-700 mb-4">We use the information we collect for:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Processing and delivering your shipments</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending service updates and tracking notifications</li>
                <li>Improving our services and website functionality</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">3. Information Sharing</h2>
              <p className="text-slate-700 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Service Providers:</strong> Third-party carriers, payment processors, and technology providers</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">4. Data Security</h2>
              <p className="text-slate-700 mb-6">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with encryption at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">5. Your Rights and Choices</h2>
              <p className="text-slate-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain processing</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">6. Cookies and Tracking</h2>
              <p className="text-slate-700 mb-6">
                We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Our cookies include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (optional)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">7. Data Retention</h2>
              <p className="text-slate-700 mb-6">
                We retain your information for as long as necessary to provide services and comply with legal obligations. Retention periods vary based on data type and legal requirements, typically:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Account information: Duration of relationship plus 7 years</li>
                <li>Transaction records: 7 years for tax and accounting purposes</li>
                <li>Marketing data: Until you opt-out or request deletion</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">8. Children's Privacy</h2>
              <p className="text-slate-700 mb-6">
                Our services are not directed to individuals under 18. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">9. International Transfers</h2>
              <p className="text-slate-700 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses and Privacy Shield frameworks where applicable.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">10. Changes to This Policy</h2>
              <p className="text-slate-700 mb-6">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or website notice. Continued use after changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">11. Contact Us</h2>
              <p className="text-slate-700 mb-4">
                For privacy-related questions or to exercise your rights, contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-2"><strong>JDsecurity Shipping Company</strong></p>
                <p className="text-slate-700 mb-2">Privacy Officer</p>
                <p className="text-slate-700 mb-2">Email: privacy@jdsecurity.net</p>
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

export default PrivacyPolicy;