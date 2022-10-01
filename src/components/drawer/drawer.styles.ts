import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

export const DrawerContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100%;
  width: ${pixelToRem(60)};

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const DrawerHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  height: ${pixelToRem(60)};
  min-height: ${pixelToRem(60)};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

export const DrawerContent = styled.div`
  margin-top: 1rem;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s ease-in-out;
    cursor: pointer;

    padding: ${pixelToRem(10)} ${pixelToRem(0)};

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
