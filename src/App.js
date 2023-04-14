import Nav from "./components/Nav";
import PollList from "./components/PollList";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <PollList />
      </div>
    </div>
  );
}

export default App;
