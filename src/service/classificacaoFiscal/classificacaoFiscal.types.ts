export interface IClassificacaoFiscalValues {
  id: number;
  Codigo: string;
  Descricao: string;
}

export interface IClassificacaoFiscal {
  Sucesso: boolean;
  Mensagem: string;
  classificacoes: {
    current_page: number;
    data: IClassificacaoFiscalValues[];
  };
}

export interface IBuscarClassificacaoFiscal {
  search?: string;
}
