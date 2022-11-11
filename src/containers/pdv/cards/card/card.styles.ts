import styled from '@emotion/styled';
import { coresCategorias } from 'styles/theme';
import { pixelToRem } from 'utils/pixelToRem';

export interface CardContainerProps {
  cor: 0 | 1 | 2 | 3 | 4 | 5;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: calc(100% / 4 - ${pixelToRem(12)});
  height: 150px;
  border-radius: ${pixelToRem(8)};
  gap: ${pixelToRem(8)};
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;

  background-color: ${({ cor }) => {
    return coresCategorias[cor];
  }};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
