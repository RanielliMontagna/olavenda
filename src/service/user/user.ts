import { api, makeHeaders } from 'service/api';
import { urls } from 'service/urls';

export const dadosUsuario = async () => {
  const headers = makeHeaders();
  return await api.get(urls.usuarios, { headers });
};
