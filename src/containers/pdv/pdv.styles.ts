import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

export const Paper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 150px);

  border-radius: ${pixelToRem(8)};
  background-color: ${({ theme }) => theme.palette.background.paper};

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const CartContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;

  gap: ${pixelToRem(16)};
  padding: ${pixelToRem(16)};
`;

export const CartItems = styled.div`
  height: 100%;
  box-shadow: 0 0 5px 0
    ${({ theme }) => (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)')};
  border-radius: ${pixelToRem(4)};
`;

export const CartResume = styled.div`
  width: calc(100% - ${pixelToRem(16)});
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${pixelToRem(4)};
  padding: ${pixelToRem(8)};

  box-shadow: 0 0 5px 0
    ${({ theme }) => (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)')};
`;

export const ButtonDiv = styled.div`
  cursor: pointer;
  width: 35px;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: ${pixelToRem(4)};

  color: white;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light};
    transition: all 0.3s ease-in-out;
  }
`;
