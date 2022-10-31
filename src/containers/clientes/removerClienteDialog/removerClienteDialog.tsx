import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { excluirCliente } from 'service/clientes/clientes';
import useApp from 'store/app/app';

import type { IRemoverClienteDialogProps } from './removerClienteDialog.types';

export const RemoverClienteDialog = ({
  open,
  handleClose,
  cliente,
  handleBuscarClientes,
}: IRemoverClienteDialogProps) => {
  const { handleError, setNotification } = useApp();

  const _handleRemoverCliente = async () => {
    try {
      if (!cliente) {
        throw new Error('Cliente não informado');
      }

      const res = await excluirCliente(cliente.id);

      if (res.data) {
        if (res.data?.Sucesso) {
          setNotification({ message: 'Cliente excluído com sucesso!', options: { variant: 'success' } });
          handleBuscarClientes();
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
        <Typography variant="h6">Excluir cliente?</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja remover o cliente <b>{cliente?.nome}?</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={_handleRemoverCliente} autoFocus color="error">
          Excluir cliente
        </Button>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
