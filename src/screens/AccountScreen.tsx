import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/slice/Auth'
import styled from 'styled-components/native'

import Container from '../components/Container'
import COLORS from "../assets/color/colors";
import { Avatar,Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

const user = [{
  name:'Celest',
  email:'bitlittlelie@gmail.com',
  avatar:'https://pyxis.nymag.com/v1/imgs/633/1d6/4d1f62480ba87681ebbfdeacf1cb4eb6a6-28-kidman.rsquare.w700.jpg',
  icon:'',
  targetScreen:''
}]

const config = [
  {
    set:'My Orders',
    icon:'content-paste',
    email:'',
    avatar:'',
    targetScreen:'Message' 
  },
  {
    set:'Log out',
    icon:'logout',
    email:'',
    avatar:'', 
     targetScreen:'Message' 
  }
]
const AccountScreen = () => {
   const [isLoaded] =  useFonts({
      IBMPlexSansRegular: require('../assets/fonts/IBMPlexSans-Regular.ttf'),
      IBMPlexSansBold: require('../assets/fonts/IBMPlexSans-Bold.ttf'),
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }
  return (
   <Wrapper>
      <UserContainer>     
         <Avatar       
         avatarStyle={{
           borderRadius:20
         }}
         size={160}      
         source={{uri:'https://media.gq.com/photos/5f85de476ece7793e0eae8b4/master/w_2000,h_2500,c_limit/timothee-chalamet-gq-november-cover-2020-16.jpg'}}/> 
         <UserData>
          <Text>{user[0].name}</Text> 
          <Text small regular>2021.06.27</Text>                    
         </UserData>
      </UserContainer>

       <ConfigContainer>
        
           <Config android_ripple={{
             color:COLORS.orange,     
           }} onPress={()=> console.log('hello')}>
             <ConfigText>My Orders</ConfigText>
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

            <Config android_ripple={{
             color:COLORS.orange,
            
           }} onPress={()=> console.log('hello')}>
             <ConfigText>Log out</ConfigText>
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
         </ConfigContainer>
         <ImageContainer>
        <Image source={require('../assets/ImgDetail/hand.png')} resizeMode='contain'/>
         </ImageContainer> 
   </Wrapper>
  )
};

const Wrapper = styled.View`
  background-color:${COLORS.primary};
  padding-left:20px;
  padding-top:20px;
  flex:1
`
const ImageContainer = styled.View`
  width:150px;
  height:186px;
  position:absolute;
  bottom:90px;
  left:35px;
  transform:rotate(-30deg)
`
const Image = styled.Image`
width:100%;
height:100%;


`
const UserContainer = styled.View`
  flex-direction:row; 
`
const ConfigContainer = styled.View`
  padding-left:20px;
  margin-top:40px;
  
`
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
const UserData = styled.View`
  padding-top:80px;
  padding-left:20px;`

const Text = styled.Text`
  font-size:${({small}:{small:boolean})=> small ? '10px': '25px'};
  color:${COLORS.orange};
  font-family:${({regular}: {regular:boolean})=> regular ? 'IBMPlexSansRegular':'IBMPlexSansBold'}
`
const ConfigText = styled.Text`
  font-size:14px;

  font-family:IBMPlexSansRegular;
  color:${COLORS.white}
`
const InnerConfig = styled.View`
  flex-direction:row;
  justify-content:space-between
`


export default AccountScreen;
