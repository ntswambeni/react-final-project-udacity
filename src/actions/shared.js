import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

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
