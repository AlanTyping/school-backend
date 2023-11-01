-- AlterTable
ALTER TABLE "User" ADD COLUMN     "code" TEXT,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
