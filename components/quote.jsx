import styles from "../styles/Home.module.css";

// Quote component
export default function Quote({ quote }) {
  return (
    <>
      {quote && (
        <figure className={styles.text_align}>
          <blockquote className="blockquote">
            <p className="display-5 fw-normal">{quote.q}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite className="fs-5" title="Source Title">
              {quote.a}
            </cite>
          </figcaption>
        </figure>
      )}
    </>
  );
}
