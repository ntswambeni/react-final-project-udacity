import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

const PollAnswer = ({
  qid,
  questionText,
  answer,
  dispatch,
  voted,
  votesAmount,
  totalVotes,
}) => {
  const handleAnswer = () => {
    dispatch(handleAddAnswer(qid, answer));
  };

  return (
    <div className="answer">
      <p className="answer__text">{questionText}</p>
      {voted ? (
        <p className="answer__text border-top">{`${votesAmount} / (${
          Math.round((votesAmount / totalVotes) * 100 * 100) / 100
        }%) voted this`}</p>
      ) : (
        <button className="answer__button" onClick={handleAnswer}>
          vote
        </button>
      )}
    </div>
  );
};

const mapStatetoProps = (
  {},
  { answer, questionText, qid, voted, votesAmount, totalVotes }
) => {
  return {
    answer,
    questionText,
    qid,
    voted,
    votesAmount,
    totalVotes,
  };
};

export default connect(mapStatetoProps)(PollAnswer);
