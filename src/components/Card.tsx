import React from 'react'
import styled from 'styled-components/native'
import CardItem from './CardItem'


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
}
interface Props {
  gameList:Game[],
  index:number
}

const Card = ({gameList,index}:Props) => {
  
     const result = gameList.filter(g=> g.category === categoryItems[index].cateName )
   
    return (
      <FlatList
        horizontal
        showHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={i=>i.productName}
        renderItem={({ item }) => <CardItem game={item} />}
      />
    );      
}
const FlatList = styled.FlatList``
export default Card
