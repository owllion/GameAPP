import React,{ useEffect } from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import BackBtn from '../components/BackBtn';
import { getOrderDetail } from '../store/actions/OrderDetailAction'
import {useDispatch,useSelector} from 'react-redux'
import {  Icon } from 'react-native-elements'
import DayJS from 'react-dayjs';

const OrderDetailScreen = ({route}:any) => {
    const { orderId } = route.params
    const dispatch = useDispatch()
     const detail = useSelector(state=>state.order.detail)
    
    const orderItem = detail.order_item
   const date = detail.createdAt
    useEffect(()=> {
       dispatch(getOrderDetail({orderId}))
    },[])
    
    return (
        <Container>
          <UpperBlock>
           <BtnBox>
         <BackBtn/>
            </BtnBox>
               
           <TextBox>
         <Text title margin bold highlight>Detail</Text> 
            </TextBox>
          </UpperBlock> 
         <ScrollView>  
          <InnerContainer>        
        <TextBox>
            <View>
                <Icon 
                style={{marginRight:6}}
                name='game-controller' type='ionicon'
                size={14} />
           <Text bold>Items</Text> 
           </View>
        
            </TextBox>
       
        {
        orderItem.map((item,index)=> (
            <ItemWrapper key={index}>
           <ItemBox>
             <ImageBox>
            <Image source={{uri:item.image[0]}} />
            </ImageBox>

            <RightItemBox>        
               <Text>{item.productName}</Text>           
               <Text>x{item.qty}</Text>
             <Text highlight>${item.qty*item.price}
             </Text>
            </RightItemBox>
           </ItemBox>
         </ItemWrapper>
        )) 
        }
       <PriceWrapper>
         { detail.discount&& 
         <DetailBox>
         <Text>Discount</Text>
         <Text>-${detail.discount}</Text>
         </DetailBox>
         }
         <DetailBox>
         <Text >Total</Text>
         <Text highlight bold>${detail.total_price}</Text>
         </DetailBox>
        </PriceWrapper> 

        <PaymentBox>
            <View>
                <Icon 
                style={{marginRight:10}}
                name='security' type='material-icons'
                size={14} />
          <Text bold>Payment Method</Text>
           </View>
          <Text>Credit Card</Text>
        </PaymentBox>
        <AddressBox>
            <AddressTitle>
                <Icon 
                style={{marginRight:10}}
                name='location' type='ionicon'
                size={14} />
          <Text bold>Delivery Address</Text>
           </AddressTitle>
          <Text>{detail.delivery_address}</Text>
        </AddressBox>
         <OrderDetailWrapper>
              <OrderDetailTitle>
                <Icon 
                style={{marginRight:10}}
                name='clipboard-pencil' type='foundation'
                size={14} />
          <Text bold>Order Detail</Text>
           </OrderDetailTitle>
            <DetailBox>
                <Text>Order ID</Text> 
                <Text>{detail.orderId}</Text> 
            </DetailBox>
            <DetailBox>
                <Text>Order Time</Text> 
               
                <DayJS format="YYYY-MM-DD hh:mm A" element={Text}>{ date }</DayJS>
            </DetailBox>
             <DetailBox>
                <Text>Order Status</Text> 
                <Text highlight>{detail.order_status}</Text> 
            </DetailBox>
         </OrderDetailWrapper>
      </InnerContainer>
       </ScrollView>
     </Container>
    )
}
const Container = styled.View`
 flex:1;
`
const View = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center
`
const OrderDetailTitle = styled.View`
  justify-content:center;
  flex-direction:row;
  margin-bottom:15px;
  align-items:center
`
const BtnBox = styled.View`
 padding-left:10px;
`
const TextBox = styled.Text`
  padding-left:15px;
  margin-top:20px;
  margin-bottom:20px;
`
const ScrollView = styled.ScrollView``
const UpperBlock = styled.View`
  background-color:${COLORS.primary};
  padding-top:40px;
  padding-left:20px;
`
const InnerContainer = styled.View`
 padding-left:10px;

`
const Text = styled.Text`
 font-size:${({title}:{title:boolean})=> title?'25px' :'11px'};
 color:${({highlight}:{highlight:boolean})=> highlight? COLORS.orange : COLORS.dark};
  font-family:${({bold}:{bold:boolean})=>bold? 'IBMPlexSansBold':'IBMPlexSansRegular'};`
const ItemWrapper = styled.View`
 padding:10px;  
`
const ItemBox = styled.View`
 flex-direction:row;
 padding-bottom:8px;
 width:80%;
 border-bottom-width:1px;
 border-bottom-color:${COLORS.light};
 border-style:solid
`
const Image = styled.Image`
 width:100%;
 height:100%;
 border-radius:10px;
`
const ImageBox = styled.View`
 width:80px;
 height:80px
`
const RightItemBox = styled.View`
  padding:10px;
  width:95%;
`
const DetailBox = styled.View`
 flex-direction:row;
 justify-content:space-between;
 margin-bottom:10px;
`
const PriceWrapper = styled.View`
  padding:10px 28px 5px 15px;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.light}
`
const PaymentBox = styled.View`
  flex-direction:row;
  margin-top:20px;
  justify-content:space-between;
  padding:10px 28px 5px 15px;
  border-bottom-width:1px;
  padding-bottom:15px;
  border-bottom-color:${COLORS.light}
`
const AddressBox = styled.View`
  padding:10px 28px 5px 15px;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.light};
  padding-bottom:15px;
`
const AddressTitle = styled.View`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:8px;

`
const OrderDetailWrapper = styled.View`
  padding:10px 28px 5px 15px;
`

export default OrderDetailScreen
