import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ExploreHero } from '../../components/explore/ExploreHero';
import { AttractionsExplorer } from '../../components/explore/AttractionsExplorer';

export default function ExplorePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Modular segment block sequence execution */}
        <Header />
      <main className="flex-grow flex flex-col">
        <ExploreHero />
        <AttractionsExplorer />
      </main>
      <Footer />
    </div>
  );
}
