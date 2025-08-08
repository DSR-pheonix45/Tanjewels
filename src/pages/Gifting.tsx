import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import momJewelry from '@/assets/mom-wearing-jewelry-white.jpg';
import sisterJewelry from '@/assets/sister-wearing-jewelry-white.jpg';
import coupleJewelry from '@/assets/couple-jewelry-white.jpg';
import friendsJewelry from '@/assets/friends-jewelry-white.jpg';
import pearlSet from '@/assets/pearl-set-white.jpg';
import diamondStuds from '@/assets/diamond-studs-white.jpg';
import goldChain from '@/assets/gold-chain-white.jpg';
import goldBand from '@/assets/gold-band-white.jpg';

const giftCategories = [
  {
    title: "For Mom",
    subtitle: "Timeless elegance she deserves",
    description: "Celebrate the woman who gave you everything with jewelry that reflects her grace and strength.",
    image: momJewelry,
    products: [
      { name: "Pearl Elegance Necklace", price: "₹0.00", image: pearlSet },
      { name: "Classic Gold Earrings", price: "₹0.00", image: diamondStuds },
      { name: "Elegant Chain Bracelet", price: "₹0.00", image: goldChain }
    ]
  },
  {
    title: "For Sister",
    subtitle: "Modern pieces for your partner in crime",
    description: "Fun, trendy, and versatile jewelry that matches her vibrant personality and style.",
    image: sisterJewelry,
    products: [
      { name: "Rose Gold Hoops", price: "₹0.00", image: diamondStuds },
      { name: "Layered Chain Set", price: "₹0.00", image: goldChain },
      { name: "Stackable Rings", price: "₹0.00", image: goldBand }
    ]
  },
  {
    title: "For Your Better Half",
    subtitle: "Romantic gestures that speak volumes",
    description: "Express your love with pieces that symbolize your bond and create lasting memories.",
    image: coupleJewelry,
    products: [
      { name: "Promise Ring", price: "₹0.00", image: goldBand },
      { name: "Heart Pendant Necklace", price: "₹0.00", image: pearlSet },
      { name: "Couple's Bracelet Set", price: "₹0.00", image: goldChain }
    ]
  },
  {
    title: "For Best Friend",
    subtitle: "Celebrating your unbreakable bond",
    description: "Friendship jewelry that honors the special connection you share with your closest confidant.",
    image: friendsJewelry,
    products: [
      { name: "Friendship Bracelet", price: "₹0.00", image: goldChain },
      { name: "Matching Necklace Set", price: "₹0.00", image: pearlSet },
      { name: "Initial Earrings", price: "₹0.00", image: diamondStuds }
    ]
  }
];

const Gifting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Perfect <span className="text-primary">Gifts</span> for Every Special Person
          </h1>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto mb-8">
            Find the ideal piece of jewelry that speaks to their heart and celebrates your unique relationship
          </p>
          <Button variant="cta" size="lg" className="font-montserrat">
            Explore Gift Collections
          </Button>
        </div>
      </section>

      {/* Gift Categories */}
      {giftCategories.map((category, index) => (
        <section key={category.title} className={`py-16 px-4 ${index % 2 === 1 ? 'bg-section-alt' : ''}`}>
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`text-center lg:text-left ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-primary font-montserrat mb-4">
                  {category.subtitle}
                </p>
                <p className="text-foreground/80 font-montserrat mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Featured Products */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {category.products.map((product, productIndex) => (
                    <Card key={productIndex} className="overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-card)] transition-all">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-montserrat font-medium text-sm mb-1 truncate">{product.name}</h4>
                        <p className="text-primary font-bold text-sm">{product.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Button variant="outline" size="lg" className="font-montserrat">
                  Shop {category.title.split(' ')[1]} Collection
                </Button>
              </div>

              {/* Image */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Gift Guide Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
            Not Sure What to Choose?
          </h2>
          <p className="text-lg text-foreground/80 font-montserrat mb-8 max-w-2xl mx-auto">
            Our gift concierge service helps you find the perfect piece based on their style, preferences, and your budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-comments text-primary text-2xl"></i>
              </div>
              <h3 className="font-bold font-montserrat text-lg mb-2">Personal Consultation</h3>
              <p className="text-foreground/80 font-montserrat text-sm">
                Chat with our experts to understand their style and preferences
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-primary text-2xl"></i>
              </div>
              <h3 className="font-bold font-montserrat text-lg mb-2">Curated Selection</h3>
              <p className="text-foreground/80 font-montserrat text-sm">
                Receive handpicked recommendations based on your requirements
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-gift text-primary text-2xl"></i>
              </div>
              <h3 className="font-bold font-montserrat text-lg mb-2">Perfect Packaging</h3>
              <p className="text-foreground/80 font-montserrat text-sm">
                Beautiful gift wrapping that makes your present extra special
              </p>
            </Card>
          </div>
          
          <Button variant="cta" size="lg" className="font-montserrat">
            Start Gift Consultation
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="bg-section-alt rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-foreground">
              Make Every Gift Memorable
            </h2>
            <p className="text-xl font-montserrat mb-8 max-w-2xl mx-auto text-foreground">
              Join thousands of customers who trust Tan Jewels for their most precious gifting moments
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1 text-foreground">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Recipients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1 text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1 text-foreground">Free</div>
                <div className="text-sm text-muted-foreground">Gift Wrapping</div>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button variant="default" size="lg" className="font-montserrat">
                Browse All Gifts
              </Button>
              <Button variant="outline" size="lg" className="font-montserrat">
                Contact Gift Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gifting;