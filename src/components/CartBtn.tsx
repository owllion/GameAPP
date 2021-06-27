import React from 'react'
import styled from "styled-components/native";
import { Icon,Badge } from "react-native-elements";
import COLORS from "../assets/color/colors";

const CartBtn = ()=> {
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
         value="2" 
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
