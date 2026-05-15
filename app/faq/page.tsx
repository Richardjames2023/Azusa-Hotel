"use client";

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FaqHero } from '../../components/faq/FaqHero';
import { FaqAccordionList } from '../../components/faq/FaqAccordionList';
import { FaqCategory, FaqItem } from '../../app/types/faq';

import FAQS_DATABASE_JSON from '../data/faqs.json';

const FAQS_DATABASE = FAQS_DATABASE_JSON as FaqItem[];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('General hotel information');

  const filteredFaqs = FAQS_DATABASE.filter(faq => faq.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#FCFBF9] flex flex-col overflow-x-hidden">
        <Header />
      <main className="flex-grow flex flex-col">
        {/* Upper visual identity banner handling parameters state changes */}
        <FaqHero 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {/* Lower dynamic accordion policy matrix display list grid */}
        <FaqAccordionList items={filteredFaqs} />
      </main>
        <Footer />
    </div>
  );
}
