import { connect } from "react-redux";
import PollList from "../components/PollList";

const Dashboard = ({ newQuestions, doneQuestions }) => {
  return (
    <>
      {newQuestions.length > 0 && (
        <PollList questionIds={newQuestions} title="New Question" />
      )}

      {doneQuestions.length > 0 && (
        <PollList questionIds={doneQuestions} title="Done" />
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {
  const newQuestions = [];
  const doneQuestions = [];

  for (let key in questions) {
    if (
      !questions[key].optionOne.votes.includes(authedUser) &&
      !questions[key].optionTwo.votes.includes(authedUser)
    ) {
      newQuestions.push(key);
    } else {
      doneQuestions.push(key);
    }
  }
  newQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  doneQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return { newQuestions, doneQuestions };
};

export default connect(mapStateToProps)(Dashboard);
