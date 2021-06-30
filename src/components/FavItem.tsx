import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const { width } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';

interface Game {
  game: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
    rating:number
  };
}
const numColumns = 2

const FavItem = ({ game }:Game) => {
   
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=> navigation.navigate('Detail',{item:game})}>
    <View>
        <Box>
       <Image 
        resizeMode='cover'
        source={{uri:game.image[0]}}     
      />  
      </Box>

       <TextBox>
      <Text>{game.productName}</Text>
       </TextBox>

    </View>
    </Pressable>
  );
};

const Pressable = styled.Pressable``
const View = styled.View`
  margin-bottom:10px; 
`;
const Box =styled.View`
  height:${width/numColumns}px;
  width:${width/3}px;
  margin:20px;
`
const Image = styled.Image`
  width:100%;
  height:100%;
  border-radius:10px
`
const TextBox = styled.View`
  align-items:center;
  justify-content:center;
`
const Text = styled.Text`
  font-size: 5px;
  font-family: IBMPlexSansBold;
  color:${COLORS.white} 
`;

export default FavItem;
