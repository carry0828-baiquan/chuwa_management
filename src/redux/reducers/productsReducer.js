import { ActionTypes } from "../action-types";

const initialState = {
  products: [],
  select: "",
  priceCnt: 0,
  cart: [],
  showCart: false,
  cartTotalAmount: 0
};

export const showCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_CART:
      return { ...state, showCart: payload };
    default:
      return state;
  }
};

export const showCartTotalAmount = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SHOW_CART_TOTAL_AMOUNT:
      return {...state, cartTotalAmount: payload}
    default:
      return state;
  }
}
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case ActionTypes.REMOVE_FROM_CART:
      return {...state, cart: [...state.cart.filter(e => e !== payload)]}
    default:
      return state;
  }
};


export const selectedProductsReducer = (
  state = initialState,
  { type, payload }
) => {
  //console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, select: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
