import Container from "@mui/material/Container";
import Quote from "../components/quote";
import styles from "../styles/Home.module.css";

// Not found page component
export default function Custom404() {
  return (
    <Container className={styles.container} maxWidth="md">
      <main className={styles.main}>
        <Quote quote={{ a: "404", q: "Page not Found" }} />
      </main>
    </Container>
  );
}
