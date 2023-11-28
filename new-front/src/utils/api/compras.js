import { get, post, put, del } from "./baseApi";

// personasServices
export async function getAllCompras() {
  return get('/compras')
}

export async function getCompraById(idCompra) {
  return get(`/compras/${idCompra}`)
}

export async function createCompra(compra) {
  return post(`/compras`, compra);
}

export async function updateCompra(id, compra) {
  return put(`/compras/${id}`, compra);
}

export async function deleteMateria(id) {
  return del(`/compras/${id}`);
}