import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { Autocomplete } from 'components/autoComplete/autoComplete';
import { FiCreditCard } from 'react-icons/fi';
import { formatToReal } from 'utils/formatToReal';
import { usePdvContext } from '../pdv.context';
import type { IPagamentoDialogProps } from './pagamentoDialog.types';
import { usePagamentoDialog } from './usePagamentoDialog';

const PagamentoDialog = ({ handleClose }: IPagamentoDialogProps) => {
  const { produtosMethods } = usePdvContext();
  const { clientes, handleSubmit } = usePagamentoDialog({ handleClose });

  const _valorTotal = produtosMethods.fields.reduce((acc, item) => {
    return acc + item.valor;
  }, 0);

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h6">Pagamento da venda</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Autocomplete
              name="cliente"
              options={clientes.map((item) => ({
                label: item.nome,
                value: item.id,
              }))}
              variant="outlined"
              placeholder="Selecione um cliente"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Total da venda</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight={800} variant="h5">
                  {formatToReal(_valorTotal)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
        <Button startIcon={<FiCreditCard size={15} />} onClick={handleSubmit}>
          Finalizar venda
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { PagamentoDialog };
