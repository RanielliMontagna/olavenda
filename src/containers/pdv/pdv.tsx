import { Grid } from '@mui/material';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';

const Pdv = () => {
  return (
    <Grid container padding={2}>
      <PageHeader title="Ponto de venda" />
      <GridPaper item xs={12}></GridPaper>
    </Grid>
  );
};

export { Pdv };
