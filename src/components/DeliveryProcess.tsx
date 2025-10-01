import React from 'react';
import { Package, Truck, CheckCircle, MapPin } from 'lucide-react';

const DeliveryProcess = () => {
  const steps = [
    {
      icon: Package,
      step: '01',
      title: 'Parcel Register',
      description: 'Parcel Register is our smart tracking system that records every parcel\'s journey—from pickup to delivery—ensuring full visibility and accountability. It helps customers monitor real-time status, delivery history, and proof of shipment with ease.',
    },
    {
      icon: MapPin,
      step: '02',
      title: 'Parcel Loading',
      description: 'Parcel Loading is our streamlined process ensuring secure, efficient handling of shipments during transit preparation. Each parcel is carefully scanned, verified, and loaded to guarantee safe timely delivery.',
    },
    {
      icon: Truck,
      step: '03',
      title: 'Parcel In-Transit',
      description: 'Parcel In-Transit refers to the stage where your shipment is on the move, securely transported toward its destination. Our real-time tracking ensures full visibility and timely updates every step of the way.',
    },
    {
      icon: CheckCircle,
      step: '04',
      title: 'Parcel Delivery',
      description: 'Parcel Delivery marks the final stage where your shipment reaches its destination safely and on time. We ensure secure handover with delivery confirmation for complete peace of mind.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            How We Deliver<br />Your Parcel
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className="text-center space-y-4 group">
                    {/* Icon Circle */}
                    <div className="relative mx-auto">
                      <div className="w-32 h-32 mx-auto bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-accent transition-all duration-300 relative z-10">
                        <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-accent transition-colors duration-300 z-20">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
