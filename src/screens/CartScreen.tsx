import React,{ useState } from 'react'
import styled from 'styled-components/native'
import Container from '../components/Container'
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import BackBtn from '../components/BackBtn';
import { ListItem,Button,Avatar,CheckBox,Icon  } from 'react-native-elements'
import COLORS from "../assets/color/colors";
import QtyBtn from '../components/QtyBtn';
import {useSelector} from 'react-redux'

const CartScreen = () => {
   const cartList = useSelector(state=> state.auth.cartList)
  console.log('cartscreen!')
  console.log(cartList)
     const [isChecked, setIsChecked] = useState<boolean>(false)
     const [isLoaded] =  useFonts({
      MarcellusRegular: require("../assets/fonts/Marcellus-Regular.ttf"),    
    });
    if (!isLoaded) {
        return <AppLoading />
       }
    return (     
       <Container>
         <BackBtn/>
         <View>
        <Text title margin>Cart</Text>    
     {/* main content */}    
           <FlatList
             showsVerticalScrollIndicator={false}
             ketExtractor={i=>i.productId}
             data={cartList}
             renderItem={({item})=> (
                <ListItem.Swipeable
      containerStyle={{
          paddingVertical:10,
          backgroundColor:COLORS.light,
          borderTopLeftRadius:15,
          borderBottomLeftRadius:15,
          marginBottom:15,
          height:100,
          borderBottomWidth:0
      }}     
       onPress={()=>{}}
       underlayColor={COLORS.tranparent}
       key={item.productId} 
       bottomDivider
       leftContent={
            <Button          
            onPress={()=> console.log('hoe')}
            icon={
              <Icon
                type='fontisto'
                name="trash"
                size={35}
                color={COLORS.white}
              />
          }
            buttonStyle={{ 
              height: 100, 
              backgroundColor: COLORS.orange,
              borderTopLeftRadius:15,
              borderBottomLeftRadius:15,   
            }}
            />
         }
         rightContent={
           <NumContainer>
             <QtyBtn/>
            </NumContainer>
         }
     >
       <CheckBox
       size={36}
       checkedIcon={
         <Icon
           type='ionicon'
           name='checkmark'
           color={COLORS.orange}
         />
       } 
           containerStyle={{paddingHorizontal:-50}}
            checked={isChecked}
            onPress={()=>setIsChecked(!isChecked)}
            checkedColor={COLORS.orange}
    /> 
        <Avatar 
         avatarStyle={{
           borderRadius:8,
         }}    
         size={50}
         source={{uri:item.image[0]}} />
        <ListItem.Content style={{margin:-10}}>
          <ListItem.Title 
          numberOfLines={1}
            style={{
              fontFamily:'IBMPlexSansBold',
              fontSize:10
                }}>
             {item.productName}
          </ListItem.Title>
        </ListItem.Content>
       <Text>x12</Text>
      <Text>${item.price}</Text>
       
      </ListItem.Swipeable> 
             )}
           />
     {/* main content */}
        </View>
       </Container>     
    )
}
const FlatList = styled.FlatList``
const Wrapper = styled.View`
  background-color:${COLORS.primary};
  padding-left:20px;
  padding-top:20px;
  flex:1
`
const View = styled.View`
  padding:25px 0 0 25px;

`
const ScrollView = styled.ScrollView``
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:IBMPlexSansBold;
  margin-bottom:${({margin}:{margin:boolean})=> margin? '30px':0}
`
const NumContainer = styled.View`
 justify-content:center;
 align-items:center;
 height:100px;
 background-color:${COLORS.primary}
`
const QuantityBox = styled.View`
  height:35px;
  width:100px;
  background-color:${COLORS.primary};
  border-radius:7px;
  align-items:center;
  margin-top:10px;
  justify-content:space-between;
  flex-direction:row;
`
const QuantityBtn = styled.View`
  height:25px;
  width:25px;
  background-color:${COLORS.white};
  margin:0 5px;
  justify-content:center;
  align-items:center;
  border-radius:5px
`
export default CartScreen
