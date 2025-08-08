import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import goldChain from '@/assets/gold-chain-white.jpg';
import diamondStuds from '@/assets/diamond-studs-white.jpg';
import goldBand from '@/assets/gold-band-white.jpg';
import pearlSet from '@/assets/pearl-set-white.jpg';

const shopCategories = [
  'Necklaces',
  'Earrings', 
  'Rings',
  'Bracelets',
  "Men's Collection"
];

const shopCollections = [
  'New Arrivals',
  'Best Sellers', 
  "Tan's Favorites",
  'Perfect for Gifting'
];

const products = [
  {
    id: 1,
    name: "Elegant Golden Chain",
    price: 0,
    originalPrice: 0,
    image: goldChain,
    category: "Necklaces",
    collection: "Best Sellers",
    isBestSeller: true,
    isNew: false
  },
  {
    id: 2,
    name: "Diamond Studs",
    price: 0,
    originalPrice: null,
    image: diamondStuds,
    category: "Earrings",
    collection: "New Arrivals",
    isBestSeller: false,
    isNew: true
  },
  {
    id: 3,
    name: "Classic Gold Band",
    price: 0,
    originalPrice: null,
    image: goldBand,
    category: "Rings",
    collection: "Tan's Favorites",
    isBestSeller: true,
    isNew: false
  },
  {
    id: 4,
    name: "Pearl Elegance Set",
    price: 0,
    originalPrice: 0,
    image: pearlSet,
    category: "Necklaces",
    collection: "Perfect for Gifting",
    isBestSeller: false,
    isNew: false
  },
  {
    id: 5,
    name: "Rose Gold Hoops",
    price: 0,
    originalPrice: null,
    image: diamondStuds,
    category: "Earrings",
    collection: "New Arrivals",
    isBestSeller: false,
    isNew: true
  },
  {
    id: 6,
    name: "Tennis Bracelet",
    price: 0,
    originalPrice: 0,
    image: goldChain,
    category: "Bracelets",
    collection: "Best Sellers",
    isBestSeller: true,
    isNew: false
  },
  {
    id: 7,
    name: "Men's Signet Ring",
    price: 0,
    originalPrice: null,
    image: goldBand,
    category: "Men's Collection",
    collection: "Tan's Favorites",
    isBestSeller: false,
    isNew: false
  },
  {
    id: 8,
    name: "Delicate Chain Necklace",
    price: 0,
    originalPrice: null,
    image: pearlSet,
    category: "Necklaces",
    collection: "New Arrivals",
    isBestSeller: false,
    isNew: true
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState('recommended');
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesCollection = !selectedCollection || product.collection === selectedCollection;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesCollection && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew ? 1 : -1;
      case 'popular':
        return b.isBestSeller ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-2">
              Shop All
            </h1>
            <p className="text-muted-foreground font-montserrat">
              {sortedProducts.length} products
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"></i>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground font-montserrat w-full md:w-64"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 bg-background border-input">
                <SelectValue placeholder="Sort by: Recommended" />
              </SelectTrigger>
              <SelectContent className="bg-background border-input z-50">
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-4">Shop by Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`block w-full text-left py-2 px-3 rounded-md font-montserrat transition-colors ${
                    !selectedCategory 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  All Categories
                </button>
                {shopCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left py-2 px-3 rounded-md font-montserrat transition-colors ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Collections */}
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-4">Shop by Collection</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCollection('')}
                  className={`block w-full text-left py-2 px-3 rounded-md font-montserrat transition-colors ${
                    !selectedCollection 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  All Collections
                </button>
                {shopCollections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => setSelectedCollection(collection)}
                    className={`block w-full text-left py-2 px-3 rounded-md font-montserrat transition-colors ${
                      selectedCollection === collection 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {collection}
                  </button>
                ))}
              </div>
            </Card>

            {/* Price Filter */}
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-4">Filter by Price</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={3000}
                  min={0}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-montserrat text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-montserrat text-lg">
                  No products found matching your filters.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedCollection('');
                    setPriceRange([0, 3000]);
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isBestSeller && (
                          <Badge className="bg-primary text-primary-foreground font-montserrat">
                            Best Seller
                          </Badge>
                        )}
                        {product.isNew && (
                          <Badge className="bg-accent text-accent-foreground font-montserrat">
                            New
                          </Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                          <i className="far fa-heart"></i>
                        </button>
                        <button className="w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                          <i className="far fa-eye"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-primary font-bold text-xl">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        variant="shop" 
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;