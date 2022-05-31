import Context from "../context";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "./linkIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";

const theme = createTheme({
  palette: {
    light: {
      main: "#f9fafb",
      contrastText: "#000",
    },
  },
});

// Social icons component
export default function Social() {
  const [state, setState] = useContext(Context);

  return (
    <>
      <Context.Provider value={[state, setState]}>
        <ThemeProvider theme={theme}>
          <LinkIcon href="https://www.github.com/marckesin">
            <IconButton aria-label="GitHub Icon">
              <GitHubIcon
                style={{ fontSize: 20 }}
                color={state ? "light" : "neutral"}
              />
            </IconButton>
          </LinkIcon>
          <LinkIcon href="https://www.linkedin.com/in/marckesin">
            <IconButton aria-label="Linkedin Icon">
              <LinkedInIcon
                fontSize="medium"
                color={state ? "light" : "neutral"}
              />
            </IconButton>
          </LinkIcon>
          <LinkIcon href="https://www.reddit.com/user/marckesin">
            <IconButton aria-label="Reddit Icon">
              <RedditIcon
                fontSize="medium"
                color={state ? "light" : "neutral"}
              />
            </IconButton>
          </LinkIcon>
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}
