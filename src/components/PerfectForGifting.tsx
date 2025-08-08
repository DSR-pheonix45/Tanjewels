import React from 'react';
import { Card } from '@/components/ui/card';
import momJewelry from '@/assets/mom-wearing-jewelry-white.jpg';
import sisterJewelry from '@/assets/sister-wearing-jewelry-white.jpg';
import coupleJewelry from '@/assets/couple-jewelry-white.jpg';
import friendsJewelry from '@/assets/friends-jewelry-white.jpg';

const giftCategories = [
  {
    title: "For Mom",
    image: momJewelry,
    description: "Timeless elegance for the most important woman in your life"
  },
  {
    title: "Sister", 
    image: sisterJewelry,
    description: "Trendy pieces that celebrate your special bond"
  },
  {
    title: "Wife",
    image: coupleJewelry, 
    description: "Luxurious jewelry to show your endless love"
  },
  {
    title: "Girlfriend",
    image: friendsJewelry,
    description: "Beautiful pieces to make her smile"
  }
];

const PerfectForGifting = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">
          Perfect for Gifting
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-montserrat font-bold text-xl mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectForGifting;