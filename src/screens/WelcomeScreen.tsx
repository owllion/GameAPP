import React from 'react'
import { Platform,StatusBar,Dimensions,ImageBackground ,Image} from 'react-native'
import styled from 'styled-components/native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

const image = { uri: "https://images.unsplash.com/photo-1522262590532-a991489a0253?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" };

const WelcomeScreen = () => {
  
   
    const {landscape}= useDeviceOrientation()
    
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
     
        <Text title='title'>
           Share anything!
        </Text>
        <Text >
           Maybe your cat or something!
        </Text>
      <ButtonContainer>
        <Button bg='brown'>
           <Text >SIGN IN</Text>
        </Button>
        <Button bg='orange'>
           <Text >SIGN UP</Text>
        </Button>
       </ButtonContainer>
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
   background-color:rgba(0,0,0,.2) , rgba(0,0,0,.2) )  
`
const ButtonContainer = styled.View`
 position:absolute;
 bottom:20px;
 width:90%;
`
const Text = styled.Text`
   color:white;
   font-weight:${(props:{title:boolean})=> props.title ? 900 :100};
   font-size:${(props:{title:boolean})=> props.title ? '28px' :'16px'};;
`
const Button = styled.TouchableOpacity`
  text-align:center;
  padding:10px;
  font-size:40px;
  color:white;
  border-radius:50px;
  border:solid 1px #fff;
  width:90%;
  margin-bottom:10px;
  
  background-color:rgba(0,0,0,.2) , rgba(0,0,0,.2) ) 
  
`
export default WelcomeScreen