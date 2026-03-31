import React from 'react';

const PropertyGrid = ({ properties }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Section Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-light text-slate-900 tracking-tight">
            Exclusive <span className="font-bold text-emerald-700">Listings</span>
          </h2>
          <p className="text-slate-500 mt-2">Showing {properties.length} luxury properties.</p>
        </div>
      </div>

      {/* 🛑 If the filter finds ZERO results, show this elegant empty state! */}
      {properties.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-16 text-center shadow-sm">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No properties found</h3>
          <p className="text-slate-500">Try adjusting your search filters to find your perfect home.</p>
        </div>
      ) : (
        /* 🏡 The Grid: 1 column on mobile, 2 on tablets, 3 on large screens */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* We map over the array that App.jsx handed down to us! */}
          {properties.map((property) => (
            // 'group' class lets us trigger animations on child elements when hovering the parent card
            <div key={property.id} className="group bg-white rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Featured Badge */}
                {property.isFeatured && (
                  <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-md">
                    Featured
                  </div>
                )}
                {/* Property Type Badge */}
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded shadow-md">
                  {property.type}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-700 mb-1">
                  {/* JavaScript automatically adds the commas! */}
                  ${property.price.toLocaleString()}
                </h3>
                <h4 className="text-lg font-bold text-slate-900 mb-2 truncate">{property.title}</h4>
                <p className="text-sm text-slate-500 mb-4 truncate">{property.address}</p>
                
                {/* Property Stats (Beds, Baths, Sqft) */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>

                {/* Demo Action Button */}
                <button 
                  onClick={() => alert(`Demo Mode: In a live app, this would route to a dynamic property page for ${property.title}.`)}
                  className="w-full mt-6 bg-slate-50 hover:bg-emerald-50 text-emerald-700 border border-slate-200 hover:border-emerald-200 font-bold py-3 rounded transition-colors"
                >
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;