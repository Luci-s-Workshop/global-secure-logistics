import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMapBackground from '@/components/WorldMapBackground';

const ShippingTerms = () => {
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
                Shipping Terms & Conditions
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
              
              <h2 className="text-3xl font-bold mb-6 text-slate-900">1. General Shipping Terms</h2>
              <p className="text-slate-700 mb-6">
                These Shipping Terms and Conditions apply to all shipments handled by JDsecurity Shipping Company. By tendering a shipment to us, you agree to these terms.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">2. Service Levels and Transit Times</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Express Services</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Same-Day Delivery:</strong> Pickup and delivery within 4-6 hours (local only)</li>
                <li><strong>Next-Day Air:</strong> Delivery by end of next business day</li>
                <li><strong>2-Day Express:</strong> Delivery within 2 business days</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Standard Services</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Ground Shipping:</strong> 3-7 business days depending on distance</li>
                <li><strong>Economy Shipping:</strong> 5-10 business days</li>
                <li><strong>International Standard:</strong> 7-21 business days depending on destination</li>
              </ul>

              <p className="text-slate-700 mb-6 italic">
                *Transit times are estimates and not guaranteed. Business days exclude weekends and holidays.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">3. Packaging Requirements</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">General Requirements</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Use new, sturdy corrugated boxes appropriate for item weight</li>
                <li>Wrap items individually with bubble wrap or packing paper</li>
                <li>Fill empty spaces with packing material to prevent shifting</li>
                <li>Use strong packing tape (minimum 2 inches wide) to seal all openings</li>
                <li>Remove or cover old labels and markings</li>
                <li>Place address labels on top of package only (not on seams)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Special Items</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Fragile Items:</strong> Double-box with 3 inches of cushioning between boxes</li>
                <li><strong>Liquids:</strong> Use leak-proof containers in sealed plastic bags</li>
                <li><strong>Electronics:</strong> Use anti-static packaging and original boxes when possible</li>
                <li><strong>Documents:</strong> Use rigid envelopes or document tubes</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">4. Weight and Dimension Limits</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Domestic Shipments</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Maximum weight:</strong> 150 lbs per package (standard service)</li>
                <li><strong>Maximum length:</strong> 108 inches</li>
                <li><strong>Maximum length + girth:</strong> 165 inches [(2×width) + (2×height) + length]</li>
                <li><strong>Oversized surcharges:</strong> Apply to packages over 96 inches or 70 lbs</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">International Shipments</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Maximum weight:</strong> 70 lbs per package (varies by destination)</li>
                <li><strong>Maximum dimensions:</strong> Varies by destination and carrier</li>
                <li>Contact customer service for oversized international shipments</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">5. Prohibited and Restricted Items</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Absolutely Prohibited</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Explosives, fireworks, and ammunition</li>
                <li>Compressed gases (oxygen, propane, etc.)</li>
                <li>Flammable liquids and solids</li>
                <li>Infectious substances and biological materials</li>
                <li>Radioactive materials</li>
                <li>Illegal drugs and narcotics</li>
                <li>Human remains</li>
                <li>Counterfeit goods</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Restricted (Require Special Handling)</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Lithium batteries (with proper documentation)</li>
                <li>Dry ice (with advance notice)</li>
                <li>Alcoholic beverages (age verification required)</li>
                <li>Tobacco products (license verification required)</li>
                <li>Precious metals and jewelry (insurance required)</li>
                <li>Pharmaceuticals (proper documentation required)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">6. Customs and International Shipping</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Documentation Requirements</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Commercial invoice (3 copies minimum)</li>
                <li>Accurate description of goods and HS codes</li>
                <li>Declared value for customs</li>
                <li>Certificate of origin (if required)</li>
                <li>Additional permits or licenses as required</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Duties and Taxes</h3>
              <p className="text-slate-700 mb-6">
                Unless otherwise specified, all duties, taxes, and customs fees are the responsibility of the receiver (Delivery Duty Unpaid - DDU). Shipments may be delayed or returned if duties are not paid.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">7. Delivery Procedures</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Signature Requirements</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Standard:</strong> Driver release allowed at residential addresses</li>
                <li><strong>Signature Required:</strong> Adult signature required</li>
                <li><strong>Direct Signature:</strong> Recipient signature required (no third party)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Failed Delivery Attempts</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Three delivery attempts will be made</li>
                <li>Notice left after each attempt</li>
                <li>Packages held for 5 business days after final attempt</li>
                <li>Unclaimed packages returned to sender (fees apply)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">8. Tracking and Notifications</h2>
              <p className="text-slate-700 mb-4">Available tracking features:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Real-time GPS tracking (premium services)</li>
                <li>Milestone updates via email and SMS</li>
                <li>Delivery confirmation with signature image</li>
                <li>Estimated delivery window</li>
                <li>Exception notifications</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">9. Claims Process</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Filing a Claim</h3>
              <p className="text-slate-700 mb-4">To file a claim for loss or damage:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Notify us within 24 hours of delivery</li>
                <li>Preserve all packaging materials</li>
                <li>Provide photos of damage</li>
                <li>Submit claim form within 30 days</li>
                <li>Include proof of value (receipt, invoice, etc.)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Claim Processing</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Claims reviewed within 5-10 business days</li>
                <li>Additional documentation may be requested</li>
                <li>Approved claims paid within 30 days</li>
                <li>Inspection may be required for high-value claims</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">10. Service Guarantees</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Money-Back Guarantee</h3>
              <p className="text-slate-700 mb-6">
                We offer a money-back guarantee on select express services. If delivery is late, shipping charges will be refunded upon request. Exclusions apply:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Weather or natural disasters</li>
                <li>Incorrect shipping information</li>
                <li>Customs delays</li>
                <li>Consignee unavailable</li>
                <li>Strikes or labor disputes</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">11. Additional Fees</h2>
              <p className="text-slate-700 mb-4">Additional charges may apply for:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Address correction ($15)</li>
                <li>Residential delivery ($5)</li>
                <li>Saturday delivery ($20)</li>
                <li>Oversized package ($50-$150)</li>
                <li>Declared value insurance (1% of declared value, $3 minimum)</li>
                <li>Returned packages (original shipping cost + return fee)</li>
                <li>Storage after free period ($5/day)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">12. Force Majeure</h2>
              <p className="text-slate-700 mb-6">
                We are not liable for delays or failures caused by circumstances beyond our control, including but not limited to: acts of God, war, terrorism, government actions, labor disputes, severe weather, or natural disasters.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">13. Contact for Shipping Issues</h2>
              <p className="text-slate-700 mb-4">
                For shipping-related questions or issues:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-2"><strong>JDsecurity Shipping Company</strong></p>
                <p className="text-slate-700 mb-2">Customer Service</p>
                <p className="text-slate-700 mb-2">Email: shipping@jdsecurity.net</p>
                <p className="text-slate-700 mb-2">Phone: (415) 555-0161</p>
                <p className="text-slate-700 mb-2">Hours: 24/7 Support Available</p>
                <p className="text-slate-700">Live Chat: Available on website</p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ShippingTerms;