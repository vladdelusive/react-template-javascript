import { combineReducers } from "redux";
import { reducer as smthReducer } from "./smth/reducer";

export const rootReducer = combineReducers({
  smth: smthReducer,
});
