import { PrismaClient, materiasprimas as PrismaMateriasPrimas } from "@prisma/client";
import { MateriaPrima } from "../models/materiasPrimas";

export interface MateriasPrimasRepository {
  getAllMateriasPrimas(): Promise<MateriaPrima[]>;
  getMateriaPrimaById(materiaPrimaId: number): Promise<MateriaPrima | null>;
  createMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima>;
  updateMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima | null>;
  deleteMateriaPrima(materiaPrimaId: number): Promise<MateriaPrima | null>;
}

export class PrismaMateriasPrimasRepository implements MateriasPrimasRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async getAllMateriasPrimas(): Promise<MateriaPrima[]> {
    const materiasPrimas = await this.prisma.materiasprimas.findMany();
    return materiasPrimas.map((mp) => this.mapToMateriaPrima(mp));
  }

  async getMateriaPrimaById(materiaPrimaId: number): Promise<MateriaPrima | null> {
    const materiaPrima = await this.prisma.materiasprimas.findUnique({
      where: { id: materiaPrimaId },
    });
    return materiaPrima ? this.mapToMateriaPrima(materiaPrima) : null;
  }

  async createMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima> {
    const createdMateriaPrima = await this.prisma.materiasprimas.create({
      data: {
        nombre: materiaPrima.nombre,
        cantidadStock: parseFloat(String(materiaPrima.cantidadStock)),
      },
    });
    return this.mapToMateriaPrima(createdMateriaPrima);
  }

  async updateMateriaPrima(materiaPrima: MateriaPrima): Promise<MateriaPrima | null> {
    const updatedMateriaPrima = await this.prisma.materiasprimas.update({
      where: { id: materiaPrima.id },
      data: {
        nombre: materiaPrima.nombre,
        cantidadStock: materiaPrima.cantidadStock,
      },
    });
    return updatedMateriaPrima ? this.mapToMateriaPrima(updatedMateriaPrima) : null;
  }

  async deleteMateriaPrima(materiaPrimaId: number): Promise<MateriaPrima | null> {
    const deletedMateriaPrima = await this.prisma.materiasprimas.delete({
      where: { id: materiaPrimaId },
    });
    return deletedMateriaPrima ? this.mapToMateriaPrima(deletedMateriaPrima) : null;
  }

  private mapToMateriaPrima(prismaMateriaPrima: PrismaMateriasPrimas): MateriaPrima {
    return {
      id: prismaMateriaPrima.id,
      nombre: prismaMateriaPrima.nombre,
      cantidadStock: prismaMateriaPrima.cantidadStock,
    };
  }
}
