// services/compras.ts
import { Compra } from "../models/compras";
import { CompraRepository } from "../repositories/compras";

export interface CompraService {
  createCompra(compra: Compra): Promise<Compra>;
  getCompraById(compraId: number): Promise<Compra | null>;
  getAllCompras(): Promise<Compra[]>;
  // Agrega otros métodos según sea necesario
}

export class CompraServiceImpl implements CompraService {
  private repo: CompraRepository;

  constructor(repository: CompraRepository) {
    this.repo = repository;
  }

  async createCompra(compra: Compra): Promise<Compra> {
    compra.fecha = new Date(compra.fecha)
    return await this.repo.createCompra(compra);
  }

  async getCompraById(compraId: number): Promise<Compra | null> {
    return await this.repo.getCompraById(compraId);
  }

  async getAllCompras(): Promise<Compra[]> {
    return await this.repo.getAllCompras();
  }

  // Agrega otros métodos según sea necesario
}
