import React from 'react'
import styled from 'styled-components/native'
import Constants from 'expo-constants'

interface Props {
    children:React.ReactNode
}

const  Container = ({children}:Props) => {
    return  <View>{children}</View>    
}

const View = styled.SafeAreaView`
 padding-top:${Constants.statusBarHeight}px;
 flex:1;

`

export default Container