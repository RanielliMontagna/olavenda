import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { excluirVenda } from 'service/vendas/vendas';
import useApp from 'store/app/app';

import type { IRemoverVendaDialogProps } from './removerVendaDialog.types';

export const RemoverVendaDialog = ({
  open,
  handleClose,
  venda,
  handleBuscarVendas,
}: IRemoverVendaDialogProps) => {
  const { handleError, setNotification } = useApp();

  const _handleRemoverVenda = async () => {
    try {
      if (!venda) {
        throw new Error('Venda não informada');
      }

      const res = await excluirVenda(venda.id);

      if (res.data) {
        if (res.data?.Sucesso) {
          setNotification({ message: 'Venda excluída com sucesso!', options: { variant: 'success' } });
          handleBuscarVendas();
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
        <Typography variant="h6">Excluir venda?</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja remover a venda <b>{venda?.id}?</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={_handleRemoverVenda} autoFocus color="error">
          Excluir venda
        </Button>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
