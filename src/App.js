import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeaderboardPage from "./pages/LeaderboardPage";
import NewPoll from "./pages/NewPoll";
import AuthedPage from "./pages/AuthedPage";
import { handleInitialData } from "./actions/shared";
import PollPage from "./pages/PollPage";
import Protected from "./components/Protected";
import authedUser from "./reducers/authedUser";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isSignedIn={authedUser}>
            <AuthedPage />
          </Protected>
        }
      >
        <Route
          path=""
          element={
            <Protected isSignedIn={authedUser}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="leaderboard"
          element={
            <Protected isSignedIn={authedUser}>
              <LeaderboardPage />
            </Protected>
          }
        />
        <Route
          path="new-poll"
          element={
            <Protected isSignedIn={authedUser}>
              <NewPoll />
            </Protected>
          }
        />
        <Route
          path="poll/:id"
          element={
            <Protected isSignedIn={authedUser}>
              <PollPage />
            </Protected>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect()(App);
