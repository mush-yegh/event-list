import { combineReducers } from "redux";
import calendar from "./calendar";
import events from "./events";

export const rootReducer = combineReducers({
  calendar,
  events,
});
