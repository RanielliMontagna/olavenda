import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          font-family: 'Lato', sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
