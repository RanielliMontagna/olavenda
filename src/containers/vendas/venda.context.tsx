import { createContext, PropsWithChildren, useContext, useCallback, useState, useEffect } from 'react';

import useApp from 'store/app/app';

interface IVendaContext {

}

const VendaContext = createContext({} as IVendaContext);

const VendaProvider = ({ children }: PropsWithChildren) => {
  const { handleError, setLoading } = useApp();

  return (
    <VendaContext.Provider
      value={{
      }}
    >
      {children}
    </VendaContext.Provider>
  );
};

const useVendaContext = () => {
  const context = useContext(VendaContext);

  if (!context) {
    throw new Error('useVenda() deve ser usado com um <VendaProvider />');
  }

  return context;
};

export { VendaProvider, useVendaContext, VendaContext };
