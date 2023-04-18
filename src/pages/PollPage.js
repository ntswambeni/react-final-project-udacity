import { useParams } from "react-router-dom";
import PollAnswer from "../components/PollAnswer";
import { connect } from "react-redux";
import NotFound from "./NotFound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({
  question,
  user,
  voted,
  votedOptionOne,
  votedOptionTwo,
  totalVotes,
}) => {
  if (!question) {
    return <NotFound />;
  }

  return (
    <div className="poll-page">
      <h2>Poll by {question?.author}</h2>
      <img
        src={user?.avatarURL}
        alt={`${user?.id}' avatar`}
        className="large-avatar"
      />
      <h3>Would you rather</h3>
      <div className="poll-page-answers">
        <div className="poll-page-answers__answer">
          <PollAnswer
            question={question?.optionOne}
            answer="optionOne"
            qid={question?.id}
            voted={voted}
            totalVotes={totalVotes}
            votesAmount={votedOptionOne}
          />
        </div>
        <div className="poll-page-answers__answer">
          <PollAnswer
            question={question?.optionTwo}
            answer="optionTwo"
            qid={question?.id}
            voted={voted}
            totalVotes={totalVotes}
            votesAmount={votedOptionTwo}
          />
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = ({ questions, users, authedUser }, { router }) => {
  const { question_id: id } = router.params;
  const question = questions[id];
  const voted = users[authedUser]?.answers.hasOwnProperty(id);
  const votedOptionOne = questions[id]?.optionOne.votes.length;
  const votedOptionTwo = questions[id]?.optionTwo.votes.length;
  const totalVotes = votedOptionOne + votedOptionTwo;
  return {
    question,
    user: users[question?.author],
    voted,
    votedOptionOne,
    votedOptionTwo,
    totalVotes,
  };
};

export default withRouter(connect(mapStatetoProps)(PollPage));
