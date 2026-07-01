
import React from 'react';
import { LuConciergeBell, LuWifi, LuKey, LuCoffee, LuWaves, LuSmartphone } from 'react-icons/lu';

export const AboutIntro: React.FC = () => {
  const facilityItems = [
    { label: 'Room Services', icon: <LuConciergeBell className="w-6 h-6" /> },
    { label: 'Wi-Fi Internet', icon: <LuWifi className="w-6 h-6" /> },
    { label: 'Smart Key', icon: <LuKey className="w-6 h-6" /> },
    { label: 'Bar', icon: <LuCoffee className="w-6 h-6" /> },
    { label: 'Swimming Pool', icon: <LuWaves className="w-6 h-6" /> },
    { label: 'Wi-Fi Internet', icon: <LuSmartphone className="w-6 h-6" /> },
  ];

  return (
    <section className="w-full bg-[#FCFBF9] py-20 md:py-24 border-t border-b border-gray-100 flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        
        {/* Section Header Text */}
        <div className="text-center max-w-2xl mb-12">
          <h3 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight mb-3 uppercase">
            Hotel's Facilities
          </h3>
          <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed">
            Proactively morph optimal intermediaries rather than accurate expertise. Intritively progress resources rather than resource-leveling.
          </p>
        </div>

        {/* 6-Column Card Matrix Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facilityItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100/60 p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] rounded-sm group hover:shadow-md transition-all duration-300 min-h-[140px]"
            >
              <div className="text-[#cba865] mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="w-4 h-[1px] bg-gray-200 mb-3" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700 font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
