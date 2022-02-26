import Container from "@mui/material/Container";
import Footer from "../components/footer";
import Head from "next/head";
import Quote from "../components/quote";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home({ quote }) {
  return (
    <Container maxWidth="md">
      <Head>
        <title>Inspirational Quotes</title>
        <meta
          name="description"
          content="Random inspirational quote website created with zenquotes.io API."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Quote quote={quote} />
      </main>

      <Footer />
    </Container>
  );
}

// Home component will fetch data using this function on every request
export async function getServerSideProps() {
  const res = await fetch(`https://zenquotes.io/api/random`);
  const data = await res.json();
  const [quote] = data;

  return { props: { quote } };
}
