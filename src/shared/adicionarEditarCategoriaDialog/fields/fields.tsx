import { useFormContext } from 'react-hook-form';
import { FormHelperText, Grid, InputLabel } from '@mui/material';

import type { IAdicionarEditarCategoriaFormValues } from '../adicionarEditarCategoria.types';
import { coresCategorias } from 'styles/theme';

import { TextField } from 'components/textField/textField';
import ColorButton from './colorButton/colorButton';

const Fields = () => {
  const { formState, watch, setValue } = useFormContext<IAdicionarEditarCategoriaFormValues>();

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
      <Grid item xs={12} gap={1} display="flex" flexDirection="column">
        <InputLabel>Selecione uma cor *</InputLabel>
        <div style={{ display: 'flex', gap: 8 }}>
          {coresCategorias.map((cor, index) => {
            return (
              <ColorButton
                key={index}
                cor={cor}
                selected={index === watch().cores}
                onClick={() => {
                  setValue('cores', index);
                }}
              />
            );
          })}
        </div>
        <FormHelperText>{formState.errors.cores?.message}</FormHelperText>
      </Grid>
    </Grid>
  );
};

export { Fields };
