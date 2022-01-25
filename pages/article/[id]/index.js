import { useRouter } from "next/router";

const article = () => {
  // article id is added 
  const router = useRouter();
  const { id } = router.query;

  return <div>This is an article {id}</div>;
};

export default article;
