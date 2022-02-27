import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.css";

// Quote component
export default function Quote({ quote }) {
  return (
    <>
      {quote && (
        <figure className={styles.text_align}>
          <blockquote className="blockquote">
            <p className="display-5 fw-bold">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="fs-2 align-text-top me-2"
              />
              {quote.q}
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="fs-2 align-text-top ms-2"
              />
            </p>
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
