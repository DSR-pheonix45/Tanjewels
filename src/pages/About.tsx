import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import founderImage from '@/assets/founder.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            About <span className="text-primary">Tan Jewels</span>
          </h1>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
            Discover the story behind our passion for timeless, everyday luxury jewelry
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <img 
                  src={founderImage} 
                  alt="Tanvie, Founder of Tan Jewels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                Meet <span className="text-primary">Tanvie</span>
              </h2>
              
              <div className="space-y-4 text-foreground font-montserrat mb-8">
                <p className="text-lg leading-relaxed">
                  Tanvie is the visionary founder behind Tan Jewels, bringing her passion for timeless design and entrepreneurial spirit to the world of jewelry. With a deep appreciation for craftsmanship and an eye for contemporary trends, she has built a brand that speaks to the modern woman.
                </p>
                <p className="text-lg leading-relaxed">
                  Her journey began with a simple belief: every woman deserves to wear beautiful, high-quality jewelry that enhances her confidence and celebrates her individuality. This philosophy continues to drive everything we do at Tan Jewels.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond jewelry, Tanvie is also a passionate supporter of women entrepreneurs and artists, which led to the creation of her event management venture, connecting communities through curated experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tan Jewels Section */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              The <span className="text-primary">Tan Jewels</span> Story
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg font-montserrat text-foreground leading-relaxed max-w-4xl mx-auto">
              Tan Jewels is more than a jewellery brand—it's a statement of style, durability, and everyday luxury. As a proud venture of Tan Fle-sto Events & Exhibition OPC Pvt. Ltd., we bring our passion for craftsmanship and creative excellence into the world of modern, wearable jewellery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-star text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-bold font-montserrat mb-3">Demi Fine Gold</h3>
                <p className="text-foreground font-montserrat text-sm">
                  Premium stainless steel with 18K gold plating. Anti-tarnish, waterproof & sweatproof.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-gem text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-bold font-montserrat mb-3">925 Sterling Silver</h3>
                <p className="text-foreground font-montserrat text-sm">
                  92.5% pure sterling silver, combining traditional purity with modern styles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-moon text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-bold font-montserrat mb-3">Boho Oxidised Silver</h3>
                <p className="text-foreground font-montserrat text-sm">
                  Rich texture and vintage charm with artisanal detailing and antique finishes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-users text-primary text-xl"></i>
                </div>
                <h3 className="text-lg font-bold font-montserrat mb-3">For Everyone</h3>
                <p className="text-foreground font-montserrat text-sm">
                  Gender-inclusive designs for both men and women. Jewellery without boundaries.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg font-montserrat text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Our mission is to create pieces that not only look beautiful but are also made to be lived in. We understand that jewellery isn't just for special occasions—it's a part of your everyday expression. That's why our designs are made to last, feel good, and look stunning—wherever life takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Tan Flea Store Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                <span className="text-primary">Tan Fle-sto</span>
              </h2>
              
              <div className="space-y-4 text-foreground font-montserrat mb-8">
                <p className="text-lg leading-relaxed">
                  Tan Fle-sto is Tanvie's passion project in event management, creating curated flea market experiences that celebrate women-led brands, independent artists, and creative entrepreneurs.
                </p>
                <p className="text-lg leading-relaxed">
                  These popup events are more than just markets — they're community gatherings where creativity meets commerce, where stories are shared, and where meaningful connections are made. Each event is thoughtfully curated to showcase the best of local talent and artisanal craftsmanship.
                </p>
                <p className="text-lg leading-relaxed">
                  From handmade jewelry and artisanal foods to unique home décor and vintage finds, Tan Fle-sto events offer a treasure trove of discoveries while supporting the dreams of women entrepreneurs.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold font-montserrat mb-3">Join Our Community</h3>
                <p className="text-foreground font-montserrat mb-4">
                  Follow us on Instagram to stay updated on our next popup events and be part of a community that celebrates creativity, entrepreneurship, and authentic connections.
                </p>
                <Button variant="cta" className="inline-flex items-center gap-2">
                  <i className="fab fa-instagram"></i>
                  Follow @tanflesto
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative grid grid-cols-2 gap-6 w-96">
                <div className="bg-primary/10 rounded-lg p-8 text-center">
                  <i className="fas fa-store text-primary text-4xl mb-4"></i>
                  <h4 className="font-bold font-montserrat text-base">Curated Markets</h4>
                </div>
                <div className="bg-primary/10 rounded-lg p-8 text-center">
                  <i className="fas fa-users text-primary text-4xl mb-4"></i>
                  <h4 className="font-bold font-montserrat text-base">Community Events</h4>
                </div>
                <div className="bg-primary/10 rounded-lg p-8 text-center">
                  <i className="fas fa-handshake text-primary text-4xl mb-4"></i>
                  <h4 className="font-bold font-montserrat text-base">Women Entrepreneurs</h4>
                </div>
                <div className="bg-primary/10 rounded-lg p-8 text-center">
                  <i className="fas fa-heart text-primary text-4xl mb-4"></i>
                  <h4 className="font-bold font-montserrat text-base">Authentic Connections</h4>
                </div>
                
                {/* Overlay Logo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/20">
                    <img 
                      src="/lovable-uploads/76d44a2b-565b-4546-9815-a7a41550a0d4.png" 
                      alt="Tan Fle-sto Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Ready to Discover Your Perfect Piece?
          </h2>
          <p className="text-lg text-foreground/80 font-montserrat mb-8 max-w-2xl mx-auto">
            Explore our collections and find jewelry that celebrates your unique story
          </p>
          <Button variant="cta" size="lg" className="font-montserrat">
            Shop Our Collections
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;