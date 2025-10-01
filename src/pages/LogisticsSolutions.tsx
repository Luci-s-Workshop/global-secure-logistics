import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network, Warehouse, BarChart3, Globe2, CheckCircle2, ArrowRight, PackageCheck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const LogisticsSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received! Our logistics team will contact you within 24 hours.");
    setFormData({ name: "", company: "", email: "", phone: "", serviceType: "", details: "" });
  };

  const solutions = [
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      desc: "State-of-the-art facilities across 50+ locations worldwide",
      features: ["Climate-controlled storage", "Inventory management", "Order fulfillment", "Cross-docking services"],
    },
    {
      icon: Network,
      title: "Supply Chain Optimization",
      desc: "AI-powered logistics planning for maximum efficiency",
      features: ["Route optimization", "Demand forecasting", "Cost analysis", "Real-time tracking"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Data-driven insights for better decision making",
      features: ["Performance dashboards", "Custom reports", "Predictive analytics", "KPI monitoring"],
    },
    {
      icon: Globe2,
      title: "Global Trade Management",
      desc: "Navigate international shipping with ease",
      features: ["Customs brokerage", "Compliance management", "Documentation", "Duty optimization"],
    },
  ];

  const pricingPackages = [
    {
      name: "Essential",
      price: "$2,500",
      period: "/month",
      features: [
        "Basic warehousing (up to 5,000 sq ft)",
        "Standard inventory management",
        "Monthly reporting",
        "Email support",
        "1 distribution center",
      ],
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      features: [
        "Advanced warehousing (up to 15,000 sq ft)",
        "Automated inventory system",
        "Weekly reporting & analytics",
        "Priority phone & email support",
        "3 distribution centers",
        "Route optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited warehousing space",
        "AI-powered supply chain",
        "Real-time analytics & dashboards",
        "24/7 dedicated support team",
        "Global distribution network",
        "Full integration & API access",
        "Custom solutions",
      ],
    },
  ];

  const caseStudies = [
    { company: "TechCorp", savings: "35%", improvement: "50% faster delivery", industry: "Electronics" },
    { company: "FashionHub", savings: "42%", improvement: "60% inventory reduction", industry: "Retail" },
    { company: "AutoParts Inc", savings: "28%", improvement: "40% cost reduction", industry: "Automotive" },
  ];

  const relatedServices = [
    { name: "Courier Delivery", href: "/services/courier-delivery", desc: "Express parcel services" },
    { name: "B2B Exchange", href: "/services/b2b-exchange", desc: "Business shipping platform" },
    { name: "Freight Services", href: "/services", desc: "Air, sea, and land freight" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Wave Design */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-primary" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full text-white fill-current">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="font-semibold flex items-center gap-2 justify-center">
                <Network className="w-4 h-4" />
                End-to-End Logistics
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Complete Logistics
              <span className="block">Solutions for Modern Business</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              From warehousing to last-mile delivery, we provide comprehensive logistics solutions 
              that streamline your supply chain and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Logistics Solutions</h2>
          <p className="text-center text-slate-600 mb-12 text-lg max-w-2xl mx-auto">
            Comprehensive services designed to optimize every aspect of your supply chain
          </p>
          
          <Tabs defaultValue="solution-0" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto gap-4 bg-transparent mb-8">
              {solutions.map((solution, idx) => (
                <TabsTrigger
                  key={idx}
                  value={`solution-${idx}`}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white h-auto py-4 px-6 rounded-xl"
                >
                  <div className="flex flex-col items-center gap-2">
                    <solution.icon className="w-6 h-6" />
                    <span className="text-sm font-semibold">{solution.title.split(' ')[0]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {solutions.map((solution, idx) => (
              <TabsContent key={idx} value={`solution-${idx}`}>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                          <solution.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                        <p className="text-lg text-slate-600 mb-6">{solution.desc}</p>
                        <ul className="space-y-3">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="mt-6" size="lg">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <img src="/placeholder.svg" alt={solution.title} className="rounded-xl shadow-xl w-full h-96 object-cover" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Real results from real clients</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{study.savings}</div>
                  <p className="text-slate-600 mb-4">Cost Savings</p>
                  <div className="text-2xl font-bold mb-2">{study.improvement}</div>
                  <p className="text-slate-600 mb-4">Efficiency Gain</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{study.company}</p>
                    <p className="text-sm text-slate-500">{study.industry}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Bento Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Operations</h2>
          <div className="grid md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <div className="md:col-span-4 md:row-span-2">
              <img src="/placeholder.svg" alt="Main warehouse" className="rounded-xl shadow-lg w-full h-full object-cover" />
            </div>
            <div className="md:col-span-2">
              <img src="/placeholder.svg" alt="Sorting facility" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            </div>
            <div className="md:col-span-2">
              <img src="/placeholder.svg" alt="Distribution center" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            </div>
            <div className="md:col-span-3">
              <img src="/placeholder.svg" alt="Control room" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
            <div className="md:col-span-3">
              <img src="/placeholder.svg" alt="Fleet" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flexible Packages</h2>
            <p className="text-xl text-slate-600">Choose the solution that fits your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, idx) => (
              <Card key={idx} className={`relative ${pkg.popular ? 'border-primary border-2 shadow-2xl scale-105' : 'border-slate-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-slate-600">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Floating Card Design */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
                  <p className="text-lg text-slate-600">
                    Let's discuss how our logistics solutions can transform your business
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <Input
                    placeholder="Service Type (e.g., Warehousing, Supply Chain)"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Textarea
                    placeholder="Tell us about your logistics needs"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedServices.map((service, idx) => (
              <Link key={idx} to={service.href}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-slate-600 mb-4">{service.desc}</p>
                    <Button variant="ghost" className="group">
                      View Service
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

export default LogisticsSolutions;
