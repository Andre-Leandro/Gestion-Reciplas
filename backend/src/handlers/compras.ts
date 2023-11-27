// handlers/compras.ts
import { RequestHandler } from "express";
import { CompraService } from "../services/compras";
import { Compra } from "../models/compras";

export class CompraHandler {
  private compraService: CompraService;

  constructor(compraService: CompraService) {
    this.compraService = compraService;
  }

  createCompra(): RequestHandler {
    return async (req, res) => {
      const compraData: Compra = req.body;

      const createdCompra = await this.compraService.createCompra(compraData);
      res.status(201).json(createdCompra);
    };
  }

  getCompraById(): RequestHandler {
    return async (req, res) => {
      const compraId = Number(req.params["compraId"]);

      const compra = await this.compraService.getCompraById(compraId);
      if (!compra) {
        throw new Error(`Compra with ID ${compraId} not found.`);
      }

      res.status(200).json(compra);
    };
  }

  getAllCompras(): RequestHandler {
    return async (_req, res) => {
      const compras = await this.compraService.getAllCompras();
      if (!compras) {
        throw new Error(`Error`);
      }

      res.status(200).json(compras);
    };
  }

  // Agrega otros métodos según sea necesario
}
