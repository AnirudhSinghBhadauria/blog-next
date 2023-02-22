import "../styles/globals.css";
import Layout from "components/Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, NEXT, tech, technology, blog, tech blog, daily blog, tech news, news, project, github, github project"
        />
        <meta name="author" content="Anirudh Singh Bhadauria" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
