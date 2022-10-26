import React from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

interface Props {
    total:number,
    freeShipping:boolean,
    short:number,
    Address:()=>void
}
const CheckoutAddress_Ship = (props:Props)=> {

     const { freeShipping,short,Address } = props

     const navigation = useNavigation()

    return (
        <>
            <OrderDetailBox>
              <Text>Address</Text>
              <DetailText>{Address()}</DetailText>
              <DetailTextBox 
                android_ripple={{
                    color:COLORS.light,
                    borderless:true
                }}
              >
              <DetailText 
              highlight 
              onPress={()=>navigation.navigate('NewAddress')}>Change</DetailText>   
            </DetailTextBox>          
            </OrderDetailBox>
            <OrderDetailBox>
              <Text>Shipping</Text>
              {!freeShipping?
              <>
               <DetailText>$10</DetailText>
                <DetailText highlight>Need ${short} to get free delivery</DetailText>
               </>:
                <DetailText>Free Shipping</DetailText>
               }
            </OrderDetailBox>
        </>
    )
}

const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:${({regular}:{regular:boolean})=>regular? 'IBMPlexSansRegular':'IBMPlexSansBold'};
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white}
`
const DetailText = styled.Text`
font-size:12px;
padding-top:10px;
color:${({highlight}:{highlight:boolean})=> highlight? COLORS.orange:COLORS.light}
font-family:IBMPlexSansRegular;
padding-top:${({noPt}:{noPt:boolean})=>noPt?'0px':'10px'}
`
const DetailTextBox = styled.Pressable`
  align-items:flex-end
`
const OrderDetailBox = styled.View`
  padding:15px;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.grey};
  border-style:solid;
  flex-direction:${({row}:{row:boolean})=> row?'row':'column'};
  ${({between}:{between:boolean})=>between?'justify-content:space-between':null}
`
export default CheckoutAddress_Ship
