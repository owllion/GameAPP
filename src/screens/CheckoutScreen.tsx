import React from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';
import ActivityIndicator from '../components/ActivityIndicator';
import CheckoutContent from '../components/CheckoutContent';


const CheckoutScreen = ({route}:any)=> { 
 
   const { total,newCity,newDistrict,newRoad } = route.params
    return (
      <>
      <ActivityIndicator/>
        <Container>     
            <BtnBox>
               <BackBtn routeName={null} />
            </BtnBox>
            <TextBox>
               <Text title>Checkout</Text> 
            </TextBox>
        <CheckoutContent
            newCity={newCity}
            newDistrict={newDistrict}
            newRoad={newRoad}
            total={total}
          />
       </Container>
       </>
    )
}
const Container = styled.View`
  flex:1;
  padding:10px;
  padding-top:40px;  
  background-color:${COLORS.primary}
`
const BtnBox = styled.View`
  padding-left:10px;
`
const TextBox = styled.View`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:${({regular}:{regular:boolean})=>regular? 'IBMPlexSansRegular':'IBMPlexSansBold'};
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white}
`

export default CheckoutScreen
