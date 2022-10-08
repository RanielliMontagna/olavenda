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

        //Css que remove bordar da cell da datatable do material
        .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
          outline: none !important;
        }
      `}
    />
  );
};

export default GlobalStyles;
