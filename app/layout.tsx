// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Your main styles sheet

// 1. Initialize your actual physical brand type loaders
const davossyFont = localFont({
  src: "./fonts/Davossy.otf",
  variable: "--font-davossy",
  display: "swap",
});

const glirockFont = localFont({
  src: "./fonts/Glirock-regular.otf",
  variable: "--font-glirock",
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
      {/* 
        2. Inject both working font variable class strings onto the root body.
        Removed the missing placeholder variables to clear the build error instantly.
      */}
      <body className={`${davossyFont.variable} ${glirockFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
