import { ThemeProvider } from '@mui/material';
import { Routes } from 'routes/routes';

import GlobalStyles from 'styles/global.styles';
import theme from 'styles/theme';

function app() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default app;
