import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { unsetAuthedUser } from "../actions/authedUser";

const Nav = ({ user, dispatch }) => {
  const handleLogout = () => {
    dispatch(unsetAuthedUser());
  };

  return (
    <div className="container-fluid">
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-list__link">
              <NavLink to="leaderboard">Leaderboard</NavLink>
            </li>
            <li className="nav-list__link">
              <NavLink to="add">New</NavLink>
            </li>
          </ul>
        </nav>
        <div className="user">
          <div>
            <img
              className="user__avatar"
              src={user?.avatarURL}
              alt="user avatar"
            />
            <span className="user__name">{user?.id}</span>
          </div>
          <button className="user__logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <hr />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser],
});
export default connect(mapStateToProps)(Nav);
