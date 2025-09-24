/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ContactSession` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ContactSession` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `ContactSession` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."ContactSession" DROP COLUMN "createdAt",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "ContactSession_name_key" ON "public"."ContactSession"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContactSession_email_key" ON "public"."ContactSession"("email");
