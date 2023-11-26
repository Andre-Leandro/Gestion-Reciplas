import express, { Router } from "express";
import cors from "cors";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ProductHandler } from "./handlers/productos";
import { PrismaProductRepository } from "./repositories/productos";
import { ProductServiceImpl } from "./services/productos";
import { productsRouter } from "./routers/productos";

export function createRouter(prismaClient: PrismaClient): Router {
  const router = express.Router();

  const productRepository = new PrismaProductRepository(prismaClient);
  const productService = new ProductServiceImpl(productRepository);
  const productHandler = new ProductHandler(productService);

  router.use(cors());
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  
  // Rutas para productos
  router.use("/productos", productsRouter(productHandler));
  
  router.use((err: Error, _req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  return router;
}
