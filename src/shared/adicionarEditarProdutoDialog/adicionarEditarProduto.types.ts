import { GridRowModel } from '@mui/x-data-grid';
import type { IProdutoValues } from 'service/produtos/produtos.types';

export interface IAdicionarEditarProdutoState {
  open: boolean;
  produto?: GridRowModel<IProdutoValues>;
}

export interface IAdicionarEditarProdutoDialog extends IAdicionarEditarProdutoState {
  handleClose: () => void;
  handleBuscarProdutos: () => void;
}

export interface IAdicionarEditarProdutoFormValues {
  nome: string;
  valor: number;
  codBar: string;
  categoria: {
    label: string;
    value: number;
  };
  classificacaoFiscal: {
    label: string;
    value: number;
  };
}
