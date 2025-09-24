import { NextRequest } from "next/server";
import { PrismaClient, Status } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { organizationId } = body;

  if (!organizationId) {
    return new Response(JSON.stringify({ error: "Missing organizationId" }), { status: 400 });
  }

  const conversation = await prisma.conversation.create({
    data: {
      threadId: crypto.randomUUID(),
      organizationId,
      status: Status.UNRESOLVED,
    },
  });

  return new Response(JSON.stringify(conversation), { status: 200 });
}