import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import type { IBuscarCategoria, IEditarCategoria, INovaCategoria } from './categorias.types';

// Buscar todas as categorias
export const buscarCategorias = async ({ search }: IBuscarCategoria) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.categorias}/buscar/all`, {
    headers,
    params: {
      search,
    },
  });

  return response;
};

export const buscarCategoriaComFiltro = async ({ search }: IBuscarCategoria) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.categorias}/buscar/${search}`, {
    headers,
  });

  return response;
};

// Adicionar uma categoria
export const adicionarCategoria = async (categoria: INovaCategoria) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.categorias}/create`, categoria, { headers });

  return response;
};

// Editar uma categoria
export const editarCategoria = async (categoria: IEditarCategoria) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.categorias}/edit`, categoria, { headers });

  return response;
};

// Excluir uma categoria
export const excluirCategoria = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${urls.categorias}/delete/${id}`, { headers });

  return response;
};
