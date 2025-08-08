import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-section-alt py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <img src="/lovable-uploads/a81855ef-ebd3-46e7-8165-1b7d0ce87397.png" alt="Tan Jewels Logo" className="h-16 w-16" />
            </div>
            <p className="text-muted-foreground font-montserrat text-center md:text-left">
              Timeless everyday luxury jewelry for the modern woman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-montserrat">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-montserrat">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-montserrat">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-montserrat">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-montserrat">Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground font-montserrat">
              <p>VTP Cygnus Kharadi<br />Pune 411014</p>
              <p>9766318689</p>
              <p>info@tanjewels.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Newsletter</h4>
            <p className="text-muted-foreground font-montserrat mb-4">
              Subscribe for updates and exclusive offers
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground font-montserrat text-sm"
              />
              <Button variant="default" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground font-montserrat">
            © 2025 Tan Jewels. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;