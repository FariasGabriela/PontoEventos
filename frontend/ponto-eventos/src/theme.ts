import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: '0px !important'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#f58220",
    },
    secondary: {
      main: "#3DADBC",
    },
  },
});

export { theme };
