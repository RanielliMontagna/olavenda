import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField } from 'components/textField/textField';

import { IAdicionarEditarProdutoFormValues } from '../adicionarEditarProduto.types';
import Creatable from 'components/creatable/creatable';
import { useFields } from './useFields';
import { Autocomplete } from 'components/autoComplete/autoComplete';

const Fields = () => {
  const { formState } = useFormContext<IAdicionarEditarProdutoFormValues>();
  const { categorias, classificacoesFiscais } = useFields();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Nome *"
          name="nome"
          rules={{
            required: 'Nome é obrigatório',
          }}
          error={!!formState.errors.nome}
          helperText={formState.errors.nome?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Valor *"
          name="valor"
          rules={{
            required: 'Valor é obrigatório',
          }}
          error={!!formState.errors.valor}
          helperText={formState.errors.valor?.message}
          mask="valor"
        />
      </Grid>
      <Grid item xs={12}>
        <Creatable
          textFieldProps={{
            label: 'Categorias *',
          }}
          name="categorias"
          options={categorias.map((categoria) => ({
            label: categoria.nome,
            value: categoria.id,
          }))}
          onCreateOption={(value) => console.log(value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          label="Classificação Fiscal *"
          name="classificacaoFiscal"
          options={classificacoesFiscais.map(({ Codigo, Descricao, id }) => ({
            label: `${Codigo} ${Descricao}`,
            value: id,
          }))}
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
