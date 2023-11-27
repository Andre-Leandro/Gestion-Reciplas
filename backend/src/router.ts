import express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import { MateriaPrimaHandler } from "./handlers/materiasPrimas";
import { PrismaMateriasPrimasRepository } from "./repositories/materiasPrimas";
import { MateriaPrimaServiceImpl } from "./services/materiasPrimas";
import { materiasPrimasRouter } from "./routers/materiasPrimas";

import { ProveedorHandler } from "./handlers/proveedores";
import { PrismaProveedorRepository } from "./repositories/proveedores";
import { ProveedorServiceImpl } from "./services/proveedores";
import { proveedoresRouter } from "./routers/proveedores";

import { CompraHandler } from "./handlers/compras";
import { PrismaCompraRepository } from "./repositories/compras";
import { CompraServiceImpl } from "./services/compras";
import { comprasRouter } from "./routers/compras";

export function createRouter(prismaClient: PrismaClient): Router {
  const router = express.Router();

  const mpRepository = new PrismaMateriasPrimasRepository(prismaClient);
  const mpService = new MateriaPrimaServiceImpl(mpRepository);
  const mpHandler = new MateriaPrimaHandler(mpService);

  const proveedorRepository = new PrismaProveedorRepository(prismaClient);
  const proveedorService = new ProveedorServiceImpl(proveedorRepository);
  const proveedorHandler = new ProveedorHandler(proveedorService);

  const compraRepository = new PrismaCompraRepository(prismaClient);
  const compraService = new CompraServiceImpl(compraRepository);
  const compraHandler = new CompraHandler(compraService);

  router.use(cors());
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  router.use(morgan("dev"));

  // Rutas
  router.use('/materias-primas', materiasPrimasRouter(mpHandler))
  router.use('/proveedores', proveedoresRouter(proveedorHandler))
  router.use('/compras', comprasRouter(compraHandler))

  router.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  return router;
}
