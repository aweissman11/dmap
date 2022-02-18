import { createTheme } from '@mui/material/styles';

const COLORS = {
  primary: {
    main: '#006599',
    light: '#ccdfeb',
  },
  secondary: {
    main: '#0b8458',
  },
};

export const default_theme = createTheme({
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
  },
});
