import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

const paddingHorizontal = pixelToRem(16);

export const AppBarContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  height: ${pixelToRem(60)};
  padding-left: ${paddingHorizontal};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
`;

interface ProfileContainerProps {
  anchorElMenu: null | HTMLElement;
}

export const ProfileContainer = styled.div<ProfileContainerProps>`
  display: flex;
  align-items: center;
  gap: ${pixelToRem(8)};

  padding: 0 ${paddingHorizontal};
  height: 100%;

  transition: all 0.3s ease-in-out;

  .icon {
    ${({ anchorElMenu }) => anchorElMenu && 'transform: rotate(180deg);'}
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[300]};
    transition: all 0.3s ease-in-out;
  }
`;
