import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Routes } from 'routes/routes';

import GlobalStyles from 'styles/global.styles';
import theme from 'styles/theme';

function app() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <GlobalStyles />
        <Routes />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default app;
