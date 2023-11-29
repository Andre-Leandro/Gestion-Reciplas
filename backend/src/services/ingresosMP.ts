// services/compras.ts
import { IngresoMP } from "../models/ingresoMP";
import { IngresoRepository } from "../repositories/ingresosMP";

export interface IngresoService {
  createIngreso(ingresoMP: IngresoMP): Promise<IngresoMP>;
  getIngresoById(ingresoId: number): Promise<IngresoMP | null>;
  getAllIngresos(): Promise<IngresoMP[]>;
  // Agrega otros métodos según sea necesario
}

export class IngresoServiceImpl implements IngresoService {
  private repo: IngresoRepository;

  constructor(repository: IngresoRepository) {
    this.repo = repository;
  }

  async createIngreso(ingreso: IngresoMP): Promise<IngresoMP> {
    ingreso.fecha = new Date(ingreso.fecha)
    return await this.repo.createIngreso(ingreso);
  }

  async getIngresoById(ingresoId: number): Promise<IngresoMP | null> {
    return await this.repo.getIngresoById(ingresoId);
  }

  async getAllIngresos(): Promise<IngresoMP[]> {
    return await this.repo.getAllIngresos();
  }

  // Agrega otros métodos según sea necesario
}
