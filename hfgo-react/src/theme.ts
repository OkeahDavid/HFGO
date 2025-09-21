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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
        fontSize: '2.5rem',
      },
      '@media (max-width:400px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '3.5rem',
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 24px',
          '@media (max-width:600px)': {
            padding: '10px 20px',
            fontSize: '0.9rem',
          },
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
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            margin: '8px 0',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            padding: '16px',
            '&:last-child': {
              paddingBottom: '16px',
            },
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            minHeight: '56px',
            paddingLeft: '8px',
            paddingRight: '8px',
          },
        },
      },
    },
  },
});

export default theme;