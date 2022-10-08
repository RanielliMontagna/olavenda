export interface IProdutoValues {
  id: number;
  nome: string;
  valor: number;
  codBar: string;
  categoria: number;
  classificacaoFiscal: number;
}

export interface IProduto {
  Sucesso: boolean;
  Mensagem: string;
  Produtos: IProdutoValues[];
}

export interface INovoProduto {
  nome: string;
  valor: number;
  codBar: string;
  categoria: number;
  classificacaoFiscal: number;
}

export interface IEditarProduto extends INovoProduto {
  codigo: number;
}

export interface IBuscarProduto {
  search?: string;
}
