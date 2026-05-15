import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { PopularDestinations } from "../components/PopularDestinations";
import { BrandShowcase } from "../components/BrandShowcase";
import { RoomShowcaseMatrix } from "../components/RoomShowcaseMatrix";
import { Suspense } from "react";
import { StackedBenefitsWrapper } from "../components/StackedBenefitsWrapper";
import { FacilitiesShowcase } from "../components/FacilitiesShowcase";

// types/index.ts
export interface NavItem {
  label: string;
  href: string;
  isBadge?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PopularDestinations />
          <Suspense fallback={<div className="h-40 bg-stone-900 animate-pulse" />}>
      <RoomShowcaseMatrix />
      </Suspense>
      <FacilitiesShowcase/>
      <StackedBenefitsWrapper/>
      <Footer />
    </main>
  );
}
