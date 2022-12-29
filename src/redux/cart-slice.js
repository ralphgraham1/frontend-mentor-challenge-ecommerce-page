import { createSlice } from "@reduxjs/toolkit";
import {data}   from './../components/data';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {},
});

export default cartSlice.reducer;
