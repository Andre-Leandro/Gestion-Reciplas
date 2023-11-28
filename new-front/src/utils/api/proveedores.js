import { get, post, put, del } from "./baseApi";

// personasServices
export async function getAllProveedores() {
  return get('/proveedores')
}