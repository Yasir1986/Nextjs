import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  //console.log(articles);
  return (
    <div>
      {/*  can be use if there is no head component */}
      {/* <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web develpement programming" />
      </Head>
      <h1>Welcome to Project build in NextJs</h1> */}
      <ArticleList articles={articles} />
    </div>
  );
}

// This Api can be used for internal/localhost/ownServer API calls
export const getStaticProps = async () => {
  const res = await fetch(
    // fetch from localhost
    // "http://localhost:3000/api/articles"
    // fecth API from Server
    `${server}/api/articles`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// This Api can be used for external API calls
/* export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}; */
