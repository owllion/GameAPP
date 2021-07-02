import React from 'react';
import { useDispatch } from 'react-redux'
import { registerOrLogin } from '../store/actions/AuthAction'
import AuthForm from '../components/forms/AuthForm'
import NavLink from '../components/NavLink'
import styled from 'styled-components/native'

const RegisterScreen= () => {
  const dispatch = useDispatch()
 
 const userRegister = (email:string,password:string ,userName:string) => {
   dispatch(registerOrLogin({userName,email,password}))
 }

  return (
    <ImageBackground source={require('../assets/images/registerbg.jpg')} >
      
     <View> 
      <AuthForm  
       onSubmit={userRegister} 
       headerText='SIGN UP' 
       nameInput='true' 
       submitButtonText='Register' 
      /> 
       <NavLink
         text='Already have an account? Sign in!'   routeName='Login'
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
