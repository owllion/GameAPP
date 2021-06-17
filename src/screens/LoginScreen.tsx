import React from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import { View,ScrollView,StyleSheet,ImageBackground} from 'react-native';
import t from 'tailwind-rn'
import { NavigationEvents } from 'react-navigation'
import {register} from '../store/actions/authAction'
import {authActions} from '../store/slice/Auth'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const image = { uri: "https://images.unsplash.com/photo-1600322326505-d5f2d233098d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxkaXNofGVufDB8MXwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} ;

const SigninScreen= () => {
  const dispatch = useDispatch()
  
  const clearError = () => {
     dispatch(authActions.setError({message:''}))
  }
 
 const userLogin = (email:string,password:string,name?:string,) => {
   if(!email ) {
     dispatch(authActions.setError({message:'Please enter your email'}))
      return 
  }
   if(!password ) {
     dispatch(authActions.setError({message:'Please enter your password'}))
      return 
  }
   dispatch(register({email,password}))
 }
 interface Root {
  auth:{
    errorMsg:string
  }
}
  const err = useSelector((state:Root)=> state.auth.errorMsg)
  return (
   <ImageBackground source={image} style={styles.image}>
     <ScrollView >
    <View style={t(' py-5 flex-1 flex justify-center')}> 

     {/* 在導向另一個頁面時就執行 */}
     <NavigationEvents   
      onWillBlur={()=> {
        clearError()
        console.log('登入錯誤訊息')
        console.log(err)
      }}   
    />
      <AuthForm  onSubmit={ userLogin } headerText='SIGN IN' nameInput='false'  submitButtonText='Log in'/> 

       <NavLink text='Don not have an account? Sign up!'   routeName='Signup'  />

    </View>
    </ScrollView>
 </ImageBackground>
  )
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
 
});
SigninScreen.navigationOptions = () => {
  return {
    headerShown:false
  }
}

export default SigninScreen;
