import styled from '@emotion/styled';
import { coresCategorias } from 'styles/theme';
import { pixelToRem } from 'utils/pixelToRem';

export const CardContainer = styled.div`
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

  background-color: ${() => {
    const numero = Math.floor(Math.random() * 6);
    return coresCategorias[numero];
  }};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
