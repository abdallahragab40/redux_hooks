import TYPES from "../reducers/types";

export const addCartItem = item => {
  return dispatch => {
    dispatch({
      type: TYPES.ADD_CART_ITEM,
      payload: item
    });
  };
};
export const removeCartItem = item => {
  return dispatch => {
    dispatch({
      type: TYPES.REMOVE_CART_ITEM,
      payload: item
    });
  };
};
