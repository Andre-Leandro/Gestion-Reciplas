import express, { Router } from "express";
import { MateriaPrimaHandler } from "../handlers/materiasPrimas";

export function materiasPrimasRouter(handler: MateriaPrimaHandler): Router {
  const router = express.Router();

  router.get("/", handler.getAllMateriasPrimas());
  router.get("/:materiaPrimaId", handler.getMateriaPrimaById());
  router.post("/", handler.createMateriaPrima());
  router.patch("/:materiaPrimaId", handler.updateMateriaPrima());
  router.delete("/:materiaPrimaId", handler.deleteMateriaPrima());

  return router;
}
