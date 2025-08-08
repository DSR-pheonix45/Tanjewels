import React, { useState, useEffect } from 'react';

const PaymentOverlayTest = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 10000); // 10 seconds for testing

    return () => clearTimeout(timer);
  }, []);

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex items-center justify-center"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
          Website Unavailable
        </h1>
        <div className="text-white text-lg md:text-xl leading-relaxed mb-8">
          <p className="mb-4">
            This website is currently unavailable because the site owner has not paid the developer.
          </p>
          <p>
            If you are the owner and wish to restore access, please contact the developer and settle any outstanding dues.
          </p>
        </div>
        <div className="text-gray-300 text-sm">
          <p>Contact Developer: [Replace with your contact information]</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverlayTest;
