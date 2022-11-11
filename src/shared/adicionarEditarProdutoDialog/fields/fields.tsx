import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField } from 'components/textField/textField';

import { IAdicionarEditarProdutoFormValues } from '../adicionarEditarProduto.types';
import { Autocomplete } from 'components/autoComplete/autoComplete';
import { useProdutoContext } from '../../../containers/produtos/produto.context';

const Fields = () => {
  const { formState } = useFormContext<IAdicionarEditarProdutoFormValues>();
  const { categorias, classificacoesFiscais } = useProdutoContext();

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
          label="Valor *"
          name="valor"
          error={!!formState.errors.valor}
          helperText={formState.errors.valor?.message}
          mask="valor"
        />
      </Grid>
      <Grid item xs={12}>
      <Autocomplete
          label="Categorias"
          name="categoria"
          options={categorias.map((categoria) => ({
            label: categoria.nome,
            value: categoria.id,
          }))}
          error={!!formState.errors.categoria}
          helperText={formState.errors.categoria?.message}
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
          error={!!formState.errors.classificacaoFiscal}
          helperText={formState.errors.classificacaoFiscal?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Código de Barras" name="codBar" />
      </Grid>
    </Grid>
  );
};

export { Fields };
