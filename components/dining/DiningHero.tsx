"use client";

import React from "react";
import Link from "next/link";

export const DiningHero: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFBF9] py-10 md:py-14 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column Aspect: Premium Image Carousel Window */}
        <div className="lg:col-span-6 w-full h-[320px] md:h-[420px] relative overflow-hidden bg-stone-100 rounded-2xl shadow-md group isolate">
          <img
            src="/img/menu-1.webp" 
            alt="Vitas Rio Dining Atmosphere Experience"
            className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-102 transition-transform duration-[1200ms]"
          />
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
            <button className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-[#4A0A15] transition-all pointer-events-auto cursor-pointer focus:outline-none">
              ‹
            </button>
            <button className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-[#4A0A15] transition-all pointer-events-auto cursor-pointer focus:outline-none">
              ›
            </button>
          </div>
        </div>

        {/* Right Column Aspect: Brand Identity Info Typography Sheet */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left lg:pl-6">
          <div className="flex items-center space-x-2 mb-3 select-none">
            <span className="text-xl text-[#4A0A15]">🍽️</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif leading-none">
              Vitas Rio
            </h1>
          </div>

          <div className="flex flex-col space-y-1 text-xs font-bold text-stone-500 uppercase tracking-wider mb-6">
            <span>
              Type of cuisine:{" "}
              <strong className="text-stone-800">
                International • Signature Cuisine
              </strong>
            </span>
          </div>

          <p className="text-stone-600 text-sm font-medium leading-relaxed tracking-wide mb-8 pl-4 border-l-2 border-stone-200 max-w-xl">
            Experience the art of gastronomy grilled on a wood fire at Vitas
            Rio. Savor the rich, smoky depth of our signature Spaghetti
            Bolognese, slow-simmered to perfection over an open flame.
          </p>

          <Link
            href="/menu"
            className="inline-block bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-xs tracking-widest uppercase px-10 py-4 shadow-sm transition-all focus:outline-none rounded-none cursor-pointer text-center select-none"
          >
            See Our Menus
          </Link>
        </div>
      </div>
    </section>
  );
};
