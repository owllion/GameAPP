import React, { useState } from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Icon } from "react-native-elements";

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

interface Props  {
   selectedIndex:number,
   setsetIndexHandler:(index:number)=>void   
}
const ListCategory = ({selectedIndex,setsetIndexHandler}:Props) => {

  const [isLoaded] = useFonts({
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <CateBox>
        {categoryItems.map((item, index) => (
          <TouchableWithoutFeedback
            onPress={() => setsetIndexHandler(index)}
            key={item.cateName}
          >
            <InnerBox index={index} selectedIndex={selectedIndex}>
              <Icon
                name={item.iconName}
                type={item.iconType}
                index={index}
                selectedIndex={selectedIndex}
                color={selectedIndex === index ? COLORS.white : COLORS.dark}
              />
              <Text index={index} selectedIndex={selectedIndex}>
                {" "}
                {item.cateName}
              </Text>
            </InnerBox>
          </TouchableWithoutFeedback>
        ))}
      </CateBox>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
  margin-top: -20px;
`;

const CateBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;
const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;
const InnerBox = styled.View`
  background-color: ${({
    index,
    selectedIndex,
  }: {
    index: number;
    selectedIndex: number;
  }) => (selectedIndex === index ? COLORS.primary : COLORS.light)};
  padding: 10px;
  border-radius: 7px;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 10px;
  font-family: IBMPlexSansBold;
  color: ${({
    index,
    selectedIndex,
  }: {
    index: number;
    selectedIndex: number;
  }) => (selectedIndex === index ? COLORS.white : COLORS.dark)};
`;

export default ListCategory;
