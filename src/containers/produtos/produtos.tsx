import { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiDelete, FiEdit } from 'react-icons/fi';

import { colunasProdutos } from './produtos.static';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { useProdutos } from './useProdutos';

import { center } from 'styles/shared.styles';
import type { IRemoverProdutoState } from './removerProdutoDialog/removerProdutoDialog.types';

import { RemoverProdutoDialog } from './removerProdutoDialog/removerProdutoDialog';

const Produtos = () => {
  const { data, handleBuscarProdutos } = useProdutos();

  const [excluirProdutoDialog, setExcluirProdutoDialog] = useState<IRemoverProdutoState>({ open: false });

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
          rows={data}
          columns={colunasProdutos.map((value) => {
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
                    >
                      <FiEdit size={24} />
                    </Grid>
                    <Grid
                      item
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      onClick={() => {
                        setExcluirProdutoDialog({ open: true, produto: params.row });
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
                <img src="/assets/svgs/noDataProducts.svg" alt="No data" style={{ width: 400 }} />
                <h2>Nenhum produto encontrado</h2>
              </div>
            ),
          }}
          hideFooter
          disableColumnMenu
        />
        {excluirProdutoDialog.open && (
          <RemoverProdutoDialog
            open
            produto={excluirProdutoDialog.produto}
            handleBuscarProdutos={handleBuscarProdutos}
            handleClose={() => setExcluirProdutoDialog({ open: false })}
          />
        )}
      </GridPaper>
    </Grid>
  );
};

export { Produtos };
