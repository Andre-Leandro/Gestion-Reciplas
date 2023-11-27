// repositories/compras.ts
import {
  PrismaClient,
  // compras as PrismaCompra,
  lineascompras as PrismaLineaCompra,
  proveedores as PrismaProveedor,
  materiasprimas as PrismaMateriasPrimas
} from "@prisma/client";
import { Compra, LineasCompras } from "../models/compras";
import { Proveedor } from "../models/proveedores";
import { MateriaPrima } from "../models/materiasPrimas";

interface ExtendedCompra extends Omit<Compra, 'lineasCompras'> {
  proveedorId: number,
  proveedor: PrismaProveedor;
  lineascompras?: PrismaLineaCompra[];
}

export interface CompraRepository {
  createCompra(compra: Compra): Promise<Compra>;
  getCompraById(compraId: number): Promise<Compra | null>;
  getAllCompras(): Promise<Compra[]>;
  // Agrega otros métodos según sea necesario
}

export class PrismaCompraRepository implements CompraRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async createCompra(compra: Compra): Promise<Compra> {
    const createdCompra = await this.prisma.compras.create({
      data: {
        fecha: compra.fecha,
        comentarios: compra.comentarios || "",
        proveedor: {
          connect: { id: compra.proveedor.id }, // Suponiendo que ya tienes el ID del proveedor
        },
        lineascompras: {
          create: compra.lineasCompras.map((linea) => ({
            precio: linea.precio,
            cantidad: linea.cantidad,
            materiaprima: { connect: { id: linea.materiaprima.id } }, // Ajuste aquí
          })),
        },
      },
      include: {
        lineascompras: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });

    return this.mapToCompra(createdCompra);
  }

  async getCompraById(compraId: number): Promise<Compra | null> {
    const compra = await this.prisma.compras.findUnique({
      where: { id: compraId },
      include: {
        lineascompras: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });

    return compra ? this.mapToCompra(compra) : null;
  }

  async getAllCompras(): Promise<Compra[]> {
    const compras = await this.prisma.compras.findMany({
      include: {
        lineascompras: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });
    
    const comprasPromises = compras.map((compra) => this.mapToCompra(compra));
    const comp = await Promise.all(comprasPromises)
    return comp
  }

  private async mapToCompra(prismaCompra: ExtendedCompra): Promise<Compra> {
    const lineasComprasPromises = prismaCompra.lineascompras?.map((linea) => this.mapToLineaCompras(linea)) || [];
    const lineasCompras = await Promise.all(lineasComprasPromises)
    return {
      id: prismaCompra.id,
      fecha: prismaCompra.fecha,
      comentarios: prismaCompra.comentarios ?? "",
      proveedor: this.mapToProveedor(prismaCompra.proveedor),
      // lineasCompras: prismaCompra.lineascompras.map((linea) => this.mapToLineaCompras(linea)),
      lineasCompras: lineasCompras
    };
  }

  private async mapToLineaCompras(prismaLineaCompra: PrismaLineaCompra): Promise<LineasCompras> {
    const mp = await this.prisma.materiasprimas.findUnique({
      where: { id: prismaLineaCompra.materiaPrimaId },
    });
    if (mp) {
      return {
        id: prismaLineaCompra.id,
        precio: prismaLineaCompra.precio,
        cantidad: prismaLineaCompra.cantidad,
        materiaprima: this.mapToMateriaPrima(mp)
      };
    } else {
      throw new Error()
    }
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

  private mapToMateriaPrima(prismaMateriaPrima: PrismaMateriasPrimas): MateriaPrima {
    return {
      id: prismaMateriaPrima.id,
      nombre: prismaMateriaPrima.nombre,
      cantidadStock: prismaMateriaPrima.cantidadStock,
    };
  }
}
