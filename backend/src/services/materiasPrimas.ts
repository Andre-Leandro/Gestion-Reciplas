import { MateriaPrima } from "../models/materiasPrimas";
import { MateriasPrimasRepository } from "../repositories/materiasPrimas";

export interface MateriaPrimaService {
  getAllMateriasPrimas(): Promise<MateriaPrima[]>;
  getMateriaPrimaById(materiaPrimaId: number): Promise<MateriaPrima | null>;
  createMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima>;
  updateMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima | null>;
  deleteMateriaPrima(materiaPrimaId: number): Promise<MateriaPrima | null>;
  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}

export class MateriaPrimaServiceImpl implements MateriaPrimaService {
  private repo: MateriasPrimasRepository;

  constructor(repository: MateriasPrimasRepository) {
    this.repo = repository;
  }

  async getAllMateriasPrimas(): Promise<MateriaPrima[]> {
    return await this.repo.getAllMateriasPrimas();
  }

  async getMateriaPrimaById(materiaPrimaId: number): Promise<MateriaPrima | null> {
    return await this.repo.getMateriaPrimaById(materiaPrimaId);
  }

  async createMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.createMateriaPrima(materiaPrima);
  }

  async updateMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.updateMateriaPrima(materiaPrima);
  }

  async deleteMateriaPrima(materiaPrimaId: number): Promise<MateriaPrima | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.deleteMateriaPrima(materiaPrimaId);
  }

  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}
