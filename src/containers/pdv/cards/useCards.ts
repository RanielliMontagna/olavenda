import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

import { buscarProdutoComFiltro, buscarProdutos } from 'service/produtos/produtos';
import { IProdutoValues } from 'service/produtos/produtos.types';
import useApp from 'store/app/app';

const useCards = () => {
  const { handleError } = useApp();
  const [produtos, setProdutos] = useState<IProdutoValues[]>([]);

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

  return {
    data: produtos,
    handleBuscarProdutos,
  };
};

export { useCards };
