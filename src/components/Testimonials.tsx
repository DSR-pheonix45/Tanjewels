import React from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "The quality of Tan Jewels pieces is absolutely exceptional. I wear my gold chain every day and it still looks brand new after months!",
    name: "Priya Sharma",
    rating: 5
  },
  {
    quote: "Found the perfect gift for my sister's birthday. The customer service was amazing and the jewelry arrived beautifully packaged.",
    name: "Aisha Patel", 
    rating: 5
  },
  {
    quote: "I love that I can wear these pieces from office to dinner. They're versatile, elegant, and reasonably priced. Highly recommend!",
    name: "Kavya Reddy",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-shadow">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="italic text-foreground font-montserrat text-lg mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Name */}
              <cite className="font-bold font-montserrat text-primary not-italic">
                — {testimonial.name}
              </cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;