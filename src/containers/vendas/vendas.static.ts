import { GridColDef } from '@mui/x-data-grid';

export const colunasVendas: GridColDef[] = [
  {
    field: 'numero',
    headerName: 'Numero',
    flex: 1,
  },
  {
    field: 'cliente',
    headerName: 'Cliente',
    flex: 1,
  },
  {
    field: 'valorTotal',
    headerName: 'Valor Total',
    flex: 1,
  },
  {
    field: 'acoes',
    headerName: 'Ações',
  },
];
