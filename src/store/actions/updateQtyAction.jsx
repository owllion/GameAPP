import { authActions } from "../slice/Auth";
import userApi from "../../api/user";

export const updateQty = (payload) => {
  return async (dispatch, getState) => {
    const state = getState().auth;
    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const {
        data: { cartList },
      } = await userApi.updateQty(payload, state.token);
      dispatch(authActions.setCart({ cartList }));
      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      dispatch(authActions.setLoading({ isLoading: false }));
      if (e.response) {
        alert(e.response.data.msg);
      }
    }
  };
};
