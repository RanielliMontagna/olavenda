import { useEffect, useState } from 'react';

import type { IClienteValues } from 'service/clientes/clientes.types';
import type { IPagamentoDialogProps } from './pagamentoDialog.types';

import { cadastrarVenda } from 'service/venda/venda';
import useApp from 'store/app/app';
import { usePdvContext } from '../pdv.context';
import { buscarClientes } from 'service/clientes/clientes';
import { useFormContext } from 'react-hook-form';

const usePagamentoDialog = ({ handleClose }: IPagamentoDialogProps) => {
  const { handleError, setLoading, setNotification } = useApp();
  const { produtosMethods } = usePdvContext();
  const { getValues } = useFormContext();
  const [clientes, setClientes] = useState<IClienteValues[]>([]);

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

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await cadastrarVenda({
        produtos: produtosMethods.fields.map((produto) => ({
          id: produto.idProduto,
          nomeProduto: produto.nome,
          quantidade: produto.quantidade,
          valorProduto: produto.valor,
        })),
        cliente: getValues()?.cliente?.value || undefined,
      });

      if (response.data) {
        setNotification({
          message: 'Venda realizada com sucesso!',
          options: {
            variant: 'success',
          },
        });
        produtosMethods.remove(produtosMethods.fields.map((_, index) => index));
        handleClose();
      }
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleBuscarClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { clientes, handleSubmit };
};

export { usePagamentoDialog };
