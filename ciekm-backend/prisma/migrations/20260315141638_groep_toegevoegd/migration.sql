-- CreateTable
CREATE TABLE "Groep" (
    "id" TEXT NOT NULL,
    "naam" TEXT NOT NULL,
    "omschrijving" TEXT NOT NULL,
    "bijeenkomstDatum" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Groep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bericht" (
    "id" TEXT NOT NULL,
    "afzenderId" TEXT NOT NULL,
    "groepId" TEXT,

    CONSTRAINT "Bericht_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GebruikerToGroep" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_GebruikerToGroep_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_GebruikerToGroep_B_index" ON "_GebruikerToGroep"("B");

-- AddForeignKey
ALTER TABLE "Bericht" ADD CONSTRAINT "Bericht_afzenderId_fkey" FOREIGN KEY ("afzenderId") REFERENCES "Gebruiker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bericht" ADD CONSTRAINT "Bericht_groepId_fkey" FOREIGN KEY ("groepId") REFERENCES "Groep"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GebruikerToGroep" ADD CONSTRAINT "_GebruikerToGroep_A_fkey" FOREIGN KEY ("A") REFERENCES "Gebruiker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GebruikerToGroep" ADD CONSTRAINT "_GebruikerToGroep_B_fkey" FOREIGN KEY ("B") REFERENCES "Groep"("id") ON DELETE CASCADE ON UPDATE CASCADE;
