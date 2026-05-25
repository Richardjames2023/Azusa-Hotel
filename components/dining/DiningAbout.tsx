"use client";

import React from 'react';

export const DiningAbout: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFBF9] py-14 md:py-20 border-b border-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Aspect Header Panel Title (5/12 Width) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif tracking-tight text-stone-900 leading-tight">
            Enjoy A Culinary Journey <br className="hidden md:inline"/>
            at Vitas Rio During Your Stay <br className="hidden md:inline"/>
            in Abuja
          </h2>
        </div>

        {/* Right Aspect Meta Narrative Body Copy (7/12 Width) */}
        <div className="lg:col-span-7 flex flex-col space-y-5 text-stone-600 text-sm font-medium leading-relaxed tracking-wide text-left lg:pl-6">
          <p>
            Savor vibrant flavors at the all-day restaurant, Vitas Rio. Our wood-fired cooking creates an unforgettable culinary experience with delightful meat, fish, and veggie dishes prepared to perfection.
          </p>
          <p className="text-gray-400">
            Unwind and appreciate the sophisticated decor and welcoming atmosphere. With ambient live music and calming window views of the surrounding nature, a visit to Vitas Rio ensures memorable moments.
          </p>
        </div>

      </div>
    </section>
  );
};
