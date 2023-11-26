import { PrismaClient, Product as PrismaProduct } from "@prisma/client";
import { Product } from "../models/productos";

export interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(productId: number): Promise<Product | null>;
  createProduct(product: Product): Promise<Product>;
  updateProduct(product: Product): Promise<Product | null>;
  deleteProduct(productId: number): Promise<Product | null>;
}

export class PrismaProductRepository implements ProductRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map((p) => this.mapToProduct(p));
  }

  async getProductById(productId: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    return product ? this.mapToProduct(product) : null;
  }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        name: product.name,
        descripcion: product.descripcion,
        price: product.price,
      },
    });
    return this.mapToProduct(createdProduct);
  }

  async updateProduct(product: Product): Promise<Product | null> {
    const updatedProduct = await this.prisma.product.update({
      where: { id: product.id },
      data: {
        name: product.name,
        descripcion: product.descripcion,
        price: product.price,
      },
    });
    return updatedProduct ? this.mapToProduct(updatedProduct) : null;
  }

  async deleteProduct(productId: number): Promise<Product | null> {
    const deletedProduct = await this.prisma.product.delete({
      where: { id: productId },
    });
    return deletedProduct ? this.mapToProduct(deletedProduct) : null;
  }

  private mapToProduct(prismaProduct: PrismaProduct): Product {
    return {
      id: prismaProduct.id,
      name: prismaProduct.name,
      descripcion: prismaProduct.descripcion,
      price: prismaProduct.price,
    };
  }
}