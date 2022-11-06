import { useEffect, useState } from 'react';
import { buscarVendas } from 'service/vendas/vendas';
import { IVenda } from 'service/vendas/vendas.types';
import useApp from 'store/app/app';

const useVendas = () => {
  const { handleError } = useApp();
  const [vendas, setVendas] = useState<IVenda[]>([]);

  const handleBuscarVendas = async () => {
    try {
      const res = await buscarVendas({});
      if (res.data) {
        if (res.data?.Sucesso) {
          setVendas(res.data?.Vendas || []);
        }
      }
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    handleBuscarVendas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: vendas,
    handleBuscarVendas,
  };
};

export { useVendas };
