import React from 'react'
import styled from 'styled-components/native'
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/core';
const  BackBtn = ({routeName}:{routeName:string|null}) => {
    const navigation = useNavigation() 
    return (
       <View>
              <Icon
                 name='chevron-left'
                 type='Entypo'
                 size={25}
                 onPress={()=> {
                    routeName? navigation.navigate(routeName):navigation.goBack()
                 }}
              />
       </View>
    )
}
const View = styled.View`
  height:50px;
  width:50px;
  background-color:rgba(255,255,255,.5);
  border-radius:10px;
  justify-content:center;
  align-items:center
`

export default BackBtn
