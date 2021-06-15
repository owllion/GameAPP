import React from 'react'
import { Platform,StatusBar,Dimensions,ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { useFonts } from 'expo-font';

import Card from '../components/Card'

const Home = () => {
    return (
        <View>
       <Card/>
      </View>
    )
}

const View = styled.View`
  padding:20px;
  padding-top:${Platform.OS ==='android'? StatusBar.currentHeight : 0}px;
  flex:1;
  background-color:#EFE7DA
`

export default Home