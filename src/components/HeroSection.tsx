
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center tesla-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="container mx-auto px-6 z-20 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tesla Tech Rangers</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join our elite team of technical specialists dedicated to sustainable innovation and field operations
        </p>
        <button className="bg-tesla-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
          Explore Opportunities
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 z-20">
        <a href="#role" className="animate-bounce text-white/90 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
