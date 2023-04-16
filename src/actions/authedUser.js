import { hideLoading, showLoading } from "react-redux-loading-bar";
import { login } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";

const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};

export const handleSetAuthedUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch(showLoading());
    return login({ username, password })
      .then((id) => {
        dispatch(setAuthedUser(id));
        dispatch(hideLoading());
      })
      .catch((e) => {
        alert(e);
        dispatch(hideLoading());
      });
  };
};

export const unsetAuthedUser = () => {
  return {
    type: UNSET_AUTHED_USER,
  };
};
