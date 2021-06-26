import React from 'react'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'
import COLORS from "../assets/color/colors";

const NavButton = (props:{onPress:()=>void})=> {
    return (
         <Pressable onPress={props.onPress}>
          <View>
            <Icon        
                name='shopping-cart'
                type='material-icons'
                color='#fff'
                size={25}                  
            />
          </View>
        </Pressable>
    )
}

const Pressable = styled.Pressable`
`
const View = styled.View`
  border-radius:50px;
  background-color:${COLORS.primary};
  border:solid 10px #fff;
  width:80px;
  height:80px;
  bottom:30px;
  justify-content:center;
  align-items:center
`

export default NavButton
