import React, { useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Globe, Clock, Award, Truck, Ship, Plane } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

import heroCargoShip from '@/assets/hero-cargo-ship.jpg';
import heroTruckTransport from '@/assets/hero-truck-transport.jpg';
import heroCargoPlane from '@/assets/hero-cargo-plane.jpg';

const HeroSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const stats = [
    { icon: Globe, value: '200+', label: 'Global Destinations' },
    { icon: Shield, value: '99.8%', label: 'Security Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '40+', label: 'Years Experience' },
  ];

  const slides = [
    {
      id: 1,
      image: heroCargoShip,
      icon: Ship,
      title: "Explore New Destinations",
      subtitle: "Global Ocean Freight Solutions",
      description: "Navigate the world's shipping lanes with our comprehensive sea freight services. From container shipping to project cargo, we connect your business to every port worldwide.",
      cta: "Explore Ocean Freight",
      ctaSecondary: "Port Locations"
    },
    {
      id: 2,
      image: heroTruckTransport,
      icon: Truck,
      title: "Fast, Reliable, Global Freight Solutions",
      subtitle: "Your Trusted Partner in Secure Logistics",
      description: "Experience unmatched speed and reliability with our integrated transport solutions. From last-mile delivery to cross-continental shipping, we deliver on time, every time.",
      cta: "Get Started Today",
      ctaSecondary: "Track Shipment"
    },
    {
      id: 3,
      image: heroCargoPlane,
      icon: Plane,
      title: "Secure Logistics & Technology",
      subtitle: "Advanced Air Freight Solutions",
      description: "Harness the power of cutting-edge technology and our secure air freight network. Real-time tracking, priority handling, and guaranteed delivery windows.",
      cta: "Book Air Freight",
      ctaSecondary: "View Technology"
    }
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel 
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-screen"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide) => {
            const Icon = slide.icon;
            return (
              <CarouselItem key={slide.id} className="relative h-screen">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-secondary/70" />
                  
                  {/* Animated Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div className="text-left">
                        <div className="animate-hero-fade-in">
                          <div className="flex items-center mb-6 animate-hero-slide-left">
                            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 mr-4 animate-hero-icon-float">
                              <Icon className="w-8 h-8 text-accent" />
                            </div>
                            <span className="text-accent font-semibold text-lg tracking-wider uppercase animate-hero-typewriter">
                              {slide.subtitle}
                            </span>
                          </div>
                          
                          <h1 
                            key={`h1-${slide.id}`}
                            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-hero-slide-left"
                          >
                            {slide.title.split(' ').map((word, index) => (
                              <span key={index} className={index >= 2 ? "text-gradient bg-gradient-to-r from-accent to-secondary-light bg-clip-text text-transparent" : ""}>
                                {word}{' '}
                              </span>
                            ))}
                          </h1>
                          
                          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl animate-hero-slide-up-delayed">
                            {slide.description}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mb-8 animate-hero-slide-up-more-delayed">
                          <Button className="btn-hero group text-lg px-8 h-16 flex items-center">
                            {slide.cta}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>

                      {/* Right Stats Grid */}
                      <div className="lg:justify-self-end">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-scale-in max-w-md">
                          {stats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                              <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer hover:shadow-2xl"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                <StatIcon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                <div className="text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                                  {stat.value}
                                </div>
                                <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                  {stat.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm" />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index + 1 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;