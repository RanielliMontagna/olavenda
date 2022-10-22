import { createContext, PropsWithChildren, useContext, useCallback, useState, useEffect } from 'react';

import { buscarCategorias } from 'service/categorias/categorias';
import type { ICategoriaValues } from 'service/categorias/categorias.types';
import { buscarClassificacoes } from 'service/classificacaoFiscal/classificacaoFiscal';
import { IClassificacaoFiscalValues } from 'service/classificacaoFiscal/classificacaoFiscal.types';

import useApp from 'store/app/app';

interface IProdutoContext {
  categorias: ICategoriaValues[];
  classificacoesFiscais: IClassificacaoFiscalValues[];
  handleBuscarCategorias: () => Promise<void>;
  handleBuscarClassificacoesFiscais: () => Promise<void>;
}

const ProdutoContext = createContext({} as IProdutoContext);

const ProdutoProvider = ({ children }: PropsWithChildren) => {
  const { handleError, setLoading } = useApp();

  const [categorias, setCategorias] = useState<ICategoriaValues[]>([]);
  const [classificacoesFiscais, setClassificacoesFiscais] = useState<IClassificacaoFiscalValues[]>([]);

  const handleBuscarCategorias = useCallback(async () => {
    setLoading(true);

    try {
      const response = await buscarCategorias({});
      setCategorias(response.data.Categorias);
    } catch (err) {
      handleError(err);
    }

    setLoading(false);
  }, [handleError, setLoading]);

  const handleBuscarClassificacoesFiscais = useCallback(async () => {
    setLoading(true);

    try {
      const response = await buscarClassificacoes({});
      setClassificacoesFiscais(
        response?.data?.classificacoes?.data?.filter((classificao: IClassificacaoFiscalValues) => {
          if (classificao.Codigo) {
            return classificao;
          }

          return null;
        })
      );
    } catch (err) {
      handleError(err);
    }
  }, [handleError, setLoading]);

  useEffect(() => {
    handleBuscarCategorias();
    handleBuscarClassificacoesFiscais();
  }, [handleBuscarCategorias, handleBuscarClassificacoesFiscais]);

  return (
    <ProdutoContext.Provider
      value={{
        categorias,
        classificacoesFiscais,
        handleBuscarCategorias,
        handleBuscarClassificacoesFiscais,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};

const useProdutoContext = () => {
  const context = useContext(ProdutoContext);

  if (!context) {
    throw new Error('useProduto() deve ser usado com um <ProdutoProvider />');
  }

  return context;
};

export { ProdutoProvider, useProdutoContext, ProdutoContext };
