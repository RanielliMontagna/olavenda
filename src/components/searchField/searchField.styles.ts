import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
  > div {
    height: 36px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    transition: all 0.3s ease-in-out;
  }
`;
