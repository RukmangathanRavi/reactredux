import { ADDACTION, SUBACTION } from "../Action/actiontype";

export const addReducer = (state = { Count: 0 }, action) => {
  switch (action.type) {
    case ADDACTION:
      return { ...state, Count: state.Count + 1 };
    case SUBACTION:
      return { ...state, Count: state.Count - 1 };
    default:
      return state;
  }
};
