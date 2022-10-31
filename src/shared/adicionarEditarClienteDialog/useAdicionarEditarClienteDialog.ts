import { adicionarCliente, editarCliente } from 'service/clientes/clientes';
import useApp from 'store/app/app';
import type {
  IAdicionarEditarClienteDialog,
  IAdicionarEditarClienteFormValues,
} from './adicionarEditarCliente.types';

const useAdicionarEditarClienteDialog = ({
  handleClose,
  cliente,
  handleBuscarClientes,
}: IAdicionarEditarClienteDialog) => {
  const { handleError, setNotification, setLoading } = useApp();

  const onSubmit = async (data: IAdicionarEditarClienteFormValues) => {
    setLoading(true);
    try {
      if (!cliente) {
        //Adicionar cliente
        const response = await adicionarCliente({
          nome: data.nome,
          cpfCnpj: data.cpfCnpj,
          telefone: data.telefone,
          email: data.email,
          email_confirmation: data.email,
        });

        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarClientes();
        } else {
          handleError(response.data.Mensagem);
        }
      } else {
        //Editar cliente
        const response = await editarCliente({
          id: Number(cliente.id),
          nome: data.nome,
          cpfCnpj: data.cpfCnpj,
          telefone: data.telefone,
          email: data.email,
          email_confirmation: data.email,
        });
        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarClientes();
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

export { useAdicionarEditarClienteDialog };
