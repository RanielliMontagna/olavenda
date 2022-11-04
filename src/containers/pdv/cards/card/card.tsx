import type { IProdutoValues } from 'service/produtos/produtos.types';
import { CardContainer } from './card.styles';

import { usePdvContext } from 'containers/pdv/pdv.context';
import { formatToReal } from 'utils/formatToReal';

export const Card = (props: IProdutoValues) => {
  const { produtosMethods } = usePdvContext();

  return (
    <CardContainer
      onClick={() => {
        const indexProduto = produtosMethods?.fields?.findIndex((item) => item?.idProduto === props?.id);

        if (indexProduto !== -1) {
          produtosMethods.update(indexProduto, {
            ...produtosMethods.fields[indexProduto],
            quantidade: produtosMethods?.fields[indexProduto].quantidade + 1,
          });
        } else {
          produtosMethods.append({
            ...props,
            quantidade: 1,
            idProduto: props.id,
          });
        }
      }}
    >
      <h3>{props.nome}</h3>
      <p>{formatToReal(props.valor)}</p>
    </CardContainer>
  );
};
