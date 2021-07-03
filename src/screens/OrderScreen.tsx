import React,{useEffect,useState} from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import BackBtn from '../components/BackBtn';
import userApi from '../api/user'
import { ListItem, Icon  } from 'react-native-elements'
import Container from '../components/Container';
import {useSelector} from 'react-redux'
const OrderScreen = ({navigation,route}:any) =>{
  const {routeName} = route.params
  const routepNameProps = routeName==='Success'?'Game':null 
    const [orderList,setOrderList] = useState([])
    const token = useSelector(state=>state.auth.token)
    const getOrderListHandler = async() => {
        try {
           const {data:{orderList}} = await userApi.getOrderList(token)  
           setOrderList(orderList)
        }catch(e) {
            if(e.response) {
                alert(e.response.data.msg)
            }
        }
        
    }
  useEffect(()=>{
     getOrderListHandler()
  },[])

  //get each order's first img of order item
  const orderItem = orderList.map(i=> i.order_item)
  const result = orderItem.map(i=> i.map(o=> o.image))
  let imageArr = []
  result.forEach(i=> {
    const l = i.length - 1
    imageArr.push(i[l][0])
  })

    return (
        <Container>
            <BackBtn routeName={routepNameProps} />
            <Title>Order</Title> 
    <ScrollView>     
    { orderList?  
      orderList.map((item, i) => (
      <DetailBox 
      onPress={()=>navigation.navigate('OrderDetail',{orderId:item.orderId})}
      android_ripple={{color:COLORS.grey}}
      key={i}
      >
          <View> 
              <Text>Order ID:{item.orderId}</Text>
              <Text highlight>{item.order_status}</Text>
          </View>
          <View> 
              <ImageBox>
                <Image source={{uri:imageArr[i]}} />
              </ImageBox>
              <View col>
              <Text>Total <Text highlight>{item.order_item.length}</Text> items</Text>
              <Text>Price:<Text highlight>${item.total_price}</Text></Text>
              </View>
          </View>
         
      </DetailBox>         
    )): <Text>Nothing here...</Text>
    }
    </ScrollView>

     </Container>
    )
}
const ScrollView = styled.ScrollView``
const Title = styled.Text`
 font-family:IBMPlexSansBold;
 font-size:25px;
 margin-left:20px;
`
const Text = styled.Text`
  font-size:10px;
  padding:10px;
  color:${({highlight}:{highlight:boolean})=> highlight ? COLORS.orange: COLORS.dark};
  font-family:IBMPlexSansRegular
`
const DetailBox = styled.Pressable`
  background-color:rgba(225,225,225,.2)
  padding:15px;
  margin-top:10px;
`
const View = styled.View`
  flex-direction:${({col}:{col:boolean})=>col?'column':'row'};
  justify-content:space-between;
  border-bottom-width:1px;
  border-bottom-color:${COLORS.white}
`
const Image = styled.Image`
width:100%;
height:100%;
border-radius:10px;
`
const ImageBox = styled.View`
  width:100px;
  height:100px;
  padding:5px;
`
export default OrderScreen