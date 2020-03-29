import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

// Root Reducer
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export default rootReducer;
