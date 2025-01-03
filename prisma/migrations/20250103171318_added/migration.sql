/*
  Warnings:

  - Added the required column `compressedSize` to the `Vide0` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vide0" ADD COLUMN     "compressedSize" TEXT NOT NULL;
