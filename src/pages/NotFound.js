import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Ops! the page was not found</h2>
      <Link to="/">go home</Link>
    </>
  );
};

export default NotFound;
