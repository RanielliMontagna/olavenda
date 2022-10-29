import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

export const CardsContainerExterno = styled.div`
  flex: 7;

  padding: ${pixelToRem(16)} 0;

  display: flex;
  flex-direction: column;

  > div:first-of-type {
    padding: 0px ${pixelToRem(16)};
  }
`;

export const CardsContainerInterno = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 0px ${pixelToRem(16)};
  padding-top: ${pixelToRem(16)};

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${pixelToRem(16)};
  }
`;
