import { createTheme } from "@mui/material/styles";

export const primaryColor = "rgb(44,84,164)";
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});

export default theme;
