import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleSaveQuestion } from "../actions/shared";

const NewPoll = (props) => {
  const navigate = useNavigate();
  const [formfields, setFormfields] = useState({
    firstOption: "",
    secondOption: "",
  });
  const { firstOption, secondOption } = formfields;

  const handleChange = (e) => {
    setFormfields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      handleSaveQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
      })
    );
    navigate("/");
  };

  return (
    <div className="new-poll-page">
      <h2 className="new-poll-page__heading">Would You Rather</h2>
      <span>Create Your Own Poll</span>
      <form className="form">
        <label className="form__label">
          First Option
          <input
            className="form__input"
            name="firstOption"
            type="text"
            value={firstOption}
            placeholder="Option one"
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Second Option
          <input
            className="form__input"
            name="secondOption"
            type="text"
            value={secondOption}
            placeholder="Option two"
            onChange={handleChange}
          />
        </label>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
