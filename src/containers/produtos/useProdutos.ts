import { useEffect, useState } from 'react';
import { buscarProdutos } from 'service/produtos/produtos';
import { IProduto } from 'service/produtos/produtos.types';
import useApp from 'store/app/app';

const useProdutos = () => {
  const { handleError } = useApp();
  const [produtos, setProdutos] = useState<IProduto[]>([]);

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

export { useProdutos };
