import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Globe, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallax = scrolled * 0.5;
      heroRef.current.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Globe, value: '200+', label: 'Global Destinations' },
    { icon: Shield, value: '99.8%', label: 'Security Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '40+', label: 'Years Experience' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary">
      {/* Animated Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Welcome to{' '}
                <span className="text-gradient bg-gradient-to-r from-accent to-secondary-light bg-clip-text text-transparent">
                  JDsecurity
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-white/90 mb-4 font-medium animate-slide-up">
                Your Trusted Partner in Global Secure Logistics Solutions
              </p>
            </div>

            <div className="animate-slide-up-delayed max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
                JDsecurity Shipping Company is a global logistics leader, offering fast and secure freight solutions across air, sea, and land. We specialize in end-to-end cargo handling, customs clearance, and real-time shipment tracking with an enhanced focus on security at every step of your cargo's journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up-more-delayed">
              <Button className="btn-hero group text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="btn-outline-hero group text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-scale-in">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Extended Description */}
          <div className="mt-16 max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-white/70 leading-relaxed text-lg">
              JDsecurity Shipping Company stands at the forefront of secure global logistics, providing unparalleled fast and protected freight solutions that span air, sea, and land transportation networks. Our expertise encompasses comprehensive end-to-end cargo handling, streamlined customs clearance procedures, and state-of-the-art real-time shipment tracking systems that ensure complete visibility and security throughout your cargo's journey.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;