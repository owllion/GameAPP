import React from 'react'
import styled from 'styled-components/native'
import { useNetInfo } from '@react-native-community/netinfo'
import Constants from 'expo-constants'


const OfflineNotice = () => {
    const netInfo = useNetInfo()

    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
           <View>
               <Text>No Internet Connection</Text>
           </View>
        )
    }
    return null
}

const View = styled.View`
  background-color:red;
  height:50px;
  position:absolute;
  top:Constants.statusBarHeight;
  width:100%;
  z-index:1;
  align-items:center;
  justify-content:center
`
const Text = styled.Text`
  color:#fff;
`
export default OfflineNotice