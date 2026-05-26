"use client";

import React from 'react';

export const AboutPickList: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* INNER GRID BLOCK CONTAINER */}
        <div className="w-full max-w-4xl border border-gray-100 bg-[#FCFBF9] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-none shadow-sm">
          
          {/* Left Side: Component Visual Representation */}
          <div className="md:col-span-5 w-full aspect-[4/3] relative overflow-hidden bg-stone-100 rounded-xl shadow-xs">
            <img 
              src="https://unsplash.com" 
              alt="Azusa Interactive Picklist Matrix Options" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Information Content Description */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif mb-2">
              Azusa Meetings Picklist
            </h3>
            
            {/* FIXED: Balanced the opening span tag with its correct matching closing span element to stop the Syntax Error */}
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wide block mb-4">
              Big or small, perks for all!
            </span>
            
            <p className="text-stone-500 text-xs font-medium leading-relaxed tracking-wide mb-6">
              Find your perfect bundle choice layout at Azusa Hotel and Apartments. Enjoy added value with perks like complimentary parking, extra breakout spaces, or tailored technical assistance vectors when you book your event with us.
            </p>
            
            {/* CTA action trigger */}
            <button className="bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-[11px] tracking-widest uppercase px-8 py-3.5 shadow-sm transition-colors rounded-none cursor-pointer border-none">
              Explore Picklist
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
