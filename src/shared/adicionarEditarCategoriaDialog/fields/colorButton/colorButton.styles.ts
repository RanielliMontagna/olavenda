import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IColorButtonProps } from './colorButton.types';

const SelectedCss = css`
  transition: all 0.5s ease-in-out;
  transform: scale(1.2);

  .check {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
`;

export const ColorButtonContainer = styled.div<IColorButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 16px;

  background-color: ${({ cor }) => cor};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  .check {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  ${({ selected }) => selected && SelectedCss}
`;
