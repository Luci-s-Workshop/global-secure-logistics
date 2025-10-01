import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/customer-care-office.jpg" 
            alt="Customer Care Office" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm mb-6 animate-fade-in">
              <span className="text-slate-300">Home</span>
              <span className="text-slate-400">→</span>
              <span className="text-primary">Contact</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-hero-slide-up">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    GET A QUOTE
                  </h2>
                  <h3 className="text-4xl font-bold text-slate-900 mb-8">
                    Get in Touch And We'll<br />
                    Help Your Business
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Call Us 24/7 */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">
                          Call Us 24/7
                        </h4>
                        <p className="text-slate-600">(415) 555-0161</p>
                      </div>
                    </div>
                  </div>

                  {/* Make A Quote */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">
                          Make A Quote
                        </h4>
                        <p className="text-slate-600">info@jdsecurity.net</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Station */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">
                          Service Station
                        </h4>
                        <p className="text-slate-600">
                          66 Brooklyn Golden Street<br />
                          600 New York, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    CONTACT FOR SERVICES
                  </h3>
                  <h4 className="text-3xl font-bold text-slate-900">
                    Feel Free to Write Our<br />
                    Logistics Services Experts
                  </h4>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-slate-50 border-slate-200 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                        Email address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-slate-50 border-slate-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
                        Phone number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-slate-700 mb-2 block">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                      Write message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="bg-slate-50 border-slate-200 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-14 font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send a message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-3xl font-bold mb-2">
                Looking for the Best Transport Services?
              </h3>
              <p className="text-slate-300">
                As an app web crawler expert, We will help to organize.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold">1-888-452-1505</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;