import React from 'react';
import PromoBar from '@/components/PromoBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import ShopByOccasion from '@/components/ShopByOccasion';
import PerfectForGifting from '@/components/PerfectForGifting';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <Header />
      <HeroSection />
      <BestSellers />
      <ShopByOccasion />
      <PerfectForGifting />
      <WhyChooseUs />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
