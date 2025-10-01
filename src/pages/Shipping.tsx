import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMapBackground from '@/components/WorldMapBackground';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Package, Clock, Shield, Globe, CheckCircle, ArrowRight, Anchor, PackageCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Shipping = () => {
  const shippingModes = [
    {
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.',
      icon: Plane,
      features: [
        'Express delivery within 24-48 hours',
        'Real-time tracking and monitoring',
        'Temperature-controlled options',
        'Door-to-door service available'
      ],
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800'
    },
    {
      title: 'Ocean Freight',
      description: 'Cost-effective sea shipping for large volumes and heavy cargo.',
      icon: Ship,
      features: [
        'Full Container Load (FCL) services',
        'Less than Container Load (LCL) options',
        'Roll-on/Roll-off (RoRo) cargo',
        'Comprehensive cargo insurance'
      ],
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800'
    },
    {
      title: 'Ground Transportation',
      description: 'Flexible land freight solutions for domestic and cross-border deliveries.',
      icon: Truck,
      features: [
        'Full truckload (FTL) and partial loads',
        'Last-mile delivery services',
        'Refrigerated transport options',
        'Scheduled and express services'
      ],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800'
    }
  ];

  const pricingPlans = [
    {
      name: 'Standard Shipping',
      price: '$49',
      duration: '5-7 business days',
      features: [
        'Basic tracking',
        'Standard handling',
        'Email notifications',
        'Proof of delivery',
        'Up to 50kg weight limit'
      ]
    },
    {
      name: 'Express Shipping',
      price: '$99',
      duration: '2-3 business days',
      features: [
        'Priority handling',
        'Real-time GPS tracking',
        'SMS & email alerts',
        'Signature required',
        'Up to 100kg weight limit',
        'Insurance included'
      ],
      popular: true
    },
    {
      name: 'Premium Shipping',
      price: '$199',
      duration: '24-48 hours',
      features: [
        'White glove service',
        'Dedicated account manager',
        'Live tracking dashboard',
        'Multi-point notifications',
        'Unlimited weight',
        'Full insurance coverage',
        'Climate control available'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <WorldMapBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-primary/5 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in text-slate-900">
                Global Shipping Solutions
              </h1>
              <p className="text-xl text-slate-700 mb-8 animate-slide-up">
                Seamless worldwide shipping services across air, sea, and land. Your cargo, delivered with precision and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Link to="/cost-calculator">
                  <Button className="btn-hero px-8 py-6 text-lg">
                    Get Instant Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/track-shipment">
                  <Button variant="outline" className="px-8 py-6 text-lg border-2">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Modes Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Choose Your Shipping Mode
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                JDsecurity offers comprehensive shipping solutions tailored to your cargo type, timeline, and budget.
              </p>
            </div>

            <div className="space-y-12">
              {shippingModes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2">
                    <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                      <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <img 
                          src={mode.image} 
                          alt={mode.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <CardContent className="p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900">{mode.title}</h3>
                        </div>
                        <p className="text-lg text-slate-600 mb-6">{mode.description}</p>
                        <ul className="space-y-3">
                          {mode.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the shipping plan that best fits your needs. All prices are base rates and may vary based on destination.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                    plan.popular ? 'border-4 border-primary scale-105' : 'border-2'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-slate-600 ml-2">per shipment</span>
                    </div>
                    <p className="text-slate-600 mb-6 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {plan.duration}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/cost-calculator" className="block">
                      <Button className={`w-full ${plan.popular ? 'btn-hero' : ''}`} size="lg">
                        Select Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Ship with Us?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Get started with JDsecurity Shipping today and experience world-class logistics services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cost-calculator">
                  <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold">
                    Calculate Shipping Cost
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                    Contact Sales Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Shipping;
