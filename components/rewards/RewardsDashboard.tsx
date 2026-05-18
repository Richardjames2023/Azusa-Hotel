"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RedemptionPerk, LoyaltyTier } from '../../app/types/rewards';
import REWARDS_JSON from '../../app/data/rewards.json';

// Import crisp semantic vector graphics from your newly installed package
import { 
  LuShieldAlert, 
  LuBed, 
  LuUtensils, 
  LuSparkles, 
  LuArrowUpRight 
} from 'react-icons/lu';

const PERKS_DATABASE = REWARDS_JSON as RedemptionPerk[];

// Helper component to cleanly map item type keys to true react-icons components
const RedemptionIconRenderer: React.FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case 'Stay':
      return <LuBed className="w-5 h-5 text-[#4A0A15]" />;
    case 'Dining':
      return <LuUtensils className="w-5 h-5 text-[#4A0A15]" />;
    case 'Upgrade':
      return <LuSparkles className="w-5 h-5 text-[#4A0A15]" />;
    default:
      return <LuSparkles className="w-5 h-5 text-[#4A0A15]" />;
  }
};

export const RewardsDashboard: React.FC = () => {
  // Mock active user tier states matching luxury project tokens
  const [userTier] = useState<LoyaltyTier>({
    name: 'Premium',
    pointsAccrued: 12450,
    pointsToNextTier: 2550,
    multiplier: 'x1.5 Points on Stays'
  });

  const [activeFilter, setActiveFilter] = useState<'ALL' | 'Stay' | 'Dining' | 'Upgrade'>('ALL');

  const filteredPerks = activeFilter === 'ALL'
    ? PERKS_DATABASE
    : PERKS_DATABASE.filter(perk => perk.category === activeFilter);

  const progressPercentage = (userTier.pointsAccrued / (userTier.pointsAccrued + userTier.pointsToNextTier)) * 100;

  return (
    <section className="w-full bg-[#1E110E] font-sans flex flex-col items-center">
      <div className="w-full bg-white p-8 md:p-16 shadow-2xl rounded-none">
        
        {/* UPPER TITLE HEADER LINE */}
        <div className="max-w-[1440px] mx-auto w-full border-b border-gray-100 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 px-6 md:px-12">
          <div>
            <span className="text-[11px] font-extrabold text-[#4A0A15] uppercase tracking-[0.25em] block mb-2">
              Azusa Rewards Core
            </span>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-stone-900 font-serif leading-none">
              Membership Portal Dashboard
            </h1>
          </div>
          <div className="bg-amber-50 border border-amber-200/60 rounded-none px-4 py-2.5 text-xs font-bold text-amber-900 flex items-center space-x-2 w-fit">
            <LuShieldAlert className="w-4 h-4 text-amber-700" />
            <span>Tier Status Active: {userTier.name} Member</span>
          </div>
        </div>

        {/* METRICS & STATUS DATA MATRIX SPLIT */}
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start px-6 md:px-12">
          
          {/* Left Column: Radial Progress Gauge Track Box */}
          <div className="lg:col-span-5 bg-[#FCFBF9] border border-gray-100 rounded-none p-6 md:p-8 flex flex-col items-center text-center shadow-xs">
            <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider mb-6">Tier Progression</h3>
            
            {/* Visual Progress Arc Ring Indicator */}
            <div className="relative w-44 h-44 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="#E5E7EB" strokeWidth="6" fill="transparent" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke="#4A0A15" 
                  strokeWidth="7" 
                  fill="transparent" 
                  strokeDasharray="263"
                  strokeDashoffset={263 - (263 * progressPercentage) / 100}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-[#4A0A15] font-serif">{userTier.pointsAccrued.toLocaleString()}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Points Balance</span>
              </div>
            </div>

            <p className="text-xs md:text-[13px] font-bold text-gray-500 leading-relaxed max-w-xs">
              You are exactly <span className="text-[#4A0A15] font-extrabold">{userTier.pointsToNextTier.toLocaleString()} points</span> away from upgrading your status to <span className="text-stone-900 font-extrabold">VIP Tier</span>.
            </p>
            <span className="mt-4 text-[11px] text-amber-800 bg-amber-50 px-3 py-1 rounded-none font-bold uppercase tracking-wide">
              {userTier.multiplier}
            </span>
          </div>

          {/* Right Column: Corporate Benefits & Quick Reference Fields */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <div className="bg-[#4A0A15] text-white rounded-none p-6 md:p-8 flex flex-col justify-between shadow-md h-56 transform transition-all duration-300 lg:hover:-translate-y-1">
              <div>
                <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Active Multipliers</span>
                <h4 className="text-xl font-bold font-serif mt-2 mb-3">Earn on everything</h4>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Collect 10 points per dollar spent on room stays, dining, lounge tabs, and selected boutique services within our Abuja properties.
                </p>
              </div>
              <span className="text-xs font-bold text-[#D4AF37] inline-flex items-center space-x-1 cursor-pointer hover:opacity-80 w-fit">
                <span>View Earning Matrix</span>
                <LuArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="bg-[#FCFBF9] border border-gray-100 text-stone-900 rounded-none p-6 md:p-8 flex flex-col justify-between shadow-xs h-56 transform transition-all duration-300 lg:hover:-translate-y-1">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Digital Operations</span>
                <h4 className="text-xl font-bold font-serif mt-2 mb-3">Fast Redemptions</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  Instantly cash in points balance directly during booking checkout pathways for complimentary suite rewards nights or localized spa entries.
                </p>
              </div>
              <span className="text-xs font-bold text-[#4A0A15] inline-flex items-center space-x-1 cursor-pointer hover:opacity-80 w-fit">
                <span>How It Works</span>
                <LuArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

        {/* LOWER SEGMENT: Interactive Redemption Marketplace Grid */}
        <div className="max-w-[1440px] mx-auto w-full border-t border-gray-100 pt-10 px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">
              Redeem Balance Perks
            </h3>
            
            {/* Filter Pill Row */}
            <div className="flex flex-wrap gap-1.5 text-[11px] font-bold uppercase tracking-wider">
              {(['ALL', 'Stay', 'Dining', 'Upgrade'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 border transition-colors focus:outline-none rounded-none ${
                    activeFilter === filter
                      ? 'bg-stone-900 border-stone-900 text-white'
                      : 'border-gray-200 text-gray-500 bg-gray-50/50 hover:border-gray-400 hover:text-stone-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Row Matrix List displaying available perks loop */}
          <div className="flex flex-col space-y-4">
            {filteredPerks.map((perk) => (
              <div 
                key={perk.id}
                className="w-full bg-white border border-gray-100 rounded-none p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 lg:hover:shadow-md lg:hover:border-gray-200/80"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FCFBF9] border border-gray-100 flex items-center justify-center shadow-inner select-none flex-shrink-0 rounded-none">
                    {/* Render matching Lucide vectors dynamically */}
                    <RedemptionIconRenderer category={perk.category} />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-sm font-bold text-stone-900 tracking-tight leading-tight mb-1">
                      {perk.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">
                      Category: {perk.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 flex-wrap sm:flex-nowrap">
                  <div className="flex flex-col sm:items-end">
                    <span className="text-sm font-extrabold text-[#4A0A15] font-serif">
                      {perk.pointsRequired.toLocaleString()}
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest -mt-0.5">Points Needed</span>
                  </div>

                  <button 
                    disabled={!perk.isAvailable || userTier.pointsAccrued < perk.pointsRequired}
                    className={`px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest transition-all rounded-none ${
                      perk.isAvailable && userTier.pointsAccrued >= perk.pointsRequired
                        ? 'bg-[#4A0A15] text-white lg:hover:bg-[#36070E] shadow-sm cursor-pointer'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200/30'
                    }`}
                  >
                    {perk.isAvailable ? 'Redeem Perk' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
