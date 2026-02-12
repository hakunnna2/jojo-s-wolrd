
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Universe', href: '#universe' },
    { name: 'About', href: '#' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-glow">
          <span className="text-pink-500">JoJo’s</span> <span className="text-white">World</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-pink-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#" className="px-5 py-2 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col space-y-6 text-center text-lg font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-pink-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 mx-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
