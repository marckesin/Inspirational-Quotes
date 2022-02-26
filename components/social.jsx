import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
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
