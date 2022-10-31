import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField } from 'components/textField/textField';

import { IAdicionarEditarClienteFormValues } from '../adicionarEditarCliente.types';

const Fields = () => {
  const { formState } = useFormContext<IAdicionarEditarClienteFormValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Nome *"
          name="nome"
          error={!!formState.errors.nome}
          helperText={formState.errors.nome?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="CPF ou CNPJ *"
          name="cpfCnpj"
          error={!!formState.errors.cpfCnpj}
          helperText={formState.errors.cpfCnpj?.message}
          mask="cpfCnpj"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Telefone *"
          name="telefone"
          error={!!formState.errors.telefone}
          helperText={formState.errors.telefone?.message}
          mask="telefone"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="E-mail *"
          name="email"
          error={!!formState.errors.email}
          helperText={formState.errors.email?.message}
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
