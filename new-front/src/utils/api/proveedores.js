import { get, post, put, del } from "./baseApi";


export async function getAllProveedores() {
  return get('/proveedores')
}

export async function createProveedor(compra) {
  return post(`/proveedores`, compra);
}
