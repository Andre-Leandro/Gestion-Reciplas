-- CreateTable
CREATE TABLE "compras" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "comentarios" TEXT,
    "proveedorId" INTEGER NOT NULL,

    CONSTRAINT "compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lineascompras" (
    "id" SERIAL NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "compraId" INTEGER NOT NULL,
    "materiaPrimaId" INTEGER NOT NULL,

    CONSTRAINT "lineascompras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "proveedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lineascompras" ADD CONSTRAINT "lineascompras_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lineascompras" ADD CONSTRAINT "lineascompras_materiaPrimaId_fkey" FOREIGN KEY ("materiaPrimaId") REFERENCES "materiasprimas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
