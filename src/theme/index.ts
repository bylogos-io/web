import { createTheme, alpha, ThemeOptions, PaletteMode } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Logos Brand Colors (Enriched for warmth)
export const brand = {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#e16e09', // Main Logos Orange
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
};

export const gray = {
  50: '#FBFCFE',
  100: '#EAF0F5',
  200: '#D6E2EB',
  300: '#BFCCD9',
  400: '#94A6B8',
  500: '#5B6B7C',
  600: '#4C5967',
  700: '#364049',
  800: '#131B20',
  900: '#090E10',
};

const getDesignTokens = (): any => ({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: brand[300],
          main: brand[500],
          dark: brand[700],
          contrastText: '#fff',
        },
        secondary: {
          light: brand[100],
          main: brand[300],
          dark: brand[500],
        },
        error: {
          main: red[500],
        },
        background: {
          default: '#fff',
          paper: gray[50],
        },
        text: {
          primary: gray[900],
          secondary: gray[600],
        },
        divider: alpha(gray[300], 0.5),
      },
    },
    dark: {
      palette: {
        primary: {
          light: brand[300],
          main: brand[500],
          dark: brand[700],
          contrastText: '#fff',
        },
        secondary: {
          light: brand[100],
          main: brand[300],
          dark: brand[500],
        },
        error: {
          main: red[500],
        },
        background: {
          default: '#070707',
          paper: '#111',
        },
        text: {
          primary: '#fff',
          secondary: alpha('#fff', 0.7),
        },
        divider: alpha('#fff', 0.1),
      },
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export const theme = createTheme(getDesignTokens(), {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'ghost' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(theme.palette.text.primary, 0.08),
            },
          }),
        },
        {
          props: { variant: 'outline' },
          style: ({ theme }: { theme: any }) => ({
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(theme.palette.text.primary, 0.04),
              borderColor: theme.palette.text.secondary,
            },
          }),
        },
        {
          props: { variant: 'destructive' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: theme.palette.error.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.error.dark,
            },
          }),
        },
        {
          props: { variant: 'link' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            padding: 0,
            height: 'auto',
            minWidth: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            },
          }),
        },
        {
          props: { variant: 'default' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: `0 4px 14px 0 ${alpha(brand[500], 0.39)}`,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0 6px 20px rgba(225, 110, 9, 0.23)`,
              transform: 'translateY(-1px)',
            },
          }),
        },
        {
          props: { size: 'sm' },
          style: {
            padding: '6px 16px',
            fontSize: '0.8125rem',
          },
        },
        {
          props: { size: 'lg' },
          style: {
            padding: '12px 32px',
            fontSize: '1rem',
          },
        },
        {
          props: { size: 'icon' },
          style: {
            width: 40,
            height: 40,
            minWidth: 0,
            padding: 0,
            borderRadius: 8,
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12, // Standardized to 12px for buttons
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          fontFamily: 'inherit',
        },
        containedPrimary: {
          boxShadow: `0 4px 14px 0 ${alpha(brand[500], 0.39)}`,
          '&:hover': {
            boxShadow: `0 6px 20px rgba(225, 110, 9, 0.23)`,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          borderRadius: 16, // Standardized to 16px for cards
          border: `1px solid ${theme.palette.divider}`,
          backgroundImage: 'none',
          backgroundColor: alpha(theme.palette.background.paper, 0.4),
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.07)', // Default for light mode
          ...theme.applyStyles('dark', {
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
          }),
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '24px 24px 0 24px',
        },
        title: {
          fontSize: '1.25rem',
          fontWeight: 600,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          borderRadius: 12, // Standardized to 12px for inputs
          backgroundColor: alpha(theme.palette.background.paper, 0.5),
          border: `1px solid ${theme.palette.divider}`,
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&.Mui-focused': {
            borderColor: theme.palette.primary.main,
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
          },
        }),
      },
    },
  },
});

export const getTheme = () => theme;
