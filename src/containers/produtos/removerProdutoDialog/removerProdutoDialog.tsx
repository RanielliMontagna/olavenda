import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { excluirProduto } from 'service/produtos/produtos';
import type { IProdutoValues } from 'service/produtos/produtos.types';
import useApp from 'store/app/app';

interface IRemoverProdutoDialogProps {
  open: boolean;
  handleClose: () => void;
  handleBuscarProdutos: () => void;
  produto: IProdutoValues;
}

export const RemoverProdutoDialog = ({
  open,
  handleClose,
  produto,
  handleBuscarProdutos,
}: IRemoverProdutoDialogProps) => {
  const { handleError, setNotification } = useApp();

  const _handleRemoverProduto = async () => {
    try {
      const res = await excluirProduto(produto.id);

      if (res.data) {
        if (res.data?.Sucesso) {
          setNotification({ message: 'Produto excluído com sucesso!', options: { variant: 'success' } });
          handleBuscarProdutos();
          handleClose();
        } else {
          setNotification({ message: res.data?.Mensagem, options: { variant: 'error' } });
        }
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Você tem certeza que deseja remover o produto {produto?.nome}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={_handleRemoverProduto} autoFocus color="error">
          Excluir produto
        </Button>
      </DialogActions>
    </Dialog>
  );
};
