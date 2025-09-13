import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/screens(.*)'
])

export default clerkMiddleware(async (auth, req: NextRequest, evt?: NextFetchEvent) => {
  const session = await auth();
  if (!session.userId && isProtectedRoute(req)) {
    return session.redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};