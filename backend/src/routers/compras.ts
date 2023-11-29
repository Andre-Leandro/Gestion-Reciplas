// routers/compras.ts
import express, { Router } from "express";
import { IngresoHandler } from "../handlers/ingresosMP";

export function ingresosRouter(handler: IngresoHandler): Router {
  const router = express.Router();

  router.post("/", handler.createIngreso());
  router.get("/:ingresoId", handler.getIngresoById());
  router.get("/", handler.getAllIngresos())
  // Agrega otras rutas según sea necesario

  return router;
}
