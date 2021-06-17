import React from 'react';
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/authAction'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import styled from 'styled-components/native'

const image = { uri: "https://image.freepik.com/free-vector/mobile-wallpaper-with-watercolor-sky_79603-598.jpg"} ;

const RegisterScreen= () => {
  const dispatch = useDispatch()
 
 const userRegister = (email:string,password:string ,userName:string) => {
   dispatch(register({userName,email,password}))
 }

  return (
    <ImageBackground source={require('../assets/images/sky.jpg')} >
      
     <View> 
      <AuthForm  
       onSubmit={userRegister} 
       headerText='SIGN UP' 
       nameInput='true' 
       submitButtonText='Register' 
      /> 
       <NavLink
         text='Already have an account? Sign in!'   routeName='LoginScreen'
       />
    </View>
   </ImageBackground>
  )
}

const ImageBackground = styled.ImageBackground`
   flex:1
`
const View = styled.View`
 padding: 10px 0;
 flex:1;
 justify-content: center;
 background-color:rgba(0,0,0,.2) rgba(0,0,0,.5)
`


export default RegisterScreen
