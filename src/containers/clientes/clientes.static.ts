import { GridColDef } from '@mui/x-data-grid';

export const colunasClientes: GridColDef[] = [
  {
    field: 'nome',
    headerName: 'Nome',
    flex: 1,
  },
  {
    field: 'cpfCnpj',
    headerName: 'CPF ou CNPJ',
    flex: 1,
  },
  {
    field: 'telefone',
    headerName: 'Telefone',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    flex: 1,
  },
  {
    field: 'acoes',
    headerName: 'Ações',
  },
];
