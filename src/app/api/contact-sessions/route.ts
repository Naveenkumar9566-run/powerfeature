import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, metadata } = body;

    // Example: you could also send organizationId from frontend
    const organizationId = body.organizationId || "123";

    if (!name || !email || !organizationId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const contactSession = await prisma.contactSession.create({
      data: {
        name,
        email,
        organizationId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24h expiry

        // Metadata mapping (safe optional chaining)
        userAgent: metadata?.userAgent,
        language: metadata?.language,
        languages: metadata?.languages,
        platform: metadata?.platform,
        vendor: metadata?.vendor,
        screenResolution: metadata?.screenResolution,
        viewportSize: metadata?.viewportSize,
        timezone: metadata?.timezone,
        timezoneOffset: metadata?.timezoneOffset,
        cookieEnabled: metadata?.cookieEnabled,
        referrer: metadata?.referrer,
        currentUrl: metadata?.currentUrl,
      },
    });

    return NextResponse.json(contactSession, { status: 201 });
  } catch (error) {
    console.error(" Error creating contact session:", error);
    return NextResponse.json(
      { error: "Failed to create contact session" },
      { status: 500 }
    );
  }
}

// Optional: Fetch all sessions (by organization)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const organizationId = searchParams.get("organizationId");

  try {
    const sessions = await prisma.contactSession.findMany({
      where: organizationId ? { organizationId } : {},
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(sessions, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact sessions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact sessions" },
      { status: 500 }
    );
  }
}
