/*
  Warnings:

  - You are about to drop the `compras` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lineascompras` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "compras" DROP CONSTRAINT "compras_proveedorId_fkey";

-- DropForeignKey
ALTER TABLE "lineascompras" DROP CONSTRAINT "lineascompras_compraId_fkey";

-- DropForeignKey
ALTER TABLE "lineascompras" DROP CONSTRAINT "lineascompras_materiaPrimaId_fkey";

-- DropTable
DROP TABLE "compras";

-- DropTable
DROP TABLE "lineascompras";

-- CreateTable
CREATE TABLE "ingresosmp" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "comentarios" TEXT,
    "proveedorId" INTEGER NOT NULL,

    CONSTRAINT "ingresosmp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lineasingresos" (
    "id" SERIAL NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "ingresoId" INTEGER NOT NULL,
    "materiaPrimaId" INTEGER NOT NULL,

    CONSTRAINT "lineasingresos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingresosmp" ADD CONSTRAINT "ingresosmp_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "proveedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lineasingresos" ADD CONSTRAINT "lineasingresos_ingresoId_fkey" FOREIGN KEY ("ingresoId") REFERENCES "ingresosmp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lineasingresos" ADD CONSTRAINT "lineasingresos_materiaPrimaId_fkey" FOREIGN KEY ("materiaPrimaId") REFERENCES "materiasprimas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
