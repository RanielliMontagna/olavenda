import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { excluirCategoria } from 'service/categorias/categorias';
import useApp from 'store/app/app';

import type { IRemoverCategoriaDialogProps } from './removerCategoriaDialog.types';

export const RemoverCategoriaDialog = ({
  open,
  handleClose,
  categoria,
  handleBuscarCategorias,
}: IRemoverCategoriaDialogProps) => {
  const { handleError, setNotification } = useApp();

  const _handleRemoverCategoria = async () => {
    try {
      if (!categoria) {
        throw new Error('Categoria não informada');
      }

      const res = await excluirCategoria(categoria.id);

      if (res.data) {
        if (res.data?.Sucesso) {
          setNotification({ message: 'Categoria excluída com sucesso!', options: { variant: 'success' } });
          handleBuscarCategorias();
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
        <Typography variant="h6">Excluir categoria?</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja remover a categoria <b>{categoria?.nome}?</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={_handleRemoverCategoria} autoFocus color="error">
          Excluir categoria
        </Button>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
