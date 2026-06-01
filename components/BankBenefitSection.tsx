"use client";

import React from 'react';
import Link from 'next/link';

export const BankBenefitSection: React.FC = () => {
  return (

    <section className="w-full bg-[#F4F4F6] h-auto lg:h-[390px] font-sans flex flex-col items-center justify-center border-b border-gray-200/50 relative overflow-hidden">
      
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full pt-8 pb-14 lg:pt-0 lg:pb-8">

        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left h-full">
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-stone-900 mb-2 font-serif">
            Unlock Exclusive Benefits
          </h2>
          
          <p className="text-xs md:text-sm font-bold text-gray-700 tracking-wide leading-relaxed max-w-xl mb-3">
            Enjoy exclusive discounts when you pay with your Providus Bank card, and keep an eye on our seasonal offers designed to make your next visit even more memorable.
          </p>
          
          <span className="text-[9px] md:text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-5">
            Terms and Conditions Apply
          </span>

          {/* Core Action Button for the section */}
          <Link 
          href="/deals"
          className="bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-xs tracking-widest uppercase px-8 py-3.5 shadow-sm transition-colors duration-200 transform active:scale-98 rounded-none cursor-pointer">
            Claim Your Discount 
          </Link>

        </div>

        <div className="lg:col-span-5 flex items-end justify-center lg:justify-end w-full h-[240px] lg:h-full self-end translate-y-14 lg:translate-y-8">
          {/* IMAGE CONTAINMENT VIEWPORT */}
          <div className="relative w-full h-full overflow-hidden select-none pointer-events-none rounded-none flex items-end justify-center lg:justify-end">
            
            {/* Promotional Bank Card Asset Representation */}
            <img 
              src="/img/hand-card.png" 
              alt="Providus Bank Platinum Card Partnership" 
              className="w-auto h-full max-h-full object-contain object-bottom filter drop-shadow-xl transition-all duration-500 ease-out"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src = "https://unsplash.com";
              }}
            />

          </div>
        </div>

      </div>

    </section>
  );
};
