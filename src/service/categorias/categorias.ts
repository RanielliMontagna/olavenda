import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import type { IBuscarCategoria } from './categorias.types';

// Buscar todos as categorias
export const buscarCategorias = async ({ search }: IBuscarCategoria) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.categorias}/buscar/Cong`, {
    headers,
    params: {
      search,
    },
  });

  return response;
};
