import React from 'react';

const Hero = () => {
  return (
    // We add mt-20 to push it down just below our 80px tall Navbar
    <div className="relative h-[70vh] flex items-center justify-center mt-20">
      
      {/* Background Image with a rich, dark overlay gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')" }}
      >
        {/* The Gradient Overlay: Fades from dark at the top, to semi-transparent, to the light background color at the bottom! */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-2xl tracking-tight">
          Discover Your <span className="font-bold text-emerald-400">Perfect</span> Space.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Explore the most exclusive luxury properties, penthouses, and waterfront estates across the globe.
        </p>
      </div>

    </div>
  );
};

export default Hero;