import { Grid, Paper } from '@mui/material';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';

const Pdv = () => {
  return (
    <Grid container padding={2}>
      <PageHeader title="Ponto de venda" />
      <GridPaper item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={7}></Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </GridPaper>
    </Grid>
  );
};

export { Pdv };
