<<<<<<< HEAD
import { ThemeProvider, createTheme } from "@mui/material/styles";
=======
import { createTheme, ThemeProvider } from "@mui/material/styles";
>>>>>>> 96c056785b897deefdca1bc8936b0ffc80ccbc4b
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

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
        className="shadow-sm"
        aria-label="Refresh"
      >
        <RefreshIcon color="pink" fontSize="large" />
      </IconButton>
    </ThemeProvider>
  );
}
