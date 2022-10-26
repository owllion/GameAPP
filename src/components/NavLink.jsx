import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
interface Props {
  routeName: string;
  text: string;
}

const NavLink = (props: Props) => {
  const navigation = useNavigation();

  const [isLoaded] = useFonts({
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.routeName)}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  margin: -5px auto 0 auto;
`;
const Text = styled.Text`
  font-family: IBMPlexSansBold;
  font-size: 13px;
  color: #fff;
`;

export default NavLink;
