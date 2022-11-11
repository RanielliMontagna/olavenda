import { GridColDef } from '@mui/x-data-grid';
import { coresCategorias } from 'styles/theme';

export const colunasCategorias: GridColDef[] = [
  {
    field: 'nome',
    headerName: 'Categoria',
    flex: 4,
  },
  {
    field: 'cor',
    headerName: 'Cor',
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          <div
            style={{
              backgroundColor: coresCategorias[params.value as number],
              width: 32,
              height: 32,
              borderRadius: '50%',
            }}
          />
        </div>
      );
    },
  },
  {
    field: 'acoes',
    headerName: 'Ações',
    flex: 1,
  },
];
