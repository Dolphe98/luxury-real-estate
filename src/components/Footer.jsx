import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  // 📧 Demo Mode: Simulating a high-end newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Demo Mode: In a live production environment, ${email} would be securely routed to a real estate CRM like Salesforce or Follow Up Boss.`);
    setEmail(''); // Clear the input after "subscribing"
  };

  // ⬆️ Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 mt-auto border-t border-emerald-900/30">
      
      {/* Back to top banner */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-slate-900 hover:bg-emerald-900/50 text-xs font-bold py-4 text-center tracking-widest uppercase transition-colors focus:outline-none"
      >
        Back to top
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-2xl font-light tracking-widest text-white uppercase block mb-6">
              Aura<span className="font-bold text-emerald-500">Estates</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Curating the world's most exclusive luxury properties, penthouses, and private islands for a highly discerning global clientele.
            </p>
          </div>

          {/* Column 2: Global Offices */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Global Offices</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>📍 Beverly Hills, CA</li>
              <li>📍 Manhattan, NY</li>
              <li>📍 Mayfair, London</li>
              <li>📍 Dubai Marina, UAE</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Properties</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Off-Market Listings</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Waterfront Estates</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Urban Penthouses</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sell Your Home</a></li>
            </ul>
          </div>

          {/* Column 4: The Lead Capture (React State) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Private Portfolio</h3>
            <p className="text-sm text-slate-400 mb-4">
              Join our exclusive registry to receive off-market listings before they go public.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                className="bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-sm text-sm tracking-wider uppercase transition-colors"
              >
                Request Access
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Aura Estates International. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Fair Housing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;