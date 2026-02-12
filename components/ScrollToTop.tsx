
import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Lower threshold to 200px for better responsiveness on shorter mobile views
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-xl border border-pink-500/50 hover:border-pink-400 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] active:scale-90"
      >
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-white transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 11l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
        
        {/* Animated pulse ring - more visible on mobile */}
        <span className="absolute inset-0 rounded-full border border-pink-500/40 animate-ping opacity-25"></span>
        
        {/* Secondary glow for depth */}
        <div className="absolute inset-0 rounded-full bg-pink-500/5 blur-md group-hover:bg-pink-500/10 transition-all"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;
