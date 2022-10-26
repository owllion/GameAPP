import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    name: "",
    email: "",
    avatar: "",
    cartList: [],
    couponList: [],
    cartListLength: 0,
    favList: [],
    county: "",
    district: "",
    road: "",
    errorMsg: "",
    loading: false,
  },
  reducers: {
    signup(state, { payload }) {
      state.token = payload.result.token;
      state.name = payload.result.user.name;
      state.email = payload.result.user.email;
      state.avatar = payload.result.user.avatarRnDefault;
      state.cartList = payload.result.user.cartList;
      state.couponList = payload.result.user.couponList;
      state.favList = payload.result.user.favList;
      state.county = payload.result.user.county;
      state.district = payload.result.user.district;
      state.road = payload.result.user.road;
    },
    signin(state, { payload }) {
      state.token = payload.result.token;
      state.name = payload.result.user.name;
      state.email = payload.result.user.email;
      state.avatar = payload.result.user.avatarRnDefault;
      state.cartList = payload.result.user.cartList;
      state.favList = payload.result.user.favList;
      state.couponList = payload.result.user.couponList;
      state.county = payload.result.user.county;
      state.district = payload.result.user.district;
      state.road = payload.result.user.road;
    },
    setCouponList(state, { payload }) {
      state.couponList = payload.couponList;
    },
    signout(state) {
      state.token = "";
    },
    setError(state, { payload }) {
      state.errorMsg = payload.message;
    },
    setErrorClear(state) {
      state.errorMsg = "";
    },
    setLoading(state, { payload }) {
      state.loading = payload.isLoading;
    },
    setCart(state, { payload }) {
      state.cartList = payload.cartList;
    },
    setCartLength(state, { payload }) {
      state.cartListLength = payload.length;
    },
    setCartItemQty(state, { payload }) {
      payload.type === "add"
        ? state.cartList[payload.index].qty++
        : state.cartList[payload.index].qty--;
    },
    setFavList(state, { payload }) {
      state.favList = payload.favList;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
