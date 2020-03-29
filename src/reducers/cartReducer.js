import TYPES from "./types";

const initialState = {
  items: [],
  item: {}
};

const addCartItemHandler = (state, data) => {
  let items = [...state.items];
  let index = items.findIndex(item => item.product.id === data.product.id);
  if (index !== -1) {
    items[index] = { ...items[index] };
    items[index].count += data.quantity;
  } else {
    items.push({
      product: { ...data.product },
      count: data.quantity
    });
  }
  return items;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CART_ITEM:
      return {
        ...state,
        items: addCartItemHandler(state, action.payload)
      };
    case TYPES.REMOVE_CART_ITEM:
      return {
        ...state,
        items: state.items.filter(
          item => item.product.id !== action.payload.product.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
