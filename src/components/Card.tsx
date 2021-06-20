import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

interface Props {
    title:string;
    image:string
}

const Card = (props:Props) => {
  const [isLoaded] =  useFonts({
      MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
      
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }

    return (
        <View>
           <Image 
              source={{
                  width:'100%',
                  height:100,
                  uri:'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'}} />
                < Description>
                 <Text>Dont know </Text>
                </Description>
        </View>
    )
}

const View = styled.View`
  border-radius:10px;
  margin-bottom:10px;
  overflow:hidden;
  background-color:#fff;
`
const Image = styled.Image`
`
const Description = styled.View`
  padding:20px;
`
const Text = styled.Text`
  font-size:20px;
  font-family:MarcellusRegular;
` 
export default Card
