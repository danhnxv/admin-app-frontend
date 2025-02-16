import { ThemeOptions, createTheme } from '@mui/material';

const muiThemeConfigs: ThemeOptions = {
  typography: {
    fontFamily: ['Work Sans', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            // Make the margin left to zero for better displaying the text error
            // The default margin-left of MuiFormHelperText-root is 14px and it takes a lot of space and do not align with the above input
            marginLeft: 0,
          },
        },
      },
    },
  },
};

export const muiTheme = createTheme(muiThemeConfigs);
