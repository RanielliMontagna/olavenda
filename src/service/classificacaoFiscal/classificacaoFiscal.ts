import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import type { IBuscarClassificacaoFiscal } from './classificacaoFiscal.types';

// Buscar todos as categorias
export const buscarClassificacoes = async ({ search }: IBuscarClassificacaoFiscal) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.classificacaoFiscal}/Buscar/all`, {
    headers,
    params: {
      search,
    },
  });

  return response;
};
