import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import TrackingSystem from '@/components/TrackingSystem';
import CostCalculator from '@/components/CostCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <TrackingSystem />
      <CostCalculator />
      <Footer />
    </div>
  );
};

export default Index;
