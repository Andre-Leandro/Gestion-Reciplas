import { get, post, put, del } from "./baseApi";

// personasServices
export async function getAllMateriasPrimas() {
  return get('/materias-primas')
}

export async function getMateriaById(idPersona) {
  return get(`/api/grupos/${idPersona}`)
}

export async function createMateria(data) {
  return post(`/api/grupos`, data);
}

export async function updateMateria(id, data) {
  return put(`/api/grupos/${id}`, data);
}

export async function deleteMateria(id) {
  return del(`/api/grupos/${id}`);
}