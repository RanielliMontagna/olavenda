import create from 'zustand';

import type { AuthStates, AuthStore } from './auth.types';

import { getLocalToken, setLocalToken, removeLocalToken } from 'helpers/localStorage/localStorage';
import { getSessionToken, setSessionToken, removeSessionToken } from 'helpers/session/session';

const defaultState: AuthStates = {
  token: null,
  isAuthenticated: false,
  user: null,
};
let initialState = defaultState;

const token = getSessionToken() ?? getLocalToken();

if (token) {
  initialState = {
    token: token,
    isAuthenticated: true,
    user: null,
  };
}

const useAuth = create<AuthStore>((set) => ({
  ...initialState,
  setToken: (token, remember) => {
    if (remember) setLocalToken(token);
    if (token) setSessionToken(token);

    set(() => {
      if (!token) return defaultState;
      return {
        token: token,
        isAuthenticated: true,
      };
    });
  },
  clearStore: () => {
    removeSessionToken();
    removeLocalToken();
    set(defaultState);
  },
  setUser: (user) => set({ user }),
}));

export default useAuth;
