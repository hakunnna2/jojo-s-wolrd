
import React from 'react';
import { Planet } from '../types';

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const isSurprise = planet.link === '#';

  return (
    <div 
      className={`group flex flex-col items-center text-center p-8 transition-all duration-700 ${!isSurprise ? 'hover:-translate-y-4' : ''}`}
      style={{ animationDelay: planet.delay }}
    >
      <div className="relative mb-6">
        {/* Planet Core */}
        <div className={`
          w-48 h-48 md:w-56 md:h-56 
          rounded-full border-2 ${planet.color} 
          flex items-center justify-center
          bg-black/40 backdrop-blur-sm
          transition-all duration-500
          ${!isSurprise ? 'group-hover:scale-105 group-hover:rotate-6 group-hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]' : 'opacity-60'}
          shadow-lg ${planet.glowColor}
          relative overflow-hidden
          animate-float
        `} style={{ animationDelay: planet.delay }}>
          
          {/* Surface Texture Simulation */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.5),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <h3 className={`text-xl font-bold px-4 z-10 ${isSurprise ? 'text-slate-500 tracking-widest' : ''}`}>
            {planet.name}
          </h3>
        </div>

        {/* Orbit Ring */}
        <div className={`absolute inset-[-10px] rounded-full border border-white/5 border-dashed ${!isSurprise ? 'animate-[spin_20s_linear_infinite]' : ''}`}></div>
      </div>

      <p className={`text-slate-400 text-sm max-w-[250px] mb-6 transition-opacity ${isSurprise ? 'opacity-40 italic' : 'opacity-80 group-hover:opacity-100'}`}>
        {planet.description}
      </p>

      {isSurprise ? (
        <span className="px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/5 text-slate-600 bg-white/5 cursor-not-allowed">
          Coming Soon
        </span>
      ) : (
        <a
          href={planet.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          Enter Planet
        </a>
      )}
    </div>
  );
};

export default PlanetCard;
