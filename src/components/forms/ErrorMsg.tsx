import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const ErrorMsg = ({error,visible}:{error:string, visible:string}) => {
    //如果沒有傳錯誤訊息和visible(touched[欄位名稱])就不回傳
    if(!error || !visible) return null 

     const [isLoaded] =  useFonts({
      IBMPlexSansBold: require('../../assets/fonts/IBMPlexSans-Bold.ttf'),    
    })
    if (!isLoaded) {
        return <AppLoading/>
       } 

    return (
        <View>
          <Text>{error}</Text>   
        </View>
    )
    
}

const Text = styled.Text`
   color:red;
   font-family:IBMPlexSansBold;
`
const View = styled.View`
  margin-top:-25px;
  margin-bottom:10px;
  padding-left:10px;
`
export default ErrorMsg
