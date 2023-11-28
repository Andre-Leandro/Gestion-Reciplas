import { MateriaPrima } from "./materiasPrimas";
import { Proveedor } from "./proveedores";

export type Compra = {
  id?: number;
  fecha: Date;
  comentarios: string | null;
  proveedor: Proveedor | number;
  lineasCompras: LineasCompras[];
};

export type LineasCompras = {
  id?: number;
  precio: number;
  cantidad: number;
  materiaprima: MateriaPrima | number
};
