import { createTheme } from '@mui/material/styles';

// Create a theme instance.

const primary = {
  main: '#7b73f1',
  dark: '#3B3773',
  light: '#C2BFF4',
  contrastText: '#ffffff',
};

const secondary = {
  main: '#404041',
  dark: '#1B1B1C',
  light: '#6D6D6E',
  contrastText: '#ffffff',
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary,
    secondary,
    background: {
      default: '#f5f5f5',
      paper: '#fafafa',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary,
    secondary,
    background: {
      default: '#424242',
      paper: '#212121',
    },
  },
});

export { lightTheme, darkTheme };
