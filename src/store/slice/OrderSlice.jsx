import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    finalPrice: 0,
    discount: 0,
    detail: {},
    gameList: [],
  },
  reducers: {
    setDisAndPrice(state, { payload }) {
      state.finalPrice = payload.finalPrice;
      state.discount = payload.discount;
    },
    clearDisAndPrice(state) {
      state.finalPrice = 0;
      state.discount = 0;
    },
    setOrderDetail(state, { payload }) {
      state.detail = payload.orderDetail;
    },
    setGameList(state, { payload }) {
      state.gameList = payload.gameList;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
