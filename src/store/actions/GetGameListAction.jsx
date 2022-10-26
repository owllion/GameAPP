import { orderActions } from "../slice/OrderSlice";
import userApi from "../../api/user";
import { authActions } from "../slice/Auth";

export const getGameList = () => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const {
        data: { allGames },
      } = await userApi.getAllGames();

      dispatch(orderActions.setGameList({ gameList: allGames }));

      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      if (e.response) {
        dispatch(authActions.setLoading({ isLoading: false }));
        alert(e.response.data.msg);
      }
    }
  };
};
