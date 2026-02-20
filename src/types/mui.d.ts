import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ButtonVariants {
    ghost: React.CSSProperties;
    destructive: React.CSSProperties;
    link: React.CSSProperties;
    outline: React.CSSProperties;
    default: React.CSSProperties;
  }

  interface ButtonVariantsOptions {
    ghost?: React.CSSProperties;
    destructive?: React.CSSProperties;
    link?: React.CSSProperties;
    outline?: React.CSSProperties;
    default?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true;
    destructive: true;
    link: true;
    outline: true;
    default: true;
  }
  
  interface ButtonPropsSizeOverrides {
    icon: true;
    sm: true;
    lg: true;
  }
}
