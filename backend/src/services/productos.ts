import { Product } from "../models/productos";

import { ProductRepository } from "../repositories/productos";

export interface ProductService {
  getAllProducts(): Promise<Product[]>;
  getProductById(productId: number): Promise<Product | null>;
  createProduct(product: Product): Promise<Product>;
  updateProduct(product: Product): Promise<Product | null>;
  deleteProduct(productId: number): Promise<Product | null>;
  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}

export class ProductServiceImpl implements ProductService {
  private repo: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repo = repository;
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.repo.getAllProducts();
  }

  async getProductById(productId: number): Promise<Product | null> {
    return await this.repo.getProductById(productId);
  }

  async createProduct(product: Product): Promise<Product> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.createProduct(product);
  }

  async updateProduct(product: Product): Promise<Product | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.updateProduct(product);
  }

  async deleteProduct(productId: number): Promise<Product | null> {
    // Puedes agregar lógica adicional aquí antes de llamar al repositorio, si es necesario
    return await this.repo.deleteProduct(productId);
  }

  // Agrega aquí cualquier método adicional necesario para tu lógica de negocio
}