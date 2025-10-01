import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, TrendingUp, Globe, Users, CheckCircle2, ArrowRight, Truck, Package } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const B2BExchange = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    shipmentVolume: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your B2B inquiry has been submitted! Our team will contact you within 24 hours.");
    setFormData({ companyName: "", contactName: "", email: "", phone: "", industry: "", shipmentVolume: "", requirements: "" });
  };

  const benefits = [
    { icon: TrendingUp, title: "Volume Discounts", desc: "Save up to 40% on bulk shipments" },
    { icon: Globe, title: "Global Network", desc: "Access to 190+ countries worldwide" },
    { icon: Users, title: "Dedicated Support", desc: "Personal account manager 24/7" },
    { icon: Truck, title: "Priority Handling", desc: "Fast-track processing for your cargo" },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      volume: "Up to 100",
      price: "Custom",
      features: [
        "Dedicated account manager",
        "Standard shipping rates",
        "Monthly billing",
        "Basic analytics dashboard",
        "Email support",
      ],
    },
    {
      name: "Growth",
      volume: "100-500",
      price: "Custom",
      features: [
        "Priority account manager",
        "15% volume discount",
        "Weekly billing options",
        "Advanced analytics & reporting",
        "Phone & email support",
        "API integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      volume: "500+",
      price: "Custom",
      features: [
        "Executive account team",
        "Up to 40% volume discount",
        "Flexible billing terms",
        "Real-time analytics suite",
        "24/7 priority support",
        "Full API & EDI integration",
        "Custom solutions",
      ],
    },
  ];

  const industries = [
    { name: "E-commerce", icon: Package, shipments: "50K+ monthly" },
    { name: "Manufacturing", icon: Building2, shipments: "30K+ monthly" },
    { name: "Retail", icon: Globe, shipments: "40K+ monthly" },
    { name: "Wholesale", icon: Truck, shipments: "25K+ monthly" },
  ];

  const relatedServices = [
    { name: "Courier Delivery", href: "/services/courier-delivery", desc: "Fast parcel delivery services" },
    { name: "Logistics Solutions", href: "/services/logistics-solutions", desc: "End-to-end supply chain" },
    { name: "Warehousing", href: "/services", desc: "Storage and distribution" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Geometric Design */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="font-semibold flex items-center gap-2 justify-center">
                <Building2 className="w-4 h-4" />
                Business-to-Business Solutions
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Scale Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                B2B Exchange
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Streamline your business logistics with our comprehensive B2B exchange platform. 
              Connect, ship, and grow with volume discounts and dedicated support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Start Your Partnership
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-slate-600">Business Partners</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">190+</div>
              <p className="text-slate-600">Countries Served</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <p className="text-slate-600">Average Savings</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-slate-600">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our B2B Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-6 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Trusted by leading businesses across sectors</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.shipments}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Grid Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our B2B Solutions in Action</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2">
              <img src="/placeholder.svg" alt="Warehouse operations" className="rounded-xl shadow-lg w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2">
              <img src="/placeholder.svg" alt="Business meeting" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
            <div>
              <img src="/placeholder.svg" alt="Shipping containers" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
            <div>
              <img src="/placeholder.svg" alt="Logistics dashboard" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing for Every Scale</h2>
            <p className="text-xl text-slate-600">Volume-based pricing that grows with your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, idx) => (
              <Card key={idx} className={`relative ${tier.popular ? 'border-primary border-2 shadow-2xl transform scale-105' : 'border-slate-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-slate-600 mb-4">{tier.volume} shipments/month</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <p className="text-sm text-slate-500 mt-1">Contact for pricing</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"} size="lg">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Side by Side */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Business Needs</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our B2B specialists are ready to create a customized solution for your business. 
                  Schedule a consultation to explore how we can optimize your logistics.
                </p>
                
                <Card className="bg-gradient-to-br from-primary/5 to-purple-50 border-0">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-6">What to Expect:</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Initial Consultation</h4>
                          <p className="text-slate-600">15-minute discovery call within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Custom Proposal</h4>
                          <p className="text-slate-600">Tailored solution with pricing within 48 hours</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Onboarding</h4>
                          <p className="text-slate-600">Seamless integration within 1 week</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Contact Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                      <SelectTrigger className="bg-white border-slate-200 z-50">
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200 z-50">
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={formData.shipmentVolume} onValueChange={(value) => setFormData({ ...formData, shipmentVolume: value })}>
                      <SelectTrigger className="bg-white border-slate-200 z-50">
                        <SelectValue placeholder="Monthly Shipment Volume" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200 z-50">
                        <SelectItem value="0-100">0-100 shipments</SelectItem>
                        <SelectItem value="100-500">100-500 shipments</SelectItem>
                        <SelectItem value="500-1000">500-1,000 shipments</SelectItem>
                        <SelectItem value="1000+">1,000+ shipments</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Tell us about your requirements"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      rows={4}
                      required
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complementary Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedServices.map((service, idx) => (
              <Link key={idx} to={service.href}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-slate-600 mb-4">{service.desc}</p>
                    <Button variant="ghost" className="group">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B2BExchange;
