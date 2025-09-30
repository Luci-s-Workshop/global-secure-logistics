import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Phone, Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CostCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    depth: '',
    weight: '',
    distance: [139],
    serviceType: '',
    addInsurance: false
  });
  const [total, setTotal] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: string | boolean | number[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const height = parseFloat(formData.height) || 0;
      const width = parseFloat(formData.width) || 0;
      const depth = parseFloat(formData.depth) || 0;
      const weight = parseFloat(formData.weight) || 0;
      const distance = formData.distance[0];
      
      // Calculate volume
      const volume = (height * width * depth) / 1000000; // cubic meters
      
      // Base rate calculation
      let baseRate = 0;
      switch (formData.serviceType) {
        case 'Same Day':
          baseRate = 15;
          break;
        case 'Next Day':
          baseRate = 10;
          break;
        case 'Standard':
          baseRate = 5;
          break;
        default:
          baseRate = 8;
      }
      
      // Calculate based on weight and volume
      const dimensionalWeight = volume * 250; // 250kg per cubic meter
      const chargeableWeight = Math.max(weight, dimensionalWeight);
      
      // Distance multiplier
      const distanceMultiplier = distance / 100;
      
      let calculatedTotal = baseRate * chargeableWeight * distanceMultiplier;
      
      // Add insurance if selected
      if (formData.addInsurance) {
        calculatedTotal += calculatedTotal * 0.05; // 5% insurance
      }
      
      setTotal(Math.max(calculatedTotal, 54.95)); // Minimum charge
      setIsCalculating(false);
      
      toast({
        title: "Calculation Complete!",
        description: "Your shipping cost has been calculated based on the provided details.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-sm mb-6 animate-fade-in">
              <span className="text-slate-300">Home</span>
              <span className="text-slate-400">→</span>
              <span className="text-primary">Cost calculator</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-hero-slide-up">
              Cost calculator
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                NOT SURE HOW MUCH WOULD IT COST YOU?
              </p>
              <h2 className="text-5xl font-bold text-slate-900">
                Use our calculator to find out!
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Left Side - Calculator Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    Shipping Cost Calculator
                  </h3>

                  <div className="space-y-6">
                    {/* Dimensions */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="height" className="text-sm font-medium text-slate-700 mb-2 block">
                          Height (cm):
                        </Label>
                        <Input
                          id="height"
                          type="number"
                          placeholder="45"
                          value={formData.height}
                          onChange={(e) => handleInputChange('height', e.target.value)}
                          className="bg-slate-50 border-slate-200 focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="width" className="text-sm font-medium text-slate-700 mb-2 block">
                          Width (cm):
                        </Label>
                        <Input
                          id="width"
                          type="number"
                          placeholder="45"
                          value={formData.width}
                          onChange={(e) => handleInputChange('width', e.target.value)}
                          className="bg-slate-50 border-slate-200 focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="depth" className="text-sm font-medium text-slate-700 mb-2 block">
                          Depth (cm):
                        </Label>
                        <Input
                          id="depth"
                          type="number"
                          placeholder="34"
                          value={formData.depth}
                          onChange={(e) => handleInputChange('depth', e.target.value)}
                          className="bg-slate-50 border-slate-200 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Weight */}
                    <div>
                      <Label htmlFor="weight" className="text-sm font-medium text-slate-700 mb-2 block">
                        Weight (kg):
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="24"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-primary"
                      />
                    </div>

                    {/* Distance Slider */}
                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-4 block">
                        Distance (km):
                      </Label>
                      <div className="relative">
                        <Slider
                          value={formData.distance}
                          onValueChange={(value) => handleInputChange('distance', value)}
                          max={500}
                          min={10}
                          step={5}
                          className="mb-4"
                        />
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {formData.distance[0]}
                        </div>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-2 block">
                        Type of Service:
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:border-primary">
                          <SelectValue placeholder="Same Day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Same Day">Same Day</SelectItem>
                          <SelectItem value="Next Day">Next Day</SelectItem>
                          <SelectItem value="Standard">Standard (3-5 days)</SelectItem>
                          <SelectItem value="Economy">Economy (7-10 days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Insurance */}
                    <div className="flex items-center justify-between">
                      <Label htmlFor="insurance" className="text-sm font-medium text-slate-700">
                        Add Insurance:
                      </Label>
                      <Switch
                        id="insurance"
                        checked={formData.addInsurance}
                        onCheckedChange={(checked) => handleInputChange('addInsurance', checked)}
                      />
                    </div>

                    {/* Calculate Button */}
                    <Button
                      onClick={calculateTotal}
                      disabled={isCalculating}
                      className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-semibold"
                    >
                      {isCalculating ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Calculating...
                        </div>
                      ) : (
                        <>
                          <Calculator className="mr-2 w-5 h-5" />
                          Calculate Cost
                        </>
                      )}
                    </Button>

                    {/* Total Display */}
                    {total > 0 && (
                      <div className="space-y-4 mt-8">
                        <div className="bg-primary text-white rounded-xl p-6 text-center">
                          <div className="text-2xl font-bold">
                            TOTAL: ${total.toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between bg-slate-100 rounded-xl p-4">
                          <span className="text-slate-600">Total</span>
                          <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Calculator Options */}
              <div className="space-y-6">
                {/* Calculator Image */}
                <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
                  <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calculator className="w-16 h-16" />
                  </div>
                  <p className="text-lg font-semibold">Professional Calculator</p>
                </div>

                {/* Calculators Menu */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Calculators</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer group">
                      <span className="text-slate-700 group-hover:text-primary transition-colors">Shipping</span>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer group">
                      <span className="text-slate-700 group-hover:text-primary transition-colors">Courier delivery</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer group">
                      <span className="text-slate-700 group-hover:text-primary transition-colors">B2b exchange</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer group">
                      <span className="text-slate-700 group-hover:text-primary transition-colors">Logistics</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white h-12">
                    Total: ${total.toFixed(2)}
                  </Button>
                  
                  <Button variant="outline" className="w-full border-2 border-slate-300 h-12">
                    NEXT
                  </Button>
                </div>
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

export default CostCalculator;