/*
  Warnings:

  - The primary key for the `Fandom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `targetid` on the `Fandom` table. All the data in the column will be lost.
  - Added the required column `targetId` to the `Fandom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fandom" DROP CONSTRAINT "Fandom_targetid_fkey";

-- AlterTable
ALTER TABLE "Fandom" DROP CONSTRAINT "Fandom_pkey",
DROP COLUMN "targetid",
ADD COLUMN     "targetId" TEXT NOT NULL,
ADD CONSTRAINT "Fandom_pkey" PRIMARY KEY ("fanId", "targetId");

-- AddForeignKey
ALTER TABLE "Fandom" ADD CONSTRAINT "Fandom_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
