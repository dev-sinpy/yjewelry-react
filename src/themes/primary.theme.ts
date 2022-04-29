import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    apercu: true;
    belweLight: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  apercu: React.CSSProperties;
  belweLight: React.CSSProperties;
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#090954',
    },
    text: {
      primary: '#090954',
    },
    // background: {
    //   default: '#ffffff',
    //   paper: '#fcf4f0',
    // },
  },
  typography: {
    apercu: {
      fontFamily: ['ApercuLight'].join(','),
    },
    belweLight: {
      fontFamily: ['BelweSansLight'].join(','),
    },
  } as ExtendedTypographyOptions,
});
