import { GridRowModel } from "@mui/x-data-grid";
import type { IClienteValues } from "service/clientes/clientes.types";

export interface IRemoverClienteState {
    open: boolean;
    cliente?: GridRowModel<IClienteValues>;
}

export interface IRemoverClienteDialogProps extends IRemoverClienteState {
    handleClose: () => void;
    handleBuscarClientes: () => void;
}
