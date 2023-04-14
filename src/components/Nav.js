const Nav = () => {
  return (
    <div className="container-fluid">
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__link">
              <a href="#">Home</a>
            </li>
            <li className="nav-list__link">
              <a href="#">Leaderboard</a>
            </li>
            <li className="nav-list__link">
              <a href="#">New</a>
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
          <button className="user__logout">Logout</button>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Nav;
