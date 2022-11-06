import { GridColDef } from '@mui/x-data-grid';

export const colunasVendas: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Numero',
    flex: 1,
  },
  {
    field: 'Cliente',
    headerName: 'Cliente',
    flex: 1,
  },
  {
    field: 'Valor',
    headerName: 'Valor Total',
    flex: 1,
  },
  {
    field: 'acoes',
    headerName: 'Ações',
  },
];
