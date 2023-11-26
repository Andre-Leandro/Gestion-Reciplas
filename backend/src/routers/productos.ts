import express, { Router } from "express";
import { ProductHandler } from "../handlers/productos";

export function productsRouter(handler: ProductHandler): Router {
  const router = express.Router();
  console.log("productsRouter")
  router.get("/", handler.getAllProducts());
  router.get("/:productId", handler.getProductById());
  router.post("/", handler.createProduct());
  router.patch("/:productId", handler.updateProduct());
  router.delete("/:productId", handler.deleteProduct());

  // Puedes agregar más rutas según las necesidades de tu aplicación

  return router;
}
