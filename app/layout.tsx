//
import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Performance Optimized Fonts
const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  display: "swap"
});

const BASE_URL = "https://ictwithsandani.com";

// 2. Mobile & Visual Optimization (Visual SEO)
export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

// 3. MASTER LEVEL SEO METADATA (The Core)
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  
  // A. Core SEO
  title: {
    default: "Ms. Sandani Hettiarachchi | Best ICT Teacher in Sri Lanka (O/L & A/L)",
    template: "%s | Ms. Sandani Hettiarachchi",
  },
  description: "Join Sri Lanka's #1 ICT classes with Ms. Sandani Hettiarachchi (BSc, MIT, PGDE). Expert O/L & A/L ICT tuition in Nugegoda & Piliyandala. 25+ Years of Excellence.",
  
  // B. Technical SEO (Canonical & Alternates)
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-LK': BASE_URL,
    },
  },

  // C. Crawlability & Indexing (AI Ready)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // D. App & PWA SEO (ASO Support)
  applicationName: "ICT with Sandani",
  appleWebApp: {
    capable: true,
    title: "Sandani ICT",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },

  // E. Keywords (Semantic & LSI)
  keywords: [
    "ICT Classes Sri Lanka", "Best ICT Teacher Colombo", "O/L ICT English Medium",
    "A/L ICT Classes", "Edexcel ICT Sri Lanka", "Sandani Hettiarachchi",
    "Smart ICT", "ICT Revision Class", "Nugegoda ICT Classes", "Piliyandala ICT",
    "Python for Students", "Data Science Basics", "2026 ICT Intake", "ICT Guru Gedara"
  ],

  // F. Social & Visual SEO (Open Graph)
  openGraph: {
    title: "Master ICT with Ms. Sandani Hettiarachchi | 25+ Years Experience",
    description: "100% A Grades History. The most advanced ICT class for O/L and A/L students in Sri Lanka. Enroll for 2026.",
    url: BASE_URL,
    siteName: "ICT with Sandani",
    locale: "en_LK",
    type: "website",
    images: [
      { 
        url: "/profile.png", 
        width: 1200, 
        height: 630, 
        alt: "Ms. Sandani Hettiarachchi - Senior ICT Teacher" 
      }
    ],
  },

  // G. Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Ms. Sandani Hettiarachchi | ICT Teacher",
    description: "Expert ICT Tuition for O/L and A/L Students. Enroll now for 2026.",
    images: ["/profile.png"],
    creator: "@SandaniICT", // Add if available
  },

  // H. Local SEO (Geo-Targeting)
  other: {
    "geo.region": "LK-1", // Western Province
    "geo.placename": "Nugegoda",
    "geo.position": "6.8732;79.8890",
    "ICBM": "6.8732, 79.8890",
  },

  // I. Trust Signals (E-E-A-T)
  authors: [{ name: "Ms. Sandani Hettiarachchi", url: BASE_URL }],
  category: "education",
  classification: "Education, ICT Tuition, Online Classes",
  
  // Verification
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_CODE", // Optional for Int. SEO
    other: {
      "facebook-domain-verification": "YOUR_FB_CODE",
    },
  },
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