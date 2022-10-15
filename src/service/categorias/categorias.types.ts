export interface ICategoriaValues {
  id: number;
  nome: string;
  cores: string;
}

export interface IProduto {
  Sucesso: boolean;
  Mensagem: string;
  Produtos: ICategoriaValues[];
}

export interface IBuscarCategoria {
  search?: string;
}
