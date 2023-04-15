import Nav from "./components/Nav";
import PollAnswer from "./components/PollAnswer";

import Dashboard from "./pages/Dashboard";
import LeaderboardPage from "./pages/LeaderboardPage";
import PollPage from "./pages/PollPage";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
