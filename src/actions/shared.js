import { getInitialData, saveQuestion } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { addQuestion, receiveQuestions } from "./questions";
import { addQuestionToUser, receiveUsers } from "./users";

export const handleInitialData = () => {
  const AUTHED_ID = "sarahedo";
  return (dispatch) => {
    getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
};

export const handleSaveQuestion = ({ optionOneText, optionTwoText }) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
};
