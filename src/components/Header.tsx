import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  console.log('Header rendering...');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 h-[90px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Logo - Centered */}
        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/6fa46523-03bd-4352-b999-ebe5893ce79d.png" 
              alt="Tan Jewels" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <Link to="/" className="font-montserrat font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="font-montserrat font-medium text-foreground hover:text-primary transition-colors">Shop</Link>
          <Link to="/gifting" className="font-montserrat font-medium text-foreground hover:text-primary transition-colors">Gifting</Link>
          <Link to="/about" className="font-montserrat font-medium text-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="font-montserrat font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-xl text-foreground hover:text-primary transition-colors">
            <i className="far fa-heart"></i>
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="text-xl text-foreground hover:text-primary transition-colors relative"
          >
            <i className="fas fa-shopping-bag"></i>
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <Link to="/" className="text-2xl font-bold font-montserrat">Tan Jewels</Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="font-montserrat font-medium text-foreground py-2 text-lg">Home</Link>
              <Link to="/shop" className="font-montserrat font-medium text-foreground py-2 text-lg">Shop</Link>
              <Link to="/gifting" className="font-montserrat font-medium text-foreground py-2 text-lg">Gifting</Link>
              <Link to="/about" className="font-montserrat font-medium text-foreground py-2 text-lg">About</Link>
              <Link to="/contact" className="font-montserrat font-medium text-foreground py-2 text-lg">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;