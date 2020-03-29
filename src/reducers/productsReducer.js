import TYPES from "./types";

const initialState = {
  items: []
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    case TYPES.ADD_PRODUCT:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case TYPES.REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(p => p.id !== action.payload.id)
      };
    case TYPES.EDIT_PRODUCT:
      const products = [...state.items];
      const index = products.findIndex(p => p.id === action.payload.id);
      products[index] = action.payload;
      return {
        ...state,
        items: products
      };
    default:
      return state;
  }
};

export default productsReducer;
