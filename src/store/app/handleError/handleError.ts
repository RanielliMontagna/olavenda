import { useSnackbar as snackbar } from 'notistack';
import { StoreApi } from 'zustand';

import type { AppStore } from '../app.types';

interface HandleError {
  error: unknown;
  set: StoreApi<AppStore>['setState'];
}

export const handleError = ({ error, set }: HandleError) => {
  set((state) => ({ ...state, loading: false }));
  snackbar().enqueueSnackbar('Ocorreu um erro no sistema', { variant: 'error', autoHideDuration: 2000 });

  //Implementar o tratamento de erros específico para cada tipo de erro
};
