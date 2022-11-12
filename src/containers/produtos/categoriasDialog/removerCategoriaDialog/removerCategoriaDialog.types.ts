import { GridRowModel } from "@mui/x-data-grid";
import type { ICategoriaValues } from "service/categorias/categorias.types";

export interface IRemoverCategoriaState {
    open: boolean;
    categoria?: GridRowModel<ICategoriaValues>;
}

export interface IRemoverCategoriaDialogProps extends IRemoverCategoriaState {
    handleClose: () => void;
    handleBuscarCategorias: () => void;
}
