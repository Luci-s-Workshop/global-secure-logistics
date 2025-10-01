import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import truckHaulers from '@/assets/truck-haulers-fleet.jpg';
import deliveryVan from '@/assets/delivery-van-dusk.jpg';
import multiPurposeTruck from '@/assets/multi-purpose-truck.jpg';

const VehicleFleet = () => {
  const vehicles = [
    {
      title: 'Truck haulers',
      image: truckHaulers,
      description: 'Need a one-stop solution for your international air freight and forwarding needs, whereas if easier and cost-effective way to ship and track your cargo far as to anywhere across the globe? Look no further than SKYWAYFREIGHT SHIPPING COMPANY.',
    },
    {
      title: 'Delivery vans',
      image: deliveryVan,
      description: 'If you require a quality Road Freight Services ( Road Transport ) logistics provider, Transmax\'s logistics services will added by to meet all of your shipping needs with reliable, time-reducing and cost-effective results, then the services of SKYWAYFREIGHT SHIPPING COMPANY are right for you.',
    },
    {
      title: 'Multi-Purpose Trucks',
      image: multiPurposeTruck,
      description: 'At SKYWAYFREIGHT SHIPPING COMPANY, we offer a versatile fleet of multi-purpose trucks to meet a wide range of logistics and freight needs. Whether it\'s heavy-duty cargo, time-sensitive deliveries, or specialized transport, our trucks are equipped to handle any challenge efficiently and expertly.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-primary">Our Vehicle Fleet</span>
          </h2>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">{vehicle.title}</h3>
                <p className="text-slate-600 leading-relaxed line-clamp-4">
                  {vehicle.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Find out More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFleet;
