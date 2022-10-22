import { adicionarProduto, editarProduto } from 'service/produtos/produtos';
import useApp from 'store/app/app';
import type {
  IAdicionarEditarProdutoDialog,
  IAdicionarEditarProdutoFormValues,
} from './adicionarEditarProduto.types';

const useAdicionarEditarProdutoDialog = ({
  handleClose,
  produto,
  handleBuscarProdutos,
}: IAdicionarEditarProdutoDialog) => {
  const { handleError, setNotification, setLoading } = useApp();

  const onSubmit = async (data: IAdicionarEditarProdutoFormValues) => {
    setLoading(true);
    try {
      if (!produto) {
        //Adicionar produto
        const response = await adicionarProduto({
          nome: data.nome,
          valor: Number(data.valor),
          codBar: data.codBar || undefined,
          categoria: data?.categoria?.value || undefined,
          classificacaoFiscal: data.classificacaoFiscal.value,
        });

        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarProdutos();
        } else {
          handleError(response.data.Mensagem);
        }
      } else {
        //Editar produto
        const response = await editarProduto({
          id: Number(produto.id),
          nome: data.nome,
          valor: Number(data.valor),
          codBar: data.codBar || undefined,
          categoria: data?.categoria?.value || undefined,
          classificacaoFiscal: data.classificacaoFiscal.value,
        });
        if (response.data.Sucesso) {
          setNotification({
            message: response.data.Mensagem,
            options: {
              variant: 'success',
            },
          });
          handleClose();
          handleBuscarProdutos();
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

export { useAdicionarEditarProdutoDialog };
