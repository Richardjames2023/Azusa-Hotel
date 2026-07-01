
import React from "react";

export const AboutPickList: React.FC = () => {
  return (
    <section className="w-full bg-[#161719] py-20 md:py-28 flex justify-center items-center">
      <div className="w-full max-w-[1100px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-auto bg-stone-800 rounded-sm overflow-hidden min-h-[300px]">
          <img 
            src="/img/A7.webp" 
            alt="Luxury Bedroom Suite" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.02]"
          />
        </div>

        {/* Right Side Column Container: Professional Text Card Details Layout */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start text-left rounded-sm shadow-2xl">
          <span className="text-[10px] font-extrabold text-[#cba865] tracking-[0.3em] uppercase block mb-3 font-sans">
            STAYCATION REMINDER
          </span>
          <h3 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-6 uppercase">
            Sometimes, the best decision <br /> you can make is pause.
          </h3>

          <blockquote className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed italic border-l-2 border-[#cba865] pl-4 mb-6 max-w-xl">
            "To step away from the noise. To rest properly. This is your reminder."
          </blockquote>

          <p className="text-gray-400 text-[11px] leading-relaxed mb-8 max-w-xl font-sans">
            Call{" "}
            <a 
              href="tel:+2349160683225" 
              className="font-bold text-stone-700 hover:text-[#cba865] underline decoration-stone-300 transition-colors"
            >
              +234 916 068 3225
            </a>{" "}
            to book a reservation and secure your premium sanctuary space in Abuja today.
          </p>

          {/* Profile Card Footer Layout row */}
          <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-100 w-full">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img
                src="/img/A10.webp"
                alt="Azusa Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-stone-900 tracking-wide font-serif">
                Azusa Sanctuary Hub
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans mt-0.5">
                Hospitality Team
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

