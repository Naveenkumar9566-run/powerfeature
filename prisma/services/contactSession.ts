import { prisma } from "../lib/prisma";

// 24 hours in ms
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export async function createContactSession(args: {
  name: string;
  email: string;
  organizationId: string;
  metadata?: {
    userAgent?: string;
    language?: string;
    languages?: string;
    platform?: string;
    vendor?: string;
    screenResolution?: string;
    viewportSize?: string;
    timezone?: string;
    timezoneOffset?: number;
    cookieEnabled?: boolean;
    referrer?: string;
    currentUrl?: string;
  };
}) {
  const now = Date.now();
  const expiresAt = new Date(now + SESSION_DURATION_MS);

  const session = await prisma.contactSession.create({
    data: {
      name: args.name,
      email: args.email,
      organizationId: args.organizationId,
      expiresAt,
      userAgent: args.metadata?.userAgent,
      language: args.metadata?.language,
      languages: args.metadata?.languages,
      platform: args.metadata?.platform,
      vendor: args.metadata?.vendor,
      screenResolution: args.metadata?.screenResolution,
      viewportSize: args.metadata?.viewportSize,
      timezone: args.metadata?.timezone,
      timezoneOffset: args.metadata?.timezoneOffset,
      cookieEnabled: args.metadata?.cookieEnabled,
      referrer: args.metadata?.referrer,
      currentUrl: args.metadata?.currentUrl,
    },
  });

  return session.id;
}
