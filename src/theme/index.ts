import { createTheme, alpha, PaletteMode } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Logos Brand Colors
export const brand = {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#e16e09',
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

// Premium tech surface tokens (SpaceX/Tesla/OTee inspired)
export const surface = {
  black: '#050505',
  ink: '#0A0A0B',
  panel: '#0F1012',
  raised: '#15171A',
  hairline: 'rgba(255,255,255,0.08)',
  hairlineStrong: 'rgba(255,255,255,0.14)',
};

export const monoFont = 'var(--font-geist-mono), "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
export const sansFont = 'var(--font-geist-sans), "Inter", system-ui, -apple-system, sans-serif';

const getDesignTokens = (): any => ({
  defaultColorScheme: 'dark',
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
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
        error: { main: red[500] },
        background: {
          default: surface.black,
          paper: surface.panel,
        },
        text: {
          primary: '#FAFAFA',
          secondary: 'rgba(250,250,250,0.62)',
          disabled: 'rgba(250,250,250,0.32)',
        },
        divider: surface.hairline,
      },
    },
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
        error: { main: red[500] },
        background: { default: '#fff', paper: gray[50] },
        text: {
          primary: gray[900],
          secondary: gray[600],
        },
        divider: alpha(gray[300], 0.5),
      },
    },
  },
  typography: {
    fontFamily: sansFont,
    // tighter tracking for headlines, premium tech feel
    h1: {
      fontFamily: sansFont,
      fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.04,
    },
    h2: {
      fontFamily: sansFont,
      fontSize: 'clamp(2rem, 3.6vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.08,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h5: { fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.01em' },
    h6: { fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.005em' },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 600, letterSpacing: '0.02em' },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
    button: { fontFamily: sansFont, fontWeight: 500, letterSpacing: '0.005em' },
    overline: {
      fontFamily: monoFont,
      fontWeight: 500,
      letterSpacing: '0.18em',
      fontSize: '0.75rem',
    },
    caption: { letterSpacing: '0.01em' },
  },
  shape: { borderRadius: 6 },
});

export const theme = createTheme(getDesignTokens(), {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFeatureSettings: '"ss01","cv11"',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::selection': {
          background: alpha(brand[500], 0.3),
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'ghost' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            '&:hover': { backgroundColor: alpha(theme.palette.text.primary, 0.06) },
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
              borderColor: alpha('#fff', 0.28),
            },
          }),
        },
        {
          props: { variant: 'destructive' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: theme.palette.error.main,
            color: '#fff',
            '&:hover': { backgroundColor: theme.palette.error.dark },
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
            border: 'none',
            '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' },
          }),
        },
        {
          props: { variant: 'default' },
          style: ({ theme }: { theme: any }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: `0 0 0 1px ${alpha(brand[500], 0.4)}, 0 8px 24px ${alpha(brand[500], 0.28)}`,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0 0 0 1px ${alpha(brand[500], 0.5)}, 0 12px 32px ${alpha(brand[500], 0.36)}`,
              transform: 'translateY(-1px)',
            },
          }),
        },
        {
          props: { size: 'sm' },
          style: { padding: '6px 14px', fontSize: '0.8125rem' },
        },
        {
          props: { size: 'lg' },
          style: { padding: '14px 28px', fontSize: '0.95rem' },
        },
        {
          props: { size: 'icon' },
          style: { width: 40, height: 40, minWidth: 0, padding: 0, borderRadius: 6 },
        },
      ],
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          textTransform: 'none',
          borderRadius: 6,
          fontWeight: 500,
          letterSpacing: '0.005em',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: 'inherit',
          border: `1px solid ${theme.palette.divider}`,
        }),
        containedPrimary: {
          boxShadow: `0 0 0 1px ${alpha(brand[500], 0.4)}, 0 8px 24px ${alpha(brand[500], 0.28)}`,
          '&:hover': {
            boxShadow: `0 0 0 1px ${alpha(brand[500], 0.5)}, 0 12px 32px ${alpha(brand[500], 0.36)}`,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          borderRadius: 6,
          border: `1px solid ${theme.palette.divider}`,
          backgroundImage: 'none',
          backgroundColor: alpha(theme.palette.background.paper, 0.55),
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: { padding: '24px 24px 0 24px' },
        title: { fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.01em' },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: { padding: '24px', '&:last-child': { paddingBottom: '24px' } },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          borderRadius: 6,
          backgroundColor: alpha(theme.palette.background.paper, 0.6),
          border: `1px solid ${theme.palette.divider}`,
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          '&.Mui-focused': {
            borderColor: theme.palette.primary.main,
            boxShadow: `${alpha(theme.palette.primary.main, 0.2)} 0 0 0 3px`,
          },
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '40px',
            paddingRight: '40px',
          },
          '@media (min-width: 1200px)': {
            paddingLeft: '56px',
            paddingRight: '56px',
          },
        },
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: '1440px',
          },
        },
        maxWidthXl: {
          '@media (min-width: 1536px)': {
            maxWidth: '1600px',
          },
        },
      },
    },
  },
});

export const getTheme = () => theme;
