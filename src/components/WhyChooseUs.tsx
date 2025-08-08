import React from 'react';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-gem",
      title: "Premium Quality",
      description: "Handcrafted with finest materials and attention to detail. Each piece is designed to last and maintain its beauty over time."
    },
    {
      icon: "fas fa-heart",
      title: "Made for Daily Wear", 
      description: "We don't believe in saving the good stuff for later. Our pieces are made to move with you, not sit in a box."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Lifetime Warranty",
      description: "Complete protection against defects with our comprehensive lifetime warranty. Your satisfaction is our guarantee."
    }
  ];

  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-8">
            Because You Deserve to Shine
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-montserrat max-w-3xl mx-auto leading-relaxed">
            At Tan Jewels, we create jewelry that's made to be worn — every day and on the 
            days that matter most. It's premium in quality, thoughtful in design, and priced so 
            it feels right.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-[var(--shadow-button)]">
                <i className={`${feature.icon} text-2xl text-primary-foreground`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold font-montserrat text-foreground mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground font-montserrat leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="cta" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-3 text-base tracking-wide">
          LEARN MORE ABOUT US
        </Button>
      </div>
    </section>
  );
};

export default WhyChooseUs;