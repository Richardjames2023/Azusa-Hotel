// app/restaurant/page.tsx
"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DiningHero } from '@/components/dining/DiningHero';
import SubNav from '@/components/subNav';
import { DiningAbout } from '@/components/dining/DiningAbout';
import { ChefSchedule } from '@/components/dining/ChefSchedule';
import { DiningGalleryMap } from '@/components/dining/DiningGalleryMap';

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      
      {/* GLOBAL TOP NAVIGATION APP HEADER */}
      <Header />

      {/* Main Culinary Showcase Hero Banner */}
      <DiningHero />

      {/* Interactive Middle Filter Tab Bar */}
      <SubNav />

      {/* Narrative Copy Segment Description */}
      <DiningAbout />

      {/* Chef Information Profiler & Schedules Section */}
      <ChefSchedule />

      {/* Lower Gallery Strip, Instagram Ribbon, and Abuja Location Map */}
      <DiningGalleryMap />

      {/* GLOBAL BOTTOM STICKY REVENUE NAVFOOTER */}
      <Footer />

    </main>
  );
}
