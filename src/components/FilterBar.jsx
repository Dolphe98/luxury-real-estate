import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  // Local state to track what the user is selecting before they hit search
  const [propertyType, setPropertyType] = useState('All');
  const [maxPrice, setMaxPrice] = useState('Any');
  const [bedrooms, setBedrooms] = useState('Any');

  const handleSearch = (e) => {
    e.preventDefault();
    // Send the selected filters back up to the master brain (App.jsx)
    onFilter({
      type: propertyType,
      price: maxPrice === 'Any' ? Infinity : Number(maxPrice),
      beds: bedrooms === 'Any' ? 0 : Number(bedrooms)
    });
  };

  return (
    // The UI Trick: -mt-16 pulls this card up so it overlaps the Hero section!
    <div className="relative -mt-16 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-2xl p-6 border border-slate-100">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
          
          {/* Property Type Dropdown */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Property Type</label>
            <select 
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="All">All Types</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
            </select>
          </div>

          {/* Max Price Dropdown */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Max Price</label>
            <select 
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="Any">Any Price</option>
              <option value="1000000">$1,000,000</option>
              <option value="2000000">$2,000,000</option>
              <option value="3000000">$3,000,000</option>
              <option value="5000000">$5,000,000+</option>
            </select>
          </div>

          {/* Bedrooms Dropdown */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bedrooms</label>
            <select 
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="Any">Any Beds</option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-1/4">
            <button 
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FilterBar;