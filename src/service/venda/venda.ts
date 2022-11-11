import { api, makeHeaders } from 'service/api';

interface ICadastrarVenda {
  cliente?: number;
  produtos: {
    id: number;
    quantidade: number;
    valorProduto: number;
    nomeProduto: string;
  }[];
}

export const cadastrarVenda = async (payload: ICadastrarVenda) => {
  const headers = makeHeaders();

  const response = await api.post(`/vender`, payload, {
    headers,
  });

  return response;
};
