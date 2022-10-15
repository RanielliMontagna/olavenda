import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form } from 'components/form/form';
import { Fields } from './fields/fields';
import { IAdicionarEditarProdutoDialog } from './adicionarEditarProduto.types';
import { useAdicionarEditarProdutoDialog } from './useAdicionarEditarProdutoDialog';

const AdicionarEditarProdutoDialog = (props: IAdicionarEditarProdutoDialog) => {
  const { onSubmit } = useAdicionarEditarProdutoDialog(props);

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <Typography variant="h6">{props.produto ? 'Editar Produto' : 'Adicionar Produto'}</Typography>
      </DialogTitle>
      <Form onSubmit={onSubmit}>
        <DialogContent>
          <Fields />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} variant="outlined" color="inherit">
            Cancelar
          </Button>
          <Button type="submit" autoFocus color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export { AdicionarEditarProdutoDialog };
