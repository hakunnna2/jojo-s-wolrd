
import React from 'react';
import PlanetCard from './PlanetCard';
import { PLANETS } from '../constants';

const Universe: React.FC = () => {
  return (
    <section id="universe" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">The Digital Universe</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            Each planet is a portal to a different creative dimension. 
            Venture into their orbits to explore unique digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-y-24">
          {PLANETS.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-900/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Universe;
