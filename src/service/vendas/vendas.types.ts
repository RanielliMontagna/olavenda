export interface IVendaValues {
  id: number;
  Cliente: string;
  Valor: number;
}

export interface IVenda {
  Sucesso: boolean;
  Mensagem: string;
  Vendas: IVendaValues[];
}

export interface INovaVenda {
  id: number;
  Cliente: string;
  Valor: number;
}

export interface IEditarVenda extends INovaVenda {
  id: number;
}

export interface IBuscarVenda {
  id?: string;
  search?: string;
}
