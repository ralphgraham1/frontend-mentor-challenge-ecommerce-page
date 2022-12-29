import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/cart-slice";

export const store = configureStore({
    reducer: {
      cart: CartReducer,
    },
  });