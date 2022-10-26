import React from "react";
import { Platform, StatusBar, ImageBackground } from "react-native";
import styled from "styled-components/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import AuthNavBtn from "../components/AuthNavBtn";

const WelcomeScreen = ({ navigation }) => {
  const [isLoaded] = useFonts({
    MarcellusRegular: require("../assets/fonts/Marcellus-Regular.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={require("../assets/images/mad.jpg")}
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 50,
      }}
    >
      <View>
        <TextContanier>
          <Text title="title">Find the game</Text>
          <Text>Highly recommend Death strending.</Text>
        </TextContanier>
        <ButtonContainer>
          <AuthNavBtn
            text="LOGIN"
            onPress={() => navigation.navigate("Login")}
          />
          <AuthNavBtn
            text="REGISTER"
            onPress={() => navigation.navigate("Register")}
          />
        </ButtonContainer>
      </View>
    </ImageBackground>
  );
};

const View = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  flex: 1;
  border-radius: 20px;
  justify-content: center;
  align-items: flex-start;
`;
const TextContanier = styled.View`
  padding: 0 27px;
  top: 425px;
  left: -5px;
  position: absolute;
`;
const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 20px;
`;
const Text = styled.Text`
  color: white;
  font-family: MarcellusRegular;
  font-weight: ${(props) => (props.title ? 900 : 100)};
  font-size: ${(props) => (props.title ? "30px" : "10px")}; ;
`;
export default WelcomeScreen;
