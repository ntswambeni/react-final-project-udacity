import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { addAnswer, addQuestion, receiveQuestions } from "./questions";
import { addAnswerToUser, addQuestionToUser, receiveUsers } from "./users";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
};

export const handleSaveQuestion = ({ optionOneText, optionTwoText }) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
      dispatch(hideLoading());
    });
  };
};

export const handleAddAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = { authedUser, qid, answer };
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addAnswer(info));
        dispatch(addAnswerToUser(info));
        dispatch(hideLoading());
      })
      .catch((e) => {
        console.log(e);
        dispatch(hideLoading());
      });
  };
};
