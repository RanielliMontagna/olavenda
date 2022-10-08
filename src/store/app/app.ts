import { getTheme } from 'helpers/localStorage/localStorage';
import create from 'zustand';
import { AppStore } from './app.types';
import { handleError } from './handleError/handleError';

const useApp = create<AppStore>((set) => ({
  loading: false,
  notification: null,
  themeMode: getTheme(),
  setThemeMode: (themeMode) => set({ themeMode }),
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setNotification: (notification) => set((state) => ({ ...state, notification })),
  handleError: (error) => handleError({ error, set }),
}));

export default useApp;
