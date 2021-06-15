import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';


const Button = (props:{text:string,children:React.ReactNode,color:string}) => {
    useFonts({
    MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
  });
    return (
        <MyButton color={props.color}>
          <Text>
              {props.text}
          </Text>
        </MyButton>
    )
}

const Text = styled.Text`
   font-family:MarcellusRegular;
   font-size:18px;
   color:white;
   font-weight:900;
   text-align:center;
`

const MyButton = styled.TouchableOpacity`
  background-color:rgba(0,0,0.5) rgba(0,0,0,.5);
  padding:15px;
  letter-spacing:2px;
  font-size:40px;
  color:white;
  border-radius:50px;
  margin-bottom:10px; 
 
`
export default Button