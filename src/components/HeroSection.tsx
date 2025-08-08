import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroNeutral1 from '@/assets/hero-neutral-1.jpg';
import heroNeutral2 from '@/assets/hero-neutral-2.jpg';
import heroNeutral3 from '@/assets/hero-neutral-3.jpg';

const heroImages = [
  heroNeutral1,
  heroNeutral2,
  heroNeutral3,
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=600&fit=crop&crop=center"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
          Style, Durability, and Everyday Luxury
        </h1>
        <p className="text-lg md:text-xl font-montserrat mb-8 max-w-2xl mx-auto">
          Jewelry that's made for everyday elegance
        </p>
        <Button variant="hero" size="xl" className="text-lg">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;