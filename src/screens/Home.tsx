import React from 'react'
import { Platform,StatusBar,Dimensions,ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { useFonts } from 'expo-font';
import ActivityIndicator from '../components/ActivityIndicator';

import Card from '../components/Card'
import {useNetInfo} from '@react-native-community/netinfo';


const Home = ({navigation}:any) => {
  const handler = async()=> {
   const netInfo = useNetInfo()
   return !netInfo.isInternetReachable ? alert('沒網路') :alert('有網路!')
  
  }
  handler()
  
    return (
        <View>
          <ActivityIndicator visible={true} />
           <Card/> 
        <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
         <Text>
            Click
         </Text>
       </TouchableOpacity> 
      </View>
    )
}


const View = styled.View`
  padding:20px;
  padding-top:${Platform.OS ==='android'? StatusBar.currentHeight : 0}px;
  flex:1;
  background-color:#EFE7DA
`
const TouchableOpacity = styled.TouchableOpacity`
  padding:10px;
  border:1px solid white
`
const Text = styled.Text`
  font-size:10px
`
export default Home