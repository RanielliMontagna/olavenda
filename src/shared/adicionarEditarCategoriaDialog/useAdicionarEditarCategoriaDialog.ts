import { adicionarCategoria, editarCategoria } from 'service/categorias/categorias';
import useApp from 'store/app/app';
import type {
  IAdicionarEditarCategoriaDialog,
  IAdicionarEditarCategoriaFormValues,
} from './adicionarEditarCategoria.types';

const useAdicionarEditarCategoriaDialog = ({
  handleClose,
  categoria,
  handleBuscarCategorias,
}: IAdicionarEditarCategoriaDialog) => {
  const { handleError, setNotification, setLoading } = useApp();

  const onSubmit = async (data: IAdicionarEditarCategoriaFormValues) => {
    setLoading(true);
    try {
      if (!categoria) {
        //Adicionar categoria
        const response = await adicionarCategoria({
          nome: data.nome,
          cores: data.cores,
        });

        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarCategorias();
        } else {
          handleError(response.data.Mensagem);
        }
      } else {
        //Editar categoria
        const response = await editarCategoria({
          id: Number(categoria.id),
          nome: data.nome,
          cores: data.cores,
        });
        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarCategorias();
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

export { useAdicionarEditarCategoriaDialog };
