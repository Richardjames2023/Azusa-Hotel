import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RewardsDashboard } from '../../components/rewards/RewardsDashboard';

export default function RewardsPage() {
  return (
    <div className="w-full min-h-screen bg-[#1E110E] flex flex-col overflow-x-hidden pt-6">
        <Header />
      <main className="flex-grow flex flex-col">
        <RewardsDashboard />
      </main>
        <Footer />
    </div>
  );
}
