import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { pixelToRem } from 'utils/pixelToRem';

export const GridProduct = styled(Grid)`
  display: flex;
  padding: ${pixelToRem(5)} ${pixelToRem(10)};

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: ${pixelToRem(4)};
  }
`;

export const GridRemoveProduct = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  transition: all 0.2s ease-in-out;

  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    transition: all 0.2s ease-in-out;
    border-radius: ${pixelToRem(4)};
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
