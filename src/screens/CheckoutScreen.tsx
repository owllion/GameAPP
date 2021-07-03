import React,{useState,useEffect} from 'react'
import COLORS from "../assets/color/colors";
import styled from 'styled-components/native'
import BackBtn from '../components/BackBtn';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
import { useSelector,useDispatch } from 'react-redux';
import { applyCode } from '../store/actions/ApplyCodeAction'
import ErrorMsg from '../components/forms/ErrorMsg'
import { authActions } from '../store/slice/Auth';
import { orderActions } from '../store/slice/OrderSlice';
import { Icon } from 'react-native-elements'
import PayBtn from '../components/PayBtn'


//  Stripe.setOptionsAsync({
//    publishableKey: 'pk_test_51J81cSCui39c5krd6UGvXeLfCWrZDEZ0yUf98p0Wg5CT8kYfGoXSnov4SVfgfQwYUObW9b7loSOvfps6tgYAjyD50028JLqwsr',
//    androidPayMode: 'test', 
//  });

interface Card {
    last4:string,
    brand:string
}

const CheckoutScreen = ({route,navigation}: {route:any,navigation:any})=> { 
  
    const dispatch = useDispatch()
    const errorMsg = useSelector(state=> state.auth.errorMsg)
    const isVisible = errorMsg ? 'show':null
    
    const discount = useSelector(state=>state.order.discount)
    const final = useSelector(state=>state.order.finalPrice)
    const cartList = useSelector(state=>state.auth.cartList)
     const city = useSelector(state=>state.auth.county)
    console.log(city)
    const district = useSelector(state=>state.auth.district)
    const road = useSelector(state=>state.auth.road)
    
    const Address = () => {
      if(!city) {
        return 'No address'
      }else if(newCity) {
        return `${newCity}${newDistrict}${newRoad}`
      }else {
        return `${city}${district}${road}`
      }
    }
   
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
    const [code,setCode] = useState<string>('')
    
    const { total,newCity,newDistrict,newRoad } = route.params

    const freeShipping = total>=500 ? true:false
    const shipping = freeShipping ? 0 : 10
    const finalTotal = total + shipping
    const finalPrice = final ? final : finalTotal 
    const short = 500-total
    
    useEffect(()=>{
      dispatch(authActions.setErrorClear())
      dispatch(orderActions.clearDisAndPrice())
    },[])

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
              <DetailText>{card.brand}************{card.last4}</DetailText>        
            }
            </OrderDetailBox>
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
            <OrderDetailBox >
              <CodeInputBox>
                <CodeInput
                 value={code}
                 onChangeText={(c:string)=>setCode(c)}
                 placeholderTextColor={COLORS.light}  
                 placeholder='Promo Code' />
                <Icon 
                containerStyle={{
                  position:'absolute',
                  bottom:12,
                  right:110,
                  zIndex:1

                }} 
                  onPress={()=> {
                    setCode('')
                    dispatch(orderActions.clearDisAndPrice())
                    dispatch(authActions.setErrorClear())
                  }}
                  name='close' 
                  color={COLORS.white}
                  size={30} 
                  type='evilicon' />
                <ApplyCodeBtn
                  disabled={discount?true:false} 
                  android_ripple={{
                      color:COLORS.light
                  }}
                  onPress={()=>dispatch(applyCode({code,totalPrice:finalTotal}))
                }
                >
                  <DetailText noPt>
                    Apply
                  </DetailText>
                </ApplyCodeBtn>
                </CodeInputBox>
                <ErrorBox>
                <ErrorMsg  visible={isVisible} error={errorMsg}/> 
               </ErrorBox>
            </OrderDetailBox>
             <OrderDetailBox >
                {!!discount &&
                <PriceBox>
                <Text>Discount:</Text>
                 <Text highlight>-${discount}</Text>
              </PriceBox>
              } 
               <PriceBox>
              <Text >Total:</Text>
              <Text highlight>${finalPrice}</Text>
              </PriceBox>
            </OrderDetailBox>

            <PayBtn
              finalPrice={finalPrice}
              code={code}
              discount={discount}
              cartList={cartList}
              newCity={newCity}
              newDistrict= {newDistrict}
              newRoad ={newRoad}
              Address={Address}
             />      
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
  height:50px;
  padding-left:20px;
  color:${COLORS.white};
  font-family:IBMPlexSansRegular;

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
const TextBox = styled.View`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const PriceBox = styled.View`
 flex-direction:row;
 justify-content:space-between
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
const CodeInputBox = styled.View`
 flex-direction:row;
`
const ErrorBox = styled.View`
  margin-top:1px;
`
export default CheckoutScreen
