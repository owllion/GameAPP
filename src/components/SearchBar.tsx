import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
  background-color: #f0eeee;
  border-radius: 10px;
  height: 65px;
  margin: 10px 15px 0;
  flex-direction: row;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 65px;
  font-size: 18px;
  color: #010101;
  margin-left: 10px;
  font-family: IBMPlexSansBold;
`;
const SearchBar = () => {
  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <Feather
        name="search"
        size={30}
        style={{ marginLeft: 15, marginTop: 16 }}
      />
      <TextInput placeholder="Search" />
    </Container>
  );
};

export default SearchBar;
