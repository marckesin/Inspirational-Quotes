import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home({ quote }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inspirational Quotes</title>
        <meta
          name="description"
          content="Random inspirational quote website created with zenquotes.io API."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {quote && (
          <figure className={styles.text_align}>
            <blockquote className="blockquote">
              <p className="display-4">{quote.q}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite className="fs-5" title="Source Title">
                {quote.a}
              </cite>
            </figcaption>
          </figure>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// Home component will fetch data using this function on every request
export async function getServerSideProps() {
  const res = await fetch(`https://zenquotes.io/api/random`);
  const data = await res.json();
  const [quote] = data;

  return { props: { quote } };
}
