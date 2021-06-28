import React from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import { Icon } from 'react-native-elements'

interface Props {
    text:string,
    handle:()=>void
}

const ConfigItem = ({text,handle}:Props) => {
    return (
        <Config 
          android_ripple={{
             color:COLORS.orange,     
           }} 
           onPress={handle}
        >
             <ConfigText>{text}</ConfigText>
             <Icon
             name='chevron-right'
             type='Entypo'
             color={COLORS.orange}
             size={30}
             containerStyle={{
               alignSelf:'center',marginRight:10
             }}
           />
        </Config>           
    )
}

const Config = styled.Pressable`
 border-top-left-radius:10px;
 border-bottom-left-radius:10px;
 padding:10px;
 border-style: solid; 
 border-bottom-color: ${COLORS.orange}; 
 border-bottom-width: 1px;
 justify-content:space-between;
 align-items:center;
 flex-direction:row;
 margin-bottom:20px;
` 
const ConfigText = styled.Text`
  font-size:14px;
  font-family:IBMPlexSansRegular;
  color:${COLORS.white}
` 
export default ConfigItem
