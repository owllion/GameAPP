import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
const Detail = () => {
     useFonts({
      MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
      
    });
    return (
        <View>
           <Image source={{
               width:200,
               height:300,
               uri:'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
           }} />
           <ContentBox>
               <Text title>Title</Text>
               <Text >POST</Text>
                       
           </ContentBox>
        </View>
    )
}

const View = styled.View`
  flex:1;
`
const Image = styled.Image`
  width:100%
`
const ContentBox = styled.View`
  padding:20px
`

const Text  = styled.Text`
  font-family:MarcellusRegular;
  font-weight:${(props:{title:boolean})=>  props.title ? 900 :100};
   font-size:${(props:{title:boolean})=> props.title ? '40px' :'20px'};;

`
export default Detail