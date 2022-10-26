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

const CardItem = ({ game }: Game) => {
  const navigation = useNavigation();

  const [isLoaded] = useFonts({
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <Pressable onPress={() => navigation.navigate("Detail", { item: game })}>
      <View>
        <Image source={{ uri: game.image[0] }} />
        <TextBox>
          <Text>{game.productName}</Text>
        </TextBox>
        <InnerContainer>
          <Text color margin>
            ${game.price}
          </Text>
          <RatingContainer>
            <Text>{game.rating}</Text>

            <Icon
              name="star"
              type="AntDesign"
              size={12}
              color={COLORS.yellow}
              style={{
                marginLeft: 5,
                paddingTop: 5,
              }}
            />
          </RatingContainer>
        </InnerContainer>
      </View>
    </Pressable>
  );
};
const Pressable = styled.Pressable``;

const View = styled.View`
  height: 300px;
  background-color: ${COLORS.white};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  width: 220px;
  margin: 10px;
  elevation: 10;
  border-radius: 10px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;
const Text = styled.Text`
  font-size: 12px;
  font-family: IBMPlexSansBold;
  color: ${({ color }: { color: boolean }) =>
    color ? COLORS.primary : COLORS.dark};
  margin-top: ${({ margin }: { margin: boolean }) => (margin ? "-10px" : 0)};
`;
const InnerContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: -10px;
`;
export default CardItem;
