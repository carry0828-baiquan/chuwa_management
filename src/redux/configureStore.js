import { combineReducers, createStore } from "redux";
import winState from "./ducks/homePageState";

const reducer = combineReducers({
  homePageState: winState,
});

export const store = createStore(reducer);
