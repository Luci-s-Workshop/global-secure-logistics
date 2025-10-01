import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMapBackground from '@/components/WorldMapBackground';

const InsurancePolicy = () => {
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
                Shipping Insurance Policy
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
              
              <h2 className="text-3xl font-bold mb-6 text-slate-900">1. Insurance Coverage Overview</h2>
              <p className="text-slate-700 mb-6">
                JDsecurity Shipping Company offers comprehensive insurance coverage to protect your shipments against loss, damage, or theft during transit. This policy outlines coverage options, exclusions, and claim procedures.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">2. Standard Liability Coverage</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Basic Protection</h3>
              <p className="text-slate-700 mb-4">
                All shipments automatically include basic liability coverage at no additional charge:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Domestic Shipments:</strong> $100 per package</li>
                <li><strong>International Shipments:</strong> $100 per package or $9.07 per pound, whichever is greater</li>
                <li><strong>Express Services:</strong> Up to $100 included</li>
              </ul>

              <p className="text-slate-700 mb-6 italic">
                Note: Basic liability is NOT insurance and has limited coverage. We strongly recommend purchasing additional insurance for valuable items.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">3. Additional Insurance Options</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Declared Value Insurance</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Coverage:</strong> Up to $50,000 per shipment</li>
                <li><strong>Cost:</strong> 1% of declared value ($3 minimum)</li>
                <li><strong>What's Covered:</strong> Loss, damage, theft, mysterious disappearance</li>
                <li><strong>Deductible:</strong> None</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Premium Coverage</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Coverage:</strong> Up to $100,000 per shipment</li>
                <li><strong>Cost:</strong> 2% of declared value</li>
                <li><strong>Additional Benefits:</strong> 
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Priority claim processing</li>
                    <li>Dedicated claims specialist</li>
                    <li>Enhanced packaging consultation</li>
                    <li>24/7 claim support</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">High-Value Coverage</h3>
              <p className="text-slate-700 mb-4">
                For shipments exceeding $100,000, please contact our insurance department for a custom quote. Requirements:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Pre-approval required</li>
                <li>Professional appraisal may be needed</li>
                <li>Special packaging requirements</li>
                <li>Signature required at pickup and delivery</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">4. What Is Covered</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Covered Perils</h3>
              <p className="text-slate-700 mb-4">Insurance protects against:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Physical loss or damage during transit</li>
                <li>Theft or pilferage</li>
                <li>Fire, flood, or water damage</li>
                <li>Vehicle accidents</li>
                <li>Dropping or mishandling</li>
                <li>Complete loss or mysterious disappearance</li>
                <li>Damage during loading/unloading</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Eligible Items</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Commercial goods and merchandise</li>
                <li>Personal belongings and household items</li>
                <li>Electronics and technology</li>
                <li>Artwork and collectibles (with appraisal)</li>
                <li>Jewelry and precious items (with documentation)</li>
                <li>Documents and important papers</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">5. What Is NOT Covered</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">General Exclusions</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Improper or inadequate packaging</li>
                <li>Inherent vice or nature of goods (e.g., perishables spoiling)</li>
                <li>Normal wear and tear</li>
                <li>Mechanical or electrical breakdown</li>
                <li>Manufacturer defects</li>
                <li>Losses due to delays (including consequential losses)</li>
                <li>Acts of war, terrorism, or civil unrest</li>
                <li>Nuclear hazards or radioactive contamination</li>
                <li>Cybersecurity breaches or data loss</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Specific Exclusions</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Cash, currency, or negotiable instruments</li>
                <li>Precious stones or metals (unless pre-approved)</li>
                <li>Livestock or plants</li>
                <li>Hazardous materials</li>
                <li>Illegal items or contraband</li>
                <li>Items shipped in violation of our terms</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">6. Packaging Requirements for Coverage</h2>
              
              <p className="text-slate-700 mb-4">
                To maintain insurance coverage, shipments must meet minimum packaging standards:
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Standard Requirements</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>New, sturdy corrugated boxes rated for item weight</li>
                <li>Minimum 2 inches of cushioning on all sides</li>
                <li>Fragile items must be double-boxed</li>
                <li>All empty spaces filled with packing material</li>
                <li>Strong packing tape on all seams</li>
                <li>Proper labeling and waterproof documentation</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">High-Value Items (&gt;$5,000)</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Professional packaging recommended or required</li>
                <li>Custom crating for fragile or oversized items</li>
                <li>Moisture barriers for electronics</li>
                <li>Security seals required</li>
                <li>Pre-shipment inspection available</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">7. Claims Procedure</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Filing a Claim</h3>
              <p className="text-slate-700 mb-4">Follow these steps to file an insurance claim:</p>
              
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Step 1: Immediate Notification (Within 24 Hours)</h4>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Contact our claims department immediately</li>
                  <li>Note visible damage on delivery receipt</li>
                  <li>Take photos of packaging and contents</li>
                  <li>Preserve all packing materials</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Step 2: Documentation (Within 7 Days)</h4>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Complete claim form</li>
                  <li>Provide original receipt or invoice</li>
                  <li>Submit detailed photos of damage</li>
                  <li>Include repair estimates (if applicable)</li>
                  <li>Provide tracking number and shipping documents</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Step 3: Review and Processing</h4>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Claims reviewed within 5 business days</li>
                  <li>Additional documentation may be requested</li>
                  <li>Inspection may be required for high-value claims</li>
                  <li>Status updates provided via email</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Step 4: Resolution</h4>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Approved claims paid within 30 days</li>
                  <li>Payment via check or ACH transfer</li>
                  <li>Denied claims receive written explanation</li>
                  <li>Appeal process available</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Claim Deadlines</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Visible damage:</strong> Must be noted on delivery receipt</li>
                <li><strong>Concealed damage:</strong> Report within 24 hours of delivery</li>
                <li><strong>Lost packages:</strong> File claim after 7 days for domestic, 21 days for international</li>
                <li><strong>Final deadline:</strong> All claims must be filed within 30 days of shipment date</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">8. Claim Settlement</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Valuation Methods</h3>
              <p className="text-slate-700 mb-4">Claims are settled based on:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Repair Cost:</strong> Actual cost to repair damaged items</li>
                <li><strong>Replacement Cost:</strong> Cost to replace with similar item</li>
                <li><strong>Depreciated Value:</strong> For used items, fair market value</li>
                <li><strong>Declared Value:</strong> Amount declared at time of shipping (maximum payment)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Payment Options</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Company check mailed to shipper</li>
                <li>ACH direct deposit</li>
                <li>Credit to shipping account</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">9. Special Considerations</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">International Shipments</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Coverage ends when customs accepts package</li>
                <li>Customs duties and taxes not covered</li>
                <li>Additional documentation required</li>
                <li>Claims subject to international regulations</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Third-Party Insurance</h3>
              <p className="text-slate-700 mb-6">
                You may purchase insurance from third-party providers. If you choose external insurance, you must notify us and decline our coverage. Claims must be filed directly with the third-party insurer.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">10. Premium Refunds</h2>
              <p className="text-slate-700 mb-4">Insurance premiums are:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Non-refundable once shipment is tendered</li>
                <li>Refundable if shipment is cancelled before pickup</li>
                <li>Not transferable to other shipments</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">11. Appeals Process</h2>
              <p className="text-slate-700 mb-4">
                If your claim is denied or you disagree with the settlement:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Submit appeal within 30 days of decision</li>
                <li>Provide additional evidence or documentation</li>
                <li>Appeals reviewed by senior claims examiner</li>
                <li>Final decision issued within 15 business days</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">12. Subrogation Rights</h2>
              <p className="text-slate-700 mb-6">
                Upon payment of a claim, JDsecurity assumes all rights to recover losses from third parties responsible for the loss or damage. You agree to cooperate with subrogation efforts.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-slate-900">13. Contact Claims Department</h2>
              <p className="text-slate-700 mb-4">
                For insurance questions or to file a claim:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-2"><strong>JDsecurity Shipping Company</strong></p>
                <p className="text-slate-700 mb-2">Claims Department</p>
                <p className="text-slate-700 mb-2">Email: claims@jdsecurity.net</p>
                <p className="text-slate-700 mb-2">Phone: (415) 555-0161 ext. 2</p>
                <p className="text-slate-700 mb-2">Fax: (415) 555-0162</p>
                <p className="text-slate-700 mb-2">Hours: Monday-Friday, 8 AM - 6 PM EST</p>
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

export default InsurancePolicy;