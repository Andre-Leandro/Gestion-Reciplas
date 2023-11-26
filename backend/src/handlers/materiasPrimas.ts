import { RequestHandler } from "express";
import { MateriaPrimaService } from "../services/materiasPrimas";
import { MateriaPrima } from "../models/materiasPrimas";

export class MateriaPrimaHandler {
  private materiaPrimaService: MateriaPrimaService;

  constructor(materiaPrimaService: MateriaPrimaService) {
    this.materiaPrimaService = materiaPrimaService;
  }

  getAllMateriasPrimas(): RequestHandler {
    return async (_req, res) => {
      const materiasPrimas = await this.materiaPrimaService.getAllMateriasPrimas();
      res.status(200).json(materiasPrimas);
    };
  }

  getMateriaPrimaById(): RequestHandler {
    return async (req, res) => {
      const materiaPrimaId = Number(req.params["materiaPrimaId"]);

      const materiaPrima = await this.materiaPrimaService.getMateriaPrimaById(materiaPrimaId);
      if (!materiaPrima) {
        throw new Error(`Materia prima with ID ${materiaPrimaId} not found.`);
      }

      res.status(200).json(materiaPrima);
    };
  }

  createMateriaPrima(): RequestHandler {
    return async (req, res) => {
      const materiaPrimaData: MateriaPrima = req.body;

      const createdMateriaPrima = await this.materiaPrimaService.createMateriaPrima(materiaPrimaData);
      res.status(201).json(createdMateriaPrima);
    };
  }

  updateMateriaPrima(): RequestHandler {
    return async (req, res) => {
      const materiaPrimaId = Number(req.params["materiaPrimaId"]);
      const materiaPrimaData: MateriaPrima = req.body;

      const updatedMateriaPrima = await this.materiaPrimaService.updateMateriaPrima(materiaPrimaData);
      if (!updatedMateriaPrima) {
        throw new Error(`Materia prima with ID ${materiaPrimaId} not found.`);
      }

      res.status(200).json(updatedMateriaPrima);
    };
  }

  deleteMateriaPrima(): RequestHandler {
    return async (req, res) => {
      const materiaPrimaId = Number(req.params["materiaPrimaId"]);

      const deletedMateriaPrima = await this.materiaPrimaService.deleteMateriaPrima(materiaPrimaId);
      if (!deletedMateriaPrima) {
        throw new Error(`Materia prima with ID ${materiaPrimaId} not found.`);
      }

      res.status(200).json(deletedMateriaPrima);
    };
  }

  // Puedes agregar métodos adicionales según las necesidades de tu aplicación
}
