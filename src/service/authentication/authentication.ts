import { api, apiWithoutAuth } from 'service/api';
import type { ILogin } from './authentication.types';

// Buscar todos os produtos
export const login = async ({ email, senha }: ILogin) => {
  const response = await api.post('/login', { email, password: senha });

  return response;
};

export const cookieLogin = async () => {
  const response = await apiWithoutAuth.get('/sanctum/csrf-cookie');

  return response;
};
