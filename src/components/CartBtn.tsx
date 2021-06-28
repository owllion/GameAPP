import React from 'react'
import styled from "styled-components/native";
import { Icon,Badge } from "react-native-elements";
import COLORS from "../assets/color/colors";
import {useSelector} from 'react-redux'
const CartBtn = ()=> {
  const cartList = useSelector(state=> state.auth.cartList)
  console.log(cartList.length)
    return (
        <View>
        <Icon
          name="add-shopping-cart"
          type="material-icons-outlined"
          color={COLORS.dark}
          size={28}
          onPress={() => console.log("hello")}
        />
        <Badge 
         value={cartList.length?cartList.length:0}
         status="error" 
         badgeStyle={{
           backgroundColor:COLORS.orange
         }}
         containerStyle={{ position: 'absolute', top: -9, right: -6 }} />
        </View>
    )
}

const View = styled.View``
export default CartBtn
