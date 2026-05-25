"use client";

import React from 'react';
import { LuClock } from 'react-icons/lu';

export const ChefSchedule: React.FC = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20 border-b border-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col gap-16">
        
        {/* PART 1: Chef Profile Grid Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Summary Info Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            <h3 className="text-2xl font-serif font-normal text-stone-900 tracking-tight leading-tight mb-5">
              Discover Vitas Rio Through <br />
              Chef Tunde Okoro
            </h3>
            <div className="flex flex-col space-y-4 text-stone-600 text-sm font-medium leading-relaxed tracking-wide border-l-2 border-stone-200 pl-4 max-w-xl">
              <p>
                Indulge in the exceptional flavors of Vitas Rio, where Chef Tunde Okoro, mentored by the industry's most esteemed culinary masters, crafts a menu that redefines modern gastronomy.
              </p>
              <p className="italic text-gray-400 font-serif">
                "Each dish is a journey of taste and innovation," says Chef Okoro, promising an unforgettable dining experience in the heart of Abuja.
              </p>
            </div>
          </div>

          {/* Chef Media Asset Slots Panel */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-3 items-stretch order-1 lg:order-2 w-full h-[280px]">
            <div className="col-span-7 relative overflow-hidden bg-stone-50 border border-gray-100 shadow-sm rounded-xl">
              <img src="/images/suite_bed_front.png" alt="Chef Tunde Okoro plating signature cuisine" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-5 relative overflow-hidden bg-stone-50 border border-gray-100 shadow-sm rounded-xl">
              <img src="/images/suite_bed_side.png" alt="Signature grilled fire steak dish look" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* PART 2: Opening Hours Information Sheet Card */}
        <div className="w-full flex flex-col items-start text-left">
          <h3 className="text-lg font-bold font-serif text-stone-900 tracking-wide mb-5">
            Opening hours
          </h3>
          
          <div className="w-full max-w-2xl bg-[#FCFBF9] border border-stone-200/40 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col items-start gap-3 rounded-xl relative overflow-hidden">
            <span className="text-xs font-black uppercase tracking-widest text-[#4A0A15]">Restaurant</span>
            <div className="flex items-center text-xs font-bold text-stone-700 tracking-wide mt-1">
              <LuClock className="w-4 h-4 text-amber-600 mr-2.5 flex-shrink-0" />
              <span>Daily 12:00 pm - 12:00 am</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
