import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    pink: {
      light: "#ff7961",
      main: "#ff758f",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// Refresh button component to fetch new data
export default function RefreshButton({ handleClick }) {
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        size="large"
        onClick={handleClick}
        className="shadow-sm float-start-"
      >
        <RefreshIcon color="pink" fontSize="large" />
      </IconButton>
    </ThemeProvider>
  );
}
