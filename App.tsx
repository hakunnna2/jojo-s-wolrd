
import React from 'react';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import Universe from './components/Universe';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen group bg-black text-white selection:bg-pink-500/30">
      <StarBackground />
      
      <main className="relative z-10">
        <Hero />
        <Universe />
      </main>

      <ScrollToTop />

      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-20"></div>
    </div>
  );
};

export default App;
