import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/common.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
