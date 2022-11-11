import { GridColDef } from '@mui/x-data-grid';

export const colunasCategorias: GridColDef[] = [
  {
    field: 'nome',
    headerName: 'Categoria',
    flex: 1,
  },
  {
    field: 'acoes',
    headerName: 'Ações',
  },
];
