import { createTheme } from "@mui/material/styles";

export const themeOptions= {
  palette: {
    type: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;