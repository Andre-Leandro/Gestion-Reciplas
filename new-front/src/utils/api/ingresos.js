import { get, post, put, del } from "./baseApi";

// personasServices
export async function getAllIngresos() {
  return get('/ingresos')
}

export async function getIngresoById(idIngreso) {
  return get(`/ingresos/${idIngreso}`)
}

export async function createIngreso(ingreso) {
  return post(`/ingresos`, ingreso);
}

export async function getIngreso(id, ingreso) {
  return put(`/ingresos/${id}`, ingreso);
}

export async function deleteMateria(id) {
  return del(`/ingresos/${id}`);
}