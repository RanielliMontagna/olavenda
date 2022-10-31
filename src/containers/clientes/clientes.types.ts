import { IClienteValues } from 'service/clientes/clientes.types';

export interface IGetClienter {
  nome: string;
  cpfCnpj: string;
  telefone: string;
  email: string;
  acoes: React.ReactNode;
}

export interface IClienteState {
  open: boolean;
  cliente?: IClienteValues;
}
