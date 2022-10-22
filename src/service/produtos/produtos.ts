import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import { IBuscarProduto, IEditarProduto, INovoProduto } from './produtos.types';

// Buscar todos os produtos
export const buscarProdutos = async ({ id }: IBuscarProduto) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.produtos}/buscar/all`, {
    headers,
    params: {
      id,
    },
  });

  return response;
};

// Adicionar um produto
export const adicionarProduto = async (produto: INovoProduto) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.produtos}/create`, produto, { headers });

  return response;
};

// Editar um produto
export const editarProduto = async (produto: IEditarProduto) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.produtos}/edit`, produto, { headers });

  return response;
};

// Excluir um produto
export const excluirProduto = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${urls.produtos}/delete/${id}`, { headers });

  return response;
};
