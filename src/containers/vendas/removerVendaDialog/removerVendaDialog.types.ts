import { GridRowModel } from "@mui/x-data-grid";
import type { IVendaValues } from "service/vendas/vendas.types";

export interface IRemoverVendaState {
    open: boolean;
    venda?: GridRowModel<IVendaValues>;
}

export interface IRemoverVendaDialogProps extends IRemoverVendaState {
    handleClose: () => void;
    handleBuscarVendas: () => void;
}
