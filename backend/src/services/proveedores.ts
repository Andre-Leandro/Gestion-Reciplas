import { Proveedor } from "../models/proveedores";
import { ProveedorRepository } from "../repositories/proveedores";

export interface ProveedorService {
  getAllProveedores(): Promise<Proveedor[]>;
  getProveedorById(proveedorId: number): Promise<Proveedor | null>;
  createProveedor(proveedor: Proveedor): Promise<Proveedor>;
  updateProveedor(proveedor: Proveedor): Promise<Proveedor | null>;
  deleteProveedor(proveedorId: number): Promise<Proveedor | null>;
  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}

export class ProveedorServiceImpl implements ProveedorService {
  private repo: ProveedorRepository;

  constructor(repository: ProveedorRepository) {
    this.repo = repository;
  }

  async getAllProveedores(): Promise<Proveedor[]> {
    return await this.repo.getAllProveedores();
  }

  async getProveedorById(proveedorId: number): Promise<Proveedor | null> {
    return await this.repo.getProveedorById(proveedorId);
  }

  async createProveedor(proveedor: Proveedor): Promise<Proveedor> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    proveedor.fechaRegistro = new Date(proveedor.fechaRegistro)
    return await this.repo.createProveedor(proveedor);
  }

  async updateProveedor(proveedor: Proveedor): Promise<Proveedor | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    proveedor.fechaRegistro = new Date(proveedor.fechaRegistro)
    return await this.repo.updateProveedor(proveedor);
  }

  async deleteProveedor(proveedorId: number): Promise<Proveedor | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.deleteProveedor(proveedorId);
  }

  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}
