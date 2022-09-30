import { Token } from 'store/auth/auth.types';
import { keyToken } from '../persistance';

export const setSessionToken = (token: Token) => {
  sessionStorage.setItem(keyToken, token ?? '');
};

export const getSessionToken = () => {
  return sessionStorage.getItem(keyToken);
};

export const removeSessionToken = () => {
  sessionStorage.removeItem(keyToken);
};
