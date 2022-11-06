import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField } from 'components/textField/textField';

import { IAdicionarEditarVendaFormValues } from '../adicionarEditarVenda.types';

const Fields = () => {
  const { formState } = useFormContext<IAdicionarEditarVendaFormValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Cliente *"
          name="Cliente"
          error={!!formState.errors.Cliente}
          helperText={formState.errors.Cliente?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Valor *"
          name="valor"
          error={!!formState.errors.Valor}
          helperText={formState.errors.Valor?.message}
          mask="valor"
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
