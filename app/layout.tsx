import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// DM Sans for a more modern, geometric, premium feel
const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

// Playfair Display for elegant headings
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"] // Added extra weights for bold headers
});

export const metadata: Metadata = {
  title: "Ms. Sandani Hettiarachchi | ICT Teacher",
  description: "Professional ICT Teacher Portfolio - Edexcel & Local Syllabus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}