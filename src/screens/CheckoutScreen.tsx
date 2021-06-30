import React,{useState} from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal'

// Stripe.setOptionsAsync({
//   publishableKey: 'pk_test_51J81cSCui39c5krd6UGvXeLfCWrZDEZ0yUf98p0Wg5CT8kYfGoXSnov4SVfgfQwYUObW9b7loSOvfps6tgYAjyD50028JLqwsr',
//   androidPayMode: 'test', 
// });

interface Card {
    last4:string,
    brand:string
}

const CheckoutScreen = ({route,navigation}: {route:any,navigation:any})=> {   
    const city = useSelector(state=>state.auth.county)
    const district = useSelector(state=>state.auth.district)
    const  road = useSelector(state=>state.auth.road)
    const address= !city?'No address':`${city}${district}${road}`


    const callCard = async() => {
        const params = {
        number: '4242424242424242',
        expMonth: 11,
        expYear: 17,
        cvc: '223',
        };
   try {
        const token = await Stripe.paymentRequestWithCardFormAsync(params)
        setCard({last4:token.card.last4, brand:token.card.brand})
        console.log(token)
   }catch(e) {
       console.log(e)
   }
       
}   
    const [card,setCard] = useState<Card>({last4:'',brand:''})
    // const [visible, setVisible] = useState<boolean>(false);
    const { total } = route.params
    
    const freeShipping = total>=500 ? true:false
    const shipping = freeShipping ? 0 : 10
    const finalTotal =total + shipping 
    const short = 500-total

    

    // const setAddressHandler = (address:string) => {
    //     setAddress(address)
    // }

    return (
        <Container>
            {/* <Modal visible={visible} 
            setAddressHandler={setAddressHandler}
            closeHandler={()=>setVisible(false)} /> */}
            <BtnBox>
         <BackBtn/>
            </BtnBox>
            <TextBox>
       <Text title margin >Checkout</Text> 
            </TextBox>
        <ScrollView>
            <OrderDetailBox>
              <Text>Payment Method</Text>
              <DetailText>Credit Card</DetailText>
              {!card.last4 ? <DetailTextBox 
                android_ripple={{
                    color:COLORS.light,
                    borderless:true
                }}
              >
              <DetailText
              onPress={()=>callCard()} 
              highlight
              >
                  + Add a card
              </DetailText>  
              </DetailTextBox>:
              <>
              <DetailText>{card.brand}************{card.last4}</DetailText>
              
              </>
            }
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
             <OrderDetailBox row between>
              <Text >Total:</Text>
              <Text highlight>${finalTotal}</Text>
              
            </OrderDetailBox>

            <PayBtn android_ripple={{color:COLORS.orange}} onPress={()=>callCard()}>
             <Text>Pay</Text>
            </PayBtn>
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
const PayBtn = styled.Pressable`
  padding:10px
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
  color:${({highlight}:{highlight:boolean})=> highlight?COLORS.orange:COLORS.white}
`

const OrderDetailBox = styled.View`
  padding:15px;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.grey};
  border-style:solid;
  flex-direction:${({row}:{row:boolean})=> row?'row':'column'};
  ${({between}:{between:boolean})=>between?'justify-content:space-between':null}
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
