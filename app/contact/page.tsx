import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { HeroSection} from '../../components/HeroSection';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#1E110E] flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
