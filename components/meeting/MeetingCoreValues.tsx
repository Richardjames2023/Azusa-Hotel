"use client";

import React from 'react';
import Image from "next/image";

export const MeetingCoreValues: React.FC = () => {
  const coreValues = [
    {
      title: "Personal",
      desc: "We believe in the invincible power of building close personal relationships, enabling us to act as a true partner.",
      image: "/img/MAP13581.webp"
    },
    {
      title: "Professional",
      desc: "We offer our exceptional professional expertise to drive fresh ideas in addition to supporting and guiding our M&E partners with seamless delivery.",
      image: "/img/MAP13626(1).webp"
    },
    {
      title: "Memorable",
      desc: "We strive to deliver unforgettable meetings and events by crafting positive experiences full of memorable moments to surprise and delight every attendee.",
      image: "/img/MAP13548(1).webp"
    }
  ];

  const benefits = [
    "Real-time availability",
    "360 views of our meeting spaces and bedrooms",
    "The best available rate guarantee",
    "Instant booking confirmation",
    "Easy and secure online payment"
  ];

  const instagramShortcode = "DXPYj9qOMZF";

  return (
    <div className="w-full bg-white py-12 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Core Values 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex flex-col group border border-gray-100 bg-[#FCFBF9] p-5 rounded-2xl shadow-xs transition-shadow hover:shadow-md">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-stone-100 border border-gray-200/40">
                <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              </div>
              <h4 className="text-base font-bold text-stone-900 tracking-tight mb-2">{value.title}</h4>
              <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-relaxed tracking-wide">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Instant Booking Value Proposition Panel (Middle Parabola Accent Curve) */}
       <div className="w-full bg-[#F4F4F6] p-8 md:p-14 rounded-3xl border border-stone-200/40 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 shadow-sm">
      
          {/* LEFT COLUMN: Visual Media Thumbnail Link Frame */}
          <div className="lg:col-span-5 relative w-full h-64 sm:h-72 md:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden flex items-center justify-center shadow-inner group bg-black">
            
            <a 
              href={`https://www.instagram.com/reel/${instagramShortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4A0A15] rounded-2xl"
              aria-label="Watch our booking video on Instagram"
            >
              <Image 
                src="/img/MAP13626(1).webp" 
                alt="Booking visual media preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center bg-white/20 backdrop-blur-md text-white group-hover:bg-white group-hover:text-stone-900 group-hover:border-white transition-all text-xl pl-1 shadow-xl">
                ▶
              </div>
            </a>
         </div>

          {/* RIGHT COLUMN: Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center lg:pl-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 font-serif leading-snug mb-5">
              Save valuable time with instant online booking for groups, meetings and events
            </h3>
            <ul className="flex flex-col space-y-2.5 mb-8 text-xs md:text-[13px] font-bold text-gray-600 tracking-wide">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center space-x-2.5">
                  <span className="text-[#4A0A15] text-sm">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="border border-[#4A0A15] text-[#4A0A15] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#4A0A15] hover:text-white transition-all shadow-xs">
              SEE MORE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
