import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import goldChain from '@/assets/gold-chain-white.jpg';
import diamondStuds from '@/assets/diamond-studs-white.jpg';
import goldBand from '@/assets/gold-band-white.jpg';
import pearlSet from '@/assets/pearl-set-white.jpg';

const products = [
  {
    id: 1,
    name: "Elegant Golden Chain",
    price: 0,
    image: goldChain
  },
  {
    id: 2,
    name: "Sparkling Diamond Studs",
    price: 0,
    image: diamondStuds
  },
  {
    id: 3,
    name: "Classic Gold Band",
    price: 0,
    image: goldBand
  },
  {
    id: 4,
    name: "Pearl Elegance Set",
    price: 0,
    image: pearlSet
  }
];

const BestSellers = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow flex flex-col h-full">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center flex flex-col flex-1">
                <h3 className="font-montserrat font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-primary font-bold text-xl mb-4">₹{product.price.toLocaleString()}</p>
                <div className="mt-auto">
                  <Button 
                    variant="shop" 
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;