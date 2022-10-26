import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerOrLogin } from "../store/actions/AuthAction";
import AuthForm from "../components/forms/AuthForm";
import NavLink from "../components/NavLink";
import styled from "styled-components/native";
import ActivityIndicator from "../components/ActivityIndicator";
import { authActions } from "../store/slice/Auth";

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const userRegister = (email, password, userName) => {
    dispatch(registerOrLogin({ userName, email, password }));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(authActions.setErrorClear());
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <ActivityIndicator />
      <ImageBackground source={require("../assets/images/registerbg.jpg")}>
        <View>
          <AuthForm
            onSubmit={userRegister}
            headerText="SIGN UP"
            nameInput="true"
            submitButtonText="Register"
          />
          <NavLink text="Already have an account? Sign in!" routeName="Login" />
        </View>
      </ImageBackground>
    </>
  );
};

const ImageBackground = styled.ImageBackground`
  flex: 1;
`;
const View = styled.View`
  padding: 10px 0;
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.5);
`;

export default RegisterScreen;
