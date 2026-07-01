// components/MenuHero.tsx
import React from 'react';
import SubNav from '../subNav';


export default function MenuHero() {
  return (
    <section className="w-full bg-[#141416] py-6 lg:py-4 flex flex-col items-center justify-center border-b border-stone-800/40 relative">
      <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Aspect: Premium Editorial Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#E5C07B] font-serif uppercase leading-tight mb-6 max-w-xl">
            You & Your Family<br />Home tasty<br />Meal
          </h1>
          <p className="text-stone-400 text-xs md:text-sm font-normal leading-relaxed tracking-wide mb-8 max-w-md">
            Gather around a table built on tradition. We serve expertly crafted, comforting gourmet dishes designed to bring your family closer together over an unforgettable dining experience.
          </p>
        </div>

        {/* Right Aspect: Hero Plate Media Window Frame */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[540px] aspect-square rounded-full overflow-hidden bg-radial from-stone-800/30 to-transparent flex items-center justify-center p-4">
            <img 
               src="/img/menu-1.webp" 
              alt="Gourmet Master Burger Plate" 
              className="w-[90%] h-[90%] object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] transform hover:scale-103 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
      <SubNav/>
    </section>
  );
}
