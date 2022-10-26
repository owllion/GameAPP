import React from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const ActivityIndicator = () => {
  const visible = useSelector((state) => state.auth.loading);
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
