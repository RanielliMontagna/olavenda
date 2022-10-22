import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Form } from 'components/form/form';
import { Fields } from './fields/fields';
import { IAdicionarEditarProdutoDialog } from './adicionarEditarProduto.types';
import { useAdicionarEditarProdutoDialog } from './useAdicionarEditarProdutoDialog';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useProdutoContext } from '../../containers/produtos/produto.context';

const AdicionarEditarProdutoDialog = (props: IAdicionarEditarProdutoDialog) => {
  const { onSubmit } = useAdicionarEditarProdutoDialog(props);
  const { categorias, classificacoesFiscais } = useProdutoContext();

  const schema = yup
    .object({
      nome: yup.string().required('Nome é obrigatório'),
      valor: yup.string().required('Valor é obrigatório'),
      classificacaoFiscal: yup.object().required('Classificação Fiscal é obrigatória'),
    })
    .required();

  console.log(props.produto);

  const _categoriaSelecionada = categorias.find((categoria) => categoria?.nome === props.produto?.categoria);
  const _classificacaoFiscalSelecionada = classificacoesFiscais.find(
    (classificacaoFiscal) => classificacaoFiscal?.id === props.produto?.classificacaoFiscal
  );

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>
        <Typography variant="h6">{props.produto ? 'Editar Produto' : 'Adicionar Produto'}</Typography>
      </DialogTitle>
      <Form
        onSubmit={onSubmit}
        resolver={yupResolver(schema)}
        defaultValues={{
          nome: props.produto?.nome,
          valor: props.produto?.valor,
          categoria: _categoriaSelecionada
            ? { label: _categoriaSelecionada.nome, value: _categoriaSelecionada.id }
            : undefined,
          classificacaoFiscal: _classificacaoFiscalSelecionada
            ? {
                label: `${_classificacaoFiscalSelecionada.Codigo} ${_classificacaoFiscalSelecionada.Descricao}`,
                value: _classificacaoFiscalSelecionada.id,
              }
            : undefined,
          codBar: props.produto?.codBar,
        }}
      >
        <DialogContent>
          <Fields />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} variant="outlined" color="inherit">
            Cancelar
          </Button>
          <Button type="submit" autoFocus color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default AdicionarEditarProdutoDialog;
