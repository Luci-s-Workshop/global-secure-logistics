import React, { useState } from 'react';
import { Package, MapPin, Truck, CheckCircle } from 'lucide-react';

const TrackingSystem = () => {
  const [activeStep, setActiveStep] = useState(2);

  const trackingSteps = [
    {
      id: 1,
      title: 'Parcel Register',
      description: 'Parcel Register is our smart tracking system that records every parcel\'s journey—from pickup to delivery—ensuring full visibility and accountability. It helps customers monitor real-time status, delivery history, and proof of shipment with ease.',
      extendedInfo: 'The JDsecurity Parcel Register system utilizes blockchain technology to create an immutable record of your shipment\'s journey. Every scan, location update, and custody transfer is permanently recorded, providing you with indisputable proof of handling and delivery.',
      icon: Package,
      time: '00:00',
    },
    {
      id: 2,
      title: 'Parcel Loading',
      description: 'Parcel Loading is our streamlined process ensuring secure, efficient handling of shipments during transit preparation. Each parcel is carefully scanned, verified, and loaded to guarantee safe and timely delivery.',
      extendedInfo: 'During the loading phase, JDsecurity employs multi-factor verification protocols. Each package undergoes weight verification, dimensional scanning, and security screening. Our loading personnel use handheld devices to capture photographic evidence of package condition.',
      icon: MapPin,
      time: '02:30',
    },
    {
      id: 3,
      title: 'Parcel In-Transit',
      description: 'Parcel In-Transit refers to the stage where your shipment is on the move, securely transported toward its destination. Our real-time tracking ensures full visibility and timely updates every step of the way.',
      extendedInfo: 'While your shipment is in transit with JDsecurity, our advanced monitoring systems work continuously to ensure security and timely delivery. Real-time GPS tracking provides location updates every 10 minutes, while our proprietary route optimization algorithms ensure the most efficient path to destination.',
      icon: Truck,
      time: '08:45',
    },
    {
      id: 4,
      title: 'Parcel Delivery',
      description: 'Parcel Delivery marks the final step where your shipment reaches its destination safely and on time. We ensure secure handover with delivery confirmation for complete peace of mind.',
      extendedInfo: 'The delivery phase at JDsecurity incorporates multiple verification steps to ensure secure and accurate delivery. Our drivers use mobile devices to capture recipient signatures, photograph delivered packages, and record GPS coordinates of delivery locations.',
      icon: CheckCircle,
      time: '14:20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
            Advanced Shipment Tracking System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Follow your shipment's journey with our state-of-the-art tracking technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Timeline */}
          <div className="relative mb-16">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-border rounded-full">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(activeStep / trackingSteps.length) * 100}%` }}
              ></div>
            </div>

            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id <= activeStep;
                const isCurrent = step.id === activeStep;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex flex-col items-center group transition-all duration-300 ${
                      isActive ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-primary to-secondary border-primary shadow-lg'
                          : 'bg-background border-border hover:border-primary/50'
                      } ${isCurrent ? 'shadow-glow animate-pulse-glow' : ''}`}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-muted-foreground group-hover:text-primary'
                        }`}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <div
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {step.time}
                      </div>
                      <div
                        className={`text-xs transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {step.title.split(' ')[1]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-fade-in">
            {trackingSteps
              .filter((step) => step.id === activeStep)
              .map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">Step {step.id} of 4</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.extendedInfo}
                      </p>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                        <div className="text-center">
                          <Icon className="w-20 h-20 text-primary mx-auto mb-4 animate-float" />
                          <div className="text-lg font-semibold text-foreground mb-2">
                            Current Status: {step.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Last updated: {step.time} UTC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Package className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold mb-2">Track Shipment</h4>
              <p className="text-sm text-muted-foreground">Enter tracking number</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold mb-2">Live Map</h4>
              <p className="text-sm text-muted-foreground">View real-time location</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold mb-2">Delivery Proof</h4>
              <p className="text-sm text-muted-foreground">Download documents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSystem;