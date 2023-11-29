// handlers/compras.ts
import { RequestHandler } from "express";
import { IngresoService } from "../services/ingresosMP";
import { IngresoMP } from "../models/ingresoMP";

export class IngresoHandler {
  private ingresoService: IngresoService;

  constructor(ingresoService: IngresoService) {
    this.ingresoService = ingresoService;
  }

  createIngreso(): RequestHandler {
    return async (req, res) => {
      const ingresoData: IngresoMP = req.body;

      const createdIngreso = await this.ingresoService.createIngreso(ingresoData);
      res.status(201).json(createdIngreso);
    };
  }

  getIngresoById(): RequestHandler {
    return async (req, res) => {
      const ingresoId = Number(req.params["ingresoId"]);

      const ingreso = await this.ingresoService.getIngresoById(ingresoId);
      if (!ingreso) {
        throw new Error(`Ingreso with ID ${ingresoId} not found.`);
      }

      res.status(200).json(ingreso);
    };
  }

  getAllIngresos(): RequestHandler {
    return async (_req, res) => {
      const ingresos = await this.ingresoService.getAllIngresos();
      if (!ingresos) {
        throw new Error(`Error`);
      }

      res.status(200).json(ingresos);
    };
  }

  // Agrega otros métodos según sea necesario
}
