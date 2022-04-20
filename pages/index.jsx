import Container from "@mui/material/Container";
import Context from "../context";
import Footer from "../components/footer";
import Head from "next/head";
import Quote from "../components/quote";
import Switch from "../components/switch";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// Home component to render the landing page
export default function Home({ quote }) {
  const [state, setState] = useState(false);

  return (
    <Context.Provider value={[state, setState]}>
      <div className={state ? styles.bgDark : styles.bgLight}>
        <Container className={styles.container} maxWidth="md">
          <Head>
            <title>Inspirational Quotes</title>
            <meta
              name="description"
              content="Random inspirational quote website created with zenquotes.io API."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Switch />
            <Quote quote={quote} />
          </main>

          <Footer />
        </Container>
      </div>
    </Context.Provider>
  );
}

// Home component will fetch data using this function on every request
export async function getServerSideProps() {
  const res = await fetch(`https://zenquotes.io/api/random`);
  const data = await res.json();
  const [quote] = data;

  return { props: { quote } };
}
