const Login = () => {
  return (
    <div className="login-page container">
      <h1>Employee Polls</h1>
      <img
        className="login-page__cover"
        src="https://www.applauz.me/hubfs/image%20%2822%29.png"
      ></img>
      <h2>Log In</h2>
      <form className="form">
        <label className="form__label">
          User
          <input className="form__input" placeholder="User" />
        </label>
        <label className="form__label">
          Password
          <input className="form__input" placeholder="Password" />
        </label>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
