import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Package, MapPin, Clock, CheckCircle2, Truck, Plane, Ship, Building } from "lucide-react";
import { useState } from "react";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);

  // Mock tracking data generator
  const generateTrackingData = (trackingNum: string) => {
    const destinations = ["New York, USA", "London, UK", "Tokyo, Japan", "Sydney, Australia", "Dubai, UAE"];
    const statuses = ["In Transit", "Out for Delivery", "Delivered", "Processing"];
    const randomDest = destinations[Math.floor(Math.random() * destinations.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    return {
      trackingNumber: trackingNum,
      status: randomStatus,
      currentLocation: randomDest,
      estimatedDelivery: new Date(Date.now() + 86400000 * Math.floor(Math.random() * 5 + 1)).toLocaleDateString(),
      packageType: ["Air Freight", "Sea Freight", "Road Freight"][Math.floor(Math.random() * 3)],
      weight: `${Math.floor(Math.random() * 50 + 5)} kg`,
      timeline: [
        {
          status: "Order Placed",
          location: "Shanghai, China",
          date: new Date(Date.now() - 86400000 * 5).toLocaleString(),
          completed: true,
          icon: Package,
        },
        {
          status: "Picked Up",
          location: "Shanghai Warehouse",
          date: new Date(Date.now() - 86400000 * 4).toLocaleString(),
          completed: true,
          icon: Building,
        },
        {
          status: "In Transit",
          location: randomDest,
          date: new Date(Date.now() - 86400000 * 2).toLocaleString(),
          completed: randomStatus !== "Processing",
          icon: randomStatus === "Processing" ? Truck : [Plane, Ship, Truck][Math.floor(Math.random() * 3)],
        },
        {
          status: "Out for Delivery",
          location: randomDest,
          date: randomStatus === "Out for Delivery" || randomStatus === "Delivered" ? new Date(Date.now() - 86400000).toLocaleString() : "Pending",
          completed: randomStatus === "Out for Delivery" || randomStatus === "Delivered",
          icon: Truck,
        },
        {
          status: "Delivered",
          location: randomDest,
          date: randomStatus === "Delivered" ? new Date().toLocaleString() : "Pending",
          completed: randomStatus === "Delivered",
          icon: CheckCircle2,
        },
      ],
    };
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      const data = generateTrackingData(trackingNumber);
      setTrackingData(data);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "text-green-600 bg-green-50";
      case "Out for Delivery": return "text-blue-600 bg-blue-50";
      case "In Transit": return "text-yellow-600 bg-yellow-50";
      case "Processing": return "text-purple-600 bg-purple-50";
      default: return "text-slate-600 bg-slate-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Track Your Shipment</h1>
            <p className="text-xl text-slate-600 mb-8">
              Enter your tracking number below to see real-time updates on your package location and delivery status
            </p>
            
            {/* Search Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleTrack} className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., JD123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="h-14 text-lg"
                    required
                  />
                  <Button type="submit" size="lg" className="px-8 h-14">
                    Track
                  </Button>
                </form>
                <p className="text-sm text-slate-500 mt-4">
                  Kindly enter your tracking number to view details e.g JD123456789
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-12 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Status Overview */}
              <Card className="mb-8 shadow-xl border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className={`inline-block px-6 py-3 rounded-full font-semibold text-lg mb-2 ${getStatusColor(trackingData.status)}`}>
                        {trackingData.status}
                      </div>
                      <p className="text-sm text-slate-600">Current Status</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span>{trackingData.currentLocation}</span>
                      </div>
                      <p className="text-sm text-slate-600">Current Location</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                        <Clock className="w-6 h-6 text-primary" />
                        <span>{trackingData.estimatedDelivery}</span>
                      </div>
                      <p className="text-sm text-slate-600">Est. Delivery</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">{trackingData.packageType}</div>
                      <p className="text-sm text-slate-600">Shipment Type</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Timeline */}
                <div className="lg:col-span-2">
                  <Card className="shadow-xl">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Shipment Timeline</h2>
                      <div className="space-y-6">
                        {trackingData.timeline.map((event: any, idx: number) => (
                          <div key={idx} className="flex gap-4 relative">
                            {/* Connecting Line */}
                            {idx !== trackingData.timeline.length - 1 && (
                              <div className={`absolute left-6 top-14 w-0.5 h-full -ml-px ${event.completed ? 'bg-primary' : 'bg-slate-200'}`} />
                            )}
                            
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-all ${
                              event.completed 
                                ? 'bg-primary text-white shadow-lg scale-110' 
                                : 'bg-slate-200 text-slate-400'
                            }`}>
                              <event.icon className="w-6 h-6" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 pb-8">
                              <div className={`font-bold text-lg ${event.completed ? 'text-slate-900' : 'text-slate-400'}`}>
                                {event.status}
                              </div>
                              <div className="text-slate-600 flex items-center gap-2 mt-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                              <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {event.date}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Package Details & Visual */}
                <div className="space-y-6">
                  {/* Animated Package Visual */}
                  <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-purple-50">
                    <CardContent className="p-8 text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-pulse" />
                        <div className="absolute inset-2 bg-primary/40 rounded-xl animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="absolute inset-4 bg-primary rounded-lg flex items-center justify-center animate-bounce">
                          <Package className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <p className="text-lg font-semibold mb-1">Package in Motion</p>
                      <p className="text-sm text-slate-600">Tracking: {trackingData.trackingNumber}</p>
                    </CardContent>
                  </Card>

                  {/* Package Info */}
                  <Card className="shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Package Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Tracking #:</span>
                          <span className="font-semibold">{trackingData.trackingNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Weight:</span>
                          <span className="font-semibold">{trackingData.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Service:</span>
                          <span className="font-semibold">{trackingData.packageType}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="w-4 h-4 mr-2" />
                          View on Map
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Package className="w-4 h-4 mr-2" />
                          Delivery Proof
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Clock className="w-4 h-4 mr-2" />
                          Delivery History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl bg-gradient-to-br from-primary/5 to-purple-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with Your Shipment?</h2>
              <p className="text-slate-600 mb-6">
                Our customer support team is available 24/7 to assist you with any questions or concerns.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg">Contact Support</Button>
                <Button size="lg" variant="outline">View FAQ</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default TrackShipment;
