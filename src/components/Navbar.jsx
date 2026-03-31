import React from 'react';

const Navbar = () => {
  return (
    // 💎 The Upgrade: A rich, deep gradient replacing the plain white!
    <nav className="fixed w-full z-50 top-0 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 shadow-xl border-b border-emerald-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Updated to White text for dark background */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-light tracking-widest text-white uppercase">
              Aura<span className="font-bold text-emerald-400">Estates</span>
            </span>
          </div>

          {/* Desktop Menu - Updated text colors for contrast */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide">Buy</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide">Rent</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide">Sell</a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide">Agents</a>
          </div>

          {/* Call to Action Button - Adjusted to pop against the dark gradient */}
          <div className="hidden md:flex items-center">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide transition-all shadow-lg shadow-emerald-500/30 transform hover:-translate-y-0.5">
              Contact an Agent
            </button>
          </div>

          {/* Mobile Menu Button - White icon */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;