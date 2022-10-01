import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

const paddingHorizontal = pixelToRem(16);

export const AppBarContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: calc(100% - ${paddingHorizontal} * 2);
  height: ${pixelToRem(60)};
  padding: 0 ${paddingHorizontal};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
`;
