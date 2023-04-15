import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeaderboardPage from "./pages/LeaderboardPage";
import NewPoll from "./pages/NewPoll";
import AuthedPage from "./pages/AuthedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthedPage />}>
        <Route path="" element={<Dashboard />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="new-poll" element={<NewPoll />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
