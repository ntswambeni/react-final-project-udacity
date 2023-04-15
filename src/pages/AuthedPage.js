import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const AuthedPage = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default AuthedPage;
