import {
  IAdicionarEditarProdutoDialog,
  IAdicionarEditarProdutoFormValues,
} from './adicionarEditarProduto.types';

const useAdicionarEditarProdutoDialog = ({ handleClose, produto }: IAdicionarEditarProdutoDialog) => {
  const onSubmit = (data: IAdicionarEditarProdutoFormValues) => {
    console.log(data);
    handleClose();
  };

  return {
    onSubmit,
  };
};

export { useAdicionarEditarProdutoDialog };
