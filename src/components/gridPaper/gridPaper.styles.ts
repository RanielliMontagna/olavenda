import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { pixelToRem } from 'utils/pixelToRem';

export const GridPaperContainer = styled(Grid)`
  margin-top: 1rem;
  padding: 1rem;

  height: calc(100vh - ${pixelToRem(150)});
  overflow: auto;

  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.palette.background.paper};
  transition: all 0.3s ease-in-out;
`;
