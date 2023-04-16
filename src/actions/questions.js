import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  answer,
});

export const handleAddAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = { authedUser, qid, answer };
    return saveQuestionAnswer(info).then(() => {
      dispatch(addAnswer(info));
    });
  };
};
