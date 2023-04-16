import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

const AuthedPage = ({ loading }) => {
  return (
    <>
      {!loading && (
        <>
          <Nav />
          <div className="container-fluid">
            <LoadingBar />
          </div>
          <div className="container">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(AuthedPage);
