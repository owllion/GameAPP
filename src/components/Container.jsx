import React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";

const Container = ({ children }) => {
  return <View>{children}</View>;
};

const View = styled.SafeAreaView`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export default Container;
