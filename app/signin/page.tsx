import { Metadata } from 'next';
import { SignInForm } from '@/components/auth/SignInForm';

// PRODUCTION PORTAL ACCOUNT SEO ACCESS ENGINE
export const metadata: Metadata = {
  title: 'Guest Sign-In Portal | Azusa Hotels & Luxury Apartments',
  description: 'Log in to your secure client workspace dashboard at Azusa Hotels. Manage room suites configurations, reward points balances, and private concierge pipelines.',
  robots: { index: false, follow: true }, // Disables index visibility leaks of dashboard pages while preserving authority lines
  alternates: { canonical: '/signin' }
};

export default function SignInPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      {/* Renders the full multi-split secure access block */}
      <SignInForm />
    </main>
  );
}