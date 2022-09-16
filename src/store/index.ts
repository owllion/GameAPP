import logger from "redux-logger";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authSlice from "./slice/Auth";
import orderSlice from "./slice/OrderSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: authSlice.reducer,
  order: orderSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
