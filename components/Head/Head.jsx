import React from "react";
import Head from "next/head";

const META = ({ title, content }) => {
  return (
    <Head>
      <title>{`Inkwell Chronicles | ${title}`}</title>
      <meta name="description" content={content} />
    </Head>
  );
};

export default META;
