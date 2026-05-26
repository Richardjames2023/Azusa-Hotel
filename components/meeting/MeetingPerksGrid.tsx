import React from 'react';
import Link from 'next/link';

export const MeetingPerksGrid: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Top Solution Pitch Module */}
        <div className="max-w-4xl flex flex-col space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
            Flexible, functional, and impactful Meeting & Event solutions
          </h2>
          <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            As a partner, moment maker, and solution-finder, we understand that flexibility and functionality are key to ensuring we can seamlessly deliver exactly what our M&E partners need to create impactful events.
          </p>
          <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-relaxed tracking-wide">
            We aim to offer the most dynamic, flexible, and functional solutions in the modern meetings and events marketplace—making sure every M&E planner enjoys peace of mind when they partner with Radisson Meetings, whether they are co-creating truly impactful meeting & event or arranging group accommodation.
          </p>
        </div>

        {/* Asymmetrical Perks Split Panel Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F4F4F6] rounded-2xl overflow-hidden p-6 md:p-10 shadow-sm border border-stone-200/40 items-center">
          
          {/* Business Analytics Image Side */}
          <div className="lg:col-span-5 h-[260px] rounded-xl overflow-hidden shadow-md bg-stone-100 border border-gray-200/50">
            <img 
              src="/img/A14.webp" 
              alt="Business Analytics Infographics Data" 
              className="w-full h-full object-cover filter brightness-[0.98]"
            />
          </div>

          {/* Perks Matrix Call To Action Side */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center lg:pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif tracking-tight leading-none mb-3">
              Azusa Meetings Picklist
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A0A15] block mb-4">
              Big or small, perks for all!
            </span>
            <p className="text-gray-600 text-sm md:text-[15px] font-medium leading-relaxed tracking-wide mb-6 max-w-xl">
              Host your next unforgettable event at Azusa Hotel and Apartments. Enjoy added value with perks like complimentary parking, enhanced tea and coffee breaks, and up to three exclusive benefits when you book your event with us.
            </p>
            <Link 
              href="/discover" 
              className="bg-[#4A0A15] text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#36070E] transition-colors shadow-md"
            >
              DISCOVER MORE
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
