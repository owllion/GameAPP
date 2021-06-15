import React from 'react'
import { Platform,StatusBar,Dimensions,ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const image = { uri: "https://images.unsplash.com/photo-1522262590532-a991489a0253?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" };

const Home = () => {
    
    console.log(useDimensions())
    console.log(useDeviceOrientation())
    const {landscape}= useDeviceOrientation()
    const InnerView = styled.View`
      background:red;
      width:100%;
      height: ${landscape? '100%':'30%' }
`
    return ( 
   <ImageBackground 
       source={image} 
       style={{
       background:'rgba(0,0,0,.8) 100%, rgba(0,0,0,.2) )',
       height:'100%',
       width:'100%',
       resizeMode:'cover'

       }}>    
    <View>
        <Text title>
           Share anything!
        </Text>
        <Text >
           Maybe your mood or pet!
        </Text>
        </View>
        </ImageBackground>   
    )
}

const View = styled.SafeAreaView`
   padding-top:${Platform.OS ==='android'? StatusBar.currentHeight : 0}px;
   flex:1;
   justify-content:center;
   align-items:flex-start;
   padding-left:30px;
   backgroundColor:rgba(0,0,0,.3) , rgba(0,0,0,.2) )
   
`


const Text = styled.Text`
   color:white;
  font-family:Courier;
   font-weight:${props=> props.title ? 900 :100};
   font-size:${props=> props.title ? '28px' :'16px'};;
`
const Button = styled.TouchableOpacity`
  text-align:center;
  padding:10px;
  font-size:40px;
  color:white;
  background:black;
  letter-spacing:5px;
`
export default Home