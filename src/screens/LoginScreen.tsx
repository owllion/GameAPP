import React from 'react';
import AuthForm from '../components/forms/AuthForm'
import NavLink from '../components/NavLink'
import styled from 'styled-components/native'
import ActivityIndicator from '../components/ActivityIndicator';


const LoginScreen= () => {

  return (
    <>
    <ActivityIndicator/>
   <ImageBackground source={require('../assets/images/loginbg.jpg')} > 
  
    <View>  
      <AuthForm  
       headerText='SIGN IN' 
       nameInput='false'  
       submitButtonText='Login'/> 

       <NavLink 
         text='Do not have an account? Sign up!'  
         routeName='Register'  
       />
    </View>
  
 </ImageBackground>
 </>
  )
}

const ImageBackground = styled.ImageBackground`
   flex:1
`
const View = styled.View`
 padding: 10px 0;
 background-color:rgba(0,0,0,.2) rgba(0,0,0,.5)
 flex:1;
 justify-content:center
`
export default LoginScreen
