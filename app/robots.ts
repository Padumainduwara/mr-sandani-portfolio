// app/robots.ts
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/admin/'], 
      },
      {
        userAgent: 'GPTBot', // Allow ChatGPT
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Allow Gemini/Bard
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl (Used for training new AIs)
        allow: '/',
      },
      {
        userAgent: 'Applebot', // Apple Intelligence / Siri
        allow: '/',
      }
    ],
    sitemap: 'https://ictwithsandani.com/sitemap.xml',
  }
}