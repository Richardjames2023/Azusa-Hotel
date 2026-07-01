// app/restaurant/page.tsx
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import MenuHero from '../../components/menu/MenuHero';
import MenuOverview from '../../components/menu/MenuOverview';
import MenuGridMatrix from '../../components/menu/MenuGridMatrix';

export default function RestaurantMenuPage() {
  return (
    <>
    <Header/>
    <main className="w-full bg-[#0F0F11] min-h-screen text-stone-200 overflow-x-hidden antialiased select-none">
      <MenuHero />
      <MenuOverview />
      <MenuGridMatrix />
    </main>
    <Footer/>
    </>
  );
}
