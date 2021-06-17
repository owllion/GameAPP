import React from 'react'
import styled from 'styled-components/native'
import { regular } from '../assets/style/style'


const PickerItem = (
  { label, selectHandler }:
  { label:string,
    selectHandler:( item:string ) =>void
  }) => {
    return (
        <TouchableOpacity
          onPress={ selectHandler} 
        >
          <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const Text = styled.Text`
  font-family:${regular.fontFamily}
`

const TouchableOpacity = styled.TouchableOpacity`
 padding:30px;
 margin-top:60px;
 background-color:orange
`
export default PickerItem
