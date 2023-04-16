import { useParams } from "react-router-dom";
import PollAnswer from "../components/PollAnswer";
import { connect } from "react-redux";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({ question, user }) => {
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
            questionText={question?.optionOne.text}
            answer="optionOne"
            qid={question?.id}
          />
        </div>
        <div className="poll-page-answers__answer">
          <PollAnswer
            questionText={question?.optionTwo.text}
            answer="optionTwo"
            qid={question?.id}
          />
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = ({ questions, users }, { router }) => {
  const { id } = router.params;
  const question = questions[id];
  return {
    id,
    question,
    user: users[question?.author],
  };
};

export default withRouter(connect(mapStatetoProps)(PollPage));
