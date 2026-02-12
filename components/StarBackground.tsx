
import React, { useMemo } from 'react';

const StarBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-navy-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"></div>
      
      {/* Stars Container */}
      <div className="relative w-full h-full">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute transition-all duration-1000 ease-out group-hover:scale-150 group-hover:brightness-150"
            style={{ 
              top: star.top, 
              left: star.left,
              willChange: 'transform'
            }}
          >
            <div
              className="star"
              style={{
                width: star.size,
                height: star.size,
                '--duration': star.duration,
              } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarBackground;
