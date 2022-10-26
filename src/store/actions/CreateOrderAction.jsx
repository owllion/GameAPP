import { authActions } from "../slice/Auth";
import userApi from "../../api/user";
import { navigate } from "../../navigationRef";

export const createOrder = (payload) => {
  return async (dispatch, getState) => {
    const state = getState().auth;
    try {
      dispatch(authActions.setLoading({ isLoading: true }));

      const {
        data: { user },
      } = await userApi.createOrder(payload, state.token);

      dispatch(authActions.setCouponList({ couponList: user.couponList }));
      dispatch(authActions.setCart({ cartList: user.cartList }));
      dispatch(authActions.setLoading({ isLoading: false }));

      navigate("Success");
    } catch (e) {
      if (e.response) {
        alert(e.response.data.msg);
      }
      dispatch(authActions.setLoading({ isLoading: false }));
    }
  };
};
