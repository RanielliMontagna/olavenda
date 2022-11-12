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

export interface ICategoria{
  Sucesso: boolean;
  Mensagem: string;
  Categorias: ICategoriaValues[];
}

export interface INovaCategoria {
  nome: string;
  cores: string;
}

export interface IEditarCategoria extends INovaCategoria {
  id: number;
}

export interface IBuscarCategoria {
  search?: string;
}