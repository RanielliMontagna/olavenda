export interface IClienteValues {
  id: number;
  nome: string;
  cpfCnpj: string;
  telefone: string;
  email: string;
}

export interface ICliente{
  Sucesso: boolean;
  Mensagem: string;
  Clientes: IClienteValues[];
}

export interface INovoCliente {
  nome: string;
  cpfCnpj: string;
  telefone: string;
  email: string;
  email_confirmation: string;
}

export interface IEditarCliente extends INovoCliente {
  id: number;
}

export interface IBuscarCliente {
  id?: string;
  search?: string;
}
