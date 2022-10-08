import { StoreApi } from 'zustand';

import type { AppStore } from '../app.types';

interface HandleError {
  error: unknown;
  set: StoreApi<AppStore>['setState'];
}

export const handleError = ({ error, set }: HandleError) => {
  set((state) => ({ ...state, loading: false }));

  //Implementar o tratamento de erros específico para cada tipo de erro
};
