import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

interface Props {
  text: string;
  onPress: () => void;
}

const SubmitBtn = (props: Props) => {
  const { text, onPress } = props;
  const [isLoaded] = useFonts({
    MarcellusRegular: require("../assets/fonts/Marcellus-Regular.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const Text = styled.Text`
  font-family: MarcellusRegular;
  font-size: 15px;
  color: white;
  text-align: center;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 50px;
  margin: 0 10px 10px 10px;
`;
export default SubmitBtn;
