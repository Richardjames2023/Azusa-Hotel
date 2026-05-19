import { Metadata } from 'next';
import { ThankYouView } from '../../components/booking/ThankYouView';
import { ConfirmedBookingDetails } from '../../app/types/thank-you';

// 1. DYNAMIC PRODUCTION SEO ENGINE DECLARATIONS
export const metadata: Metadata = {
  title: 'Booking Confirmed | Azusa Hotels & Luxury Apartments Abuja',
  description: 'Your premium accommodation reservation at Azusa Hotels & Apartments has been verified successfully. Review check-in instructions and access your receipt portal lines.',
  robots: { index: false, follow: true }, // Prevents index leaks of mock receipt URLs while keeping authority intact
  alternates: { canonical: '/booking-confirmation' }
};

export default async function BookingConfirmationPage() {
  
  // High-fidelity production transaction dictionary parameters mock load
  const simulatedDetails: ConfirmedBookingDetails = {
    bookingReference: "AZS-2026-8941X",
    guestName: "Richard James",
    roomType: "Executive Sovereign Suite (Skyline View)",
    checkIn: "Sat, Jun 20, 2026",
    checkOut: "Mon, Jun 22, 2026",
    totalPaid: "480000",
    currency: "NGN"
  };

  // Structured Schema.org LodgingReservation Metadata Injection to score highest SEO ranks
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingReservation",
    "reservationNumber": simulatedDetails.bookingReference,
    "reservationStatus": "https://schema.org",
    "underName": {
      "@type": "Person",
      "name": simulatedDetails.guestName
    },
    "reservationFor": {
      "@type": "HotelRoom",
      "name": simulatedDetails.roomType,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abuja",
        "addressCountry": "NG"
      }
    },
    "checkinDate": "2026-06-20",
    "checkoutDate": "2026-06-22"
  };

  return (
    <>
      {/* Injecting Structured Metadata directly inside page targets securely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <ThankYouView details={simulatedDetails} />
    </>
  );
}
