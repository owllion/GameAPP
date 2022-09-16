import { authActions } from "../slice/Auth";
import axios from "../../api/axios";
import { isLoading } from "expo-font";
interface UserData {
  email: string;
  password: string;
  userName: string;
}

export const registerOrLogin = (payload: UserData) => {
  let path: string;
  return async (dispatch: any, getState: any) => {
    payload.userName ? (path = "register") : (path = "rnLogin");
    const handler = path === "register" ? "signup" : "signin";
    try {
      dispatch(authActions.setLoading({ isLoading: true }));
      const values = {
        email: payload.email,
        password: payload.password,
        name: payload.userName,
      };
      const { data } = await axios.post(`/${path}`, values);

      dispatch(authActions[handler](data));
      dispatch(authActions.setLoading({ isLoading: false }));
    } catch (e) {
      if (e.response) {
        const msg = e.response.data.msg;
        let errMsg: string | undefined;

        //login error
        if (msg.includes("No")) {
          errMsg = "User does not exist";
        }
        if (msg.includes("Incorrect")) {
          errMsg = "Wrong password";
        }

        if (msg.includes("duplicate")) {
          errMsg = "email already exists!";
        }
        dispatch(authActions.setError({ message: errMsg }));
        dispatch(authActions.setLoading({ isLoading: false }));
      }
    }
  };
};
