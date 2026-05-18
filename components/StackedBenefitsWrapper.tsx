"use client";

import React from 'react';
import { BestRateSection } from './BestRateSection';
import { BrandShowcase } from './BrandShowcase';
import { ExclusiveBenefitsSection } from './ExclusiveBenefitsSection';

export const StackedBenefitsWrapper: React.FC = () => {
  return (

    <div className="w-full bg-[#1E110E] px-0 pb-32 pt-10 font-sans flex flex-col items-center">
      
      <div className="w-full max-w-none flex flex-col relative space-y-16">
        
        <div className="sticky top-6 z-10 w-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-none overflow-hidden">
          <BestRateSection />
        </div>

        <div className="sticky top-12 z-20 w-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] rounded-none overflow-hidden">
          <ExclusiveBenefitsSection />
        </div>

        <div className="sticky top-20 z-30 w-full shadow-[0_15px_45px_rgba(0,0,0,0.25)] rounded-none overflow-hidden">
          <BrandShowcase />
        </div>

      </div>
    </div>
  );
};
