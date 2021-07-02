import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/slice/Auth'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";
import { Avatar } from 'react-native-elements'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import ConfigItem from '../components/ConfigItem'
import navigationTheme from '../navigation/navigationTheme';

const AccountScreen = ({navigation}:any) => {
   const dispatch = useDispatch()
   const userName = useSelector(state=> state.auth.name)
   const userEmail = useSelector(state=> state.auth.email)
   const avatarUrl = useSelector(state=> state.auth.avatar)
    console.log(avatarUrl)
   const logoutHandler = () => {
     dispatch(authActions.signout())
   }

  
  return (
   <Wrapper>
      <UserContainer>     
         <Avatar       
         avatarStyle={{
           borderRadius:20
         }}
         size={160}      
         source={{uri:avatarUrl}}/> 
         <UserData>
          <Text>{userName}</Text> 
          <Text small regular>{userEmail}</Text>                    
         </UserData>
      </UserContainer>

       <ConfigContainer>
          <ConfigItem 
            text='My Orders' 
            handle={()=>navigation.navigate('Order')}
          />
          <ConfigItem
            text='Log Out' 
            handle={logoutHandler}
          />        
         </ConfigContainer>
         <ImageContainer>
        <Image source={require('../assets/ImgDetail/hand.png')} resizeMode='contain'/>
         </ImageContainer> 
   </Wrapper>
  )
};

const Wrapper = styled.View`
  background-color:${COLORS.primary};
  padding-left:28px;
  padding-top:50px;
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
const UserData = styled.View`
  padding-top:80px;
  padding-left:20px;`

const Text = styled.Text`
  font-size:${({small}:{small:boolean})=> small ? '10px': '22px'};
  color:${COLORS.orange};
  font-family:${({regular}: {regular:boolean})=> regular ? 'IBMPlexSansRegular':'IBMPlexSansBold'}
`
export default AccountScreen;
