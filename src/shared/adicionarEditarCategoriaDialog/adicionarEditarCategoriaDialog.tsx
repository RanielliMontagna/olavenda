import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form } from 'components/form/form';
import { Fields } from './fields/fields';
import { IAdicionarEditarCategoriaDialog } from './adicionarEditarCategoria.types';
import { useAdicionarEditarCategoriaDialog } from './useAdicionarEditarCategoriaDialog';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AdicionarEditarCategoriaDialog = (props: IAdicionarEditarCategoriaDialog) => {
  const { onSubmit } = useAdicionarEditarCategoriaDialog(props);

  const schema = yup
    .object({
      nome: yup.string().required('Nome é obrigatório'),
      cores: yup.string().required('Cor é obrigatório'),
    })
    .required();

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <Typography variant="h6">{props.categoria ? 'Editar Categoria' : 'Adicionar Categoria'}</Typography>
      </DialogTitle>
      <Form
        onSubmit={onSubmit}
        resolver={yupResolver(schema)}
        defaultValues={{
          nome: props.categoria?.nome,
          cores: Number(props.categoria?.cores),
        }}
      >
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

export default AdicionarEditarCategoriaDialog;
