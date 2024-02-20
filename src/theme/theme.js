import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#FF6C86",
    },
    secondary: {
      main: "#FF6C86",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default muiTheme;


export const commonStyle = {
  display: "flex",
  flexDirection: "column",
  gap: { xs: 1.5, md: 1.5 },
};

export const glassBoxStyles = {
  backgroundColor: "rgba(255,255,255,0.1)",
  borderRadius: "1rem",
  padding: 1,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: { xs: 1.5, md: 1.5 },

};