import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Truck, Shield, Globe, Search, Package } from 'lucide-react';
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
            className="flex items-center space-x-2 group"
          >
            <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              JDsecurity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`nav-link transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>
              Home
            </Link>
            <Link to="/about-us" className={`nav-link transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`nav-link flex items-center space-x-1 transition-colors duration-300 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
              }`}>
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md rounded-lg shadow-xl border border-border py-2 animate-fade-in">
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
                        className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/contact" className={`nav-link transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>
              Contact
            </Link>
            <Link to="/cost-calculator" className={`nav-link transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>
              Cost Calculator
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-hero px-6 py-2 font-semibold">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-slide-down">
            <nav className="py-4 space-y-2">
              <Link to="/" className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about-us" className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              
              {/* Mobile Services */}
              <div className="px-4 py-2">
                <span className="block text-sm font-semibold text-muted-foreground mb-2">Services</span>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 px-2 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
              
              <Link to="/contact" className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/cost-calculator" className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Cost Calculator
              </Link>
              
              {/* Mobile Action Buttons */}
              <div className="px-4 py-4 border-t border-border">
                <Button className="w-full btn-hero">Get Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;