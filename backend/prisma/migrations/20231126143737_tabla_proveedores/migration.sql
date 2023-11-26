-- CreateTable
CREATE TABLE "proveedores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cuilCuit" INTEGER NOT NULL,
    "direccion" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "correo" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "habilitado" BOOLEAN NOT NULL,

    CONSTRAINT "proveedores_pkey" PRIMARY KEY ("id")
);
