import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const { width } = Dimensions.get("screen");

interface Game {
  game: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
  };
}

const CardItem = ({ game }:Game) => {
  const [isLoaded] = useFonts({
    MarcellusRegular: require("../assets/fonts/Marcellus-Regular.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
 
  return (
    <View>
      <Image 
        source={{uri:game.image[0]}}     
      /> 
      <Text>{game.productName}</Text>
    </View>
  );
};
const View = styled.View`
  height: 250px;
  background-color: ${COLORS.white};
  elevation: 10;
  width: ${width / 2.5}px;
  margin: 10px;
  border-radius: 10px;
`;
const Image = styled.Image`
  height:100%;
  width:100%;
  border-radius:10px
`
const Text = styled.Text`
  font-size: 12px;
  font-family: MarcellusRegular;
`;
export default CardItem;
