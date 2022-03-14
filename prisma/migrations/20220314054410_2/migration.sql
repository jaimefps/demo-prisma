-- CreateTable
CREATE TABLE "Fandom" (
    "fanId" TEXT NOT NULL,
    "targetid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fandom_pkey" PRIMARY KEY ("fanId","targetid")
);

-- AddForeignKey
ALTER TABLE "Fandom" ADD CONSTRAINT "Fandom_fanId_fkey" FOREIGN KEY ("fanId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fandom" ADD CONSTRAINT "Fandom_targetid_fkey" FOREIGN KEY ("targetid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
