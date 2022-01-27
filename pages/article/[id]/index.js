import { useRouter } from "next/router";

const article = ({ article }) => {
  // article id is can be added via React way
  // const router = useRouter();
  // const { id } = router.query;

  return <div>This is article {article.id}</div>;
};

// id can be added via NextJs getServerSideProps
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
};

export default article;
