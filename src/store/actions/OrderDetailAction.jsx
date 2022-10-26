import { authActions } from "../slice/Auth";
import userApi from "../../api/user";
import { orderActions } from "../slice/OrderSlice";

export const getOrderDetail = (payload) => {
  return async (dispatch, getState) => {
    const state = getState().auth;

    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const {
        data: { order },
      } = await userApi.getOrderDetail(payload, state.token);
      dispatch(orderActions.setOrderDetail({ orderDetail: order }));
      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      dispatch(authActions.setLoading({ isLoading: false }));
      if (e.response) {
        alert(e.response.data.msg);
      }
    }
  };
};
