import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventMap from '@/components/EventMap';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-foreground/80 font-montserrat max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-montserrat mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium font-montserrat mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-montserrat mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Order Support</option>
                    <option>Custom Design</option>
                    <option>Tan Fle-sto Event</option>
                    <option>Wholesale Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground font-montserrat focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <Button variant="cta" size="lg" className="w-full font-montserrat">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-montserrat mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat text-lg mb-2">Visit Our Studio</h3>
                        <p className="text-foreground/80 font-montserrat">
                          123 Fashion Street, Bandra West<br />
                          Mumbai, Maharashtra 400050<br />
                          India
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-phone text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat text-lg mb-2">Call Us</h3>
                        <p className="text-foreground/80 font-montserrat">
                          +91 98765 43210<br />
                          +91 87654 32109
                        </p>
                        <p className="text-sm text-muted-foreground font-montserrat mt-1">
                          Mon - Sat: 10:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="fas fa-envelope text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat text-lg mb-2">Email Us</h3>
                        <p className="text-foreground/80 font-montserrat">
                          hello@tanjewels.com<br />
                          support@tanjewels.com
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="fab fa-instagram text-primary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold font-montserrat text-lg mb-2">Follow Us</h3>
                        <p className="text-foreground/80 font-montserrat mb-2">
                          Stay updated with our latest collections and events
                        </p>
                        <div className="flex space-x-3">
                          <a href="#" className="text-primary hover:text-primary-variant transition-colors">
                            <i className="fab fa-instagram text-xl"></i>
                          </a>
                          <a href="#" className="text-primary hover:text-primary-variant transition-colors">
                            <i className="fab fa-facebook text-xl"></i>
                          </a>
                          <a href="#" className="text-primary hover:text-primary-variant transition-colors">
                            <i className="fab fa-whatsapp text-xl"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tan Flea Store Events Map */}
      <section className="py-16 px-4 bg-section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              <span className="text-primary">Tan Fle-sto</span> Upcoming Events
            </h2>
            <p className="text-lg text-foreground/80 font-montserrat max-w-2xl mx-auto">
              Join us at our curated flea market events across Mumbai. Click on the map markers to explore upcoming events and get directions.
            </p>
          </div>
          
          <EventMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-3">What are your business hours?</h3>
              <p className="text-foreground/80 font-montserrat">
                Our studio is open Monday to Saturday from 10:00 AM to 8:00 PM. We're closed on Sundays and major holidays.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-3">Do you offer custom jewelry design?</h3>
              <p className="text-foreground/80 font-montserrat">
                Yes! We love creating unique pieces. Contact us to discuss your vision and we'll work with you to create something special.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-3">What is your return policy?</h3>
              <p className="text-foreground/80 font-montserrat">
                We offer a 30-day return policy for unworn items in their original packaging. Custom pieces are final sale.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold font-montserrat text-lg mb-3">How can I join Tan Fle-sto events?</h3>
              <p className="text-foreground/80 font-montserrat">
                Follow @tanflesto on Instagram for event announcements. We regularly host popup markets featuring women entrepreneurs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;