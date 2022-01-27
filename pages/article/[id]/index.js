import Link from "next/link";
import { server } from "../../../config";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  // article id is can be added via React way
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      {/*  for dynamic titles, instead of using default Meta title */}
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// id can be added via NextJs getServerSideProps
export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

/* // id can be added via NextJs getServerSideProps for external API calls
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}; */

export default article;
