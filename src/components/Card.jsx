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

interface Game {
  image: Array<string>;
  productName: string;
  price: number;
  category: string;
  description: string;
  productId: string;
  rating: number;
}
interface Props {
  gameList: Game[];
  index: number;
  cardItem: boolean;
  portrait: boolean;
}
interface renderProps {
  item: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
    rating: number;
  };
}

const Card = ({ gameList, index, cardItem, portrait }: Props) => {
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
      renderItem={({ item }: renderProps) =>
        cardItem ? <CardItem game={item} /> : <PopularCard game={item} />
      }
    />
  );
};
const FlatList = styled.FlatList<{ h: boolean }>`
  margin-top: -20px;
  padding-left: 7px;
  height: ${({ h }) => (h ? "420px" : "280px")};
  flex-grow: 0;
`;
export default Card;
