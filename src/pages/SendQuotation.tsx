import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SendQuotation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quotationData = location.state?.quotationData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!quotationData) {
      toast.error('No quotation data found. Please calculate your shipping cost first.');
      navigate('/cost-calculator');
    }
  }, [quotationData, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Quotation sent successfully! We\'ll get back to you within 24 hours.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  if (!quotationData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-4 text-slate-900">Send Quotation Request</h1>
            <p className="text-xl text-slate-600">
              Complete your details below and we'll send you a detailed quotation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            
            {/* Quotation Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-2">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Quotation Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Shipment Type</p>
                    <p className="font-semibold text-lg">{quotationData.serviceType || 'Standard'}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-slate-600 mb-1">Dimensions</p>
                    <p className="font-semibold">
                      {quotationData.height} × {quotationData.width} × {quotationData.depth} cm
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-slate-600 mb-1">Weight</p>
                    <p className="font-semibold">{quotationData.weight} kg</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-slate-600 mb-1">Distance</p>
                    <p className="font-semibold">{quotationData.distance} km</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-slate-600 mb-1">Insurance</p>
                    <p className="font-semibold">{quotationData.addInsurance ? 'Yes' : 'No'}</p>
                  </div>
                  
                  <div className="border-t pt-4 bg-primary/10 -mx-6 -mb-6 px-6 py-4 mt-6">
                    <p className="text-sm text-slate-600 mb-1">Estimated Total</p>
                    <p className="text-3xl font-bold text-primary">${quotationData.total.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Contact Information</CardTitle>
                  <p className="text-slate-600 mt-2">
                    Please provide your details so we can send you the detailed quotation
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-base font-semibold mb-2 block">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="ABC Corporation"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold mb-2 block flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-base font-semibold mb-2 block flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(415) 555-0161"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                        Additional Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Any special requirements or questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-32"
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <strong>Note:</strong> By submitting this form, you agree to receive the quotation 
                        and related communications from JDsecurity Shipping Company.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Quotation...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Quotation Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Help Section */}
              <Card className="mt-6 bg-gradient-to-br from-slate-50 to-white border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Need Immediate Assistance?</h3>
                  <p className="text-slate-600 mb-4">
                    Our customer service team is available 24/7 to help with your shipping needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: (415) 555-0161
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SendQuotation;
