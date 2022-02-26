import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import styles from "../styles/Home.module.css";

// Social icons component
export default function Social() {
  return (
    <>
      <Link
        className={styles.social}
        href="https://www.github.com/marckesin"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        color="textSecondary"
      >
        <GitHubIcon style={{ fontSize: 20 }} />
      </Link>
      <Link
        className={styles.social}
        href="https://www.linkedin.com/in/marckesin"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        color="textSecondary"
      >
        <LinkedInIcon fontSize="medium" />
      </Link>
      <Link
        className={styles.social}
        href="https://www.reddit.com/user/marckesin"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        color="textSecondary"
      >
        <RedditIcon fontSize="medium" />
      </Link>
    </>
  );
}
