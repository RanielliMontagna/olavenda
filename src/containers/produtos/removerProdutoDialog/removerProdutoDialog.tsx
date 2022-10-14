import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { excluirProduto } from 'service/produtos/produtos';
import useApp from 'store/app/app';

import type { IRemoverProdutoDialogProps } from './removerProdutoDialog.types';

export const RemoverProdutoDialog = ({
  open,
  handleClose,
  produto,
  handleBuscarProdutos,
}: IRemoverProdutoDialogProps) => {
  const { handleError, setNotification } = useApp();

  const _handleRemoverProduto = async () => {
    try {
      if (!produto) {
        throw new Error('Produto não informado');
      }

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
      <DialogTitle>
        <Typography variant="h6">Excluir produto?</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja remover o produto <b>{produto?.nome}?</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={_handleRemoverProduto} autoFocus color="error">
          Excluir produto
        </Button>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
