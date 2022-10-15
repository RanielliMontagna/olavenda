import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import { Theme as MaterialUITheme } from '@mui/material';
import { pixelToRem } from 'utils/pixelToRem';

interface SDivAutoCompleteProps {
  hideAddButton?: boolean;
}

declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {}
}

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cssWithCreatableButton = (theme: Theme) => css`
  .MuiAutocomplete-endAdornment {
    position: relative;
    right: 0;
  }

  .creatable {
    ${flexCenter}

    .divider {
      width: 1px;
      height: ${pixelToRem(20)};
      background-color: ${theme.palette.grey[400]};
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.palette.grey[600]};
      border-radius: 50%;

      margin: 0 ${pixelToRem(6)};
      width: ${pixelToRem(28)};
      height: ${pixelToRem(28)};

      &:hover {
        cursor: pointer;
        background-color: ${theme.palette.grey[100]};
        transition: background-color 0.2s ease-in-out;
      }
    }
  }
`;

export const SDivAutoComplete = styled.div<SDivAutoCompleteProps>`
  display: flex;

  div.endAdornments {
    position: absolute;
    right: 0;

    ${flexCenter}
  }

  ${({ hideAddButton, theme }) => !hideAddButton && cssWithCreatableButton(theme)}
`;

export const SDivNoOptions = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};

  padding: ${pixelToRem(6)} ${pixelToRem(16)};
  margin: ${pixelToRem(-6)} ${pixelToRem(-16)};

  &:hover {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
