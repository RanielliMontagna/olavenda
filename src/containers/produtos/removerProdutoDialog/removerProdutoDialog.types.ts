import { GridRowModel } from "@mui/x-data-grid";
import type { IProdutoValues } from "service/produtos/produtos.types";

export interface IRemoverProdutoState {
    open: boolean;
    produto?: GridRowModel<IProdutoValues>;
}

export interface IRemoverProdutoDialogProps extends IRemoverProdutoState {
    handleClose: () => void;
    handleBuscarProdutos: () => void;
}
