-- CreateTable
CREATE TABLE "materiasprimas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidadStock" INTEGER NOT NULL,

    CONSTRAINT "materiasprimas_pkey" PRIMARY KEY ("id")
);
