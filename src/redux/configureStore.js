import { combineReducers, createStore } from "redux";
import winState from "./reducers/homePageState";
import {
  CartReducer,
  productsReducer,
  showCartReducer, showCartTotalAmount,
} from "./reducers/productsReducer";
import { selectedProductsReducer } from "./reducers/productsReducer";


const reducer = combineReducers({
  homePageState: winState,
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartItemsCnt: CartReducer,
  cartShowing: showCartReducer,
  showCartAmount: showCartTotalAmount
});

export const store = createStore(reducer);
