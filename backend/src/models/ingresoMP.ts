import { MateriaPrima } from "./materiasPrimas";
import { Proveedor } from "./proveedores";

export type IngresoMP = {
  id?: number;
  fecha: Date;
  comentarios: string | null;
  proveedor: Proveedor | number;
  lineasIngreso: LineaIngreso[];
};

export type LineaIngreso = {
  id?: number;
  precio: number;
  cantidad: number;
  materiaprima: MateriaPrima | number
};
