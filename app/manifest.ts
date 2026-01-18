//
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ICT with Sandani - Best ICT Class',
    short_name: 'Sandani ICT',
    description: 'Expert ICT Classes by Ms. Sandani Hettiarachchi. Join for O/L & A/L Success.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f59e0b',
    orientation: 'portrait',
    categories: ['education', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/profile.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/profile.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  }
}