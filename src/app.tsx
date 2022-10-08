import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { Routes } from 'routes/routes';

import GlobalStyles from 'styles/global.styles';
import { lightTheme, darkTheme } from 'styles/theme';
import useApp from 'store/app/app';

const App = () => {
  const { themeMode } = useApp();

  const theme = createTheme({
    ...(themeMode === 'light' ? lightTheme : darkTheme),
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <GlobalStyles />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
