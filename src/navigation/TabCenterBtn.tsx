import React from 'react'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'
import COLORS from "../assets/color/colors";

const TabCenterBtn = (props:{onPress:()=>void})=> {
    return (
         <Pressable
         android_ripple={{color:COLORS.light, borderless:true}} 
         onPress={props.onPress}>
          <View>
            <Icon        
                name='shopping-cart'
                type='material-icons'
                color={COLORS.white}
                size={30}                  
            />
          </View>
        </Pressable>
    )
}

const Pressable = styled.Pressable`
`
const View = styled.View`
  border-radius:50px;
  background-color:${COLORS.orange};
  width:70px;
  height:70px;
  bottom:30px;
  justify-content:center;
  align-items:center
`
export default TabCenterBtn
