import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

const PollAnswer = ({
  authedUser,
  qid,
  question,
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
    <div className={`answer ${question.votes.includes(authedUser) && "voted"}`}>
      <p className="answer__text">{question?.text}</p>
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
  { authedUser },
  { answer, question, qid, voted, votesAmount, totalVotes }
) => {
  return {
    authedUser,
    answer,
    question,
    qid,
    voted,
    votesAmount,
    totalVotes,
  };
};

export default connect(mapStatetoProps)(PollAnswer);
