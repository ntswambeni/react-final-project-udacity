import { connect } from "react-redux";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage = ({ orderedUsers }) => {
  return (
    <div className="leaderboard-page">
      <Leaderboard users={orderedUsers} />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const orderedUsers = Object.keys(users)
    .sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    )
    .map((user) => users[user]);
  return { orderedUsers };
};

export default connect(mapStateToProps)(LeaderboardPage);
