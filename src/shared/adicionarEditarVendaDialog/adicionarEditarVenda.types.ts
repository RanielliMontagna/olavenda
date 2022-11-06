import { GridRowModel } from '@mui/x-data-grid';
import type { IVendaValues } from 'service/vendas/vendas.types';

export interface IAdicionarEditarVendaState {
  open: boolean;
  venda?: GridRowModel<IVendaValues>;
}

export interface IAdicionarEditarVendaDialog extends IAdicionarEditarVendaState {
  handleClose: () => void;
  handleBuscarVendas: () => void;
}

export interface IAdicionarEditarVendaFormValues {
  id: number;
  Cliente: string;
  Valor: number;
}
