import { css, Global } from '@emotion/react';
import { pixelToRem } from 'utils/pixelToRem';
import { primary } from './theme';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          font-family: 'Lato', sans-serif !important;
          margin: 0;
          padding: 0;
        }

        //Css que remove bordar da cell da datatable do material
        .MuiDataGrid-root .MuiDataGrid-cell:focus-within {
          outline: none !important;
        }

        //Css para scroll geral
        *::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }

        *::-webkit-scrollbar-track {
          background: ${primary.light};
        }

        *::-webkit-scrollbar-thumb {
          border-radius: ${pixelToRem(8)};
          background: ${primary.main};
        }

        *::-webkit-scrollbar-thumb:hover {
          background: ${primary.dark};
        }
      `}
    />
  );
};

export default GlobalStyles;
