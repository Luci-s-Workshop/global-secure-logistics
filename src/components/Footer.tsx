import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Track Shipment', href: '/track' },
    { name: 'Cost Calculator', href: '/cost-calculator' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Careers', href: '/careers' }
  ];

  const services = [
    { name: 'Air Freight', href: '/services/shipping' },
    { name: 'Ocean Freight', href: '/services/shipping' },
    { name: 'Road Transport', href: '/services/shipping' },
    { name: 'Courier Delivery', href: '/services/courier-delivery' },
    { name: 'B2B Exchange', href: '/services/b2b-exchange' },
    { name: 'Logistics Solutions', href: '/services/logistics' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping Terms', href: '/shipping-terms' },
    { name: 'Insurance Policy', href: '/insurance' }
  ];

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our Mailing List
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get updates on great offers, industry insights, and the latest shipping solutions
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent backdrop-blur-sm"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="btn-hero px-8 py-3 font-semibold whitespace-nowrap hover:scale-105 transition-transform duration-300"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-accent rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">JDsecurity</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner in secure global logistics solutions. Delivering excellence across air, sea, and land transportation since 1984.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+1 (800) JD-SECURE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">info@jdsecurityshipping.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Global Network Headquarters</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal & Connect</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 JDsecurity Shipping Company. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Global Logistics Network</span>
              </span>
              <span>•</span>
              <span>ISO Certified</span>
              <span>•</span>
              <span>Secure Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;