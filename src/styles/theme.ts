import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#7b73f1',
      dark: '#3B3773',
      light: '#C2BFF4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#404041',
      dark: '#1B1B1C',
      light: '#6D6D6E',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
