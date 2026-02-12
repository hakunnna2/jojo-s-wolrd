
import React from 'react';

const Hero: React.FC = () => {
  const scrollToUniverse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('universe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      <div className="z-10 animate-float w-full max-w-4xl">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 text-glow inline-block">
            JoJo’s World
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          JoJo’s World is a collection of small digital worlds, each one a portal to a unique experience. Explore her birthday celebrations, movie nights, plane facts, and more — all in one magical universe.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="#universe"
            onClick={scrollToUniverse}
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] transform hover:scale-105 text-center text-sm sm:text-base"
          >
            Explore Universe
          </a>
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-purple-600/10 blur-[60px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-64 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
