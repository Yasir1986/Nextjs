import Meta from "../components/Meta";

const about = () => {
  return (
    <div>
      {/*  for custom meta title, if removed default title will be in use */}
      <Meta title="About" />
      <h1>About Page</h1>
    </div>
  );
};

export default about;
