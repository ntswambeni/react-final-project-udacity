import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
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
              <NavLink to="new-poll">New</NavLink>
            </li>
          </ul>
        </nav>
        <div className="user">
          <div>
            <img
              className="user__avatar"
              src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg"
              alt="user avatar"
            />
            <span className="user__name">name</span>
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

export default Nav;
