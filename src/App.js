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

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<AuthedPage />}>
        <Route path="" element={<Dashboard />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="new-poll" element={<NewPoll />} />
        <Route path="poll/:id" element={<PollPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default connect()(App);
