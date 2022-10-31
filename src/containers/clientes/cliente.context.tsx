import { createContext, PropsWithChildren, useContext, useCallback, useState, useEffect } from 'react';

import useApp from 'store/app/app';

interface IClienteContext {
}

const ClienteContext = createContext({} as IClienteContext);

const ClienteProvider = ({ children }: PropsWithChildren) => {
  const { handleError, setLoading } = useApp();

  return (
    <ClienteContext.Provider
      value={{
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
};

const useClienteContext = () => {
  const context = useContext(ClienteContext);

  if (!context) {
    throw new Error('useCliente() deve ser usado com um <ClienteProvider />');
  }

  return context;
};

export { ClienteProvider, useClienteContext, ClienteContext };
