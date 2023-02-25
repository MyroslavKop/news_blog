import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#482880",
      main: "#673ab7",
      dark: "#8561c5",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
    },
    text: {
      primary: "#FCFCFF",
      secondary: "#6E7491",
    },
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#8561c5",
          color: "#FCFCFF",
        },
      },
    },
  },
});

export default theme;
