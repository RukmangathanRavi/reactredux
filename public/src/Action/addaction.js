import { ADDACTION, SUBACTION } from "./actiontype";

export const addaction = () => (dispatch) => {
  return dispatch({ type: ADDACTION });
};

export const subaction = () => (dispatch) => {
  return dispatch({ type: SUBACTION });
};
