import React from 'react'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'


const NavButton = (props:{onPress:()=>void})=> {
    return (
         <TouchableOpacity onPress={props.onPress}>
          <View>
            <Icon        
                name='shopping-cart'
                type='material-icons'
                color='#fff'
                size={25}                  
            />
          </View>
        </TouchableOpacity>
    )
}

const TouchableOpacity = styled.TouchableOpacity`
`
const View = styled.View`
  border-radius:50px;
  background-color:#8C271E;
  border:solid 10px #fff;
  width:80px;
  height:80px;
  bottom:30px;
  justify-content:center;
  align-items:center
`

export default NavButton
