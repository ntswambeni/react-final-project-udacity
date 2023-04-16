import { connect } from "react-redux";
import PollList from "../components/PollList";

const Dashboard = ({ newQuestions, doneQuestions }) => {
  return (
    <>
      <PollList questionIds={newQuestions} title="New Question" />

      <PollList questionIds={doneQuestions} title="Done" />
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

  return { newQuestions, doneQuestions };
};

export default connect(mapStateToProps)(Dashboard);
