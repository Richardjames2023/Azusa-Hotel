// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Your main style sheets layer containing the font faces

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
        CLEANED: Stripped away relative loaders entirely.
        The layout baseline font definitions will now feed purely through globals.css
      */}
      <body className="antialiased font-main">
        {children}
      </body>
    </html>
  );
}
