import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Ship, Truck, Globe } from 'lucide-react';
import airFreightImage from '@/assets/air-freight-service.jpg';
import customsImage from '@/assets/customs-clearance.jpg';
import warehouseImage from '@/assets/warehouse-logistics.jpg';
import roadFreightImage from '@/assets/road-freight.jpg';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Air Freight Solutions',
      description: 'Flexible airport-to-airport or door-to-door service with security as paramount concern.',
      icon: Plane,
      href: '/services/shipping',
      gradient: 'from-blue-500 to-purple-600',
      image: airFreightImage,
    },
    {
      title: 'Customs Clearance Excellence',
      description: 'Full-fledged customs clearance at 60+ locations with smooth, compliant processing.',
      icon: Globe,
      href: '/services',
      gradient: 'from-teal-500 to-blue-600',
      image: customsImage,
    },
    {
      title: 'Project Cargo Specialists',
      description: 'Specialized handling of oversized, heavy-lift, and high-value project cargo.',
      icon: Ship,
      href: '/services/logistics',
      gradient: 'from-green-500 to-teal-600',
      image: warehouseImage,
    },
    {
      title: 'Land Transport Network',
      description: 'Secure, reliable ground transportation solutions through extensive network.',
      icon: Truck,
      href: '/services/shipping',
      gradient: 'from-orange-500 to-red-600',
      image: roadFreightImage,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive logistics solutions designed to meet your every shipping need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 mb-4 overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Link
            to="/services"
            className="inline-flex items-center btn-hero group text-lg px-8 py-4"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;