import React from 'react';

const occasions = [
  { name: "Office Wear", icon: "fas fa-briefcase" },
  { name: "Party Wear", icon: "fas fa-glass-cheers" },
  { name: "Date Night", icon: "fas fa-heart" },
  { name: "Daily Wear", icon: "fas fa-sun" },
  { name: "Functions", icon: "fas fa-star" }
];

const ShopByOccasion = () => {
  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">
          Shop by Occasion
        </h2>
        
        <div className="flex flex-wrap justify-center gap-5">
          {occasions.map((occasion, index) => (
            <button 
              key={index}
              className="flex items-center gap-3 bg-background hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full border-2 border-primary transition-all duration-300 font-montserrat font-medium shadow-sm hover:shadow-[var(--shadow-button)]"
            >
              <i className={`${occasion.icon} text-lg`}></i>
              <span>{occasion.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;