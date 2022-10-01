import { Grid } from '@mui/material';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';

const Vendas = () => {
  return (
    <Grid container padding={2}>
      <PageHeader title="Vendas" />
      <GridPaper xs={12}></GridPaper>
    </Grid>
  );
};

export { Vendas };
