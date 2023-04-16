import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatDate } from "../utils/helpers";

const PollCard = ({ author, timestamp, questionId }) => {
  const navigate = useNavigate();

  const handleShowQuestion = () => {
    navigate(`/poll/${questionId}`);
  };

  return (
    <div className="poll">
      <div className="poll-details">
        <h3 className="poll-details__owner">{author}</h3>
        <span className="poll-details_date">{timestamp}</span>
      </div>
      <button
        type="button"
        className="poll__button"
        onClick={handleShowQuestion}
      >
        Show
      </button>
    </div>
  );
};

const mapStateToProps = ({ questions }, { questionId }) => {
  const question = questions[questionId];
  const { author, timestamp } = question;
  return {
    author,
    timestamp: formatDate(timestamp),
    questionId,
  };
};

export default connect(mapStateToProps)(PollCard);
