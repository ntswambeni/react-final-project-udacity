const NewPoll = () => {
  return (
    <div className="new-poll-page">
      <h2 className="new-poll-page__heading">Would You Rather</h2>
      <span>Create Your Own Poll</span>
      <form className="form">
        <label className="form__label">
          User
          <input className="form__input" type="text" placeholder="Option one" />
        </label>
        <label className="form__label">
          Password
          <input className="form__input" type="text" placeholder="Option two" />
        </label>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPoll;
