import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";

const AuthedPage = ({ loading, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
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
