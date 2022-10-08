import { Grid } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { FiDelete, FiEdit } from 'react-icons/fi';

export const colunasProdutos: GridColDef[] = [
  {
    field: 'nome',
    headerName: 'Nome',
    flex: 1,
  },
  {
    field: 'valor',
    headerName: 'Valor',
    flex: 1,
  },
  {
    field: 'codBar',
    headerName: 'Código de Barras',
    flex: 1,
  },
  {
    field: 'categoria',
    headerName: 'Categoria',
    flex: 1,
  },
  {
    field: 'acoes',
    headerName: 'Ações',
    renderCell: (params) => {
      return (
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
          >
            <FiDelete size={24} />
          </Grid>
        </Grid>
      );
    },
  },
];
