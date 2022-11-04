import { createContext, PropsWithChildren, useContext } from 'react';
import { useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn } from 'react-hook-form';
import { IProdutoValues } from 'service/produtos/produtos.types';

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
}

const PdvContext = createContext({} as IPdvContext);

const PdvProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<IPdvFormValues>();
  const produtosMethods = useFieldArray<IPdvFormValues>({
    control: methods.control,
    name: 'produtos',
  });

  return (
    <PdvContext.Provider
      value={{
        methods,
        produtosMethods,
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
