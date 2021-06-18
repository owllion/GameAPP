import React, { useState, useEffect } from 'react';
import { Platform,StatusBar,Dimensions,ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Button from '../components/forms/Button'

const image = { uri: "https://images.unsplash.com/photo-1500843613192-839e95410c10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" };

const WelcomeScreen = () => {
     const [isLoaded] = useFonts({
      MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
  });
       if (!isLoaded) {
        return <AppLoading />
       }
    return ( 
   <ImageBackground 
       source={require('../assets/images/doing.jpg')} 
       style={{
         flex:1,
         paddingTop:100,
         padding:20,
         resizeMode: "contain",
       }}>    
    <View>
       <TextContanier>
        <Text title='title'>
           Share anything!
        </Text>
        <Text >
           Maybe your cat or something!
        </Text>
      </TextContanier>
      <ButtonContainer>
        <Button text='LOGIN' />
        <Button text='REGISTER' />  
       </ButtonContainer>
        </View>
        </ImageBackground>   
    )
}

const View = styled.SafeAreaView`
   padding-top:${Platform.OS ==='android'? StatusBar.currentHeight : 0}px;
   flex:1;
   border-radius:20px;
   justify-content:center;
   align-items:flex-start;  
   background-color:rgba(0,0,0,.3) , rgba(0,0,0,.2) )  
`
const TextContanier = styled.View`
  padding:0 27px;
  top:250px;
  left:10px;
  position:absolute;
`
const ButtonContainer = styled.View`
 position:absolute;
 bottom:20px;
 width:100%;
 padding:20px;

`
const Text = styled.Text`
   color:white;
   font-family: MarcellusRegular;
   font-weight:${(props:{title:boolean})=> props.title ? 900 :100};
   font-size:${(props:{title:boolean})=> props.title ? '40px' :'20px'};;
`
export default WelcomeScreen