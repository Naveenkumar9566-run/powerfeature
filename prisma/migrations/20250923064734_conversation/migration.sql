-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('UNRESOLVED', 'ESCALATED', 'RESOLVED');

-- DropIndex
DROP INDEX "public"."by_organization_id";

-- CreateTable
CREATE TABLE "public"."Conversation" (
    "id" TEXT NOT NULL,
    "threadId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'UNRESOLVED',

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_threadId_key" ON "public"."Conversation"("threadId");

-- CreateIndex
CREATE INDEX "by_organization_id" ON "public"."Conversation"("organizationId");

-- CreateIndex
CREATE INDEX "by_thread_id" ON "public"."Conversation"("threadId");

-- CreateIndex
CREATE INDEX "by_status_and_organization_id" ON "public"."Conversation"("status", "organizationId");
