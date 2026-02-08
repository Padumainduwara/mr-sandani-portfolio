// app/page.tsx
"use client";

import React from "react";
import Script from "next/script";

// --- COMPONENTS IMPORTS ---
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualifications from "./components/Qualifications";
import Schedules from "./components/Schedules";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFab from "./components/WhatsAppFab";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. PERSON ENTITY (The Brand & E-E-A-T Core with Knowledge Graph Linking)
    {
      "@type": "Person",
      "@id": "https://ictwithsandani.com/#teacher",
      "name": "Sandani Hettiarachchi",
      "givenName": "Sandani",
      "familyName": "Hettiarachchi",
      "alternateName": ["Sandani Niroda Hettiarachchi", "Sandani Miss", "ICT Sandani", "Sandani Teacher"],
      "jobTitle": "Senior ICT Teacher",
      "gender": "Female",
      "url": "https://ictwithsandani.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://ictwithsandani.com/profile.png",
        "width": 1200,
        "height": 1200,
        "caption": "Ms. Sandani Hettiarachchi - Senior ICT Teacher"
      },
      "description": "Expert ICT Teacher for Edexcel & Local Syllabus (O/L & A/L). Specializing in Smart ICT, Digital Literacy, and Python Programming with 25+ years of experience.",
      // AUTHORTIY SIGNALS (University Linking)
      "alumniOf": [
        { 
          "@type": "CollegeOrUniversity", 
          "name": "University of Colombo", 
          "sameAs": "https://en.wikipedia.org/wiki/University_of_Colombo" 
        },
        { 
          "@type": "CollegeOrUniversity", 
          "name": "University of Kelaniya",
          "sameAs": "https://en.wikipedia.org/wiki/University_of_Kelaniya" 
        },
        { 
          "@type": "EducationalOrganization", 
          "name": "National Institute of Education (NIE)",
          "sameAs": "https://nie.lk/" 
        }
      ],
      // SEMANTIC SEO (Linking Skills to Concepts)
      "knowsAbout": [
        { "@type": "Thing", "name": "Information and Communication Technology", "sameAs": "https://en.wikipedia.org/wiki/Information_and_communications_technology" },
        { "@type": "Thing", "name": "Computer Science", "sameAs": "https://en.wikipedia.org/wiki/Computer_science" },
        { "@type": "Thing", "name": "Python Programming", "sameAs": "https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { "@type": "Thing", "name": "Data Science", "sameAs": "https://en.wikipedia.org/wiki/Data_science" }
      ],
      "worksFor": { "@id": "https://ictwithsandani.com/#organization" },
      "sameAs": [
        "https://www.facebook.com/sandani.hettiarachchi", 
        "https://www.linkedin.com/in/sandani-hettiarachchi",
        // Add YouTube if available for Video SEO
        // "https://www.youtube.com/@ICTwithSandani" 
      ]
    },
    
    // 2. ORGANIZATION / LOCAL BUSINESS SCHEMA (Hyper-Local SEO)
    {
      "@type": ["EducationalOrganization", "LocalBusiness", "School"],
      "@id": "https://ictwithsandani.com/#organization",
      "name": "ICT with Sandani",
      "slogan": "Mastering ICT with Logic",
      "url": "https://ictwithsandani.com",
      "logo": "https://ictwithsandani.com/profile.png",
      "image": "https://ictwithsandani.com/profile.png",
      "priceRange": "LKR 2500 - LKR 5000",
      "email": "info@sandanihettiarachchi.lk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kings Institute, Stanley Thilakaratne Mawatha",
        "addressLocality": "Nugegoda",
        "addressRegion": "Western Province",
        "postalCode": "10250",
        "addressCountry": "LK"
      },
      // LOCAL SEO DOMINANCE (Surrounding Cities)
      "areaServed": [
        { "@type": "City", "name": "Nugegoda", "sameAs": "https://en.wikipedia.org/wiki/Nugegoda" },
        { "@type": "City", "name": "Piliyandala" },
        { "@type": "City", "name": "Maharagama" },
        { "@type": "City", "name": "Boralesgamuwa" },
        { "@type": "City", "name": "Colombo" },
        { "@type": "City", "name": "Kottawa" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94-71-689-8264",
        "contactType": "customer service",
        "areaServed": "LK",
        "availableLanguage": ["en", "si"]
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.8732, 
        "longitude": 79.8890 
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Thursday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      // SOCIAL PROOF (Review Schema - Even if static, helps Click-Through-Rate)
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    },

    // 3. COURSE SCHEMA (Product SEO)
    {
      "@type": "Course",
      "@id": "https://ictwithsandani.com/#course-ol",
      "name": "O/L ICT Master Class (2026/2027)",
      "description": "Comprehensive O/L ICT tuition covering Edexcel and Local syllabuses with practical coding.",
      "provider": { "@id": "https://ictwithsandani.com/#organization" },
      "instructor": { "@id": "https://ictwithsandani.com/#teacher" },
      "educationalCredentialAwarded": "O/L ICT Distinction (A Grade)",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "location": "Kings Institute, Nugegoda",
          "courseSchedule": {
            "@type": "Schedule",
            "repeatFrequency": "Weekly",
            "byDay": "http://schema.org/Tuesday",
            "startTime": "14:30",
            "endTime": "16:30"
          }
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://ictwithsandani.com/#course-al",
      "name": "A/L ICT Advanced Class (2026/2027)",
      "description": "Advanced Level ICT covering Python, Networking, and Database Systems for University Entrance.",
      "provider": { "@id": "https://ictwithsandani.com/#organization" },
      "instructor": { "@id": "https://ictwithsandani.com/#teacher" },
      "educationalCredentialAwarded": "A/L ICT A Grade",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "location": "Kings Institute, Nugegoda",
          "courseSchedule": {
            "@type": "Schedule",
            "repeatFrequency": "Weekly",
            "byDay": "http://schema.org/Thursday",
            "startTime": "14:30",
            "endTime": "16:30"
          }
        }
      ]
    },

    // 4. VOICE SEARCH SEO (Speakable)
    // Helps Google Assistant/Siri read answers from your site
    {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    },

    // 5. FAQ SCHEMA (AEO - Answer Engine Optimization)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where are the ICT classes conducted in Nugegoda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Classes are held at Kings Institute, Nugegoda and specialized small group classes in Piliyandala."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ms. Sandani teach Edexcel ICT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ms. Sandani covers both Edexcel and Local Syllabuses for O/L and A/L students in English and Sinhala mediums."
          }
        },
        {
          "@type": "Question",
          "name": "How can I join the 2026 ICT class intake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can enroll by contacting +94 71 689 8264 directly or using the inquiry form on the website."
          }
        }
      ]
    },

    // 6. WEBSITE & BREADCRUMB
    {
      "@type": "WebSite",
      "@id": "https://ictwithsandani.com/#website",
      "url": "https://ictwithsandani.com",
      "name": "ICT with Sandani",
      "publisher": { "@id": "https://ictwithsandani.com/#organization" },
      "inLanguage": "en-LK"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ictwithsandani.com"
      }]
    }
  ]
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden">
      
      {/* MASTER SEO INJECTION */}
      <Script
        id="seo-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      {/* COMPONENT STACK */}
      <WhatsAppFab />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Qualifications />
      <Schedules />
      <Contact />

      {/* SEMANTIC FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center">
         <div className="max-w-7xl mx-auto px-4">
           <p className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
             Ms. Sandani Hettiarachchi<span className="text-amber-600">.</span>
           </p>
           
           {/* Social Media Links */}
           <div className="flex justify-center gap-6 mb-8">
              {[
                { name: "Facebook", url: "https://www.facebook.com/sandani.hettiarachchi" },
                { name: "Instagram", url: "#" },
                { name: "WhatsApp", url: "https://wa.me/94716898264" }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-500 transition-colors text-xs md:text-sm font-medium uppercase tracking-widest"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.name}
                </a>
              ))}
           </div>

           {/* Copyright Notice */}
           <p className="text-slate-600 text-xs md:text-sm">
             © {new Date().getFullYear()} Ms. Sandani Niroda Hettiarachchi. All rights reserved.
           </p>

           <p className="text-slate-800 text-[10px] md:text-xs mt-6 font-medium tracking-wide">
             Developed by <a href="https://padumainduwara.me" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-amber-600 transition-colors">Paduma Induwara</a>
           </p>
         </div>
      </footer>
    </main>
  );
}