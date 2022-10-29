import { useEffect, useState } from 'react';
import { buscarProdutos } from 'service/produtos/produtos';
import { IProdutoValues } from 'service/produtos/produtos.types';
import useApp from 'store/app/app';

const useCards = () => {
  const { handleError } = useApp();
  const [produtos, setProdutos] = useState<IProdutoValues[]>([]);

  const handleBuscarProdutos = async () => {
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

  useEffect(() => {
    handleBuscarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: produtos,
    handleBuscarProdutos,
  };
};

export { useCards };
