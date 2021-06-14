import React from 'react'
import {TouchableOpacity,Text } from 'react-native';
import t from 'tailwind-rn'
import { withNavigation } from 'react-navigation'

interface Props {
    text:string;
    navigation:any;
    routeName:string
}


const NavLink = (props:Props) => {
    return (
        <TouchableOpacity style={t('text-center')} onPress={()=> props.navigation.navigate(props.routeName)}>
          <Text style={t('text-yellow-400  text-sm font-bold mt-1 pl-4')} >{props.text}</Text>
        </TouchableOpacity>
     
    )
}
export default  withNavigation(NavLink)