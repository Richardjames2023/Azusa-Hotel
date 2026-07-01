"use client";

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SubNav from '@/components/subNav';
import { BlogFeatured } from '@/components/blog/BlogFeatured';
import { BlogGridCard } from '@/components/blog/BlogGridCard';
import { BlogPostCard } from '@/app/types/blog';

export default function BlogArchivePage() {
  
  // 1. Featured Top Main Article Instance
  const featuredArticle: BlogPostCard = {
    id: "f-1",
    title: "The Four Best Places for Vacation in October",
    category: "Destination",
    description: "Whether you are looking for a vibrant cultural experience in Abuja, a relaxing stay near the scenic Jabi Lake, golden afternoons at Millennium Park, or an adventurous hike up Zuma Rock, October is the ideal month to explore the capital. Keep reading to find out which are the best places to visit in October with Azusa Hotels as the perfect base for your Nigerian getaway.",
    image: "/img/A12.webp",
    date: "19 Jul 2026",
    readTime: "5 min to read",
    href: "/blog/four-best-places-vacation-october"
  };

  // 2. Continuous Archive Database Array exactly matching your image row sets
  const archiveArticles: BlogPostCard[] = [
    {
      id: "arc-1",
      title: "Auckland Tips from a Local",
      category: "Destination",
      image: "/images/azusa2.jpg",
      readTime: "5 min to read",
      href: "/blog/auckland-tips-local"
    },
    {
      id: "arc-2",
      title: "What are carbon removal credits?",
      category: "#LifeAtRadisson",
      image: "/images/suite_main.png",
      readTime: "5 min to read",
      href: "/blog/carbon-removal-credits"
    },
    {
      id: "arc-3",
      title: "Discovering Lyon: A Journey Through History, Silk, and Cour des Loges Lyon, ...",
      category: "Destination",
      image: "/images/suite_bed_side.png",
      readTime: "5 min to read",
      href: "/blog/discovering-lyon-journey"
    },
    {
      id: "arc-4",
      title: "Kebabs in India: A Flavourful Journey Through Time, Tradition & Taste",
      category: "Food & Drink",
      image: "/images/suite_bed_front.png",
      readTime: "7 min to read",
      href: "/blog/kebabs-india-flavourful-journey"
    },
    {
      id: "arc-5",
      title: "Noida International Airport: India's New Global Gateway Taking Shape",
      category: "Destination",
      image: "/images/hero-bg.jpg",
      readTime: "6 min to read",
      href: "/blog/noida-international-airport"
    },
    {
      id: "arc-6",
      title: "Top 10 Cricket Stadiums in India Every Fan Should Visit At least Once",
      category: "#LifeAtRadisson",
      image: "/images/azusa2.jpg",
      readTime: "7 min to read",
      href: "/blog/top-10-cricket-stadiums-india",
      isLargeFeatured: true // Triggers full horizontal column width match natively
    },
    {
      id: "arc-7",
      title: "Less is more: Verified Net Zero Hotels embrace minimal waste operations",
      category: "#LifeAtRadisson",
      image: "/images/suite_main.png",
      readTime: "5 min to read",
      href: "/blog/less-is-more-net-zero-hotels"
    },
    {
      id: "arc-8",
      title: "Day trips from Amsterdam: discover hidden gems",
      category: "Destination",
      image: "/images/suite_bed_side.png",
      readTime: "5 min to read",
      href: "/blog/day-trips-amsterdam-hidden-gems"
    }
  ];

  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      
      {/* Global Top Navbar */}
      <Header />

      {/* 1. Upper Dynamic Editorial Hero Banner */}
      <BlogFeatured article={featuredArticle} />
      <SubNav/>

      {/* 2. Structured Layout Archives Grid Section */}
      <section className="w-full bg-[#FCFBF9] py-12 md:py-16 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          
          {/* Row Block 1: First 3 Standard Grid Items */}
          {archiveArticles.slice(0, 3).map((post) => (
            <BlogGridCard key={post.id} post={post} />
          ))}

          {/* Row Block 2: Middle 2 Matrix Items (Spans 2/3 and 1/3 automatically via flex parameters) */}
          <div className="col-span-1 md:col-span-2">
            <BlogGridCard post={archiveArticles[3]} />
          </div>
          <div className="col-span-1">
            <BlogGridCard post={archiveArticles[4]} />
          </div>

          {/* Row Block 3: Large Full-Width Article Representation */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <BlogGridCard post={archiveArticles[5]} isFullWidthRow={true} />
          </div>

          {/* Row Block 4: Final 2 Parallel Layout Grid Columns */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1.5 lg:col-start-1 lg:col-end-3">
            <BlogGridCard post={archiveArticles[6]} />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1.5 lg:col-start-3 lg:col-end-4">
            <BlogGridCard post={archiveArticles[7]} />
          </div>

        </div>
      </section>

      {/* Global Sticky App Footer */}
      <Footer />

    </main>
  );
}
