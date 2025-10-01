import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Package, Clock, Shield, MapPin, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import courierDeliveryHero from "@/assets/courier-delivery-hero.jpg";
import packageHandling from "@/assets/package-handling.jpg";
import courierPickup from "@/assets/courier-pickup.jpg";
import sortingFacility from "@/assets/sorting-facility.jpg";
import deliveryVanFleet from "@/assets/delivery-van-fleet.jpg";
import packageScanning from "@/assets/package-scanning.jpg";
import driverDelivery from "@/assets/driver-delivery.jpg";
import customerReceiving from "@/assets/customer-receiving.jpg";

const CourierDelivery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    packageDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll contact you within 2 hours.");
    setFormData({ name: "", email: "", phone: "", pickupAddress: "", deliveryAddress: "", packageDetails: "" });
  };

  const features = [
    { icon: Clock, title: "Same-Day Delivery", desc: "Get your packages delivered within hours" },
    { icon: Shield, title: "Secure Handling", desc: "Insurance coverage up to $10,000" },
    { icon: MapPin, title: "Real-Time Tracking", desc: "Track every step of your delivery" },
    { icon: Zap, title: "Express Options", desc: "Priority delivery when time matters" },
  ];

  const pricingPlans = [
    {
      name: "Standard",
      price: "$15",
      time: "2-3 Days",
      features: ["Up to 10 lbs", "Standard tracking", "Basic insurance", "Email notifications"],
    },
    {
      name: "Express",
      price: "$35",
      time: "Next Day",
      features: ["Up to 20 lbs", "Priority tracking", "Enhanced insurance", "SMS + Email alerts"],
      popular: true,
    },
    {
      name: "Same-Day",
      price: "$65",
      time: "4-6 Hours",
      features: ["Up to 30 lbs", "Live tracking", "Premium insurance", "Real-time updates"],
    },
  ];

  const relatedServices = [
    { name: "B2B Exchange", href: "/services/b2b-exchange", desc: "Business-to-business shipping solutions" },
    { name: "Logistics Solutions", href: "/services/logistics-solutions", desc: "Complete supply chain management" },
    { name: "International Shipping", href: "/services", desc: "Global delivery services" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section - Diagonal Split Design */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-50 to-white" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 origin-top-right" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Courier Delivery Services
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fast, Reliable
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Courier Delivery
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Your trusted partner for time-sensitive deliveries. From same-day express to scheduled deliveries, 
                we ensure your packages reach their destination safely and on time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Get Instant Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">View Pricing</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <img src={courierDeliveryHero} alt="Courier delivery" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
              <img src={packageHandling} alt="Package handling" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Masonry Style */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Delivery Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img src={courierPickup} alt="Package pickup" className="rounded-xl shadow-lg w-full h-64 object-cover" />
              <img src={sortingFacility} alt="Sorting facility" className="rounded-xl shadow-lg w-full h-80 object-cover" />
            </div>
            <div className="space-y-6 md:pt-12">
              <img src={deliveryVanFleet} alt="Delivery van" className="rounded-xl shadow-lg w-full h-80 object-cover" />
              <img src={packageScanning} alt="Package scanning" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            </div>
            <div className="space-y-6">
              <img src={driverDelivery} alt="Driver delivery" className="rounded-xl shadow-lg w-full h-64 object-cover" />
              <img src={customerReceiving} alt="Customer receiving" className="rounded-xl shadow-lg w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables - Card Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Choose the delivery speed that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-slate-600 ml-2">per package</span>
                    <p className="text-sm text-slate-500 mt-1">Delivery time: {plan.time}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form - Split Layout */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get Your Custom Quote</h2>
              <p className="text-lg text-slate-600 mb-8">
                Need a specific delivery solution? Fill out the form and our team will get back to you 
                within 2 hours with a personalized quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Response Time</h4>
                    <p className="text-slate-600">We respond to all quotes within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">No Hidden Fees</h4>
                    <p className="text-slate-600">Transparent pricing with no surprises</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexible Solutions</h4>
                    <p className="text-slate-600">Customized to your specific needs</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address"
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
                  <Input
                    placeholder="Pickup Address"
                    value={formData.pickupAddress}
                    onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Delivery Address"
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Package Details (size, weight, special requirements)"
                    value={formData.packageDetails}
                    onChange={(e) => setFormData({ ...formData, packageDetails: e.target.value })}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedServices.map((service, idx) => (
              <Link key={idx} to={service.href}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-slate-600 mb-4">{service.desc}</p>
                    <Button variant="ghost" className="group">
                      Learn More
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

export default CourierDelivery;
