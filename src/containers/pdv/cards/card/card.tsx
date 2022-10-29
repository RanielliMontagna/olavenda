import type { IProdutoValues } from 'service/produtos/produtos.types';
import { CardContainer } from './card.styles';

export const Card = ({ nome, valor }: IProdutoValues) => {
  return (
    <CardContainer>
      <h3>{nome}</h3>
      <p>R$ {valor}</p>
    </CardContainer>
  );
};
