import { Cormorant_Garamond, Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const mainFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-main',
});

const secondaryFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-secondary',
});

export default function RootLayout({ children }: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${mainFont.variable} ${secondaryFont.variable}`}>
      <body className="font-main antialiased bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
