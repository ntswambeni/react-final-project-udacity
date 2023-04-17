import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Login = (props) => {
  const [formfields, setFormfields] = useState({ username: "", password: "" });
  const { username, password } = formfields;

  const location = useLocation();

  const handleChange = (e) => {
    setFormfields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    props.dispatch(handleSetAuthedUser(formfields));
    setFormfields({ username: "", password: "" });
  };

  if (props.authedUser) {
    if (location.state) {
      return <Navigate to={location.state.from} replace />;
    }
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-page container">
      <h1>Employee Polls</h1>
      <img
        className="login-page__cover"
        src="https://www.applauz.me/hubfs/image%20%2822%29.png"
        alt="Login page cover"
      ></img>
      <h2>Log In</h2>
      <form className="form">
        <label className="form__label">
          User
          <input
            type="text"
            name="username"
            className="form__input"
            placeholder="User"
            data-testid="username"
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            className="form__input"
            placeholder="Password"
            data-testid="password"
            onChange={handleChange}
          />
        </label>
        <button
          className="form__button"
          type="submit"
          onClick={handleLogin}
          disabled={username === "" || password === ""}
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Login);
