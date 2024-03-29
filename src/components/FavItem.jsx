import React from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import { useNavigation } from "@react-navigation/native";

const FavItem = ({ game }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Detail", { item: game })}>
      <View>
        <Box>
          <Image resizeMode="cover" source={{ uri: game.image[0] }} />
        </Box>

        <TextBox>
          <Text numberOfLines={1} selectable ellipsizeMode="tail">
            {game.productName}
          </Text>
        </TextBox>
      </View>
    </Pressable>
  );
};

const Pressable = styled.Pressable``;
const View = styled.View`
  margin-bottom: 10px;
`;
const Box = styled.View`
  height: 200px;
  width: 150px;
  margin: 20px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 150px;
  padding-left: 35px;
`;
const Text = styled.Text`
  font-size: 10px;
  font-family: IBMPlexSansBold;
  color: ${COLORS.white};
`;

export default FavItem;
