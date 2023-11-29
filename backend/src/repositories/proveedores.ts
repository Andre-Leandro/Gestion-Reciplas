import { PrismaClient, proveedores as PrismaProveedor } from "@prisma/client";
import { Proveedor } from "../models/proveedores";

export interface ProveedorRepository {
  getAllProveedores(): Promise<Proveedor[]>;
  getProveedorById(proveedorId: number): Promise<Proveedor | null>;
  createProveedor(proveedor: Proveedor): Promise<Proveedor>;
  updateProveedor(proveedor: Proveedor): Promise<Proveedor | null>;
  deleteProveedor(proveedorId: number): Promise<Proveedor | null>;
}

export class PrismaProveedorRepository implements ProveedorRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async getAllProveedores(): Promise<Proveedor[]> {
    const proveedores = await this.prisma.proveedores.findMany();
    return proveedores.map((p) => this.mapToProveedor(p));
  }

  async getProveedorById(proveedorId: number): Promise<Proveedor | null> {
    const proveedor = await this.prisma.proveedores.findUnique({
      where: { id: proveedorId },
    });
    return proveedor ? this.mapToProveedor(proveedor) : null;
  }

  async createProveedor(proveedor: Proveedor): Promise<Proveedor> {
    const createdProveedor = await this.prisma.proveedores.create({
      data: {
        nombre: proveedor.nombre,
        apellido: proveedor.apellido,
        cuilCuit: proveedor.cuilCuit,
        direccion: proveedor.direccion,
        localidad: proveedor.localidad,
        provincia: proveedor.provincia,
        telefono: proveedor.telefono,
        correo: proveedor.correo,
        fechaRegistro: new Date(),
        descripcion: proveedor.descripcion ? proveedor.descripcion : "Gran proveedor",
        habilitado: true,
      },
    });
    return this.mapToProveedor(createdProveedor);
  }

  async updateProveedor(proveedor: Proveedor): Promise<Proveedor | null> {

    
    console.log(proveedor)

    const updatedProveedor = await this.prisma.proveedores.update({
      where: { id: proveedor.id },
      data: {
        nombre: proveedor.nombre,
        apellido: proveedor.apellido,
        cuilCuit: proveedor.cuilCuit,
        direccion: proveedor.direccion,
        localidad: proveedor.localidad,
        provincia: proveedor.provincia,
        telefono: proveedor.telefono,
        correo: proveedor.correo,
        fechaRegistro: proveedor.fechaRegistro,
        descripcion: proveedor.descripcion,
        habilitado: proveedor.habilitado,
      },
    });
    return updatedProveedor ? this.mapToProveedor(updatedProveedor) : null;
  }

  async deleteProveedor(proveedorId: number): Promise<Proveedor | null> {
    const deletedProveedor = await this.prisma.proveedores.delete({
      where: { id: proveedorId },
    });
    return deletedProveedor ? this.mapToProveedor(deletedProveedor) : null;
  }

  private mapToProveedor(prismaProveedor: PrismaProveedor): Proveedor {
    return {
      id: prismaProveedor.id,
      nombre: prismaProveedor.nombre,
      apellido: prismaProveedor.apellido,
      cuilCuit: prismaProveedor.cuilCuit,
      direccion: prismaProveedor.direccion,
      localidad: prismaProveedor.localidad,
      provincia: prismaProveedor.provincia,
      telefono: prismaProveedor.telefono,
      correo: prismaProveedor.correo,
      fechaRegistro: prismaProveedor.fechaRegistro,
      descripcion: prismaProveedor.descripcion,
      habilitado: prismaProveedor.habilitado,
    };
  }
}
