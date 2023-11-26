import { RequestHandler } from "express";
import { ProveedorService } from "../services/proveedores";
import { Proveedor } from "../models/proveedores";

export class ProveedorHandler {
  private proveedorService: ProveedorService;

  constructor(proveedorService: ProveedorService) {
    this.proveedorService = proveedorService;
  }

  getAllProveedores(): RequestHandler {
    return async (_req, res) => {
      const proveedores = await this.proveedorService.getAllProveedores();
      res.status(200).json(proveedores);
    };
  }

  getProveedorById(): RequestHandler {
    return async (req, res) => {
      const proveedorId = Number(req.params["proveedorId"]);

      const proveedor = await this.proveedorService.getProveedorById(proveedorId);
      if (!proveedor) {
        throw new Error(`Proveedor with ID ${proveedorId} not found.`);
      }

      res.status(200).json(proveedor);
    };
  }

  createProveedor(): RequestHandler {
    return async (req, res) => {
      const proveedorData: Proveedor = req.body;

      const createdProveedor = await this.proveedorService.createProveedor(proveedorData);
      res.status(201).json(createdProveedor);
    };
  }

  updateProveedor(): RequestHandler {
    return async (req, res) => {
      const proveedorId = Number(req.params["proveedorId"]);
      const proveedorData: Proveedor = req.body;

      const updatedProveedor = await this.proveedorService.updateProveedor(proveedorData);
      if (!updatedProveedor) {
        throw new Error(`Proveedor with ID ${proveedorId} not found.`);
      }

      res.status(200).json(updatedProveedor);
    };
  }

  deleteProveedor(): RequestHandler {
    return async (req, res) => {
      const proveedorId = Number(req.params["proveedorId"]);

      const deletedProveedor = await this.proveedorService.deleteProveedor(proveedorId);
      if (!deletedProveedor) {
        throw new Error(`Proveedor with ID ${proveedorId} not found.`);
      }

      res.status(200).json(deletedProveedor);
    };
  }

  // Puedes agregar métodos adicionales según las necesidades de tu aplicación
}
