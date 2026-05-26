"use client";

import React from 'react';
import { ValuePropItem } from '../../app/types/meetings';

export const AboutValueProps: React.FC = () => {
  const valuePropsList: ValuePropItem[] = [
    {
      id: "vp-1",
      title: "Our proposals are simple to follow so you always know what to expect, with no unwanted surprises or hidden costs.",
      description: "",
      image: "https://unsplash.com"
    },
    {
      id: "vp-2",
      title: "We have a long, proven track record of delivering successful meetings across many specialty sectors. We hand-pick the perfect properties based on specific criteria required by each individual industry.",
      description: "",
      image: "https://unsplash.com"
    },
    {
      id: "vp-3",
      title: "We offer a choice of blank canvas spaces that can be transformed into immersive events. As local experts, we can help create the memorable big picture imagined by our M&E Partners.",
      description: "",
      image: "https://unsplash.com"
    }
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-center max-w-5xl">
        
        {/* Central Proposition Main Subtitle Header */}
        <div className="text-center flex flex-col items-center mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Why Choose Azusa Meeting halls?
          </h2>
          <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
            At Azusa Meetings, it's personal using our expertise and adaptability, we work closely together and adaptability, we work closely together with our M & E clients as a true partner, making everything easy every step of the way.
          </p>
        </div>

        {/* 3-Column Proposition Grid Row Tracking Matrix Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {valuePropsList.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-left group">
              {/* Media Block Containment */}
              <div className="w-full h-44 relative overflow-hidden bg-stone-50 rounded-xl border border-gray-100 shadow-xs mb-4">
                <img src={item.image} alt="Azusa Venue Prop Feature" className="w-full h-full object-cover" />
              </div>
              {/* Summary Text Content Block */}
              <p className="text-stone-700 text-xs font-semibold leading-relaxed tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
