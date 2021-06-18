import { createMuiTheme } from '@material-ui/core';

const COLORS = {
  dark_blue: '#383b6f',
  aqua: '#b7e4cf',
};

const default_theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.dark_blue,
    },
    secondary: {
      main: COLORS.aqua,
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: COLORS.aqua,
        },
        '&$active': {
          color: COLORS.dark_blue,
        },
      },
      active: {},
      completed: {},
    },
  },
});

export default default_theme;
