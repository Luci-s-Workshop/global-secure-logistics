import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, MapPin, Package, Shield, DollarSign } from 'lucide-react';

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    shipmentType: '',
    weight: '',
    dimensions: '',
    securityLevel: '',
  });
  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulate API call
    setTimeout(() => {
      const baseRate = {
        'Air Freight - Express': 25,
        'Air Freight - Standard': 15,
        'Sea Freight - FCL': 5,
        'Sea Freight - LCL': 8,
        'Road Transport - FTL': 3,
        'Road Transport - LTL': 5,
        'Courier Services': 12,
      }[formData.shipmentType] || 10;

      const securityMultiplier = {
        'Standard Security': 1,
        'Enhanced Security': 1.3,
        'Maximum Security (Armed)': 1.8,
      }[formData.securityLevel] || 1;

      const weight = parseFloat(formData.weight) || 1;
      const estimatedCost = baseRate * weight * securityMultiplier;

      setResult({
        estimatedCost: estimatedCost.toFixed(2),
        transitTime: formData.shipmentType?.includes('Express') ? '1-3 days' : 
                    formData.shipmentType?.includes('Air') ? '3-5 days' :
                    formData.shipmentType?.includes('Sea') ? '15-30 days' : '2-7 days',
        securityLevel: formData.securityLevel,
        breakdown: {
          baseRate: (baseRate * weight).toFixed(2),
          securityFee: ((baseRate * weight * securityMultiplier) - (baseRate * weight)).toFixed(2),
        }
      });
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Instant Freight Cost Calculator
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-slide-up">
            Get an instant estimate for your shipping needs with our advanced cost calculator
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-lg animate-slide-in-left">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Calculate Shipping Cost</h3>
            </div>

            <form onSubmit={calculateCost} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origin" className="text-sm font-medium mb-2 block text-slate-300">
                    Origin Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <Input
                      id="origin"
                      placeholder="Enter pickup city/country"
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      value={formData.origin}
                      onChange={(e) => handleInputChange('origin', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="destination" className="text-sm font-medium mb-2 block text-slate-300">
                    Destination Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <Input
                      id="destination"
                      placeholder="Enter delivery city/country"
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      value={formData.destination}
                      onChange={(e) => handleInputChange('destination', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Shipment Type</Label>
                <Select onValueChange={(value) => handleInputChange('shipmentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Air Freight - Express">Air Freight - Express</SelectItem>
                    <SelectItem value="Air Freight - Standard">Air Freight - Standard</SelectItem>
                    <SelectItem value="Sea Freight - FCL">Sea Freight - FCL</SelectItem>
                    <SelectItem value="Sea Freight - LCL">Sea Freight - LCL</SelectItem>
                    <SelectItem value="Road Transport - FTL">Road Transport - FTL</SelectItem>
                    <SelectItem value="Road Transport - LTL">Road Transport - LTL</SelectItem>
                    <SelectItem value="Courier Services">Courier Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight" className="text-sm font-medium mb-2 block">
                    Weight (kg)
                  </Label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter weight"
                      className="pl-10"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dimensions" className="text-sm font-medium mb-2 block">
                    Dimensions (cm)
                  </Label>
                  <Input
                    id="dimensions"
                    placeholder="L x W x H"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Security Level</Label>
                <Select onValueChange={(value) => handleInputChange('securityLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select security level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard Security">Standard Security</SelectItem>
                    <SelectItem value="Enhanced Security">Enhanced Security</SelectItem>
                    <SelectItem value="Maximum Security (Armed)">Maximum Security (Armed)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="btn-hero w-full"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Calculating...
                  </div>
                ) : (
                  <>
                    <Calculator className="mr-2 w-4 h-4" />
                    Calculate Cost
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Results Display */}
          <div className="animate-slide-in-right">
            {result ? (
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Cost Estimate</h3>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl font-bold text-gradient mb-2">
                      ${result.estimatedCost}
                    </div>
                    <div className="text-muted-foreground">Estimated Total Cost</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-4 border border-border text-center">
                      <div className="text-lg font-semibold text-primary mb-1">
                        {result.transitTime}
                      </div>
                      <div className="text-sm text-muted-foreground">Transit Time</div>
                    </div>

                    <div className="bg-card rounded-xl p-4 border border-border text-center">
                      <div className="text-lg font-semibold text-secondary mb-1">
                        <Shield className="w-4 h-4 inline mr-1" />
                        {result.securityLevel?.split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">Security Level</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Cost Breakdown:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Base Rate:</span>
                        <span>${result.breakdown.baseRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Security Fee:</span>
                        <span>${result.breakdown.securityFee}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${result.estimatedCost}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="btn-hero w-full">
                    Get Detailed Quote
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to Calculate</h3>
                <p className="text-muted-foreground">
                  Fill out the form to get an instant cost estimate for your shipping needs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;