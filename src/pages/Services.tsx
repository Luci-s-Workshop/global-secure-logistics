import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Ship, Truck, Globe, Shield, Package, Clock, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Shipping Services',
      href: '/services/shipping',
      description: 'Comprehensive shipping solutions across air, sea, and land. From single parcels to full container loads, JDsecurity provides secure, reliable shipping services worldwide.',
      icon: Ship,
      highlights: [
        'International Air Freight',
        'Ocean Freight (FCL/LCL)',
        'Ground Transportation',
        'Multimodal Solutions',
        'Express Shipping Options'
      ],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Courier Delivery',
      href: '/services/courier-delivery',
      description: 'Fast, secure courier services for documents and parcels. Same-day, next-day, and scheduled delivery options with real-time tracking.',
      icon: Package,
      highlights: [
        'Same-Day Delivery',
        'Next-Day Delivery',
        'International Courier',
        'Document Services',
        'E-commerce Fulfillment'
      ],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'B2B Exchange',
      href: '/services/b2b-exchange',
      description: 'Specialized business-to-business logistics solutions facilitating trade between enterprises with enhanced security and efficiency.',
      icon: Globe,
      highlights: [
        'Supply Chain Integration',
        'Vendor Management',
        'Trade Financing Support',
        'Digital Documentation',
        'B2B Marketplace Access'
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Logistics Solutions',
      href: '/services/logistics-solutions',
      description: 'End-to-end logistics management including warehousing, distribution, customs clearance, and value-added services.',
      icon: Truck,
      highlights: [
        'Warehouse Management',
        'Customs Clearance',
        'Project Cargo',
        'Supply Chain Consulting',
        '3PL/4PL Services'
      ],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const valueAddedServices = [
    {
      title: 'Customs Clearance & Documentation',
      description: 'We can offer you full-fledged customs clearance at more than 60+ locations across India at important port locations, CFS and warehouses. Our experienced customs brokers ensure smooth clearance with minimal delays.',
      icon: CheckCircle,
    },
    {
      title: 'Cargo Insurance',
      description: 'Protect your shipments with comprehensive cargo insurance options. JDsecurity offers flexible coverage plans that can be customized based on cargo value, route risk, and specific requirements.',
      icon: Shield,
    },
    {
      title: 'Packaging & Crating',
      description: 'Professional packaging services to ensure your cargo is protected throughout its journey. We use high-quality materials and industry-standard packaging techniques, including custom crating for fragile items.',
      icon: Package,
    },
    {
      title: 'Track & Trace Technology',
      description: 'Advanced tracking systems providing real-time visibility of your shipments. Access detailed tracking information through our web portal or mobile app, receive automated notifications at key milestones.',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-xl text-white/90 animate-slide-up drop-shadow-md">
              Comprehensive Logistics Solutions Tailored to Your Needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in">
              JDsecurity Shipping Company provides a comprehensive range of transport and logistics services to customers around the world. Our services are designed to meet the diverse needs of businesses across industries, from small enterprises to multinational corporations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up">
              With our combination of global reach, local expertise, and unwavering commitment to security, we deliver solutions that drive your business forward. Every business has unique logistics requirements, and at JDsecurity, we understand that one size doesn't fit all.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Service Categories
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Explore our comprehensive range of logistics solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Service Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Services:</h4>
                    <ul className="space-y-2">
                      {category.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={category.href}
                    className="inline-flex items-center btn-hero group w-full justify-center"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Value Added Services
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Additional services to enhance your logistics experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {valueAddedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-slide-up">
              Contact our logistics experts to discuss your specific requirements and get a customized solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl transition-all duration-300 group"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/cost-calculator"
                className="btn-outline-hero border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Calculate Shipping Cost
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;