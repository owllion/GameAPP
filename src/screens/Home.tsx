import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { useDispatch } from 'react-redux'
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";
import { useNetInfo } from "@react-native-community/netinfo";
import { Dimensions } from "react-native";

import COLORS from "../assets/color/colors";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import ListCategory from "../components/ListCategory";
import CartBtn from "../components/CartBtn";
import userApi from '../api/user'
import { authActions } from '../store/slice/Auth'
interface Game {
  image: Array<string>;
  productName: string;
  price: number;
  category: string;
  description: string;
  productId: string;
}

const Home = ({navigation}:any) => {
  const onSubmitHandler = () => {
    navigation.navigate('SearchResult',{gameList:games,keywords})
  }
  const setKeywordsHandler = (text:string) => {
    setKeywords(text)
  }
  const clearSearchHandler = () => {
    setKeywords('')
  }
  const dispatch = useDispatch()
  const [keywords,setKeywords] = useState<string>('')
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
 const setsetIndexHandler = (index:number) => setSelectedIndex(index)

  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    getAllGames();
  }, []);
  const getAllGames = async () => {
    try {
      dispatch(authActions.setLoading({isLoading:true}))
       const { data: { allGames }} = await userApi.getAllGames();
 
       setGames(allGames);
       dispatch(authActions.setLoading({isLoading:false}))
    }catch(e) {
      dispatch(authActions.setLoading({isLoading:false}))
       alert(`Something wrong! ${e}`)
    }  
  };

  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>     
      <Header>
        <TextOuterBox>
          <Text>Find your game</Text>
          <TextInnerBox>
            <Text>And have</Text>
            <Text color>{""} Fun</Text>
          </TextInnerBox>
        </TextOuterBox>
       <CartBtn/>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
        clearSearchHandler={clearSearchHandler} 
         setKeywordsHandler={setKeywordsHandler}
         onSubmitHandler={onSubmitHandler} />
        <Text padding small>
          Categories
        </Text>
        <ListCategory selectedIndex={selectedIndex} setsetIndexHandler={setsetIndexHandler}/>
        <Text padding small margin>
          Top Game
        </Text>
        <Card 
          portrait
          gameList={games} 
          index={selectedIndex} 
          cardItem 
        />
        <Text padding small margin>
          Popular
        </Text>
         <Card 
          gameList={games} 
          index={selectedIndex}         
        />
      </ScrollView>
    </Container>
  );
};


const Header = styled.View`
  padding: 2px 20px;
  flex-direction: row;
  justify-content: space-between;
`;
const TextOuterBox = styled.View`
  padding-bottom: 15px;
  margin-top: -10px;
`;
const TextInnerBox = styled.View`
  flex-direction: row;
`;
const Text = styled.Text`
  font-size: ${(props: { small: boolean }) => (props.small ? "14px" : "18px")};

  font-family: IBMPlexSansBold;

  color: ${(props: { color: boolean }) =>
    props.color ? COLORS.orange : "#000"};

  padding: ${(props: { padding: boolean }) => (props.padding ? "20px" : 0)};
 margin-top:${({margin}:{margin:boolean})=> margin? "-5px":0}
`;

export default Home;
