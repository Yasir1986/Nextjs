import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web develpement programming" />
      </Head>
      <h1>Welcome to Project build in NextJs</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
