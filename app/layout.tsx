// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

// GOOGLE FONT IMPORTS
import {
  Cormorant_Garamond,
  Inter,
  Manrope,
  DM_Sans,
  Poppins,
} from "next/font/google";

// LUXURY SERIF — HERO / BRANDING
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// PRIMARY UI FONT
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// MODERN UI SUPPORT FONT
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// BODY CONTENT FONT
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  display: "swap",
});

// NAVIGATION / BUTTON FONT
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azusa Hotels & Luxury Apartments",
  description: "Experience premium hospitality sanctuary spaces in Abuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased
          ${cormorant.variable}
          ${inter.variable}
          ${manrope.variable}
          ${dmSans.variable}
          ${poppins.variable}
          font-inter
        `}
      >
        {children}
      </body>
    </html>
  );
}