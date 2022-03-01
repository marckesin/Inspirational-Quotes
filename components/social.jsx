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
        <IconButton aria-label="GitHub Icon">
          <GitHubIcon style={{ fontSize: 20 }} color="neutral" />
        </IconButton>
      </LinkIcon>
      <LinkIcon href="https://www.linkedin.com/in/marckesin">
        <IconButton aria-label="Linkedin Icon">
          <LinkedInIcon fontSize="medium" color="neutral" />
        </IconButton>
      </LinkIcon>
      <LinkIcon href="https://www.reddit.com/user/marckesin">
        <IconButton aria-label="Reddit Icon">
          <RedditIcon fontSize="medium" color="neutral" />
        </IconButton>
      </LinkIcon>
    </>
  );
}
