import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, 
            initial-scake=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "web development, programming",
  description: "Get the lastest news in tech and web development",
};

export default Meta;
