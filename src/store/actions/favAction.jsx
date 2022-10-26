import { authActions } from "../slice/Auth";
import userApi from "../../api/user";

export const addToFav = (payload) => {
  return async (dispatch, getState) => {
    const state = getState().auth;
    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const {
        data: { favList },
      } = await userApi.addToFav(payload, state.token);
      dispatch(authActions.setFavList({ favList }));
      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      dispatch(authActions.setLoading({ isLoading: false }));
      if (e.response) {
        alert(e.response.data.msg);
      }
    }
  };
};

export const removeFromFav = (payload) => {
  return async (dispatch, getState) => {
    const state = getState().auth;

    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const {
        data: { favList },
      } = await userApi.removeFromFav(payload, state.token);
      dispatch(authActions.setFavList({ favList }));
      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      dispatch(authActions.setLoading({ isLoading: false }));
      if (e.response) {
        alert(e.response.data.msg);
      }
    }
  };
};
