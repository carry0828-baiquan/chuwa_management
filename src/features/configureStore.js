import { combineReducers, createStore } from "redux";
import winState from "./ducks/state";

const reducer = combineReducers({
  state: winState,
});

const store = createStore(reducer);
export default store;
