import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../assets/color/colors";
import Card from "../components/Card";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import ListCategory from "../components/ListCategory";
import CartBtn from "../components/CartBtn";
import { getGameList } from "../store/actions/GetGameListAction";
import ActivityIndicator from "../components/ActivityIndicator";

const Home = ({ navigation }) => {
  const onSubmitHandler = () => {
    navigation.navigate("SearchResult", { gameList, keywords });
  };
  const setKeywordsHandler = (text) => {
    setKeywords(text);
  };
  const gameList = useSelector((state) => state.order.gameList);
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState < string > "";
  const [selectedIndex, setSelectedIndex] = useState < number > 0;

  const setsetIndexHandler = (index) => setSelectedIndex(index);

  useEffect(() => {
    dispatch(getGameList());
  }, []);
  console.log(gameList);
  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ActivityIndicator />
      <Container>
        <Header>
          <TextOuterBox>
            <Text>Find your game</Text>
            <TextInnerBox>
              <Text>And have</Text>
              <Text color>{""} Fun</Text>
            </TextInnerBox>
          </TextOuterBox>
          <CartBtn />
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar
            setKeywordsHandler={setKeywordsHandler}
            onSubmitHandler={onSubmitHandler}
          />
          <Text padding small>
            Categories
          </Text>
          <ListCategory
            selectedIndex={selectedIndex}
            setsetIndexHandler={setsetIndexHandler}
          />
          <Text padding small margin>
            Top Game
          </Text>
          <Card portrait gameList={gameList} index={selectedIndex} cardItem />
          <Text padding small margin>
            Popular
          </Text>
          <Card gameList={gameList} index={selectedIndex} />
        </ScrollView>
      </Container>
    </>
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
  font-size: ${(props) => (props.small ? "14px" : "18px")};

  font-family: IBMPlexSansBold;

  color: ${(props) => (props.color ? COLORS.orange : "#000")};

  padding: ${(props) => (props.padding ? "20px" : 0)};
  margin-top: ${({ margin }) => (margin ? "-5px" : 0)};
`;

export default Home;
