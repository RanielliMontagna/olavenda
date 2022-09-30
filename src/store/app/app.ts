import create from 'zustand';
import { AppStore } from './app.types';
import { handleError } from './handleError/handleError';

const useApp = create<AppStore>((set) => ({
  loading: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  handleError: (error) => handleError({ error, set }),
}));

export default useApp;
