import styled from '@emotion/styled';
import { pixelToRem } from 'utils/pixelToRem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${pixelToRem(16)};
  gap: ${pixelToRem(24)};

  height: calc(100vh - ${pixelToRem(32)});

  img {
    width: ${pixelToRem(400)};

    @media (max-width: 768px) {
      width: ${pixelToRem(250)};
    }
  }

  h1 {
    font-size: ${pixelToRem(32)};
    text-align: center;
  }

  h2 {
    font-size: ${pixelToRem(24)};
    font-weight: 500;
    text-align: center;
  }
`;
