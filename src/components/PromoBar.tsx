import React from 'react';

const PromoBar = () => {
  console.log('PromoBar rendering...');
  return (
    <div className="bg-promo-bg text-primary-foreground py-3 px-4 text-center text-sm font-montserrat font-medium">
      Festive Launch Sale Now Live! Use code FESTIVE25 for 25% off
    </div>
  );
};

export default PromoBar;