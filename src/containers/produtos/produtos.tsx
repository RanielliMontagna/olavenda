import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';

import { colunasProdutos } from './produtos.static';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { useProdutos } from './useProdutos';
import { center } from 'styles/shared.styles';

const Produtos = () => {
  const { data } = useProdutos();

  return (
    <Grid container padding={2}>
      <PageHeader
        title="Produtos"
        rightContent={
          <Button startIcon={<AiOutlinePlus color="white" />} variant="contained">
            Novo Produto
          </Button>
        }
      />
      <GridPaper item xs={12}>
        <DataGrid
          rows={data.map((value) => ({
            ...value,
          }))}
          columns={colunasProdutos}
          isRowSelectable={() => false}
          components={{
            NoRowsOverlay: () => (
              <div style={{ ...center, flexDirection: 'column', height: '100%', gap: 16 }}>
                <img src="/assets/svgs/noDataProducts.svg" alt="No data" style={{ width: 400 }} />
                <h2>Nenhum produto encontrado</h2>
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

export { Produtos };
