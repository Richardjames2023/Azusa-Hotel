"use client";

import React from 'react';
import { BestRateSection } from './BestRateSection';
import { BrandShowcase } from './BrandShowcase';
import { ExclusiveBenefitsSection } from './ExclusiveBenefitsSection';

export const StackedBenefitsWrapper: React.FC = () => {
  return (
    <div className="w-full bg-[#1E110E] px-4 md:px-8 pb-32 pt-10 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1600px] flex flex-col relative space-y-16">
        
        {/* CARD STACK LEVEL 1: Best Online Rate Guarantee */}
        <div className="sticky top-6 z-10 w-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-[40px] md:rounded-[60px]">
          <BestRateSection />
        </div>

        {/* CARD STACK LEVEL 2: Premium Brand Showcase (Slides over Layer 1) */}
        <div className="sticky top-12 z-20 w-full shadow-[0_15px_45px_rgba(0,0,0,0.25)] rounded-[40px] md:rounded-[60px]">
          <BrandShowcase />
        </div>

        {/* CARD STACK LEVEL 3: Exclusive Member Benefits (Slides over Layer 2) */}
        <div className="sticky top-20 z-30 w-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] rounded-[40px] md:rounded-[60px]">
          <ExclusiveBenefitsSection />
        </div>

      </div>
    </div>
  );
};
