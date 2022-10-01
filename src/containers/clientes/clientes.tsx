import { Button, Grid } from '@mui/material';
import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';

import { AiOutlinePlus } from 'react-icons/ai';

const Clientes = () => {
  return (
    <Grid container padding={2}>
      <PageHeader
        title="Clientes"
        rightContent={
          <Button startIcon={<AiOutlinePlus color="white" />} variant="contained">
            Novo Cliente
          </Button>
        }
      />
      <GridPaper xs={12}></GridPaper>
    </Grid>
  );
};

export { Clientes };
