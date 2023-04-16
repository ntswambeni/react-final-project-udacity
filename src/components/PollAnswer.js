import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

const PollAnswer = ({ qid, questionText, answer, dispatch }) => {
  const handleAnswer = () => {
    dispatch(handleAddAnswer(qid, answer));
  };

  return (
    <div className="answer">
      <p className="answer__text">{questionText}</p>
      <button className="answer__button" onClick={handleAnswer}>
        vote
      </button>
    </div>
  );
};

const mapStatetoProps = ({}, { answer, questionText, qid }) => ({
  answer,
  questionText,
  qid,
});

export default connect(mapStatetoProps)(PollAnswer);
