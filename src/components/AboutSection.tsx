import React from 'react';
import { Button } from '@/components/ui/button';
import founderImage from '@/assets/founder.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={founderImage} 
                alt="Founder of Tan Jewels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Meet the Founder
            </h2>
            
            <div className="space-y-4 text-foreground font-montserrat mb-8">
              <p className="text-lg leading-relaxed">
                Tan Jewels was born from a passion for timeless, everyday luxury. Our founder started this journey to create jewellery that speaks to the modern woman — elegant, durable, and affordable.
              </p>
              <p className="text-lg leading-relaxed">
                With deep roots in Indian design and two decades of craftsmanship, Tan Jewels blends heritage with contemporary styles for confident everyday wear.
              </p>
            </div>

            {/* Tan Fle-sto Section */}
            <div className="bg-background p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-3">
                <img src="/lovable-uploads/76d44a2b-565b-4546-9815-a7a41550a0d4.png" alt="Tan Fle-sto Logo" className="h-6 w-6" />
                <h3 className="text-xl font-bold font-montserrat">Tan Fle-sto</h3>
              </div>
              <p className="text-foreground font-montserrat mb-4">
                Tan Fle-sto is our sister company — a curated flea market event celebrating women-led brands, artists, and creators. Follow us on Instagram to know about our next popup!
              </p>
              <Button variant="cta" className="inline-flex items-center gap-2">
                <i className="fab fa-instagram"></i>
                Follow @tanflesto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;