import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn } from 'react-hook-form';
import { throttle } from 'lodash';

import { buscarProdutoComFiltro, buscarProdutos } from 'service/produtos/produtos';
import { IProdutoValues } from 'service/produtos/produtos.types';
import useApp from 'store/app/app';

interface ProdutoForm extends IProdutoValues {
  quantidade: number;
  idProduto: number;
}

type IPdvFormValues = {
  produtos: ProdutoForm[];
};

interface IPdvContext {
  methods: UseFormReturn<IPdvFormValues>;
  produtosMethods: UseFieldArrayReturn<IPdvFormValues>;
  produtos: IProdutoValues[];
  handleBuscarProdutos: (term: string) => void;
}

const PdvContext = createContext({} as IPdvContext);

const PdvProvider = ({ children }: PropsWithChildren) => {
  const { handleError } = useApp();

  const [produtos, setProdutos] = useState<IProdutoValues[]>([]);
  const methods = useForm<IPdvFormValues>();
  const produtosMethods = useFieldArray<IPdvFormValues>({
    control: methods.control,
    name: 'produtos',
  });

  const _handleBuscarProdutos = async () => {
    try {
      const res = await buscarProdutos({});
      if (res.data) {
        if (res.data?.Sucesso) {
          setProdutos(res.data?.Produtos || []);
        }
      }
    } catch (err) {
      handleError(err);
    }
  };

  //buscar produto throttle
  const handleBuscarProdutos = throttle(async (term: string) => {
    if (term) {
      try {
        const res = await buscarProdutoComFiltro({ search: term });
        setProdutos(res.data?.Produtos || []);
      } catch (err) {
        handleError(err);
      }
    } else {
      _handleBuscarProdutos();
    }
  }, 500);

  useEffect(() => {
    _handleBuscarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PdvContext.Provider
      value={{
        methods,
        produtosMethods,
        produtos,
        handleBuscarProdutos,
      }}
    >
      {children}
    </PdvContext.Provider>
  );
};

const usePdvContext = () => {
  const context = useContext(PdvContext);

  if (!context) {
    throw new Error('usePdv() deve ser usado com um <PdvProvider />');
  }

  return context;
};

export { PdvProvider, usePdvContext, PdvContext };
