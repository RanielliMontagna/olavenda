import { FC, PropsWithChildren } from 'react';
import type { GridProps } from '@mui/material';

import { GridPaperContainer } from './gridPaper.styles';

const GridPaper: FC<PropsWithChildren & GridProps> = ({ children, ...rest }) => {
  return <GridPaperContainer {...rest}>{children}</GridPaperContainer>;
};

export { GridPaper };
