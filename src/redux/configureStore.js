import { combineReducers, createStore } from "redux";
import winState from "./reducers/homePageState";
import { productsReducer } from "./reducers/productsReducer";
import { selectedProductsReducer } from "./reducers/productsReducer";
const reducer = combineReducers({
  homePageState: winState,
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export const store = createStore(reducer);
