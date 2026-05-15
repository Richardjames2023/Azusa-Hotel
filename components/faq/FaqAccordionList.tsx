"use client";

import React, { useState } from 'react';
import { FaqItem } from '../../app/types/faq';

interface FaqAccordionListProps {
  items: FaqItem[];
}

export const FaqAccordionList: React.FC<FaqAccordionListProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const policyItems = items.filter(item => item.section === 'Hotel policies');
  const supportItems = items.filter(item => item.section === 'Account and support');

  const renderSection = (title: string, sectionItems: FaqItem[]) => (
    <div className="w-full flex flex-col mb-12">
      <h3 className="text-sm uppercase font-extrabold text-[#4A0A15] tracking-[0.2em] mb-6 border-b border-gray-100 pb-3">
        {title}
      </h3>
      <div className="flex flex-col border border-gray-100 rounded-2xl bg-white shadow-xs overflow-hidden divide-y divide-gray-100">
        {sectionItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="w-full flex flex-col bg-white">
              
              {/* Accordion Trigger Header Bar */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between text-left p-5 md:p-6 hover:bg-gray-50/50 transition-colors focus:outline-none group"
              >
                <span className="text-[13px] md:text-sm font-bold text-stone-900 tracking-wide pr-4 leading-snug group-hover:text-[#4A0A15] transition-colors">
                  {item.question}
                </span>
                <span className={`text-lg font-light text-gray-400 group-hover:text-stone-900 transition-transform duration-300 ${isExpanded ? 'rotate-45 text-[#4A0A15]' : ''} select-none`}>
                  ＋
                </span>
              </button>

              {/* Dynamic Content Panel Expansion Drawer Box */}
              <div 
                className={`grid transition-all duration-300 ease-in-out overflow-hidden text-gray-500 font-medium text-xs md:text-[13px] leading-relaxed tracking-wide bg-stone-50/40 ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 border-t border-gray-100/60 max-w-5xl">
                    {item.answer}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-12 flex flex-col">
      {policyItems.length > 0 && renderSection("Hotel policies", policyItems)}
      {supportItems.length > 0 && renderSection("Account and support", supportItems)}
      {items.length === 0 && (
        <div className="w-full py-16 text-center text-gray-400 font-bold text-sm bg-white border border-gray-100 rounded-2xl shadow-xs">
          No structured policy information answers are present for this specific filter.
        </div>
      )}
    </div>
  );
};
