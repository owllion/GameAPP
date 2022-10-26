import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

import FavItem from "../components/FavItem";
import COLORS from "../assets/color/colors";
import BackBtn from "../components/BackBtn";
import EmptyImg from "../components/EmptyImg";

const numColumns = 2;
const FavScreen = () => {
  const favList = useSelector((state) => state.auth.favList);

  return (
    <Container>
      <BtnBox>
        <BackBtn routeName={null} />
      </BtnBox>

      {!!favList[0] ? (
        <EmptyImg
          text="Nothing in favlist..."
          color="light"
          img={require("../assets/images/emptyFav.png")}
        />
      ) : (
        <Container>
          <Text>Favorite</Text>
          <FlatList
            contentContainerStyle={{ alignItems: "center" }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={favList}
            numColumns={numColumns}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => {
              return <FavItem game={item} />;
            }}
          />
        </Container>
      )}
    </Container>
  );
};
const BtnBox = styled.View`
  padding-left: 10px;
`;
const Container = styled.View`
  padding: 40px 10px 100px 10px;
  flex: 1;
  background-color: ${COLORS.primary};
`;
const Text = styled.Text`
  font-size: 20px;
  font-family: IBMPlexSansBold;
  padding-top: 20px;
  padding-left: 40px;
  margin-bottom: 20px;
  color: ${COLORS.orange};
`;
const FlatList = styled.FlatList``;

export default FavScreen;
