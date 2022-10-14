import { GridColDef } from '@mui/x-data-grid';

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
  },
];
