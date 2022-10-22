import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { center } from 'styles/shared.styles';

import { colunasVendas } from './vendas.static';

const Vendas = () => {
  return (
    <Grid container padding={2}>
      <PageHeader title="Vendas" />
      <GridPaper xs={12}>
        <DataGrid
          rows={[]}
          columns={colunasVendas}
          isRowSelectable={() => false}
          components={{
            NoRowsOverlay: () => (
              <div style={{ ...center, flexDirection: 'column', height: '100%', gap: 16 }}>
                <img
                  src="/assets/svgs/noDataVendas.svg"
                  alt="No data"
                  style={{ maxWidth: 400, width: '90%' }}
                />
                <h2 style={{ textAlign: 'center' }}>Nenhuma venda cadastrada</h2>
              </div>
            ),
          }}
          hideFooter
          disableColumnMenu
        />
      </GridPaper>
    </Grid>
  );
};

export { Vendas };
