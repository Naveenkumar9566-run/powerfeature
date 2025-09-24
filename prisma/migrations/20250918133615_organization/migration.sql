/*
  Warnings:

  - You are about to drop the column `createAt` on the `ContactSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ContactSession" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."Organization" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
