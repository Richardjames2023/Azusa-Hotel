import { Metadata } from 'next';
import { RegistrationThankYou } from '@/components/auth/RegistrationThankYou';

export const metadata: Metadata = {
  title: 'Welcome to Azusa | Registration Confirmed',
  description: 'Your premium boutique membership account creation is finalized successfully at Azusa Hotels & Apartments.',
  robots: { index: false, follow: true }, // Disables index visibility crawler leaks of onboarding endpoints
  alternates: { canonical: '/registration-success' }
};

export default function RegistrationSuccessPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCFBF9] flex flex-col relative overflow-x-hidden">
      <RegistrationThankYou />
    </main>
  );
}
