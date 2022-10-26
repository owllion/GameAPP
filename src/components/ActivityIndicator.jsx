import React from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { useAppSelector } from "../store/hooks";
const ActivityIndicator = () => {
  const visible = useAppSelector((state) => state.auth.loading);
  console.log(visible);
  if (!visible) return null;

  return (
    <View>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animation/loading.json")}
      />
    </View>
  );
};
const View = styled.View`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  background-color: rgba(225, 225, 225, 1);
`;

export default ActivityIndicator;
