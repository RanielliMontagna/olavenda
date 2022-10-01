import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

export const DrawerContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100%;
  width: ${pixelToRem(60)};

  display: flex;
  flex-direction: column;
`;

export const DrawerHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  height: ${pixelToRem(60)};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`;
