import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Ship, Truck, Globe } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Air Freight Solutions',
      description: 'We offer a highly flexible airport-to-airport or a door to door service on domestic as well as international routes that match your needs and schedules. Our air freight solutions are designed with security as the paramount concern, ensuring your cargo reaches its destination safely and on time.',
      icon: Plane,
      href: '/services/shipping',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Customs Clearance Excellence',
      description: 'We can offer you full-fledged customs clearance at more than 60+ locations across India at important port locations, CFS and warehouses. JDsecurity\'s customs team ensures smooth, compliant, and secure processing of all your international shipments.',
      icon: Globe,
      href: '/services',
      gradient: 'from-teal-500 to-blue-600',
    },
    {
      title: 'Project Cargo Specialists',
      description: 'Project Cargo is a complex task and we at JDSECURITY SHIPPING COMPANY are aware of the challenges that come with it. Our specialized team handles oversized, heavy-lift, and high-value project cargo with precision and security protocols tailored to your specific requirements.',
      icon: Ship,
      href: '/services/logistics',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Land Transport Network',
      description: 'Transmax is the world\'s driving worldwide coordinations supplier - we uphold industry and exchange the worldwide trade of merchandise through land transport. JDsecurity leverages this network to provide secure, reliable ground transportation solutions.',
      icon: Truck,
      href: '/services/shipping',
      gradient: 'from-orange-500 to-red-600',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  to={service.href}
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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