"use client";

import React from 'react';
import { RecommendedActivity } from '../../app/types/room-details';

interface ActivitiesSliderProps {
  activities: RecommendedActivity[];
}

export const ActivitiesSlider: React.FC<ActivitiesSliderProps> = ({ activities }) => {
  return (
    <div className="w-full bg-white border-t border-gray-100 py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col">
        
        {/* Component Title Row */}
        <div className="mb-10 border-b border-gray-100 pb-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 font-serif">
            Treasure to Choose
          </h3>
        </div>

        {/* Horizontal Flex Grid Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {activities.map((act) => (
            <div 
              key={act.id}
              className="group flex flex-col relative bg-white border border-gray-100 overflow-hidden transition-all duration-300 shadow-xs hover:shadow-lg"
            >
              {/* Card Media Canvas Viewport */}
              <div className="w-full h-44 relative overflow-hidden bg-stone-50">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                />
                
                {/* Popularity Floating Tag Element */}
                {act.isPopular && (
                  <span className="absolute top-3 right-3 bg-[#E02424] text-white font-black text-[9px] tracking-widest uppercase px-2.5 py-1 shadow-sm">
                    Popular Choice
                  </span>
                )}
              </div>

              {/* Card Meta Content Info Sheet */}
              <div className="p-4 flex flex-col items-start bg-[#FCFBF9] border-t border-gray-50">
                <h4 className="text-sm font-bold text-stone-900 mb-1 leading-snug group-hover:text-[#4A0A15] transition-colors">
                  {act.title}
                </h4>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {act.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
