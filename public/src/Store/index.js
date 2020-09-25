import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../Reducer/index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
