import { IProdutoValues } from 'service/produtos/produtos.types';

export interface IGetProdutor {
  nome: string;
  valor: number;
  codBar: string;
  categoria: string;
  classificacaoFiscal: string;
  acoes: React.ReactNode;
}

export interface IProdutoState {
  open: boolean;
  produto?: IProdutoValues;
}
