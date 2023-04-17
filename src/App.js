import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeaderboardPage from "./pages/LeaderboardPage";
import NewPoll from "./pages/NewPoll";
import AuthedPage from "./pages/AuthedPage";
import PollPage from "./pages/PollPage";
import Protected from "./components/Protected";
import authedUser from "./reducers/authedUser";
import NotFound from "./pages/NotFound";

function App(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isSignedIn={props.authedUser}>
            <AuthedPage />
          </Protected>
        }
      >
        <Route
          path=""
          element={
            <Protected isSignedIn={props.authedUser}>
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
          path="add"
          element={
            <Protected isSignedIn={authedUser}>
              <NewPoll />
            </Protected>
          }
        />
        <Route
          path="questions/:question_id"
          element={
            <Protected isSignedIn={authedUser}>
              <PollPage />
            </Protected>
          }
        />
        <Route
          path="*"
          element={
            <Protected isSignedIn={authedUser}>
              <NotFound />
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

export default connect(mapStateToProps)(App);
