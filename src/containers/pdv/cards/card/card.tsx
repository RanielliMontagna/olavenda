import type { IProdutoValues } from 'service/produtos/produtos.types';
import { CardContainer, CardContainerProps } from './card.styles';

import { usePdvContext } from 'containers/pdv/pdv.context';
import { formatToReal } from 'utils/formatToReal';
import { useMemo } from 'react';

export const Card = (props: IProdutoValues) => {
  const { produtosMethods, categorias } = usePdvContext();

  const cor = useMemo(() => {
    const categoria = categorias.find((categoria) => categoria.nome === props.categoria);

    return categoria?.cores;
  }, [categorias, props.categoria]);

  return (
    <CardContainer
      cor={Number(cor || 5) as CardContainerProps['cor']}
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
