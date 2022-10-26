import React from "react";
import styled from "styled-components/native";
import CardItem from "./CardItem";
import PopularCard from "./PopularCard";

const categoryItems = [
  { cateName: "Horror", iconType: "font-awesome-5", iconName: "ghost" },
  {
    cateName: "Action",
    iconType: "material-community",
    iconName: "knife-military",
  },
  {
    cateName: "Adventure",
    iconType: "material-community",
    iconName: "sword-cross",
  },
  { cateName: "Rhythm", iconType: "font-awesome-5", iconName: "music" },
];

const Card = ({ gameList, index, cardItem, portrait }) => {
  const result = gameList.filter(
    (g) => g.category === categoryItems[index].cateName
  );
  const popular = gameList.filter((g) => g.category === "Action");
  const h = portrait ? portrait : null;
  return (
    <FlatList
      h={h}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={cardItem ? result : popular}
      keyExtractor={(i) => i.productName}
      renderItem={({ item }) =>
        cardItem ? <CardItem game={item} /> : <PopularCard game={item} />
      }
    />
  );
};
const FlatList = styled.FlatList`
  margin-top: -20px;
  padding-left: 7px;
  height: ${({ h }) => (h ? "420px" : "280px")};
  flex-grow: 0;
`;
export default Card;
