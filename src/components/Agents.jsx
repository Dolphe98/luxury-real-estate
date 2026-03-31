import React from 'react';
import { agents } from '../data/agents';

const Agents = () => {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-4">
            Meet Our <span className="font-bold text-emerald-700">Elite Experts</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our global network of distinguished brokers provides unparalleled access to the world's finest properties.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent) => (
            <div key={agent.id} className="group cursor-pointer">
              {/* Image Container with Grayscale to Color hover effect */}
              <div className="overflow-hidden rounded-sm mb-6 bg-slate-200">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  // 🛠️ FIX: Added 'object-top' here so it stops chopping off his head!
                  className="w-full h-[400px] object-cover object-top transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              
              {/* Agent Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">{agent.name}</h3>
                <p className="text-emerald-700 font-medium text-sm mb-2">{agent.role}</p>
                <p className="text-slate-500 text-sm">{agent.phone}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Agents;