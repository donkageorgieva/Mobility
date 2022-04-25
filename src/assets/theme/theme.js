import { createTheme } from "@mui/material/styles";

export const primaryColor = "rgb(44,84,164)";
export const secondaryColor = "#ffffff";
const theme = createTheme({
  palette: {
    primary: {
      primary: "white",
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});
theme.components = {
  MuiInput: {
    styleOverrides: {
      root: {
        color: secondaryColor,
        borderColor: secondaryColor,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        "&::before": {
          borderColor: secondaryColor,
        },
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: "white !important",
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        maxWidth: "100%",
        borderBottom: "none",
      },
    },
  },
};
export default theme;
