import React from 'react'
import { withNavigation } from '@react-navigation/compat'
import styled from 'styled-components/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { bold } from '../assets/style/style'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export type StackParamList = {
     LoginScreen:undefined;
     RegisterScreen:undefined
    }
  type Props =  {
    routeName:string;
    text:string
    navigation:StackNavigationProp<StackParamList>,  
}

const NavLink = (props:Props) => {
     const [isLoaded] =  useFonts({
      IBMPlexSansBold: require('../assets/fonts/IBMPlexSans-Bold.ttf'),
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }

    return (
        <TouchableOpacity 
          onPress={()=> props.navigation.navigate(props.routeName)}>
          <Text>{props.text}</Text>
        </TouchableOpacity>
     
    )
}

const TouchableOpacity = styled.TouchableOpacity`
  margin: -5px auto 0 auto;
`
const Text = styled.Text`
  font-family:${ bold.fontFamily };
  font-size:13px;
  color:#fff;


`

export default  withNavigation(NavLink)