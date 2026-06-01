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
          We have been planning events long enough to understand how to make your events seamless and stress-free. We are a partner that listens, the team that solves problems, and the people who make sure your event runs exactly the way you imagined it. 
        </p>
        
      </div>
    </section>
  );
};
