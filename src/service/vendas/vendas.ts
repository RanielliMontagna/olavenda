import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import { IBuscarVenda, INovaVenda } from './vendas.types';

// Buscar todas as Vendas
export const buscarVendas = async ({ id }: IBuscarVenda) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.vendas}`, {
    headers,
    params: {
      id,
    },
  });

  return response;
};

// Adicionar uma Venda
export const adicionarVenda = async (Venda: INovaVenda) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.vendas}/create`, Venda, { headers });

  return response;
};

// Excluir uma Venda
export const excluirVenda = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${urls.vendas}/delete/${id}`, { headers });

  return response;
};
