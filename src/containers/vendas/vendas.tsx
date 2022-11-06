import { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { FiDelete } from 'react-icons/fi';

import { colunasVendas } from './vendas.static';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { useVendas } from './useVendas';

import { center } from 'styles/shared.styles';
import type { IRemoverVendaState } from './removerVendaDialog/removerVendaDialog.types';

import { RemoverVendaDialog } from './removerVendaDialog/removerVendaDialog';
import { VendaProvider } from './venda.context';

const Vendas = () => {
  const { data, handleBuscarVendas } = useVendas();

  const [excluirVendaDialog, setExcluirVendaDialog] = useState<IRemoverVendaState>({
    open: false,
  });

  return (
    <Grid container padding={2}>
      <PageHeader
        title="Vendas"
      />
      <GridPaper item xs={12}>
        <DataGrid
          rows={data}
          columns={colunasVendas.map((value) => {
            if (value.field === 'acoes') {
              return {
                ...value,
                renderCell: (params: GridRenderCellParams) => (
                  <Grid container spacing={2} alignItems="center">
                    <Grid
                      item
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onClick={() => {
                        setExcluirVendaDialog({ open: true, venda: params.row });
                      }}
                    >
                      <FiDelete size={24} />
                    </Grid>
                  </Grid>
                ),
              };
            }

            return {
              ...value,
            };
          })}
          isRowSelectable={() => false}
          components={{
            NoRowsOverlay: () => (
              <div style={{ ...center, flexDirection: 'column', height: '100%', gap: 16 }}>
                <img
                  src="/assets/svgs/noDataVendas.svg"
                  alt="No data"
                  style={{ maxWidth: 400, width: '90%' }}
                />
                <h2 style={{ textAlign: 'center' }}>Nenhuma venda encontrada</h2>
              </div>
            ),
          }}
          hideFooter
          disableColumnMenu
        />
        {excluirVendaDialog.open && (
          <RemoverVendaDialog
            open
            venda={excluirVendaDialog.venda}
            handleBuscarVendas={handleBuscarVendas}
            handleClose={() => setExcluirVendaDialog({ open: false })}
          />
        )}
      </GridPaper>
    </Grid>
  );
};

const VendasWrapper = () => {
  return (
    <VendaProvider>
      <Vendas />;
    </VendaProvider>
  );
};

export default VendasWrapper;
