"use client";

import React from 'react';

export const AboutIntro: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFBF9] py-12 md:py-16 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-start text-left max-w-4xl">
        
        <h2 className="text-xl md:text-2xl font-bold text-stone-900 font-serif tracking-tight mb-4">
          Flexible, functional, and impactful Meeting & Event solutions
        </h2>
        
        <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-5">
          As a partner, moment maker, and solution-finder, we understand that flexibility and functionality are key to ensuring we can seamlessly deliver exactly what our M&E partners need to create impactful events.
        </p>
        
        <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
          We aim to offer the most dynamic, flexible, and functional solutions in the modern meetings and events marketplace—making sure every M&E planner enjoys peace of mind when they partner with Azusa Meetings, whether they are co-creating truly impactful meetings & events or arranging group accommodation.
        </p>

      </div>
    </section>
  );
};
