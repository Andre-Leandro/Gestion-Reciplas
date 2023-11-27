// routers/compras.ts
import express, { Router } from "express";
import { CompraHandler } from "../handlers/compras";

export function comprasRouter(handler: CompraHandler): Router {
  const router = express.Router();

  router.post("/", handler.createCompra());
  router.get("/:compraId", handler.getCompraById());
  router.get("/", handler.getAllCompras())
  // Agrega otras rutas según sea necesario

  return router;
}
