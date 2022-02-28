import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

// Default App component to initialize pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
