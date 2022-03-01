import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "./linkIcon";
import RedditIcon from "@mui/icons-material/Reddit";

// Social icons component
export default function Social() {
  return (
    <>
      <LinkIcon href="https://www.github.com/marckesin">
        <IconButton>
          <GitHubIcon style={{ fontSize: 20 }} />
        </IconButton>
      </LinkIcon>
      <LinkIcon href="https://www.linkedin.com/in/marckesin">
        <IconButton>
          <LinkedInIcon fontSize="medium" />
        </IconButton>
      </LinkIcon>
      <LinkIcon href="https://www.reddit.com/user/marckesin">
        <IconButton>
          <RedditIcon fontSize="medium" />
        </IconButton>
      </LinkIcon>
    </>
  );
}
