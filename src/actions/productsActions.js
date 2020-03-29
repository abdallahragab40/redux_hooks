import TYPES from "../reducers/types";
import axios from "axios";

export const fetchProducts = () => {
  return dispatch => {
    axios.get("http://localhost:3000/products").then(data => {
      data &&
        dispatch({
          type: TYPES.FETCH_PRODUCTS,
          payload: data
        });
    });
  };
};

export const addProduct = product => {
  return dispatch => {
    return axios.post("http://localhost:3000/products", product).then(data => {
      dispatch({
        type: TYPES.ADD_PRODUCT,
        payload: data
      });
    });
  };
};

export const editProduct = product => {
  return dispatch => {
    return axios
      .put(`http://localhost:3000/products/${product.id}`, product)
      .then(data => {
        dispatch({
          type: TYPES.EDIT_PRODUCT,
          payload: data
        });
      });
  };
};

export const removeProduct = product => {
  return dispatch => {
    return axios
      .delete(`http://localhost:3000/products/${product.id}`)
      .then(data => {
        dispatch({
          type: TYPES.REMOVE_PRODUCT,
          payload: product
        });
      });
  };
};
