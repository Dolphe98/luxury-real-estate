import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import PropertyGrid from './components/PropertyGrid';
import Agents from './components/Agents';   // 🔌 1. Imported Agents
import Contact from './components/Contact'; // 🔌 2. Imported Contact Form
import Footer from './components/Footer';

// Import our fake database
import { properties } from './data/properties';

function App() {
  // 🏠 GLOBAL STATE: Holds the properties currently being displayed
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // ⚙️ THE FILTER ENGINE
  // This runs whenever the user clicks "Search" inside the FilterBar
  const handleFilterProperties = (filters) => {
    const results = properties.filter(property => {
      // 1. Check Property Type
      const matchType = filters.type === 'All' || property.type === filters.type;
      
      // 2. Check Max Price
      const matchPrice = property.price <= filters.price;
      
      // 3. Check Minimum Bedrooms
      const matchBeds = property.beds >= filters.beds;

      // Only return the property if it passes ALL three tests!
      return matchType && matchPrice && matchBeds;
    });

    // Update our master state with the filtered array
    setFilteredProperties(results);
  };

  return (
    // 🏗️ The Flexbox architecture here ensures the Footer stays at the bottom
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white flex flex-col">
      
      <Navbar />
      
      {/* 🏗️ flex-grow forces this main section to take up all available space */}
      <main className="flex-grow">
        <Hero /> 
        
        {/* Pass the engine down to the FilterBar so it can trigger the logic */}
        <FilterBar onFilter={handleFilterProperties} />
        
        {/* Pass the filtered array down to the Grid to display the results */}
        <PropertyGrid properties={filteredProperties} />

        {/* 🌟 New Trust & Lead Generation Sections */}
        <Agents />
        <Contact />
      </main>

      {/* The Trust Signal Footer */}
      <Footer />
      
    </div>
  );
}

export default App;