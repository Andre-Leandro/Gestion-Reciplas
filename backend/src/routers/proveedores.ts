import express, { Router } from "express";
import { ProveedorHandler } from "../handlers/proveedores";

export function proveedoresRouter(handler: ProveedorHandler): Router {
  const router = express.Router();

  router.get("/", handler.getAllProveedores());
  router.get("/:proveedorId", handler.getProveedorById());
  router.post("/", handler.createProveedor());
  router.patch("/:proveedorId", handler.updateProveedor());
  router.delete("/:proveedorId", handler.deleteProveedor());

  // Puedes agregar más rutas según las necesidades de tu aplicación

  return router;
}
