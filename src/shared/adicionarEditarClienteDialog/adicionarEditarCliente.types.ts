import { GridRowModel } from '@mui/x-data-grid';
import type { IClienteValues } from 'service/clientes/clientes.types';

export interface IAdicionarEditarClienteState {
  open: boolean;
  cliente?: GridRowModel<IClienteValues>;
}

export interface IAdicionarEditarClienteDialog extends IAdicionarEditarClienteState {
  handleClose: () => void;
  handleBuscarClientes: () => void;
}

export interface IAdicionarEditarClienteFormValues {
  nome: string;
  cpfCnpj: string;
  telefone: string;
  email: string;
}
