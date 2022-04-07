import { ActionTypes } from "./action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setShowCartDetail = (value) => {
  console.log("setShowCartDetail");
  return {
    type: ActionTypes.SHOW_CART,
    payload: value,
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeCart = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};


export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const showCartItemAmount = (count) => {
  return {
    type:ActionTypes.SHOW_CART_TOTAL_AMOUNT,
    payload:count
  }
}
