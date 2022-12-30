import { createSlice, current } from "@reduxjs/toolkit";
import { data } from "./../components/data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
    cart: [],
  },
  reducers: {
    setIncrement: (state, { payLoad }) => {
      state.totalAmount = payLoad;
    },

    addToCart: (state, action) => {
      const { payload } = action;
      state.cart = [...state.cart, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
