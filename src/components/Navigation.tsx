import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Truck, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Shipping', href: '/services/shipping', icon: Globe },
    { name: 'Courier Delivery', href: '/services/courier-delivery', icon: Truck },
    { name: 'B2B Exchange', href: '/services/b2b-exchange', icon: Shield },
    { name: 'Logistics', href: '/services/logistics', icon: Truck },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">JDsecurity</h1>
              <p className="text-xs text-muted-foreground">Shipping Company</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-link flex items-center">
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl py-2 animate-fade-in">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-lg mx-2 transition-colors duration-200"
                  >
                    <div className="font-semibold">All Services</div>
                    <div className="text-muted-foreground text-xs">View complete service portfolio</div>
                  </Link>
                  <div className="border-t border-border my-2"></div>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center px-4 py-3 text-sm hover:bg-muted rounded-lg mx-2 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 mr-3 text-primary" />
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
            <Link to="/cost-calculator" className="nav-link">
              Cost Calculator
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-hero">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block px-8 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/contact-us"
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/cost-calculator"
                className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cost Calculator
              </Link>
              <div className="px-4 pt-4">
                <Button className="btn-hero w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;