"use client";

import React from 'react';
import Link from 'next/link';
import { RateStep } from '../app/types/benefits';

const STEPS_DATA: RateStep[] = [
  {
    number: 1,
    title: "Found a lower price...",
    description: "within 24 hours of booking with us? Make sure the rate matches the same room, dates, and conditions."
  },
  {
    number: 2,
    title: "Submit your claim",
    description: "Visit our contact section and select \"Best Online Rates Guarantee (BORG) claim\" topic. Our customer care team will review and validate your request."
  },
  {
    number: 3,
    title: "We'll match it + 25% off",
    description: "If validated, we'll match the lower rate and apply an additional 25% discount to your stay."
  }
];

export const BestRateSection: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-none py-12 md:py-16 border border-gray-100 shadow-xl flex flex-col items-center">
      
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col">
        
        {/* Upper Control Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900">
            Best Online Rate Guarantee
          </h2>
          
          <Link 
            href="/rate-guarantee" 
            className="inline-flex items-center justify-center border border-[#3B0E17] text-[#3B0E17] font-bold text-[11px] tracking-wider uppercase rounded-full px-7 py-2 hover:bg-[#3B0E17] hover:text-white transition-all transform hover:-translate-y-0.5 duration-200 self-start sm:self-auto shadow-sm"
          >
            See More
          </Link>
        </div>

        <p className="text-sm md:text-base font-bold text-gray-700 tracking-wide mb-10 max-w-4xl">
          If you find a lower rate, we'll match it and give you an additional 25% discount on your stay.
        </p>

        {/* Steps Matrix List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {STEPS_DATA.map((step) => (
            <div 
              key={step.number}
              className="bg-[#FCFBF9] border border-gray-200/50 rounded-2xl p-6 flex items-start space-x-5 shadow-sm transform transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Step numeric indicator token circle badge */}
              <div className="w-10 h-10 rounded-full border-2 border-stone-900 flex items-center justify-center font-serif text-lg font-black text-stone-900 flex-shrink-0 select-none bg-white">
                {step.number}
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <h4 className="text-[15px] font-extrabold text-stone-900 tracking-tight leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs md:text-[13px] font-bold text-gray-500 leading-relaxed tracking-wide">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
