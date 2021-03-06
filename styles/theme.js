import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#627994',
    },
    secondary: {
      main: '#a6c8e4',
    },
    error: {
      main: '#af231a',
    },
    warning: {
      main: '#e8f16e',
    },
    info: {
      main: '#4029ef',
    },
    success: {
      main: '#87ec8b',
    },
    background: {
      paper: '#ececec',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;