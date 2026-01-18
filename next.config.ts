//
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. SECURITY: Hide backend info from hackers
  poweredByHeader: false,
  
  // 2. PERFORMANCE: Enable Gzip/Brotli compression
  compress: true, 
  reactStrictMode: true,

  // 3. MASTER IMAGE OPTIMIZATION (Crucial for Core Web Vitals)
  images: {
    formats: ['image/avif', 'image/webp'],
    // Retina Ready Sizes for all devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, 
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 4. BUNDLE OPTIMIZATION (Faster Page Load)
  experimental: {
    // Tree shake heavy libraries automatically
    optimizePackageImports: ['lucide-react', 'framer-motion'], 
    // Faster server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // 5. ADVANCED SECURITY HEADERS (HSTS, XSS Protection)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
};

export default nextConfig;