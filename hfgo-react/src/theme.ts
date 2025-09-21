import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#478ac9', // Theme color from original site
      light: '#6fa5d4',
      dark: '#2e5a8a',
    },
    secondary: {
      main: '#f5f5f5',
      light: '#ffffff',
      dark: '#c2c2c2',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '6rem',
      '@media (max-width:960px)': {
        fontSize: '4rem',
      },
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '3.5rem',
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 24px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#333333',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;