
import React from 'react';

export default function MenuOverview() {
  return (
    <section className="w-full bg-[#0F0F11] py-20 md:py-28 flex justify-center items-center border-b border-stone-800/40">
      <div className="w-full max-w-[1300px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Section Panel: Circular Plate Description Details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <span className="text-[10px] font-extrabold text-[#E5C07B] tracking-[0.3em] uppercase block mb-3 font-sans">
            Vita Rio EXQUISITE FLAVOR
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-white font-serif tracking-tight leading-tight mb-6 uppercase max-w-xl">
            A Taste of Home,<br/> Curated in Luxury
          </h2>
          <p className="text-stone-400 text-xs md:text-sm font-normal leading-relaxed mb-8 max-w-md">
           Indulge in a premium dining experience that tastes exactly like home. Made with love, curated for luxury, and shared with the people who matter most to you.
          </p>
        </div>

        {/* Right Section Panel: Floating Circular Meal Card Asset Window */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-[85%] md:w-[420px] aspect-square rounded-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-stone-900 to-black border border-stone-800 p-6 flex items-center justify-center isolate">
            <img 
              src="/img/menu-1.webp" 
              alt="Gourmet Salad Plate Setup" 
              className="w-[95%] h-[95%] object-cover rounded-full filter brightness-[0.95]"
            />
          </div>
          {/* Decorative Minimal Right Vector Navigation Tracker */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-stone-700 hover:border-white text-white rounded-full flex items-center justify-center text-xs transition-colors cursor-pointer focus:outline-none">
            ❯
          </button>
        </div>

      </div>
    </section>
  );
}
