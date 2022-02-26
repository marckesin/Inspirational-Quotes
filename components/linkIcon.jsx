import Link from "@mui/material/Link";
import styles from "../styles/Home.module.css";

// Link icon component
export default function LinkIcon({ href, children }) {
  return (
    <Link
      className={styles.social}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="textSecondary"
    >
      {children}
    </Link>
  );
}
