import { Token } from 'store/auth/auth.types';
import { keyEmail, keyPassword, keyToken } from '../persistance';

// Funções de acesso ao token
export const setLocalToken = (token: Token) => {
  localStorage.setItem(keyToken, token ?? '');
};

export const getLocalToken = () => {
  return localStorage.getItem(keyToken);
};

export const removeLocalToken = () => {
  localStorage.removeItem(keyToken);
};

// Funções de acesso ao email
export const setLocalEmail = (email: string) => {
  localStorage.setItem(keyEmail, email ?? '');
};

export const getLocalEmail = () => {
  return localStorage.getItem(keyEmail);
};

export const removeLocalEmail = () => {
  localStorage.removeItem(keyEmail);
};

// Funções de acesso ao password
export const setLocalPassword = (password: string) => {
  localStorage.setItem(keyPassword, password ?? '');
};

export const getLocalPassword = () => {
  return localStorage.getItem(keyPassword);
};

export const removeLocalPassword = () => {
  localStorage.removeItem(keyPassword);
};

export const setTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem('theme', theme);
};

export const getTheme = () => {
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    return 'dark';
  } else {
    return 'light';
  }
};
