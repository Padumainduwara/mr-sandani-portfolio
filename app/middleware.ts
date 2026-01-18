import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // --- WORLD CLASS SECURITY HEADERS (Trust Signals for Google) ---
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  // 1. Content Security Policy (Protects against XSS)
  response.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim());
  
  // 2. Prevent Clickjacking (Trust Signal)
  response.headers.set('X-Frame-Options', 'DENY');
  
  // 3. Prevent MIME Sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // 4. Referrer Policy (Privacy)
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // 5. Permissions Policy (Modern Browser Features)
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};