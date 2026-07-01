import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MeetingHero } from '../../components/meeting/MeetingHero';
import { MeetingPerksGrid } from '../../components/meeting/MeetingPerksGrid';
import { MeetingCoreValues } from '../../components/meeting/MeetingCoreValues';
import { MeetingChoiceGrid } from '../../components/meeting/MeetingChoiceGrid';

export default function MeetingsPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Dynamic parameter-driven booking row bar */}
      <Header />
      
      {/* Core visual layout block stack execution timeline */}
      <main className="flex-grow flex flex-col">
        <MeetingHero />
        <MeetingPerksGrid />
        
        {/* Brought back cleanly with absolute module resolutions */}
        <MeetingCoreValues />
        
        <MeetingChoiceGrid />
      </main>
      <Footer/>
    </div>
  );
}
