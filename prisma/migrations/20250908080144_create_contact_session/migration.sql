-- CreateTable
CREATE TABLE "public"."ContactSession" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "ContactSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "by_organization_id" ON "public"."ContactSession"("organizationId");

-- CreateIndex
CREATE INDEX "by_expires_at" ON "public"."ContactSession"("expiresAt");
