// repositories/compras.ts
import {
  PrismaClient,
  // compras as PrismaCompra,
  lineasingresos as PrismaLineaCompra,
  proveedores as PrismaProveedor,
  materiasprimas as PrismaMateriasPrimas
} from "@prisma/client";
import { IngresoMP, LineaIngreso } from "../models/ingresoMP";
import { Proveedor } from "../models/proveedores";
import { MateriaPrima } from "../models/materiasPrimas";

interface ExtendedIngreso extends Omit<IngresoMP, 'lineasIngreso'> {
  proveedorId: number,
  proveedor: PrismaProveedor;
  lineasingreso?: PrismaLineaCompra[];
}

export interface IngresoRepository {
  createIngreso(ingresoMP: IngresoMP): Promise<IngresoMP>;
  getIngresoById(ingresoId: number): Promise<IngresoMP | null>;
  getAllIngresos(): Promise<IngresoMP[]>;
  // Agrega otros métodos según sea necesario
}

export class PrismaIngresoRepository implements IngresoRepository {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async createIngreso(ingresoMP: IngresoMP): Promise<IngresoMP> {
    const createdIngreso = await this.prisma.ingresosmp.create({
      data: {
        fecha: ingresoMP.fecha,
        comentarios: ingresoMP.comentarios || "",
        proveedor: {
          connect: { id: Number(ingresoMP.proveedor) }, // Suponiendo que ya tienes el ID del proveedor
        },
        lineasingreso: {
          create: ingresoMP.lineasIngreso.map((linea) => ({
            precio: parseFloat(String(linea.precio)),
            cantidad: parseFloat(String(linea.cantidad)),
            materiaprima: { connect: { id: Number(linea.materiaprima) } }, // Ajuste aquí
          })),
        },
      },
      include: {
        lineasingreso: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });

    // Actualizar cantidadStock después de crear la compra
    for (const lineaIngreso of ingresoMP.lineasIngreso) {
      const materiaPrimaId = Number(lineaIngreso.materiaprima);
      const cantidad = parseFloat(String(lineaIngreso.cantidad));

      // Obtener la materia prima correspondiente
      const materiaPrima = await this.prisma.materiasprimas.findUnique({
        where: { id: materiaPrimaId },
      });

      // Actualizar la cantidadStock
      if (materiaPrima) {
        await this.prisma.materiasprimas.update({
          where: { id: materiaPrimaId },
          data: { cantidadStock: materiaPrima.cantidadStock + cantidad },
        });
      }
    }

    return this.mapToCompra(createdIngreso);
  }

  async getIngresoById(ingresoId: number): Promise<IngresoMP | null> {
    const ingresoMP = await this.prisma.ingresosmp.findUnique({
      where: { id: ingresoId },
      include: {
        lineasingreso: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });

    return ingresoMP ? this.mapToCompra(ingresoMP) : null;
  }

  async getAllIngresos(): Promise<IngresoMP[]> {
    const ingresosMP = await this.prisma.ingresosmp.findMany({
      include: {
        lineasingreso: {
          include: {
            materiaprima: true
          }
        },
        proveedor: true,
      },
    });
    
    const ingresosPromises = ingresosMP.map((ingreso) => this.mapToCompra(ingreso));
    const ingresos = await Promise.all(ingresosPromises)
    return ingresos
  }

  private async mapToCompra(prismaIngreso: ExtendedIngreso): Promise<IngresoMP> {
    const lineasIngresoPromises = prismaIngreso.lineasingreso?.map((linea) => this.mapToLineaCompras(linea)) || [];
    const lineasIngreso = await Promise.all(lineasIngresoPromises)
    return {
      id: prismaIngreso.id,
      fecha: prismaIngreso.fecha,
      comentarios: prismaIngreso.comentarios ?? "",
      proveedor: this.mapToProveedor(prismaIngreso.proveedor),
      // lineasCompras: prismaCompra.lineascompras.map((linea) => this.mapToLineaCompras(linea)),
      lineasIngreso: lineasIngreso
    };
  }

  private async mapToLineaCompras(prismaLineaIngreso: PrismaLineaCompra): Promise<LineaIngreso> {
    const mp = await this.prisma.materiasprimas.findUnique({
      where: { id: prismaLineaIngreso.materiaPrimaId },
    });
    if (mp) {
      return {
        id: prismaLineaIngreso.id,
        precio: prismaLineaIngreso.precio,
        cantidad: prismaLineaIngreso.cantidad,
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
