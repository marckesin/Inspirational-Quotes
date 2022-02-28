import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Default App component to initialize pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
