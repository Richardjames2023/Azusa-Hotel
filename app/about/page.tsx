import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutHero } from '../../components/about/AboutHero';
import { AboutIntro } from '../../components/about/AboutIntro';
import { AboutPickList } from '../../components/about/AboutPickList';
import { AboutInstantBooking } from '../../components/about/AboutInstantBooking';
import SubNav from '@/components/subNav';
// import { MeetingsNews } from '@/components/meetings/MeetingsNews';

export const metadata: Metadata = {
  title: 'Luxury Meeting Rooms & Event Venues Booking | Azusa Hotels Abuja',
  description: 'Host premium corporate summits, luxury weddings, or private board meetings in our state-of-the-art conference halls in Kado, Abuja. Experience flexible planning solutions.',
  alternates: { canonical: '/meetings-events' }
};

export default function MeetingsEventsPage() {
  return (
    <main className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden relative">
      
      {/* GLOBAL TOP NAVIGATION HEADER CONTROL */}
      <Header />

      {/* 1. Immersive Theater Hall Hero Overlay Banner */}
      <AboutHero />

      <SubNav/>

      {/* 2. Double-column Flexible Narrative Context */}
      <AboutIntro />

      {/* 3. Central Embedded Picklist Feature Card Block */}
      <AboutPickList />

      {/* 4. Videography Checklist Feature Value Block Section */}
      <AboutInstantBooking />

      {/* 5. 3-Column Granular Proposition Feature Matrix Grid */}
      

      {/* 6. Lower News Categories Segment Strip */}
      {/* <AboutNews /> */}

      {/* GLOBAL BOTTOM STICKY APPLICATION NAVFOOTER */}
      <Footer />

    </main>
  );
}
