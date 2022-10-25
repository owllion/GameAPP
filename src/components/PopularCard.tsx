import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const { width } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";

interface Game {
  game: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
    rating: number;
  };
}

const PopularCard = ({ game }: Game) => {
  const navigation = useNavigation();

  const [isLoaded] = useFonts({
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <Pressable
      android_ripple={{
        color: COLORS.grey,
        borderless: true,
      }}
      onPress={() => navigation.navigate("Detail", { item: game })}
    >
      <View>
        <Image source={{ uri: game.image[0] }} />
        <RightBox>
          <TextBox>
            <Text padding>{game.productName}</Text>
          </TextBox>
          <InnerContainer>
            <Price>${game.price}</Price>
            <RatingContainer>
              <Text>{game.rating}</Text>
              <Icon
                name="star"
                type="AntDesign"
                size={12}
                color={COLORS.yellow}
                style={{
                  marginLeft: 5,
                  paddingTop: 3,
                }}
              />
            </RatingContainer>
          </InnerContainer>
        </RightBox>
      </View>
    </Pressable>
  );
};
const Pressable = styled.Pressable``;
const View = styled.View`
  height: 150px;
  flex-direction: row;
  background-color: ${COLORS.white};
  width: 360px;
  margin: 10px;
  elevation: 10;
  border-radius: 10px;
`;
const RightBox = styled.View`
  width: 80%;
  padding-right: 60px;
  justify-content: center;
`;
const Image = styled.Image`
  height: 100%;
  width: 130px;
  border-radius: 10px;
  margin-right: 10px;
`;
const TextBox = styled.View`
  justify-content: center;
  padding-top: 20px;
`;
const Text = styled.Text`
  font-size: 12px;
  padding: ${({ padding }: { padding: boolean }) => (padding ? "15px" : 0)};
  font-family: IBMPlexSansBold;
  color: ${({ color }: { color: boolean }) =>
    color ? COLORS.primary : COLORS.dark};
  margin-top: ${({ margin }: { margin: boolean }) => (margin ? "-10px" : 0)};
`;
const Price = styled.Text`
  font-family: IBMPlexSansBold;
  color: ${COLORS.primary};
  margin-top: -5px;
  padding: 3px;
`;
const InnerContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;
export default PopularCard;
