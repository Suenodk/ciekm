-- CreateTable
CREATE TABLE "Gebruiker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Gebruiker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gebruiker_name_key" ON "Gebruiker"("name");
