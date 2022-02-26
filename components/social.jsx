import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "./linkIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";

// Social icons component
export default function Social() {
  return (
    <>
      <LinkIcon href="https://www.github.com/marckesin">
        <GitHubIcon style={{ fontSize: 20 }} />
      </LinkIcon>
      <LinkIcon href="https://www.linkedin.com/in/marckesin">
        <LinkedInIcon fontSize="medium" />
      </LinkIcon>
      <LinkIcon href="https://www.reddit.com/user/marckesin">
        <RedditIcon fontSize="medium" />
      </LinkIcon>
    </>
  );
}
