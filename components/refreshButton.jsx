import Context from "../context";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { useContext } from "react";

const theme = createTheme({
  palette: {
    pink: {
      main: "#ff758f",
      contrastText: "#000",
    },
    light: {
      main: "#f9fafb",
      contrastText: "#000",
    },
  },
});

// Refresh button component to fetch new data
export default function RefreshButton({ handleClick }) {
  const [state, setState] = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        size="large"
        onClick={handleClick}
        className="shadow-sm"
        aria-label="Refresh"
      >
        <Context.Provider value={[state, setState]}>
          {state ? (
            <RefreshIcon color="light" fontSize="large" />
          ) : (
            <RefreshIcon color="pink" fontSize="large" />
          )}
        </Context.Provider>
      </IconButton>
    </ThemeProvider>
  );
}
