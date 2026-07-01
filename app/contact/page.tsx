import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CorporateFormSection } from '../../components/contact/ContactFormMatrix';
import { ContactMap } from '../../components/contact/ContactMap';
import SubNav from '@/components/subNav';

export const metadata: Metadata = {
  title: 'Corporate Enquiries & Events Contact | Azusa Hotels Abuja',
  description: 'Connect with the business accounts and concierge service matrix divisions at Azusa Hotels & Luxury Apartments. Request bulk rates and book events in CBD, Abuja.',
  alternates: { canonical: '/contact' }
};

export default function CorporateContactPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF9] w-full flex flex-col overflow-x-hidden relative">
      
      {/* Global Application Top Header Navigation */}
      <Header />

      {/* 1. Production Stateful Corporate Form Section Grid Block */}
      <CorporateFormSection />

      <SubNav/>

      {/* 2. Full-bleed Property Geo Location Mapping Layout Frame */}
      <ContactMap />

      {/* Global Application Stacking Base Footer */}
      <Footer />

    </main>
  );
}
