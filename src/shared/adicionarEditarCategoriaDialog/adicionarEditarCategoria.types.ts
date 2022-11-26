import { GridRowModel } from '@mui/x-data-grid';
import type { ICategoriaValues } from 'service/categorias/categorias.types';

export interface IAdicionarEditarCategoriaState {
  open: boolean;
  categoria?: GridRowModel<ICategoriaValues>;
}

export interface IAdicionarEditarCategoriaDialog extends IAdicionarEditarCategoriaState {
  handleClose: () => void;
  handleBuscarCategorias: () => void;
}

export interface IAdicionarEditarCategoriaFormValues {
  id: number;
  nome: string;
  cores: number;
}
