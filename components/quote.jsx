import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import RefreshButton from "./refreshButton";
import styles from "../styles/Home.module.css";

// Quote component that shows the message
export default function Quote({ quote }) {
  const router = useRouter();

  // Function to refresh the content of the quote
  const handleClick = e => {
    e.preventDefault();
    router.push(window.location.pathname);
  };

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
          <RefreshButton handleClick={handleClick} />
        </figure>
      )}
    </>
  );
}
