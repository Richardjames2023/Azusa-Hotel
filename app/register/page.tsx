import { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Create Guest Account Portal | Azusa Hotels & Luxury Apartments',
  description: 'Join the Azusa Elite Circle. Register your secure guest account profile to unlock premium boutique rewards, preferred custom room tariffs, and priority concierge workflows.',
  alternates: { canonical: '/register' }
};

export default function RegisterPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col relative overflow-x-hidden">
      <RegisterForm />
    </main>
  );
}
