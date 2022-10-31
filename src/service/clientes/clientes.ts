import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

import { IBuscarCliente, IEditarCliente, INovoCliente } from './clientes.types';

// Buscar todos os clientes
export const buscarClientes = async ({ id }: IBuscarCliente) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.clientes}/buscar/all`, {
    headers,
    params: {
      id,
    },
  });

  return response;
};

export const buscarClienteComFiltro = async ({ search }: IBuscarCliente) => {
  const headers = makeHeaders();

  const response = await api.get(`${urls.clientes}/buscar/${search}`, {
    headers,
  });

  return response;
};

// Adicionar um cliente
export const adicionarCliente = async (cliente: INovoCliente) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.clientes}/create`, cliente, { headers });

  return response;
};

// Editar um cliente
export const editarCliente = async (cliente: IEditarCliente) => {
  const headers = makeHeaders();
  const response = await api.post(`${urls.clientes}/edit`, cliente, { headers });

  return response;
};

// Excluir um cliente
export const excluirCliente = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${urls.clientes}/delete/${id}`, { headers });

  return response;
};
