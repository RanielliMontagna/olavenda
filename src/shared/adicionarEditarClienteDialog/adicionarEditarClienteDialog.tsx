import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form } from 'components/form/form';
import { Fields } from './fields/fields';
import { IAdicionarEditarClienteDialog } from './adicionarEditarCliente.types';
import { useAdicionarEditarClienteDialog } from './useAdicionarEditarClienteDialog';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AdicionarEditarClienteDialog = (props: IAdicionarEditarClienteDialog) => {
  const { onSubmit } = useAdicionarEditarClienteDialog(props);

  const schema = yup
    .object({
      nome: yup.string().required('Nome é obrigatório'),
      cpfCnpj: yup.string().required('CPF ou CNPJ é obrigatório'),
      telefone: yup.string().required('Telefone é obrigatório'),
      email: yup.string().required('E-mail é obrigatório'),
    })
    .required();

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <Typography variant="h6">{props.cliente ? 'Editar Cliente' : 'Adicionar Cliente'}</Typography>
      </DialogTitle>
      <Form
        onSubmit={onSubmit}
        resolver={yupResolver(schema)}
        defaultValues={{
          nome: props.cliente?.nome,
          cpfCnpj: props.cliente?.cpfCnpj,
          telefone: props.cliente?.telefone,
          email: props.cliente?.email,
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

export default AdicionarEditarClienteDialog;
