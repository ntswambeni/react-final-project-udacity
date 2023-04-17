import { connect } from "react-redux";
import PollList from "../components/PollList";
import { useState } from "react";

const Dashboard = ({ newQuestions, doneQuestions }) => {
  const [questionsDisplayed, setQuestionsDisplayed] = useState("new");
  return (
    <>
      <label for="questionsDisplayed" style={{ fontWeight: 600 }}>
        Choose pools to displays{" "}
      </label>
      <select
        id="questionsDisplayed"
        name="questionsDisplayed"
        value={questionsDisplayed}
        onChange={(e) => {
          setQuestionsDisplayed(e.target.value);
        }}
      >
        <option value="new">answered </option>
        <option value="done">unanswered </option>
      </select>
      {questionsDisplayed === "new" ? (
        <PollList questionIds={newQuestions} title="New Question" />
      ) : (
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
