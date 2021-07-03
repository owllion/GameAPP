import React from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import Container from '../components/Container'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core';
const SuccessScreen = ()=> {
  const navigation = useNavigation()
    return (
      <ImageBackground   resizeMode='contain' 
            source={require('../assets/images/success.png')} >
     
      <Container>
        <Title>Thank you for being our valued customer!</Title>
        <BackToOrderBtn
          android_ripple={{color:COLORS.light}}
          onPress={()=>navigation.navigate('Order',{routeName:'Success'})}
         >
          <Text>Order List</Text>
          <Icon
            name='chevron-right'
            type='Entypo'
            color={COLORS.white}
            size={26}
           
           />
        </BackToOrderBtn>
      </Container>  
       </ImageBackground>
    )
}
const BackToOrderBtn = styled.Pressable`
  background-color:${COLORS.orange};
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:85%;
  border-radius:10px;
  height:60px;
  position:absolute;
  top:250px;
  left:30px;
` 
const Title = styled.Text`
  font-size:25px;
  padding:40px;
  font-family:IBMPlexSansBold;
  color:${COLORS.primary}
`
const Text = styled.Text`
 font-size:14px;
 color:${COLORS.white};
 font-family:IBMPlexSansRegular;
 padding-bottom:4px;
`
const ImageBackground =styled.ImageBackground`
 width:100%;
 height:125%

`

export default SuccessScreen
