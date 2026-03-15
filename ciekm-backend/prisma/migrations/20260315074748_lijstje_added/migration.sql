-- CreateTable
CREATE TABLE "Lijstje" (
    "id" TEXT NOT NULL,
    "naam" TEXT NOT NULL,
    "gebruikerId" TEXT NOT NULL,

    CONSTRAINT "Lijstje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LijstjeItem" (
    "id" TEXT NOT NULL,
    "naam" TEXT NOT NULL,
    "lijstjeId" TEXT NOT NULL,

    CONSTRAINT "LijstjeItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lijstje" ADD CONSTRAINT "Lijstje_gebruikerId_fkey" FOREIGN KEY ("gebruikerId") REFERENCES "Gebruiker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LijstjeItem" ADD CONSTRAINT "LijstjeItem_lijstjeId_fkey" FOREIGN KEY ("lijstjeId") REFERENCES "Lijstje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
