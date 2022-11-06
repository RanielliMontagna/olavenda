import { adicionarVenda } from 'service/vendas/vendas';
import useApp from 'store/app/app';
import type {
  IAdicionarEditarVendaDialog,
  IAdicionarEditarVendaFormValues,
} from './adicionarEditarVenda.types';

const useAdicionarEditarVendaDialog = ({
  handleClose,
  venda,
  handleBuscarVendas,
}: IAdicionarEditarVendaDialog) => {
  const { handleError, setNotification, setLoading } = useApp();

  const onSubmit = async (data: IAdicionarEditarVendaFormValues) => {
    setLoading(true);
    try {
      if (!venda) {
        //Adicionar venda
        const response = await adicionarVenda({
          id: Number(data.id),
          Cliente: data.Cliente,
          Valor: Number(data.Valor),
        });

        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarVendas();
        } else {
          handleError(response.data.Mensagem);
        }
      }
    } catch (err) {
      handleError(err);
    }
    setLoading(false);
  };

  return {
    onSubmit,
  };
};

export { useAdicionarEditarVendaDialog };
