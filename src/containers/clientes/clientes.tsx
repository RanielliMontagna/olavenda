import { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiDelete, FiEdit } from 'react-icons/fi';

import { colunasClientes } from './clientes.static';

import { GridPaper } from 'components/gridPaper/gridPaper';
import { PageHeader } from 'components/pageHeader/pageHeader';
import { useClientes } from './useClientes';

import { center } from 'styles/shared.styles';
import type { IRemoverClienteState } from './removerClienteDialog/removerClienteDialog.types';

import { RemoverClienteDialog } from './removerClienteDialog/removerClienteDialog';
import { IAdicionarEditarClienteState } from 'shared/adicionarEditarClienteDialog/adicionarEditarCliente.types';
import AdicionarEditarClienteDialog from 'shared/adicionarEditarClienteDialog/adicionarEditarClienteDialog';
import { ClienteProvider } from './cliente.context';

const Clientes = () => {
  const { data, handleBuscarClientes } = useClientes();

  const [adicionarEditarClienteDialog, setAdicionarEditarClienteDialog] =
    useState<IAdicionarEditarClienteState>({ open: false });
  const [excluirClienteDialog, setExcluirClienteDialog] = useState<IRemoverClienteState>({
    open: false,
  });

  return (
    <Grid container padding={2}>
      <PageHeader
        title="Clientes"
        rightContent={
          <Button
            startIcon={<AiOutlinePlus color="white" />}
            variant="contained"
            onClick={() => {
              setAdicionarEditarClienteDialog({ open: true });
            }}
          >
            Novo Cliente
          </Button>
        }
      />
      <GridPaper item xs={12}>
        <DataGrid
          rows={data}
          columns={colunasClientes.map((value) => {
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
                        setAdicionarEditarClienteDialog({
                          open: true,
                          cliente: params.row,
                        });
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
                        setExcluirClienteDialog({ open: true, cliente: params.row });
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
                  src="/assets/svgs/noDataClients.svg"
                  alt="No data"
                  style={{ maxWidth: 400, width: '90%' }}
                />
                <h2 style={{ textAlign: 'center' }}>Nenhum cliente encontrado</h2>
              </div>
            ),
          }}
          hideFooter
          disableColumnMenu
        />
        {excluirClienteDialog.open && (
          <RemoverClienteDialog
            open
            cliente={excluirClienteDialog.cliente}
            handleBuscarClientes={handleBuscarClientes}
            handleClose={() => setExcluirClienteDialog({ open: false })}
          />
        )}
        {adicionarEditarClienteDialog.open && (
          <AdicionarEditarClienteDialog
            open
            cliente={adicionarEditarClienteDialog.cliente}
            handleBuscarClientes={handleBuscarClientes}
            handleClose={() => setAdicionarEditarClienteDialog({ open: false })}
          />
        )}
      </GridPaper>
    </Grid>
  );
};

const ClientesWrapper = () => {
  return (
    <ClienteProvider>
      <Clientes />;
    </ClienteProvider>
  );
};

export default ClientesWrapper;
