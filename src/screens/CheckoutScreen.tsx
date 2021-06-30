import React,{useState} from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';

const CheckoutScreen = ({navigation,route}: {navigation:any,route:any})=> {
    const [address,setAddress] = useState<string>('Emilli Plater 21/69 01-567 Warsaw')
    const {total} = route.params
    console.log(total)
    console.log(total>=500)
    const freeShipping = total>=500 ? true:false
    const short = 500-total
    return (
        <Container>
            <BtnBox>
         <BackBtn/>
            </BtnBox>
            <TextBox>
       <Text title margin >Checkout</Text> 
            </TextBox>
        <ScrollView>
            <OrderDetailBox>
              <Text>Payment Method</Text>
              <DetailText>Paypal</DetailText>
            </OrderDetailBox>
            <OrderDetailBox>
              <Text>Address</Text>
              <DetailText>{address}</DetailText>
              <DetailTextBox 
                android_ripple={{
                    color:COLORS.light,
                    borderless:true
                }}
              >
              <DetailText highlight>Change</DetailText>   
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
            <OrderDetailBox row>
                <CodeInput
                 placeholderTextColor={COLORS.light}  
                placeholder='Promo Code' />
                <ApplyCodeBtn
                  android_ripple={{
                      color:COLORS.light
                  }}
                >
                  <DetailText noPt>
                    Apply
                  </DetailText>
                </ApplyCodeBtn>
            </OrderDetailBox>
            </ScrollView>
       </Container>
    )
}
const ScrollView =styled.ScrollView``
const Container = styled.View`
  flex:1;
  padding:10px;
  padding-top:40px;  
  background-color:${COLORS.primary}
`
const CodeInput = styled.TextInput`
  background-color:${COLORS.darkGrey};
  border-radius:10px;
  margin-right:10px;
  width:70%;
  padding-left:20px;
  color:${COLORS.white};
  font-family:IBMPlexSansRegular
`
const ApplyCodeBtn = styled.Pressable`
  background-color:${COLORS.orange};
  padding:10px;
  justify-content:center;
  align-items:center;
  border-radius:5px;
  width:28%
`
const BtnBox = styled.View`
  padding-left:10px;
`
const TextBox = styled.Text`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:${({regular}:{regular:boolean})=>regular? 'IBMPlexSansRegular':'IBMPlexSansBold'};
  color:${COLORS.white}
`

const OrderDetailBox = styled.View`
  padding:15px;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.grey};
  border-style:solid;
  flex-direction:${({row}:{row:boolean})=> row?'row':'column'}
`
const DetailTextBox = styled.Pressable`
  align-items:flex-end
`
const DetailText = styled.Text`
font-size:12px;
padding-top:10px;
color:${({highlight}:{highlight:boolean})=> highlight? COLORS.orange:COLORS.light}
font-family:IBMPlexSansRegular;
padding-top:${({noPt}:{noPt:boolean})=>noPt?'0px':'10px'}
`
export default CheckoutScreen
