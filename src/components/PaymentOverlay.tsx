import React, { useState, useEffect, useRef } from 'react';

const PaymentOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const overlayShown = sessionStorage.getItem('paymentOverlayShown');
    
    if (!overlayShown) {
      const timer = setTimeout(() => {
        setShowOverlay(true);
        sessionStorage.setItem('paymentOverlayShown', 'true');
      }, 7200000);

      return () => clearTimeout(timer);
    } else {
      setShowOverlay(true);
    }
  }, []);

  useEffect(() => {
    if (showOverlay) {
      intervalRef.current = setInterval(() => {
        if (overlayRef.current && !document.body.contains(overlayRef.current)) {
          window.location.reload();
        }
        
        if (overlayRef.current) {
          const styles = window.getComputedStyle(overlayRef.current);
          if (styles.display === 'none' || styles.visibility === 'hidden' || styles.opacity === '0') {
            overlayRef.current.style.cssText = `
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              background-color: rgba(0, 0, 0, 0.95) !important;
              z-index: 999999 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              visibility: visible !important;
              opacity: 1 !important;
            `;
          }
        }
      }, 100);

      const detectDevTools = () => {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
          window.location.reload();
        }
      };

      window.addEventListener('resize', detectDevTools);
      
      const disableRightClick = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };
      document.addEventListener('contextmenu', disableRightClick);

      const disableShortcuts = (e: KeyboardEvent) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
          return false;
        }
      };
      document.addEventListener('keydown', disableShortcuts);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        window.removeEventListener('resize', detectDevTools);
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('keydown', disableShortcuts);
      };
    }
  }, [showOverlay]);

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-95 z-[999999] flex items-center justify-center"
      style={{ 
        position: 'fixed !important' as any,
        top: '0 !important' as any,
        left: '0 !important' as any,
        right: '0 !important' as any,
        bottom: '0 !important' as any,
        backgroundColor: 'rgba(0, 0, 0, 0.95) !important' as any,
        zIndex: '999999 !important' as any,
        display: 'flex !important' as any,
        alignItems: 'center !important' as any,
        justifyContent: 'center !important' as any,
        visibility: 'visible !important' as any,
        opacity: '1 !important' as any
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="text-center max-w-2xl mx-auto px-6" style={{ pointerEvents: 'none' }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8" style={{ userSelect: 'none' }}>
          Website Unavailable
        </h1>
        <div className="text-white text-lg md:text-xl leading-relaxed mb-8" style={{ userSelect: 'none' }}>
          <p className="mb-4">
            This website is currently unavailable because the site owner has not paid the developer.
          </p>
          <p>
            If you are the owner and wish to restore access, please contact the developer and settle any outstanding dues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverlay;
