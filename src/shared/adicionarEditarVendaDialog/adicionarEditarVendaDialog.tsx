import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form } from 'components/form/form';
import { Fields } from './fields/fields';
import { IAdicionarEditarVendaDialog } from './adicionarEditarVenda.types';
import { useAdicionarEditarVendaDialog } from './useAdicionarEditarVendaDialog';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useVendaContext } from '../../containers/vendas/venda.context';

const AdicionarEditarVendaDialog = (props: IAdicionarEditarVendaDialog) => {
  const { onSubmit } = useAdicionarEditarVendaDialog(props);

  const schema = yup
    .object({
      Cliente: yup.string().required('Nome é obrigatório'),
      Valor: yup.string().required('Valor é obrigatório'),
    })
    .required();

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <Typography variant="h6">{props.venda ? 'Editar Venda' : 'Adicionar Venda'}</Typography>
      </DialogTitle>
      <Form
        onSubmit={onSubmit}
        resolver={yupResolver(schema)}
        defaultValues={{
          Cliente: props.venda?.Cliente,
          Valor: props.venda?.Valor,
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

export default AdicionarEditarVendaDialog;
