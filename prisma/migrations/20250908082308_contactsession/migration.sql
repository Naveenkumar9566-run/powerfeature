/*
  Warnings:

  - You are about to drop the column `metadata` on the `ContactSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ContactSession" DROP COLUMN "metadata",
ADD COLUMN     "cookieEnabled" BOOLEAN,
ADD COLUMN     "currentUrl" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "languages" TEXT,
ADD COLUMN     "platform" TEXT,
ADD COLUMN     "referrer" TEXT,
ADD COLUMN     "screenResolution" TEXT,
ADD COLUMN     "timezone" TEXT,
ADD COLUMN     "timezoneOffset" INTEGER,
ADD COLUMN     "userAgent" TEXT,
ADD COLUMN     "vendor" TEXT,
ADD COLUMN     "viewportSize" TEXT;
