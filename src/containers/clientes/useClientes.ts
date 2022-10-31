import { useEffect, useState } from 'react';
import { buscarClientes } from 'service/clientes/clientes';
import { ICliente } from 'service/clientes/clientes.types';
import useApp from 'store/app/app';

const useClientes = () => {
  const { handleError } = useApp();
  const [clientes, setClientes] = useState<ICliente[]>([]);

  const handleBuscarClientes = async () => {
    try {
      const res = await buscarClientes({});
      if (res.data) {
        if (res.data?.Sucesso) {
          setClientes(res.data?.Clientes || []);
        }
      }
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    handleBuscarClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: clientes,
    handleBuscarClientes,
  };
};

export { useClientes };
