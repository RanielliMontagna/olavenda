import { IVendaValues } from 'service/vendas/vendas.types';

export interface IGetVenda {
  id: number;
  Cliente: string;
  Valor: number;
  acoes: React.ReactNode;
}

export interface IVendaState {
  open: boolean;
  venda?: IVendaValues;
}
