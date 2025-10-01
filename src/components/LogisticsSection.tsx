import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import logisticsMeeting from '@/assets/logistics-meeting.jpg';

const LogisticsSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">
                WE SPECIALIZE IN THE TRANSPORTATION
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Manage your Complex Logistics as can Focus
              </h2>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of about
              </p>
              <p className="text-lg leading-relaxed">
                dummy merchandise through land transport.
              </p>
            </div>

            <Button className="btn-hero h-12 px-8 group hover:scale-105 transition-all duration-300">
              About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl">
              <img
                src={logisticsMeeting}
                alt="Logistics professionals meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
