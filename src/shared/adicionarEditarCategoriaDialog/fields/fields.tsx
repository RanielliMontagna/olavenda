import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField } from 'components/textField/textField';

import { IAdicionarEditarCategoriaFormValues } from '../adicionarEditarCategoria.types';

const Fields = () => {
  const { formState } = useFormContext<IAdicionarEditarCategoriaFormValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Categoria *"
          name="nome"
          error={!!formState.errors.nome}
          helperText={formState.errors.nome?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cor *"
          name="cores"
          error={!!formState.errors.cores}
          helperText={formState.errors.cores?.message}
          mask="numero"
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
