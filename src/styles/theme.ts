import { createTheme } from '@mui/material/styles';

//cores não vibrantes
export const coresCategorias = ['#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'];

export const primary = {
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
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary,
    secondary,
    background: {
      default: '#303030',
      paper: '#212121',
    },
  },
  typography: {
    allVariants: {
      color: '#ffffff',
      transition: 'color 0.3s ease-in-out',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});

export { lightTheme, darkTheme };
